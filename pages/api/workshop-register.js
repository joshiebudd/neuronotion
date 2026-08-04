import nodemailer from 'nodemailer';

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`SMTP send timed out after ${ms}ms`)), ms)
    ),
  ]);
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

  const htmlBody = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; background: #fff7ee; color: #26232c; padding: 32px; border-radius: 16px;">
      <h1 style="color: #5d359b; font-size: 22px; margin: 0 0 4px;">New workshop registration</h1>
      <p style="color: #6b6577; font-size: 13px; margin: 0 0 24px;">Neurodivergence at Work, Wed 9 Sept, 2pm UK. Submitted via romiadhd.com/workshop</p>
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
      <p style="color: #6b6577; font-size: 12px; margin-top: 20px;">Add them to the Zoom invite list.</p>
    </div>
  `;

  const plainTextBody = `
New workshop registration (Neurodivergence at Work, Wed 9 Sept, 2pm UK)

Name: ${name}
Email: ${email}
Company: ${company || 'Not given'}
Role: ${role || 'Not given'}

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

  try {
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
            text: plainTextBody,
            html: htmlBody,
          }),
          smtpSendTimeoutMs
        );

        return res.status(200).json({ success: true });
      } catch (error) {
        sendError = error;
        console.error(
          `Workshop registration email send failed on ${smtpHost}:${port}:`,
          error?.message || error
        );
      }
    }
  } catch (error) {
    sendError = error;
  }

  console.error('Workshop registration email failed on all SMTP ports:', sendError);
  return res
    .status(500)
    .json({ error: 'Something went wrong saving your seat. Please try again.' });
}
