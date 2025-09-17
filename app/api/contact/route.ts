import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  fullName: string
  email: string
  company: string
  role: string
  inquiryType: string
  message: string
  phone: string
}

// Simple email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Server-side validation
const validateFormData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.fullName?.trim()) {
    errors.push('Full name is required')
  }

  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.company?.trim()) {
    errors.push('Company is required')
  }

  if (!data.inquiryType?.trim()) {
    errors.push('Inquiry type is required')
  }

  if (!data.message?.trim()) {
    errors.push('Message is required')
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// SendGrid configuration
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CUSTOMER_TEMPLATE_ID = 'd-eb80120f6eae4f2e95a706a6b19ce253'
const FROM_EMAIL = 'admin@reportr.ai'
const TO_EMAIL = 'support@reportr.ai'

const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Import internal notification template (still using HTML for internal emails)
    const { getInternalNotificationEmailHTML, getInternalNotificationEmailText } = await import('@/lib/email-templates')

    if (!SENDGRID_API_KEY) {
      console.warn('SendGrid API key not configured, logging form data instead')
      console.log('Contact form submission:', {
        timestamp: new Date().toISOString(),
        ...formData
      })
      return true
    }

    // Configure SendGrid
    const sgMail = (await import('@sendgrid/mail')).default
    sgMail.setApiKey(SENDGRID_API_KEY)

    // Prepare customer confirmation email using SendGrid template
    const customerEmail = {
      to: formData.email,
      from: {
        email: FROM_EMAIL,
        name: 'Reportr Team'
      },
      templateId: CUSTOMER_TEMPLATE_ID,
      dynamicTemplateData: {
        fullName: formData.fullName,
        company: formData.company,
        role: formData.role || null,
        inquiryType: formData.inquiryType,
        phone: formData.phone || null,
        message: formData.message,
      },
    }

    // Prepare internal notification email (using HTML template)
    const internalEmail = {
      to: TO_EMAIL,
      from: {
        email: FROM_EMAIL,
        name: 'Reportr Contact Form'
      },
      subject: `🔔 New Contact: ${formData.fullName} from ${formData.company}`,
      html: getInternalNotificationEmailHTML(formData),
      text: getInternalNotificationEmailText(formData),
    }

    // Send both emails
    await Promise.all([
      sgMail.send(customerEmail),
      sgMail.send(internalEmail)
    ])

    console.log('Emails sent successfully:', {
      customer: formData.email,
      internal: TO_EMAIL,
      timestamp: new Date().toISOString()
    })

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate form data
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.errors
        },
        { status: 400 }
      )
    }

    // Extract and sanitize form data
    const formData: ContactFormData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company.trim(),
      role: body.role?.trim() || '',
      inquiryType: body.inquiryType.trim(),
      message: body.message.trim(),
      phone: body.phone?.trim() || '',
    }

    // Basic spam protection - check for suspicious patterns
    const suspiciousPatterns = [
      /https?:\/\//gi, // URLs in message
      /\b(viagra|casino|lottery|winner)\b/gi, // Common spam words
    ]

    const messageText = `${formData.message} ${formData.fullName} ${formData.company}`.toLowerCase()
    const containsSpam = suspiciousPatterns.some(pattern => pattern.test(messageText))

    if (containsSpam) {
      console.warn('Suspected spam submission blocked:', formData.email)
      return NextResponse.json(
        { success: false, error: 'Submission blocked' },
        { status: 400 }
      )
    }

    // Send email notification
    const emailSent = await sendEmail(formData)

    if (!emailSent) {
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Handle non-POST methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}