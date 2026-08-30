import EmailSignup from "@/components/EmailSignup";

const themes = [
  {
    title: "Squirrel stories",
    body: "Conversations with people whose scattered, curious brains became the reason they got somewhere — not the thing that held them back.",
  },
  {
    title: "The stack",
    body: "What AI tools people actually use day to day, how they're wired together, and which ones quietly turned out to be a waste of time.",
  },
  {
    title: "Playbook in practice",
    body: "Walking through real capture-to-ship cycles — what worked, what stalled, and what got fixed on the next loop.",
  },
];

export default function PodcastPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
        The Show
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        The Squirrel Tamer Podcast
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/85">
        Interviews and short solo episodes about turning Shiny Object Syndrome into an
        advantage — the tools, the systems, and the people who figured out how to
        finish things without pretending to be someone they&apos;re not.
      </p>

      <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1.5 text-sm font-semibold text-forest-700">
        🎙️ In production — first episodes coming soon
      </div>

      <h2 className="mt-16 text-sm font-semibold uppercase tracking-widest text-acorn-600">
        What to expect
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="rounded-3xl border border-acorn-200 bg-white p-6"
          >
            <h3 className="text-lg font-bold text-forest-900">{theme.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
              {theme.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <EmailSignup
          heading="Get the first episode the day it drops."
          subheading="Join the list and you'll hear when the podcast launches, plus where to follow it."
        />
      </div>
    </div>
  );
}
