import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !projectType || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({
        error: "Email service not configured. Set RESEND_API_KEY in .env.local",
      }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Aurevian <onboarding@resend.dev>",
      to: "hello@aurevian.agency",
      subject: `New inquiry from ${name} via aurevian.agency`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Project Type</td><td style="padding:8px;border:1px solid #ddd;">${projectType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
        </table>
      `,
    });

    if (error) {
      return Response.json({ error: error.message || "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: err.message || "Internal server error." }, { status: 500 });
  }
}
