import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const steps = [
  {
    title: "Corral the squirrels",
    body: "Dump every idea, tab, and half-finished project out of your head and into one place. Nothing gets lost — it just gets organized.",
  },
  {
    title: "Deputize your AI",
    body: "Set up an AI stack that acts as your focus copilot: triaging, drafting, researching, and reminding — so willpower isn't the only thing holding your day together.",
  },
  {
    title: "Run the ST Playbook",
    body: "Follow a repeatable system for turning scattered interest into shipped work, one sprint at a time — without forcing yourself to 'just focus more.'",
  },
];

const forYou = [
  "You have twelve tabs open and ideas for all twelve.",
  "You've been told you have 'too many interests' your whole life.",
  "You start strong and struggle to finish — not from lack of ability, but lack of a system.",
  "You've started using AI tools but haven't turned them into an actual operating system for your life.",
];

const pillars = [
  {
    label: "The Book",
    title: "The Squirrel Tamer",
    body: "How to Make S.O.S. (Shiny Object Syndrome) Your Superpower! — the full story, the mindset shift, and the case for letting AI do the taming.",
    href: "/book",
    cta: "About the book",
  },
  {
    label: "The Method",
    title: "ST Playbook",
    body: "The five-phase system itself: capture, deputize, sprint, ship, repeat. The practical, run-it-this-week version.",
    href: "/playbook",
    cta: "See the Playbook",
  },
  {
    label: "The Show",
    title: "Podcast",
    body: "Conversations with people who turned a scattered brain into an unfair advantage — plus the tools they actually use.",
    href: "/podcast",
    cta: "Listen soon",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1.5 text-sm font-semibold text-forest-700">
            🐿️ Coming soon — The Squirrel Tamer &amp; the ST Playbook
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-forest-900 sm:text-6xl">
            AI is the tool that tames the squirrel.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-forest-800/80 sm:text-xl">
            Squirrel Tamer is for the scattered, the curious, and the endlessly
            interested. If your brain chases every shiny idea, AI can finally be the
            thing that turns that chase into momentum — not more chaos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="rounded-full bg-acorn-500 px-6 py-3 font-semibold text-white transition hover:bg-acorn-600"
            >
              About the book
            </Link>
            <Link
              href="/playbook"
              className="rounded-full border border-forest-700/30 px-6 py-3 font-semibold text-forest-800 transition hover:border-forest-700"
            >
              See the ST Playbook
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-acorn-200/60 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
            This is for you if
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {forYou.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-acorn-200 bg-white p-5 text-forest-800/90"
              >
                <span aria-hidden="true" className="text-xl">
                  🌰
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-bold text-forest-900">
          Three moves. One system. A lot fewer abandoned projects.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-3xl border border-acorn-200 bg-white p-6">
              <span className="text-sm font-semibold text-acorn-500">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-forest-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-acorn-200/60 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
            Explore
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex flex-col rounded-3xl border border-acorn-200 bg-white p-6 transition hover:border-acorn-400"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-acorn-500">
                  {pillar.label}
                </span>
                <h3 className="mt-2 text-xl font-bold text-forest-900">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-800/75">
                  {pillar.body}
                </p>
                <span className="mt-5 text-sm font-semibold text-acorn-600 group-hover:text-acorn-700">
                  {pillar.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <EmailSignup />
      </section>
    </>
  );
}
