import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";
import BioModal from "@/components/BioModal";

type Contributor = {
  name: string;
  title: string;
  company: string;
  website: string | null;
  photo: string | null;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  bio?: string[];
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
    bio: [
      "Alan Jackson’s work with Hearts and Hands for Humanity over the past decade ignited a deeper calling to expand his impact. Beacon of Hope was born from that inspiration—an opportunity to do more, reach more, and provide for those who cannot provide for themselves. His passion lies in lifting others and creating real, lasting change in communities around the world.",
      "With over 30 years of business experience, including leadership in the construction industry, real estate, and financial planning, Alan brings both vision and execution to the mission. His humanitarian work has taken him on more than 40 trips to Eastern Africa, where he has been directly involved in life-changing projects that provide essential resources to those in greatest need.",
      "One of the most defining moments in Alan’s journey is witnessing clean water flow for the first time from a newly drilled well—seeing mothers line up with buckets, knowing their children’s lives have just changed. These experiences fuel his vision for Beacon of Hope: to raise significant resources for charities, uplift families out of poverty, and create opportunities for people—especially the next generation—to become deeply involved in giving. To Alan, hope is the belief that something better is always possible. Outside of his humanitarian work, he enjoys playing the drums and sharing his experiences through his book, Say Yes to the Lord, If You Dare.",
    ],
  },
  {
    name: "Jennifer Yeo",
    title: "CEO",
    company: "Presidio Real Estate",
    website: "presidioteam.com",
    photo: "/images/contributors/jennifer-yeo.jpg",
    linkedin: "https://www.linkedin.com/in/jenniferyeoutahbroker/",
    instagram: "https://www.instagram.com/itsjenniferyeo/",
    facebook: "https://www.facebook.com/jenniferyeo123",
    bio: [
      "In 18 years in the real estate business, I have had many growing experiences, all of which I have welcomed. I believe if you are not growing, you are dead. When I have been in moments of stress and uncertainty, I remember, this is growth and the skills I acquired through it. I have served on the Women’s Council of Realtors Local Chapter President 2 years in a row, State Governor for WCR, Board of Directors Utah County and Executive Committee Utah County. I love a good challenge and search for opportunities to become a better version of myself and maximize leadership skills.",
      "I specialize in Luxury Real Estate and 2nd Home Sales and thoroughly enjoy helping others with some of their largest and most valuable assets.",
      "I started my brokerage Presidio Real Estate in 2011 and have 500 excellent agents and 14 locations across the Wasatch Front. The future is bright and our goals get bigger every year. I love what I do and have found my genius in helping agents grow their business and succeed, all the while, providing a platform where they can thrive.",
      "Utah County: Alpine | American Fork | Bluffdale | Cedar Fort | Cedar Hills | Fairfield | Cedar Fort | Draper | Eagle Mountain | Elk Ridge | Fairfield | Genola | Goshen | Highland | Lehi | Linden | Mapleton | Orem | Payson | Pleasant Grove | Provo | Salem | Santaquin | Saratoga Springs | Spanish Fork | Springville | Vineyard | Woodland Hills",
    ],
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
    bio: [
      "I help leaders and entrepreneurs learn to Intentionally unlock their personal Greatness. I am an experienced Business Leader with a demonstrated history in Business Strategy, Coaching, Speaking, Sales, E-commerce, and Networking.",
    ],
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
    bio: [
      "Co-Founder & CEO of Photon AC, building solar-integrated hybrid mini-split & ducted HVAC systems distributed through a dealer network. Nearly 30 years founding and scaling companies across financial and home services industries — turning early-stage operations into category leaders through direct execution.",
      "Currently focused on: DC-native power architecture, dealer channel strategy, and go-to-market systems for next-gen HVAC.",
      "Open to connecting with HVAC dealers, solar installers, tiny home / ADU builders, and other channel partners.",
    ],
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
    bio: [
      "You’ve built a real business — but it still depends on you. Your team still comes to you for answers, the processes are still in your head, and too much low-value work still lands back on your desk. That is the founder bottleneck.",
      "At Scale Virtually, we help founders get out of the weeds by building the systems, SOPs, roles, and virtual assistant support needed to move work off their desk without losing control. We do not just place a VA — a person without a process usually creates more management for the founder — so we start with the operating structure first: what work needs to leave the founder’s plate, what process needs documenting, what role should own it, and what reporting loop keeps the founder informed without being dragged back in.",
      "I know this problem because I lived it. I went from being the Chief-Everything-Officer in my own company — working 12-hour days, managing chaos, and keeping too much of the business in my head — to building self-managing teams, documented systems, and companies that could scale with less of me in the middle. That shift helped me grow from about $2M in revenue to about $20M, work closer to 1 hour a day, and build multiple 8-figure businesses generating over $100M in total company revenue.",
      "If your business is growing but everything still runs through you, the answer is not always to hire more people. Sometimes the next move is a better process, a clearer role, a stronger handoff, or the right VA. The key is knowing what to fix first.",
    ],
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
    bio: [
      "Brittany founded LedgerGurus in 2014 after seeing a need to serve small businesses and having a desire to create a flexible work environment for others like her. Brittany will say she never intended to start a company or be an entrepreneur, but she has quietly been creating things for many years.",
      "Brittany earned a Bachelor of Science in Accounting and a Master of Accountancy from Brigham Young University. After an internship at KPMG, Brittany worked at Squire in their advisory services group, and then as the CFO for DSB Construction, before founding LedgerGurus. Brittany is a CPA and QuickBooks ProAdvisor, certified in QuickBooks Online Advanced and QuickBooks Enterprise.",
      "In her role, Brittany drives many strategic initiatives and relationships at LedgerGurus. She also convinced Stephen, COO and husband, to ditch his software career and join LedgerGurus full-time.",
    ],
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
    bio: [
      "A St. George native, Koby is a graduate from Brigham Young University and the University of Utah, where he received his Doctorate of Pharmacy in 2000. He has managed several successful retail pharmacies and loves being an advocate for his patients. He is extremely excited about providing compounded medications to the community he serves.",
      "“Fusion Specialty Pharmacy is the only pharmacy in Southern Utah certified by the Pharmacy Compounding Accreditation Board (PCAB). We take pride in our high-quality ingredients, unique formulations, pharmacists, staff, and state of the art laboratory facilities.”",
    ],
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
    bio: [
      "Brad Bonar, Jr. is a comedian and the creator of 1 Degree of Separation.",
      "“A few years ago I found a suicide note that I wrote in the 6th grade. At first I kinda laughed about it, but then it became very sobering to think that I’m now in my 60’s, I’ve struggled at least since the 6th grade, and it’s only been the past few years that I’ve seriously addressed my depression.",
      "That note got me started on a quest to put together a comedy show about depression and suicide. I’ve spent the past 25 years traveling the world making people laugh. Now I’m using my talents for something more personal. It’s time to cast a spotlight that removes the stigma of mental illness.",
      "I’ve interviewed doctors and mental health professionals to help format the show so that we as comics can talk about the topics that are so taboo in our society. As comedians we’ll talk about anything on stage, so why not this?”",
    ],
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
    bio: [
      "If there’s anything that isn’t working, it’s Pat’s fault! Pat is constantly fine-tuning our systems & processes with the obsession of a master watchmaker. When he’s not tinkering with our processes, he’s out there turning curious property owners into happy clients.",
    ],
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
    company: "Conectiv",
    website: "conectivglobal.com",
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
    bio: [
      "Over 2 decades ago, Tony realized something powerful—you can be successful on the outside and still feel completely drained inside. That wake-up call became the spark that ignited his personal transformation—and the creation of this guide.",
      "Today, Tony is a Peak Potential Activator, Hypnotherapist and Master Trainer, helping thousands of people around the world awaken their inner power and step into their most vibrant, aligned life. His mission? To help you stop settling and start vibrating higher—mentally, emotionally, and energetically.",
      "Tony’s approach combines real-world experience, spiritual wisdom, and practical tools that create real shifts. He’s worked with entrepreneurs, creatives, and everyday seekers looking for more clarity, joy, and alignment. “When you shift your energy, everything else follows.”",
    ],
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
      <h1 className="text-4xl font-extrabold tracking-tight text-forest-900 sm:text-5xl">
        Certified Tamers
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

            {person.bio ? (
              <BioModal
                name={person.name}
                title={person.title}
                company={person.company}
                bio={person.bio}
              />
            ) : null}
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
