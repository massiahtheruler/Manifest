"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { emailConfig, intakeContent } from "../content/contact";
import { siteContent } from "../content/site";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  business: "",
  website: "",
  goal: "",
  concern: "",
};

export function IdentityGapForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userMessage = [
      "Selected offer: Identity Gap Audit",
      "",
      `Business: ${values.business}`,
      `Website/social: ${values.website}`,
      "",
      intakeContent.fields.goal,
      values.goal,
      "",
      intakeContent.fields.concern,
      values.concern,
    ].join("\n");

    try {
      setStatus("sending");
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          user_name: values.name,
          user_email: values.email,
          user_message: userMessage,
        },
        emailConfig.publicKey,
      );
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="identity-form" onSubmit={handleSubmit}>
      <div className="identity-form__grid">
        <label>
          {intakeContent.fields.name}
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label>
          {intakeContent.fields.email}
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          {intakeContent.fields.business}
          <input
            id="business"
            name="business"
            value={values.business}
            onChange={handleChange}
            required
            placeholder="Business name"
          />
        </label>
        <label>
          {intakeContent.fields.website}
          <input
            id="website"
            name="website"
            value={values.website}
            onChange={handleChange}
            required
            placeholder="Site, Instagram, Google listing, etc."
          />
        </label>
      </div>

      <label>
        {intakeContent.fields.goal}
        <textarea
          id="goal"
          name="goal"
          value={values.goal}
          onChange={handleChange}
          required
          rows={4}
          placeholder="What should a customer understand within the first few seconds?"
        />
      </label>

      <label>
        {intakeContent.fields.concern}
        <textarea
          id="concern"
          name="concern"
          value={values.concern}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Website, logo, offer, photos, copy, socials, reviews, consistency..."
        />
      </label>

      <p className="identity-form__helper">{intakeContent.helper}</p>

      <div className="identity-form__actions">
        <button className="button button--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send audit request"}
        </button>
        <a className="button button--secondary" href={`mailto:${siteContent.email}`}>
          Email directly
        </a>
      </div>

      {status === "success" && (
        <p className="identity-form__feedback identity-form__feedback--success">
          Request sent. I&apos;ll review the first impression and follow up.
        </p>
      )}
      {status === "error" && (
        <p className="identity-form__feedback identity-form__feedback--error">
          The form did not send. Use{" "}
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> instead.
        </p>
      )}
    </form>
  );
}
