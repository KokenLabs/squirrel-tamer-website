import EmailSignup from "@/components/EmailSignup";

const phases = [
  {
    number: "01",
    title: "Corral",
    tagline: "Get every open loop out of your head.",
    body: "Capture every idea, tab, half-started project, and 'I should really...' into a single system. The goal isn't to finish everything — it's to stop losing things and stop the mental overhead of trying to remember them.",
  },
  {
    number: "02",
    title: "Deputize",
    tagline: "Turn AI into your focus copilot.",
    body: "Set up a lean AI stack that triages your capture list, drafts the boring first pass of things, researches on your behalf, and checks in with you — so staying on track doesn't rely on willpower alone.",
  },
  {
    number: "03",
    title: "Sprint",
    tagline: "Work in short, protected bursts.",
    body: "Pick one thing at a time and run a focused sprint with your AI copilot doing the heavy lifting on execution, so momentum builds instead of stalling out at the research phase.",
  },
  {
    number: "04",
    title: "Ship",
    tagline: "Close the loop, every time.",
    body: "Every sprint ends with something real: published, sent, launched, or done. Shipping — even small — is what rewires 'I have a lot of ideas' into 'I finish what I start.'",
  },
  {
    number: "05",
    title: "Repeat",
    tagline: "Build the system, not just the streak.",
    body: "The Playbook is a loop, not a one-time fix. Each cycle gets easier as your AI stack learns your patterns and your capture-to-ship system gets more automatic.",
  },
];

export default function PlaybookPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
        The Method
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        The Squirrel Tamer Playbook
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/85">
        A five-phase system for turning a scattered, idea-rich brain into consistent,
        shipped output — using AI as the tool that does the taming, not more raw
        discipline.
      </p>

      <div className="mt-14 space-y-8">
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

      <div className="mt-16">
        <EmailSignup
          heading="Be first to run the Playbook."
          subheading="The full Playbook, templates, and AI stack breakdown are coming with the book. Get on the list."
        />
      </div>
    </div>
  );
}
