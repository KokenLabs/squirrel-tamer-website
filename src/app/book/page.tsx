import Image from "next/image";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[280px_1fr] sm:items-start sm:gap-14">
        <div className="mx-auto w-48 sm:mx-0 sm:w-full">
          <Image
            src="/images/book-cover.jpg"
            alt="The Squirrel Tamer book cover — How to Make S.O.S. (Shiny Object Syndrome) Your Superpower, by Steve Haycock"
            width={900}
            height={1350}
            className="w-full rounded-xl shadow-xl ring-1 ring-black/10"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
            The Book
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
            The Squirrel Tamer
          </h1>
          <p className="mt-4 text-xl font-semibold italic leading-snug text-acorn-600">
            How to Make S.O.S. (Shiny Object Syndrome) Your Superpower!
          </p>
          <p className="mt-6 text-lg leading-relaxed text-forest-800/85">
            For most of your life, chasing every shiny object has been treated as the
            problem. This book makes the opposite case: that with AI as your copilot,
            a mind that runs in twelve directions isn&apos;t a bug to be fixed — it&apos;s
            the raw material for output most single-track people can&apos;t match.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest-800/85">
            It&apos;s for anyone who&apos;s ever been told they have too many interests,
            and who&apos;s ready to let AI do the taming instead of forcing themselves
            into a focus style that was never going to stick.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
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
            The story behind S.O.S., the full{" "}
            <Link href="/playbook" className="font-semibold text-acorn-600 hover:text-acorn-700">
              Tamer Playbook
            </Link>
            , a practical AI stack, and templates you can run immediately.
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
