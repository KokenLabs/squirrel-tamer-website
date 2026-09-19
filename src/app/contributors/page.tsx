import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

type Contributor = {
  name: string;
  title: string;
  company: string;
  website: string;
  photo: string | null;
};

const contributors: Contributor[] = [
  {
    name: "Alan Jackson",
    title: "Chairman of the Board / CEO",
    company: "Beacon of Hope",
    website: "beaconofhope.org",
    photo: null,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function ContributorsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-acorn-600">
        Contributors
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        The people behind the book
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/85">
        The Squirrel Tamer is built on conversations. These are the people who sat down
        for an interview and shared how they actually work — the wins, the dead ends,
        and what finally stuck.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contributors.map((person) => (
          <div
            key={person.name}
            className="flex flex-col items-center rounded-3xl border border-acorn-200 bg-white p-8 text-center"
          >
            {person.photo ? (
              <Image
                src={person.photo}
                alt={`${person.name}, ${person.title} of ${person.company}`}
                width={320}
                height={320}
                className="h-32 w-32 rounded-full object-cover ring-2 ring-acorn-200"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-32 w-32 items-center justify-center rounded-full bg-forest-100 text-3xl font-extrabold text-forest-700 ring-2 ring-acorn-200"
              >
                {initials(person.name)}
              </div>
            )}

            <h2 className="mt-5 text-xl font-bold text-forest-900">{person.name}</h2>
            <p className="mt-1 text-sm font-semibold text-acorn-600">{person.title}</p>
            <p className="mt-1 text-sm text-forest-800/75">{person.company}</p>
            <a
              href={`https://${person.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-semibold text-forest-800 underline decoration-acorn-400 underline-offset-4 transition hover:text-acorn-600"
            >
              {person.website}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <EmailSignup
          heading="Follow the interviews."
          subheading="New conversations go into the book as they happen. Join the list to hear what comes out of them."
        />
      </div>
    </div>
  );
}
