import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const quoteToEmail = process.env.QUOTE_TO_EMAIL;
const quoteFromEmail =
  process.env.QUOTE_FROM_EMAIL || "Elite Yard Hygiene <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  details?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as QuotePayload;

  if (!body.name || !body.email || !body.phone) {
    return Response.json(
      { message: "Please complete your name, email, and phone number." },
      { status: 400 }
    );
  }

  if (!resend || !quoteToEmail) {
    return Response.json(
      {
        message: "Quote email is not configured yet. Please try again shortly.",
      },
      { status: 500 }
    );
  }

  const service = body.service || "Weekly Service";
  const details =
    body.details?.trim() || "No additional yard details provided.";

  try {
    await resend.emails.send({
      from: quoteFromEmail,
      to: [quoteToEmail],
      replyTo: body.email,
      subject: `New quote request from ${body.name}`,
      text: [
        "New quote request received.",
        "",
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone}`,
        `Service: ${service}`,
        "",
        "Yard details:",
        details,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #173126;">
          <h2 style="margin-bottom: 16px;">New quote request received</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Yard details:</strong></p>
          <p style="white-space: pre-line;">${details}</p>
        </div>
      `,
    });

    return Response.json({
      message:
        "Your quote request is in. Elite Yard Hygiene will follow up within one business day.",
    });
  } catch (error) {
    return Response.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your quote request right now.",
      },
      { status: 500 }
    );
  }
}
