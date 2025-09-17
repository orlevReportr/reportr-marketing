// Email template functions for SendGrid integration

interface ContactFormData {
  fullName: string
  email: string
  company: string
  role: string
  inquiryType: string
  message: string
  phone: string
}

// Internal notification email template (for your team)
export const getInternalNotificationEmailHTML = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Reportr</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #fafafa;
            margin: 0;
            padding: 20px;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .email-header {
            background: linear-gradient(135deg, #10b981, #059669);
            padding: 24px;
            color: white;
            border-radius: 8px 8px 0 0;
        }

        .email-content {
            padding: 24px;
        }

        .priority-badge {
            display: inline-block;
            background-color: #ef4444;
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .contact-details {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            margin: 16px 0;
        }

        .detail-row {
            display: flex;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e2e8f0;
        }

        .detail-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }

        .detail-label {
            font-weight: 600;
            min-width: 120px;
            color: #4a5568;
        }

        .detail-value {
            flex: 1;
            color: #1a1a1a;
        }

        .message-content {
            background-color: #f0fdf4;
            padding: 16px;
            border-left: 4px solid #10b981;
            border-radius: 0 6px 6px 0;
            margin: 16px 0;
            white-space: pre-wrap;
        }

        .actions {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
        }

        .action-button {
            display: inline-block;
            background-color: #10b981;
            color: white !important;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 600;
            margin-right: 12px;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1 style="margin: 0; font-size: 24px;">🔔 New Contact Form Submission</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Someone is interested in Reportr!</p>
        </div>

        <div class="email-content">
            ${data.inquiryType === 'sales' || data.inquiryType === 'demo' ? '<div class="priority-badge">High Priority</div>' : ''}

            <div class="contact-details">
                <div class="detail-row">
                    <div class="detail-label">Name:</div>
                    <div class="detail-value"><strong>${data.fullName}</strong></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value">
                        <a href="mailto:${data.email}" style="color: #10b981;">${data.email}</a>
                    </div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Company:</div>
                    <div class="detail-value"><strong>${data.company}</strong></div>
                </div>

                ${data.role ? `
                <div class="detail-row">
                    <div class="detail-label">Role:</div>
                    <div class="detail-value">${data.role}</div>
                </div>
                ` : ''}

                <div class="detail-row">
                    <div class="detail-label">Inquiry Type:</div>
                    <div class="detail-value"><strong>${data.inquiryType.toUpperCase()}</strong></div>
                </div>

                ${data.phone ? `
                <div class="detail-row">
                    <div class="detail-label">Phone:</div>
                    <div class="detail-value">
                        <a href="tel:${data.phone}" style="color: #10b981;">${data.phone}</a>
                    </div>
                </div>
                ` : ''}

                <div class="detail-row">
                    <div class="detail-label">Submitted:</div>
                    <div class="detail-value">${new Date().toLocaleString('en-AU', {
                        timeZone: 'Australia/Sydney',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short'
                    })}</div>
                </div>
            </div>

            <h3 style="margin-bottom: 8px; color: #1a1a1a;">Message:</h3>
            <div class="message-content">${data.message}</div>

            <div class="actions">
                <h4 style="margin-bottom: 12px; color: #1a1a1a;">Quick Actions:</h4>
                <a href="mailto:${data.email}?subject=Re: Your inquiry about Reportr&body=Hi ${data.fullName.split(' ')[0]},%0D%0A%0D%0AThank you for your interest in Reportr.%0D%0A%0D%0A" class="action-button">Reply to ${data.fullName.split(' ')[0]}</a>
                <a href="https://calendly.com/admin-reportr/30min" class="action-button">View Calendar</a>
            </div>
        </div>
    </div>
</body>
</html>
  `.trim()
}

export const getInternalNotificationEmailText = (data: ContactFormData): string => {
  return `
🔔 NEW CONTACT FORM SUBMISSION

${data.inquiryType === 'sales' || data.inquiryType === 'demo' ? '⚡ HIGH PRIORITY - Sales/Demo Inquiry\n' : ''}
CONTACT DETAILS:
Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company}
${data.role ? `Role: ${data.role}\n` : ''}Inquiry Type: ${data.inquiryType.toUpperCase()}
${data.phone ? `Phone: ${data.phone}\n` : ''}Submitted: ${new Date().toLocaleString('en-AU', {
  timeZone: 'Australia/Sydney',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}

MESSAGE:
${data.message}

QUICK ACTIONS:
• Reply: mailto:${data.email}?subject=Re: Your inquiry about Reportr
• Calendar: https://calendly.com/admin-reportr/30min
  `.trim()
}