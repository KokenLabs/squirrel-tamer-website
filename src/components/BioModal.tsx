"use client";

import { useEffect, useState } from "react";

export default function BioModal({
  name,
  title,
  company,
  bio,
}: {
  name: string;
  title: string;
  company: string;
  bio: string[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 text-sm font-semibold text-forest-800 underline decoration-acorn-400 underline-offset-4 transition hover:text-acorn-600"
      >
        Bio
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Biography of ${name}`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-forest-900/60 p-4 backdrop-blur-sm sm:items-center sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-2xl rounded-3xl border border-acorn-200 bg-white p-8 text-left shadow-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close biography"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-acorn-200 text-xl leading-none text-forest-800/70 transition hover:border-acorn-400 hover:bg-acorn-50 hover:text-acorn-600"
            >
              &times;
            </button>

            <p className="text-xs font-semibold uppercase tracking-widest text-acorn-600">
              Contributor
            </p>
            <h3 className="mt-2 pr-10 text-2xl font-bold text-forest-900">{name}</h3>
            <p className="mt-1 text-sm text-forest-800/75">
              {title} &middot; {company}
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-forest-800/85">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
