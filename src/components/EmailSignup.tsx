"use client";

import { useState } from "react";

export default function EmailSignup({
  heading = "Get the S.O.S. Playbook first.",
  subheading = "Join the list for early chapters, the AI stack breakdown, and launch updates. No spam, just signal.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("submitted");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
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
            disabled={status === "submitting"}
            className="rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Joining..." : "Join the list"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}
