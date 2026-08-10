import crypto from 'crypto';
import nodemailer from 'nodemailer';

/*
 * Workshop registration:
 *  1. Emails Josh each registration (the attendee list).
 *  2. Emails the registrant a confirmation carrying a real calendar invite
 *     (iCalendar METHOD:REQUEST) for Wed 9 Sept 2026, 2:00-2:45pm UK with the
 *     Zoom joining details, so accepting it puts the workshop straight on
 *     their calendar.
 *
 * The Zoom link deliberately lives in env vars (ZOOM_JOIN_URL, and optionally
 * ZOOM_MEETING_ID + ZOOM_PASSCODE), never in this public repo. Without them
 * the invite still sends and says the link will follow by email.
 */

const EVENT = {
  title: 'Neurodivergence at Work: Unlocking Your Hidden Superstars',
  // 2:00pm-2:40pm UK on 9 Sept 2026 (BST = UTC+1).
  startUtc: '20260909T130000Z',
  endUtc: '20260909T134000Z',
  dateLabel: 'Wednesday 9 September 2026',
  timeLabel: '2:00pm UK time (40 minutes)',
};

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`SMTP send timed out after ${ms}ms`)), ms)
    ),
  ]);
}

// RFC 5545 text escaping for ICS fields.
function icsEscape(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

function bareAddress(from) {
  const match = String(from).match(/<([^>]+)>/);
  return match ? match[1] : String(from).trim();
}

function buildIcs({ organizerEmail, attendeeName, attendeeEmail, zoomUrl, meetingId, passcode }) {
  const uid = `workshop-20260909-${crypto
    .createHash('sha1')
    .update(attendeeEmail.toLowerCase())
    .digest('hex')
    .slice(0, 12)}@romiadhd.com`;
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

  const descriptionLines = [
    'A free 40 minute live workshop with Tom Crawford (The Brain Miner) and Josh Budd (Romi).',
    '',
    zoomUrl ? `Join Zoom meeting: ${zoomUrl}` : 'The Zoom joining link will be emailed to you before the day.',
    meetingId ? `Meeting ID: ${meetingId}` : null,
    passcode ? `Passcode: ${passcode}` : null,
    '',
    'Registered via romiadhd.com/workshop',
  ].filter((line) => line !== null);

  return [
    'BEGIN:VCALENDAR',
    'PRODID:-//Romi//Workshop//EN',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${EVENT.startUtc}`,
    `DTEND:${EVENT.endUtc}`,
    `SUMMARY:${icsEscape(EVENT.title)}`,
    `DESCRIPTION:${icsEscape(descriptionLines.join('\n'))}`,
    `LOCATION:${icsEscape(zoomUrl || 'Online (Zoom)')}`,
    `ORGANIZER;CN=Josh Budd (Romi):mailto:${organizerEmail}`,
    `ATTENDEE;CN=${icsEscape(attendeeName)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${attendeeEmail}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${icsEscape(EVENT.title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function registrantEmailHtml({ name, zoomUrl }) {
  const firstName = String(name).trim().split(/\s+/)[0] || 'there';
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; background: #fff7ee; color: #26232c; padding: 32px; border-radius: 16px;">
      <h1 style="color: #5d359b; font-size: 22px; margin: 0 0 8px;">You're in, ${firstName}!</h1>
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Your seat is saved for <strong>${EVENT.title}</strong> with Tom Crawford (The Brain Miner) and Josh Budd (Romi).
      </p>
      <div style="background: #ffffff; border: 1px solid #ece2f4; border-radius: 12px; padding: 20px 24px; margin-bottom: 20px;">
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>${EVENT.dateLabel}</strong></p>
        <p style="margin: 0; font-size: 15px;">${EVENT.timeLabel}, live on Zoom</p>
      </div>
      ${
        zoomUrl
          ? `<div style="text-align: center; margin: 24px 0;">
              <a href="${zoomUrl}" style="display: inline-block; background: #8659c2; color: #ffffff; padding: 13px 32px; border-radius: 16px; text-decoration: none; font-weight: 600; font-size: 15px;">Join the Zoom on the day</a>
            </div>
            <p style="font-size: 13px; color: #6b6577; line-height: 1.6; margin: 0 0 8px;">A calendar invitation with the Zoom link will land in this inbox shortly. Accept it and you're set.</p>`
          : `<p style="font-size: 14px; color: #6b6577; line-height: 1.6; margin: 0 0 8px;">A calendar invitation will land in this inbox shortly, and the Zoom joining link will follow before the day.</p>`
      }
      <p style="font-size: 13px; color: #6b6577; margin: 20px 0 0;">See you there. Bring your questions.<br/>Josh and Tom</p>
    </div>
  `;
}

function registrantEmailText({ name, zoomUrl }) {
  const firstName = String(name).trim().split(/\s+/)[0] || 'there';
  return [
    `You're in, ${firstName}!`,
    '',
    `Your seat is saved for ${EVENT.title} with Tom Crawford (The Brain Miner) and Josh Budd (Romi).`,
    '',
    `${EVENT.dateLabel}, ${EVENT.timeLabel}, live on Zoom.`,
    zoomUrl ? `Join link: ${zoomUrl}` : 'The Zoom joining link will follow by email before the day.',
    '',
    'A calendar invitation with the joining details will land in this inbox shortly.',
    '',
    'See you there. Bring your questions.',
    'Josh and Tom',
  ].join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.mailendo.com';
  const smtpPort = Number.parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpConnectionTimeoutMs = Number.parseInt(
    process.env.SMTP_CONNECTION_TIMEOUT_MS || '2500',
    10
  );
  const smtpGreetingTimeoutMs = Number.parseInt(
    process.env.SMTP_GREETING_TIMEOUT_MS || '2500',
    10
  );
  const smtpSocketTimeoutMs = Number.parseInt(
    process.env.SMTP_SOCKET_TIMEOUT_MS || '3500',
    10
  );
  const smtpSendTimeoutMs = Number.parseInt(
    process.env.SMTP_SEND_TIMEOUT_MS || '4500',
    10
  );
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const registrationTo =
    process.env.WORKSHOP_REGISTER_TO || 'josh@neuro-notion.com';
  const zoomUrl = process.env.ZOOM_JOIN_URL || '';
  const zoomMeetingId = process.env.ZOOM_MEETING_ID || '';
  const zoomPasscode = process.env.ZOOM_PASSCODE || '';

  if (
    !smtpUser ||
    !smtpPass ||
    !smtpFrom ||
    !Number.isFinite(smtpPort) ||
    !Number.isFinite(smtpConnectionTimeoutMs) ||
    !Number.isFinite(smtpGreetingTimeoutMs) ||
    !Number.isFinite(smtpSocketTimeoutMs) ||
    !Number.isFinite(smtpSendTimeoutMs)
  ) {
    console.error('Workshop registration email config is missing or invalid.');
    return res
      .status(500)
      .json({ error: 'Registration is not available right now. Please try again later.' });
  }

  const { name, email, company, role, website } = req.body;

  // Honeypot: real visitors never fill this field.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const notifyHtml = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; background: #fff7ee; color: #26232c; padding: 32px; border-radius: 16px;">
      <h1 style="color: #5d359b; font-size: 22px; margin: 0 0 4px;">New workshop registration</h1>
      <p style="color: #6b6577; font-size: 13px; margin: 0 0 24px;">${EVENT.title}, ${EVENT.dateLabel}. Submitted via romiadhd.com/workshop</p>
      <div style="background: #ffffff; border: 1px solid #ece2f4; border-radius: 12px; padding: 20px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; color: #6b6577; font-size: 13px; width: 110px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; color: #6b6577; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; font-weight: 600;">
              <a href="mailto:${email}" style="color: #5d359b; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; color: #6b6577; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ece2f4; font-weight: 600;">${company || 'Not given'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b6577; font-size: 13px;">Role</td>
            <td style="padding: 10px 0; font-weight: 600;">${role || 'Not given'}</td>
          </tr>
        </table>
      </div>
      <p style="color: #6b6577; font-size: 12px; margin-top: 20px;">${
        zoomUrl
          ? 'They were sent a confirmation email with the Zoom calendar invite automatically.'
          : 'They were sent a confirmation and a calendar invite, but ZOOM_JOIN_URL is not set, so it has no joining link yet.'
      }</p>
    </div>
  `;

  const notifyText = `
New workshop registration (${EVENT.title}, ${EVENT.dateLabel})

Name: ${name}
Email: ${email}
Company: ${company || 'Not given'}
Role: ${role || 'Not given'}

${zoomUrl ? 'They were sent the Zoom calendar invite automatically.' : 'Calendar invite sent WITHOUT a joining link (ZOOM_JOIN_URL not set).'}
---
Submitted via romiadhd.com/workshop
  `.trim();

  // Vercel functions are sensitive to long SMTP handshakes on port 25.
  // Prefer 587 there to avoid FUNCTION_INVOCATION_TIMEOUT.
  const runningOnVercel = Boolean(process.env.VERCEL || process.env.VERCEL_URL);
  const smtpPortsToTry =
    smtpPort === 25
      ? runningOnVercel
        ? [587]
        : [25, 587]
      : smtpPort === 587
        ? [587, 25]
        : [smtpPort];

  let sendError = null;

  for (const port of smtpPortsToTry) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465 ? true : smtpSecure,
      connectionTimeout: smtpConnectionTimeoutMs,
      greetingTimeout: smtpGreetingTimeoutMs,
      socketTimeout: smtpSocketTimeoutMs,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    try {
      await withTimeout(
        transporter.sendMail({
          from: smtpFrom,
          to: registrationTo,
          replyTo: email,
          subject: `Workshop registration: ${name}${company ? ` (${company})` : ''}`,
          text: notifyText,
          html: notifyHtml,
        }),
        smtpSendTimeoutMs
      );

      // Registration is recorded (Josh has the email). The registrant's
      // confirmation + calendar invite is best effort on the same transport:
      // a failure here should not surface as a failed registration.
      try {
        const ics = buildIcs({
          organizerEmail: bareAddress(smtpFrom),
          attendeeName: name,
          attendeeEmail: email,
          zoomUrl,
          meetingId: zoomMeetingId,
          passcode: zoomPasscode,
        });
        await withTimeout(
          transporter.sendMail({
            from: smtpFrom,
            to: email,
            subject: `You're in: ${EVENT.title} (Wed 9 Sept, 2pm UK)`,
            text: registrantEmailText({ name, zoomUrl }),
            html: registrantEmailHtml({ name, zoomUrl }),
            icalEvent: {
              method: 'REQUEST',
              content: ics,
            },
          }),
          smtpSendTimeoutMs
        );
      } catch (confirmError) {
        console.error(
          'Workshop registrant confirmation failed (registration itself recorded):',
          confirmError?.message || confirmError
        );
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      sendError = error;
      console.error(
        `Workshop registration email send failed on ${smtpHost}:${port}:`,
        error?.message || error
      );
    }
  }

  console.error('Workshop registration email failed on all SMTP ports:', sendError);
  return res
    .status(500)
    .json({ error: 'Something went wrong saving your seat. Please try again.' });
}
