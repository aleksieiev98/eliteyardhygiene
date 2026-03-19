export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    details?: string;
  };

  if (!body.name || !body.email || !body.phone) {
    return Response.json(
      { message: "Please complete your name, email, and phone number." },
      { status: 400 }
    );
  }

  return Response.json({
    message:
      "Your quote request is in. Elite Yard Hygiene will follow up within one business day.",
  });
}
