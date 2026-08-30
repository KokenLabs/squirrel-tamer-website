import EmailSignup from "@/components/EmailSignup";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
        The Book
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        Squirrel Tamer: the book
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-forest-800/85">
        The full Squirrel Tamer Playbook — the mindset, the AI stack, and the
        step-by-step system — is being written up as a book. It&apos;s for anyone who&apos;s
        ever been told they have too many interests, and who&apos;s ready to let AI do the
        taming instead of forcing themselves into a focus style that was never going to
        stick.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-acorn-200 bg-white p-5">
          <p className="text-sm font-semibold text-forest-900">Who it&apos;s for</p>
          <p className="mt-1 text-sm text-forest-800/75">
            ADD/ADHD minds, multi-passionate people, and anyone who starts more than
            they finish.
          </p>
        </div>
        <div className="rounded-2xl border border-acorn-200 bg-white p-5">
          <p className="text-sm font-semibold text-forest-900">What&apos;s inside</p>
          <p className="mt-1 text-sm text-forest-800/75">
            The five-phase Playbook, a practical AI stack, and templates you can run
            immediately.
          </p>
        </div>
        <div className="rounded-2xl border border-acorn-200 bg-white p-5">
          <p className="text-sm font-semibold text-forest-900">Status</p>
          <p className="mt-1 text-sm text-forest-800/75">
            In progress — join the list for chapter previews and the release date.
          </p>
        </div>
      </div>

      <div className="mt-16" id="signup">
        <EmailSignup
          heading="Get early chapters before anyone else."
          subheading="Join the list and you'll get preview chapters, the AI stack breakdown, and the first word on release date and pricing."
        />
      </div>
    </div>
  );
}
