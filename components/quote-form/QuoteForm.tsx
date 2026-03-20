"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

import shared from "@/styles/shared.module.css";

import styles from "./styles.module.css";

type QuoteFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
};

const defaultValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "Weekly Service",
  details: "",
};

export const QuoteForm = () => {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    defaultValues,
  });

  const onSubmit = handleSubmit(async (formValues) => {
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
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
      reset(defaultValues);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your request. Please try again.",
      });
    }
  });

  return (
    <form className={styles.quoteForm} onSubmit={onSubmit} noValidate>
      <div className={styles.formGrid}>
        <label>
          Name
          <input
            type="text"
            placeholder="Jordan Rivera"
            {...register("name", {
              required: "Please enter your name.",
            })}
          />
          {errors.name ? (
            <span className={styles.fieldError}>{errors.name.message}</span>
          ) : null}
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="jordan@email.com"
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email ? (
            <span className={styles.fieldError}>{errors.email.message}</span>
          ) : null}
        </label>
        <label>
          Phone
          <input
            type="tel"
            placeholder="(555) 555-0145"
            {...register("phone", {
              required: "Please enter your phone number.",
            })}
          />
          {errors.phone ? (
            <span className={styles.fieldError}>{errors.phone.message}</span>
          ) : null}
        </label>
        <label>
          Service
          <select {...register("service")}>
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
          placeholder="Tell us your yard size, number of dogs, gate access details, and preferred start date."
          {...register("details")}
        />
      </label>
      <button
        type="submit"
        className={clsx(shared.button, shared.buttonPrimary, shared.buttonFull)}
      >
        {isSubmitting ? "Sending..." : "Request My Free Quote"}
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
