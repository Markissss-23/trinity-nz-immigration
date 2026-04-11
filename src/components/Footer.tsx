import { siteMeta } from "../content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">{siteMeta.shortName}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">
              {siteMeta.name}. Licensed immigration advice for New Zealand visa pathways.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-ink-200 hover:text-white" href={siteMeta.iaaUrl} target="_blank" rel="noopener noreferrer">
              Immigration Advisers Authority (IAA)
            </a>
            <a className="text-ink-200 hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <p className="mt-10 max-w-3xl border-t border-ink-800 pt-8 text-xs leading-relaxed text-ink-400">
          The information on this website is general in nature and is not immigration or legal advice. Immigration
          requirements change frequently; a licensed immigration adviser can assess your individual circumstances.
        </p>
        <p className="mt-4 text-xs text-ink-500">© {year} {siteMeta.name}</p>
      </div>
    </footer>
  );
}
