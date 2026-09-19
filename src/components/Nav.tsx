import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/playbook", label: "S.O.S. Playbook" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contributors", label: "Contributors" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-acorn-200/60 bg-[#fbf8f2]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-forest-800">
          <span aria-hidden="true">🐿️</span>
          Squirrel Tamer
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-forest-800/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-acorn-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book#signup"
          className="rounded-full bg-acorn-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-acorn-600"
        >
          Get updates
        </Link>
      </div>
    </header>
  );
}
