import { useEffect } from "react";
import { Link } from "react-router-dom";
import { notFoundBlock, siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `Page Not Found — ${siteMeta.shortName}`;
    return () => {
      document.title = siteMeta.name;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main id="main-content" className="scroll-mt-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">

          {/* 404 number */}
          <p className="font-display text-8xl font-bold text-fern-200 sm:text-9xl">
            {notFoundBlock.number}
          </p>

          {/* Heading */}
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {notFoundBlock.title}
          </h1>

          {/* Subtext */}
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
            {notFoundBlock.body}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={notFoundBlock.primaryCta.to}
              className="rounded-full bg-fern-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-fern-700"
            >
              {notFoundBlock.primaryCta.label}
            </Link>
            <Link
              to={notFoundBlock.secondaryCta.to}
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 shadow-sm transition hover:bg-ink-100"
            >
              {notFoundBlock.secondaryCta.label}
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-16 border-t border-ink-200 pt-10 w-full max-w-sm">
            <p className="mb-4 text-sm font-semibold text-ink-500 uppercase tracking-wider">
              {notFoundBlock.helpfulLinksTitle}
            </p>
            <nav className="flex flex-col gap-2">
              {notFoundBlock.helpfulLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-fern-700 transition hover:bg-fern-50 hover:text-fern-800"
                >
                  {link.label}
                  <span aria-hidden className="text-fern-400">→</span>
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}