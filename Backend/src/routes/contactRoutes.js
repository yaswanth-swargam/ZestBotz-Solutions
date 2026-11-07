// import { Router } from 'express'
// import transporter from '../config/mailer.js'

// const router = Router()

// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// router.post('/', async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       company = '',
//       interest = '',
//       message,
//     } = req.body ?? {}

//     if (
//       typeof name !== 'string' ||
//       typeof email !== 'string' ||
//       typeof message !== 'string' ||
//       !name.trim() ||
//       !email.trim() ||
//       !message.trim()
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name, email, and message are required.',
//       })
//     }

//     if (
//       name.length > 120 ||
//       email.length > 254 ||
//       message.length > 5000 ||
//       typeof company !== 'string' ||
//       company.length > 200 ||
//       typeof interest !== 'string' ||
//       interest.length > 120
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: 'One or more fields are invalid.',
//       })
//     }

//     if (!emailPattern.test(email.trim())) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please enter a valid email address.',
//       })
//     }

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.CONTACT_EMAIL,
//       replyTo: email.trim(),
//       subject: `Website enquiry: ${interest.trim() || 'General enquiry'}`,
//       text: `
// New enquiry from the ZestBotz website

// Name: ${name.trim()}
// Email: ${email.trim()}
// Company: ${company.trim() || 'Not provided'}
// Area of interest: ${interest.trim() || 'Not specified'}

// Message:
// ${message.trim()}
//       `,
//     })

//     return res.status(200).json({
//       success: true,
//       message: 'Your enquiry has been sent successfully.',
//     })
//   } catch (error) {
//     console.error('Contact email failed:', error.message)

//     return res.status(500).json({
//       success: false,
//       message: 'Unable to send your enquiry. Please try again later.',
//     })
//   }
// })

// export default router



import { Router } from 'express'
import { sendTransactionalEmail } from '../services/emailService.js'

const router = Router()

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      company = '',
      interest = '',
      message,
    } = req.body ?? {}

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      })
    }

    if (
      name.length > 120 ||
      email.length > 254 ||
      message.length > 5000 ||
      typeof company !== 'string' ||
      company.length > 200 ||
      typeof interest !== 'string' ||
      interest.length > 120
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields are invalid.',
      })
    }

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    await sendTransactionalEmail({
      to: process.env.CONTACT_EMAIL || process.env.BREVO_SENDER_EMAIL,
      replyTo: email.trim(),
      subject: `Website enquiry: ${interest.trim() || 'General enquiry'}`,
      text: `
New enquiry from the ZestBotz website

Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company.trim() || 'Not provided'}
Area of interest: ${interest.trim() || 'Not specified'}

Message:
${message.trim()}
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been sent successfully.',
    })
  } catch (error) {
    console.error('Contact email failed:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to send your enquiry. Please try again later.',
    })
  }
})

export default router