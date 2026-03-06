import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, jobTitle, companySize, message } = req.body;

  // Validate required fields
  if (!name || !email || !company || !jobTitle || !companySize) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create transporter using environment variables
  // For production, set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your Vercel env vars
  // This supports any SMTP provider (Gmail, SendGrid, Mailgun, etc.)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #e2e8f0; padding: 32px; border-radius: 16px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h1 style="color: #0EA5E9; font-size: 24px; margin: 0;">New Corporate Enquiry</h1>
        <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Submitted via neuro-notion.com/forcorporate</p>
      </div>
      
      <div style="background: #1E293B; border: 1px solid #334155; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 13px; width: 140px;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #f1f5f9; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 13px;">Work Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #f1f5f9; font-weight: 600;">
              <a href="mailto:${email}" style="color: #0EA5E9; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 13px;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #f1f5f9; font-weight: 600;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 13px;">Job Title</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #f1f5f9; font-weight: 600;">${jobTitle}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid #334155;' : ''} color: #94a3b8; font-size: 13px;">Company Size</td>
            <td style="padding: 12px 0; ${message ? 'border-bottom: 1px solid #334155;' : ''} color: #f1f5f9; font-weight: 600;">${companySize}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #f1f5f9;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${email}" style="display: inline-block; background: #0EA5E9; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
      </div>
      
      <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 24px;">
        This enquiry was submitted through the Claudia for Enterprise page.
      </p>
    </div>
  `;

  const plainTextBody = `
New Corporate Enquiry - Claudia for Enterprise

Full Name: ${name}
Work Email: ${email}
Company: ${company}
Job Title: ${jobTitle}
Company Size: ${companySize}
${message ? `Message: ${message}` : ''}

---
Submitted via neuro-notion.com/forcorporate
  `.trim();

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'josh@neuro-notion.com',
      replyTo: email,
      subject: `Corporate Enquiry: ${company} (${companySize}) - ${name}`,
      text: plainTextBody,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' });
  }
}
