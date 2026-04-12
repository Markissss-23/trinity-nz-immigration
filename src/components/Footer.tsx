import { Link } from "react-router-dom";
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
              Licensed immigration consultation and advice for New Zealand visa pathways.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-ink-200 hover:text-white" href={siteMeta.iaaUrl} target="_blank" rel="noopener noreferrer">
              Immigration Advisers Authority (IAA)
            </a>
            <a
              className="text-ink-200 hover:text-white"
              href={siteMeta.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <Link className="text-ink-200 hover:text-white" to="/#contact">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-10 border-t border-ink-800 pt-8 text-xs text-ink-500">© {year} {siteMeta.name}</p>
      </div>
    </footer>
  );
}
