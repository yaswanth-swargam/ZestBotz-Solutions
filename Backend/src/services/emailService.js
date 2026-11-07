const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

function getSender() {
  const email = process.env.BREVO_SENDER_EMAIL
  const name = process.env.BREVO_SENDER_NAME || 'ZestBotz Solutions'

  if (!email) {
    throw new Error('BREVO_SENDER_EMAIL is not configured.')
  }

  return { email, name }
}

export async function sendTransactionalEmail({
  to,
  subject,
  text,
  replyTo,
}) {
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not configured.')
  }

  const recipients = (Array.isArray(to) ? to : [to])
    .filter((email) => typeof email === 'string' && email.trim())
    .map((email) => ({ email: email.trim() }))

  if (!recipients.length) {
    throw new Error('At least one valid recipient is required.')
  }

  if (!subject?.trim() || !text?.trim()) {
    throw new Error('Email subject and content are required.')
  }

  const payload = {
    sender: getSender(),
    to: recipients,
    subject: subject.trim(),
    textContent: text,
  }

  if (replyTo?.trim()) {
    payload.replyTo = { email: replyTo.trim() }
  }

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseBody = await response.json().catch(() => ({}))

  if (!response.ok) {
    const error = new Error(
      responseBody.message ||
      responseBody.code ||
      `Brevo API failed: ${response.status}`
    )

    error.status = response.status
    error.brevoResponse = responseBody

    throw error
  }

  return responseBody
}