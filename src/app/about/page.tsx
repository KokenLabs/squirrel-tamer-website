import EmailSignup from "@/components/EmailSignup";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">About</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        Why Squirrel Tamer exists
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-forest-800/85">
        <p>
          For most of history, having a scattered, curious, idea-a-minute brain was a
          liability. You needed relentless, narrow focus to get anything finished — and
          if that wasn&apos;t how your mind worked, the world called it a flaw.
        </p>
        <p>
          AI changes that math. For the first time, there&apos;s a tool that can hold
          your twelve open loops, help you triage them in seconds, and do the tedious
          middle-work that used to be the reason good ideas never became finished
          projects. The squirrel doesn&apos;t have to be tamed by force of willpower
          anymore — it can be tamed by a system.
        </p>
        <p>
          <strong className="text-forest-900">Squirrel Tamer</strong> is that system: a
          playbook, a community, and eventually a full toolkit for people with ADD,
          ADHD, or just too many interests to count — built around using AI as a focus
          partner instead of one more shiny distraction.
        </p>
        <p>
          This site is just getting started, right alongside the book, the podcast, and
          everything else in the Squirrel Tamer ecosystem. Sign up below to follow along
          as it comes together.
        </p>
      </div>

      <div className="mt-14">
        <EmailSignup
          heading="Follow the build."
          subheading="Get updates as the Playbook, the book, and the rest of Squirrel Tamer come to life."
        />
      </div>
    </div>
  );
}
