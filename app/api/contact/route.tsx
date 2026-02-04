import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, business, industry, message } = body

    // Validate required fields
    if (!name || !email || !phone || !business || !industry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For now, we'll use a simple fetch to send email via Resend
    // You'll need to add RESEND_API_KEY to your environment variables
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured")
      // Still return success to user, but log the error
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
      })
    }

    // Send email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Voice2Lead <onboarding@resend.dev>", // You'll need to configure your domain
        to: ["steven.summone@gmail.com"],
        subject: `New Voice2Lead Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
          <hr />
          <p><em>Submitted from Voice2Lead contact form</em></p>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error("Resend API error:", error)
      throw new Error("Failed to send email")
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
