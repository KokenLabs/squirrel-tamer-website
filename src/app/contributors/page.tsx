import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

type Contributor = {
  name: string;
  title: string;
  company: string;
  website: string | null;
  photo: string | null;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
};

const contributors: Contributor[] = [
  {
    name: "Alan Jackson",
    title: "Chairman of the Board / CEO",
    company: "Beacon of Hope",
    website: "beaconofhope.org",
    photo: "/images/contributors/alan-jackson.jpg",
    linkedin: "https://www.linkedin.com/in/talan-jackson/",
    instagram: "https://www.instagram.com/alanjacksonphilanthropy/",
    facebook: "https://www.facebook.com/alanjacksonH3/",
  },
  {
    name: "Julio Daniel Hernandez",
    title: "CEO",
    company: "Enlight Energy",
    website: "enlight.energy",
    photo: "/images/contributors/julio-daniel-hernandez.jpg",
    linkedin: "https://www.linkedin.com/in/juliodanielhernandez/",
    instagram: "https://www.instagram.com/juliodaniel_h/",
    facebook: "https://www.facebook.com/julio.d.hernandez",
  },
  {
    name: "Jesse Gee",
    title: "Co-Founder & CEO",
    company: "Photon AC",
    website: "photonac.com",
    photo: "/images/contributors/jesse-gee.jpg",
    linkedin: "https://www.linkedin.com/in/jessegeeaz/",
    facebook: "https://www.facebook.com/jessegeeaz",
    instagram: "https://www.instagram.com/jessegeearizona/",
  },
  {
    name: "Justin Prince",
    title: "Founder",
    company: "MAKE Wellness",
    website: "makewellness.com",
    photo: "/images/contributors/justin-prince.jpg",
    instagram: "https://www.instagram.com/iamjustinprince",
    facebook: "https://www.facebook.com/iamjustinprince.vm",
    linkedin: "https://www.linkedin.com/in/justinkprince/",
  },
  {
    name: "Tyler Bastian",
    title: "CEO",
    company: "Ruined",
    website: "theruinedproject.com",
    photo: "/images/contributors/tyler-bastian.jpg",
    linkedin: "https://www.linkedin.com/in/tyler-bastian-3787b12b/",
    instagram: "https://www.instagram.com/ty.bastian/",
    facebook: "https://www.facebook.com/tyler.bastian.16",
  },
  {
    name: "Sean Connolly",
    title: "CEO",
    company: "Scale Virtually",
    website: "scalevirtually.com",
    photo: "/images/contributors/sean-connolly.jpg",
    linkedin: "https://www.linkedin.com/in/sean-connolly-950128",
  },
  {
    name: "Anthon Burbidge",
    title: "CEO",
    company: "BC Timbers",
    website: "bctimbers.com",
    photo: "/images/contributors/anthon-burbidge.jpg",
    linkedin: "https://www.linkedin.com/in/anthon-burbidge-03428734/",
    instagram: "https://www.instagram.com/bctimbers",
    facebook: "https://www.facebook.com/bctimbers",
  },
  {
    name: "Brittany Drury Brown",
    title: "CEO",
    company: "LedgerGurus",
    website: "ledgergurus.com",
    photo: "/images/contributors/brittany-drury-brown.jpg",
    linkedin: "https://www.linkedin.com/in/brittany-brown-b8324812/",
    instagram: "https://www.instagram.com/britt_any80/",
    facebook: "https://www.facebook.com/brittany.d.brown.37",
  },
  {
    name: "Scott Schwab",
    title: "Founder",
    company: "Mett Wellness",
    website: "mettwellness.com",
    photo: "/images/contributors/scott-schwab.jpg",
    linkedin: "https://www.linkedin.com/in/scott-schwab-8306713/",
    instagram: "https://www.instagram.com/schwabscott/",
    facebook: "https://www.facebook.com/scott.schwab.50",
  },
  {
    name: "Andy Lund",
    title: "Founder",
    company: "VooDoo Hydration",
    website: "voodoohydration.com",
    photo: "/images/contributors/andy-lund.jpg",
    linkedin: "https://www.linkedin.com/in/andy-lund-8a915a23/",
    facebook: "https://www.facebook.com/andy.lund.5201",
  },
  {
    name: "Koby Taylor",
    title: "Founder",
    company: "Fusion Specialty Pharmacy",
    website: "fusionspecialtypharmacy.com",
    photo: "/images/contributors/koby-taylor.jpg",
    linkedin: "https://www.linkedin.com/in/kobytaylor/",
    instagram: "https://www.instagram.com/kobytay/",
    facebook: "https://www.facebook.com/koby.taylor.923",
  },
  {
    name: "Christopher John Stubbs",
    title: "Founder",
    company: "Men of the Wolf Pack",
    website: "menofthewolfpack.com",
    photo: "/images/contributors/christopher-stubbs.jpg",
    linkedin: "https://www.linkedin.com/in/christopherjohnstubbs/",
    instagram: "https://www.instagram.com/christopherjohnstubbs/",
    facebook: "https://www.facebook.com/christopherjohnascending/",
  },
  {
    name: "Spencer Oberan",
    title: "Co-Founder",
    company: "Enerflo",
    website: "enerflo.com",
    photo: "/images/contributors/spencer-oberan.jpg",
    linkedin: "https://www.linkedin.com/in/spencer-oberan-3734902b/",
    facebook: "https://www.facebook.com/spencer.oberan",
  },
  {
    name: "Paul Hatch",
    title: "President",
    company: "Allies",
    website: "alliesusa.com",
    photo: "/images/contributors/paul-hatch.jpg",
    linkedin: "https://www.linkedin.com/in/paul-hatch-84b4608/",
    instagram: "https://www.instagram.com/lphatch/",
    facebook: "https://www.facebook.com/paul.hatch.37",
  },
  {
    name: "Rhett Robison",
    title: "Owner",
    company: "StoneWorld Supply",
    website: "stoneworldsupply.com",
    photo: "/images/contributors/rhett-robison.jpg",
    facebook: "https://www.facebook.com/rhett.robison.2025",
  },
  {
    name: "Brad Bonar",
    title: "Founder",
    company: "1 Degree",
    website: "1degreeofseparation.life",
    photo: "/images/contributors/brad-bonar.jpg",
    linkedin: "https://www.linkedin.com/in/brad-bonar-jr-25075074/",
    instagram: "https://www.instagram.com/onedegree.official/",
    facebook: "https://www.facebook.com/brad.bonar",
  },
  {
    name: "Steven Frame",
    title: "Owner",
    company: "Simply Bilt",
    website: "simplybilt.com",
    photo: "/images/contributors/steven-frame.jpg",
    linkedin: "https://www.linkedin.com/in/thefraamer/",
    instagram: "https://www.instagram.com/thefraamer/",
    facebook: "https://www.facebook.com/TheFraamer",
  },
  {
    name: "Pat Petrini",
    title: "Sales & Operations Manager",
    company: "PPG Property Management",
    website: "ppgpropertymanagement.com",
    photo: "/images/contributors/pat-petrini.jpg",
    linkedin: "https://www.linkedin.com/in/patpetrini/",
    instagram: "https://www.instagram.com/patpetrini/",
    facebook: "https://www.facebook.com/PatPetrini",
  },
  {
    name: "Jason Brown",
    title: "Digital Marketing Consultant",
    company: "Root Optimization",
    website: null,
    photo: "/images/contributors/jason-brown.jpg",
    linkedin: "https://www.linkedin.com/in/jasonbrownmarketing/",
    instagram: "https://www.instagram.com/j_son_brown/",
    facebook: "https://www.facebook.com/jason.brown2",
  },
  {
    name: "Chad Garner",
    title: "President",
    company: "Investview",
    website: "investview.com",
    photo: "/images/contributors/chad-garner.jpg",
    linkedin: "https://www.linkedin.com/in/chadgarner1/",
  },
  {
    name: "Braden Breinholt",
    title: "Managing Partner",
    company: "New Wave Real Estate",
    website: "newwave.realestate",
    photo: "/images/contributors/braden-breinholt.jpg",
    linkedin: "https://www.linkedin.com/in/bradenbreinholt/",
    instagram: "https://www.instagram.com/s_brady_b/",
    facebook: "https://www.facebook.com/SBradyB",
  },
  {
    name: 'Tony "Mojo" Lucero',
    title: "Founder",
    company: "The Mojo Way",
    website: "themojoway.com",
    photo: "/images/contributors/tony-lucero.jpg",
    linkedin: "https://www.linkedin.com/in/tonylucero/",
    instagram: "https://www.instagram.com/iamtonylucero",
    facebook: "https://www.facebook.com/iamtonylucero",
  },
  {
    name: "Adnan Khawaja",
    title: "Founder & CEO",
    company: "Sky Vista Consulting",
    website: "skyvistaconsulting.com",
    photo: "/images/contributors/adnan-khawaja.jpg",
    linkedin: "https://www.linkedin.com/in/adnankhawaja/",
    facebook: "https://www.facebook.com/coachadnan",
    instagram: "https://www.instagram.com/skyvistaconsulting",
  },
];

const socialIcons: Record<string, JSX.Element> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.4 2.5 4.4 5.75V21h-4v-5.6c0-1.35-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9z" />
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.03 1.46-4.03 4.13V9.9H7.5V13h2.76v8z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.1" cy="6.9" r="1.3" />
    </>
  ),
};

function SocialLinks({ person }: { person: Contributor }) {
  const links = [
    { key: "linkedin", href: person.linkedin, label: "LinkedIn" },
    { key: "instagram", href: person.instagram, label: "Instagram" },
    { key: "facebook", href: person.facebook, label: "Facebook" },
  ].filter((link) => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex items-center justify-center gap-2.5">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on ${link.label}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-acorn-200 text-forest-800/70 transition hover:border-acorn-400 hover:bg-acorn-50 hover:text-acorn-600"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
            {socialIcons[link.key]}
          </svg>
        </a>
      ))}
    </div>
  );
}

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
            {person.website ? (
              <a
                href={`https://${person.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-forest-800 underline decoration-acorn-400 underline-offset-4 transition hover:text-acorn-600"
              >
                {person.website}
              </a>
            ) : null}

            <SocialLinks person={person} />
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
