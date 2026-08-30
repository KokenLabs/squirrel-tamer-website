"use client";

import { useState } from "react";

export default function EmailSignup({
  heading = "Get the Playbook first.",
  subheading = "Join the list for early chapters, the AI stack breakdown, and launch updates. No spam, just signal.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to your email provider (ConvertKit, Mailchimp, Beehiiv, etc).
    // For now this just confirms the submission in the UI.
    if (email) {
      setStatus("submitted");
    }
  }

  return (
    <div
      id="signup"
      className="rounded-3xl border border-acorn-200 bg-white/70 p-8 shadow-sm sm:p-10"
    >
      <h3 className="text-2xl font-bold text-forest-800">{heading}</h3>
      <p className="mt-2 max-w-xl text-forest-800/70">{subheading}</p>

      {status === "submitted" ? (
        <p className="mt-6 rounded-xl bg-forest-100 px-4 py-3 text-sm font-medium text-forest-700">
          You&apos;re on the list — welcome to the tribe. 🐿️
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-acorn-200 bg-white px-5 py-3 text-forest-800 outline-none ring-acorn-400 focus:ring-2 sm:max-w-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800"
          >
            Join the list
          </button>
        </form>
      )}
    </div>
  );
}
