"use client";

import { clsx } from "clsx";
import { FormEvent, useState } from "react";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "Weekly Service",
  details: "",
};

export const QuoteForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          data.message ??
          "Thanks! We received your request and will reach out shortly.",
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your request. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.quoteForm} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          Name
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Jordan Rivera"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="jordan@email.com"
          />
        </label>
        <label>
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            placeholder="(555) 555-0145"
          />
        </label>
        <label>
          Service
          <select
            value={form.service}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                service: event.target.value,
              }))
            }
          >
            <option>Weekly Service</option>
            <option>Twice-Weekly Service</option>
            <option>One-Time Cleanup</option>
            <option>Seasonal Cleanup</option>
            <option>Commercial Pet Area Cleanup</option>
          </select>
        </label>
      </div>
      <label>
        Yard details
        <textarea
          rows={5}
          value={form.details}
          onChange={(event) =>
            setForm((current) => ({ ...current, details: event.target.value }))
          }
          placeholder="Tell us your yard size, number of dogs, gate access details, and preferred start date."
        />
      </label>
      <button
        type="submit"
        className={clsx(shared.button, shared.buttonPrimary, shared.buttonFull)}
      >
        {submitting ? "Sending..." : "Request My Free Quote"}
      </button>
      {status.type !== "idle" ? (
        <p
          className={clsx(
            styles.formMessage,
            status.type === "success" ? styles.success : styles.error
          )}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
};
