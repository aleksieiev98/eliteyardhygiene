"use client";

import { loadStripe } from "@stripe/stripe-js";
import type { ReactNode } from "react";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

type CheckoutButtonProps = {
  plan: string;
  children: ReactNode;
  className?: string;
};

export function CheckoutButton({
  plan,
  children,
  className,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = (await response.json()) as {
        sessionId?: string;
        url?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to start checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      if (data.sessionId) {
        const stripe = await stripePromise;

        if (!stripe) {
          throw new Error("Stripe could not be initialized.");
        }

        await stripe.redirectToCheckout({ sessionId: data.sessionId });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to start checkout.";
      window.alert(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className={className}
      disabled={loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
