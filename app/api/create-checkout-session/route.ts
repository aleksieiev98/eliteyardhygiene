import Stripe from "stripe";

const planCatalog = {
  "one-time-cleanup": {
    name: "One-Time Cleanup",
    description: "Deep one-time pet waste removal for a fresh reset.",
    unitAmount: 7900,
    mode: "payment" as const,
  },
  weekly: {
    name: "Weekly Service",
    description: "Recurring weekly yard cleanup service.",
    unitAmount: 6500,
    mode: "subscription" as const,
  },
  "twice-weekly": {
    name: "Twice Weekly Service",
    description: "Twice weekly cleanup for high-traffic yards.",
    unitAmount: 9800,
    mode: "subscription" as const,
  },
  deodorizing: {
    name: "Deodorizing Add-On",
    description: "Pet-safe deodorizing finish for a fresher yard.",
    unitAmount: 1800,
    mode: "payment" as const,
  },
};

export async function POST(request: Request) {
  const { plan } = (await request.json()) as {
    plan?: keyof typeof planCatalog;
  };

  if (!plan || !planCatalog[plan]) {
    return Response.json({ error: "Invalid plan selected." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return Response.json(
      {
        error:
          "Stripe is not configured yet. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to enable checkout.",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);
  const item = planCatalog[plan];
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: item.mode,
    success_url: `${origin}/?checkout=success`,
    cancel_url: `${origin}/?checkout=cancelled#pricing`,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description,
          },
          recurring:
            item.mode === "subscription"
              ? {
                  interval: "week",
                }
              : undefined,
          unit_amount: item.unitAmount,
        },
      },
    ],
    billing_address_collection: "auto",
    allow_promotion_codes: true,
  });

  return Response.json({ url: session.url });
}
