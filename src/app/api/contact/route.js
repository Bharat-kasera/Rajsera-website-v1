import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format the email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; padding: 12px; background: white; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
    .value { color: #333; }
    .section-title { font-size: 18px; font-weight: bold; color: #764ba2; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
    .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
      <div class="section-title">📋 Contact Information</div>
      
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${formData.name}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${formData.countryCode} ${formData.number}</div>
      </div>

      <div class="section-title">💼 Project Qualification</div>
      
      <div class="field">
        <div class="label">Budget:</div>
        <div class="value">${formData.hasBudget}</div>
      </div>
      
      <div class="field">
        <div class="label">Decision Authority:</div>
        <div class="value">${formData.hasAuthority}</div>
      </div>
      
      <div class="field">
        <div class="label">Need Level:</div>
        <div class="value">${formData.hasNeed}</div>
      </div>
      
      <div class="field">
        <div class="label">Timeline:</div>
        <div class="value">${formData.timeline}</div>
      </div>
      
      ${formData.message ? `
      <div class="section-title">💬 Message</div>
      <div class="field">
        <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
    </div>
    
    <div class="footer">
      <p>This email was sent from your Rajsera Labs contact form</p>
      <p>Received on ${new Date().toLocaleString('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'long',
        timeZone: 'Asia/Kolkata'
      })}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email using Resend
    await resend.emails.send({
      from: 'Rajsera Labs <onboarding@resend.dev>', // You'll update this after verifying your domain
      to: 'rajseralabs@gmail.com',
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}

