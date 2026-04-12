import { Link } from "react-router-dom";
import { siteMeta } from "../content/site";
import { FacebookBrandIcon, GoogleBrandIcon } from "./SocialBrandIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-lg gap-4">
            <img
              src={siteMeta.logoUrl}
              alt={siteMeta.name}
              width={224}
              height={58}
              className="h-[57.6px] w-[min(100%,224px)] max-w-[224px] shrink-0 object-contain object-left"
              loading="lazy"
              decoding="async"
            />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold text-white">{siteMeta.shortName}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Licensed immigration consultation and advice for New Zealand visa pathways.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-ink-200 hover:text-white" href={siteMeta.iaaUrl} target="_blank" rel="noopener noreferrer">
              Immigration Advisers Authority (IAA)
            </a>
            <a
              className="inline-flex items-center gap-2 text-ink-200 hover:text-white"
              href={siteMeta.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleBrandIcon className="h-4 w-4 shrink-0" aria-hidden />
              Google Maps & reviews
            </a>
            <a
              className="inline-flex items-center gap-2 text-ink-200 hover:text-white"
              href={siteMeta.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookBrandIcon className="h-4 w-4 shrink-0 text-[#1877F2]" aria-hidden />
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
