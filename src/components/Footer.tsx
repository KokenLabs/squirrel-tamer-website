export default function Footer() {
  return (
    <footer className="border-t border-acorn-200/60 bg-[#fbf8f2]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-forest-800/70">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-semibold text-forest-800">🐿️ Squirrel Tamer</p>
          <p>AI is the tool. Focus is the outcome.</p>
        </div>
        <p className="mt-6 text-xs text-forest-800/50">
          © {new Date().getFullYear()} Squirrel Tamer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
