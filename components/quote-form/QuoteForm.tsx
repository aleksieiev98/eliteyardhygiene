"use client";

import { useMutation } from "@tanstack/react-query";
import { clsx } from "clsx";
import { CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
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

type QuoteResponse = {
  message?: string;
};

const defaultValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "Weekly Service",
  details: "",
};

const confettiPieces = Array.from({ length: 18 }, (_, index) => index);

export const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (formValues: QuoteFormValues) => {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = (await response.json()) as QuoteResponse;

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      return data;
    },
    onSuccess: () => {
      reset(defaultValues);
    },
  });

  const successMessage =
    mutation.data?.message ??
    "Thank you. We received your quote request and will contact you soon.";

  const errorMessage = useMemo(() => {
    if (!(mutation.error instanceof Error)) {
      return "We couldn't send your request. Please try again.";
    }

    return mutation.error.message;
  }, [mutation.error]);

  const onSubmit = handleSubmit((formValues) => {
    mutation.mutate(formValues);
  });

  if (mutation.isSuccess) {
    return (
      <div className={styles.successState} role="status" aria-live="polite">
        <div className={styles.confettiLayer} aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              key={piece}
              className={styles.confettiPiece}
              style={{
                left: `${(piece % 6) * 17 + 4}%`,
                animationDelay: `${piece * 90}ms`,
              }}
            />
          ))}
        </div>
        <div className={styles.successIconWrap}>
          <CheckCircle2 size={44} />
        </div>
        <h3>Thank you, your quote request is in.</h3>
        <p>{successMessage}</p>
      </div>
    );
  }

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
            placeholder="eliteyardhygiene@gmail.com"
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
            placeholder="(224) 600-9367"
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
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Sending..." : "Request My Free Quote"}
      </button>
      {mutation.isError ? (
        <p className={clsx(styles.formMessage, styles.error)}>{errorMessage}</p>
      ) : null}
    </form>
  );
};
