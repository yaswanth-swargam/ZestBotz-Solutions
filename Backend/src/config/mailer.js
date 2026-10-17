import nodemailer from 'nodemailer'

const isConfigured = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS)

const transporter = isConfigured
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s/g, ''),
      },
    })
  : {
      sendMail: async (mailOptions) => {
        console.log('[MOCK EMAIL DISPATCHED] (SMTP credentials not configured in environment):', {
          to: mailOptions.to,
          subject: mailOptions.subject,
          replyTo: mailOptions.replyTo,
        })
        return { messageId: `mock-${Date.now()}` }
      },
    }

export default transporter