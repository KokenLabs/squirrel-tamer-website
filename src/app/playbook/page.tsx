import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const phases = [
  {
    number: "01",
    title: "Catch",
    tagline: "Get it out of your head in ten seconds.",
    body: "An idea shows up while you're in the middle of something else. That's normal, and it isn't the problem. Say it or type it once and it's captured — no filing, no folders, no deciding anything yet. Ten seconds, because anything longer won't actually get done.",
  },
  {
    number: "02",
    title: "Check",
    tagline: "One question, asked in the moment.",
    body: "Does this help what I'm working on right now? If yes, it joins that work. If no, it gets parked. That's the whole decision. The big “is this a good idea” question does not get asked here — never in the heat of the moment, when every new idea feels like the best one you've ever had.",
  },
  {
    number: "03",
    title: "Park",
    tagline: "Held, not lost.",
    body: "Parked doesn't mean rejected and it doesn't mean forgotten. The idea is held, along with what you were doing when it arrived, and you go straight back to the work you were already on. Your current project is protected by default.",
  },
  {
    number: "04",
    title: "Return",
    tagline: "Decide once the excitement has cooled.",
    body: "The idea comes back later — after the rush wears off, or when a project finishes and you genuinely have room. Now you can judge it honestly. Three outcomes, and all three are fine: build it, bank it, or bin it.",
  },
];

export default function PlaybookPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
        The Method
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        Tamer Playbook
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/85">
        Four steps that work on any idea, at any moment, whatever you happen to be
        doing when it lands. Each one takes under a minute. It has to be that
        simple — the people who need it are the easiest in the world to distract.
      </p>

      <div className="mt-12 rounded-3xl border border-acorn-300 bg-acorn-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-acorn-600">
          Before the four steps
        </p>
        <h2 className="mt-2 text-xl font-bold text-forest-900">Build your Drey</h2>
        <p className="mt-3 leading-relaxed text-forest-800/80">
          A drey is the nest a squirrel builds out of twigs and leaves. Yours is a
          picture of everything you have going right now and how committed you are to
          each one — built in a single sitting through a short interview, not a
          documenting project you'll abandon by Thursday.
        </p>
        <p className="mt-3 leading-relaxed text-forest-800/80">
          It isn't a step. It's the foundation that makes step 02 answerable in the
          moment. Without it, &ldquo;does this help what I'm working on?&rdquo; is a
          question you have to stop and think about — and stopping to think is exactly
          where the squirrel gets loose. Every pass through the four steps keeps your
          Drey current.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="flex flex-col gap-4 rounded-3xl border border-acorn-200 bg-white p-8 sm:flex-row sm:gap-8"
          >
            <div className="text-3xl font-extrabold text-acorn-400 sm:w-20">
              {phase.number}
            </div>
            <div>
              <h2 className="text-xl font-bold text-forest-900">{phase.title}</h2>
              <p className="mt-1 text-sm font-semibold text-acorn-600">{phase.tagline}</p>
              <p className="mt-3 leading-relaxed text-forest-800/80">{phase.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-acorn-200 bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-acorn-500">
          Want the long version?
        </p>
        <h2 className="mt-2 text-xl font-bold text-forest-900">
          The Squirrel Tamer goes deeper.
        </h2>
        <p className="mt-3 leading-relaxed text-forest-800/80">
          The Playbook is the system. The book is the story, the research, and the full
          walkthrough behind it — including how to build your Drey and the templates
          that go with it.
        </p>
        <Link
          href="/book"
          className="mt-5 inline-block rounded-full bg-acorn-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-acorn-600"
        >
          About the book
        </Link>
      </div>

      <div className="mt-16">
        <EmailSignup
          heading="Be first to run the Tamer Playbook."
          subheading="Get the full Playbook and the templates as they're released."
        />
      </div>
    </div>
  );
}
