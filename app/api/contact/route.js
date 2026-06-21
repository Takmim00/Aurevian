export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !projectType || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      return Response.json({
        error: "Email service not configured. Set WEB3FORMS_ACCESS_KEY in .env.local",
      }, { status: 500 });
    }

    const web3res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New inquiry from ${name} via aurevian.agency`,
        from_name: name,
        from_email: email,
        project_type: projectType,
        message,
      }),
    });

    if (!web3res.ok) {
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
