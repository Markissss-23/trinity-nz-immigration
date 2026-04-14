import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsData, siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type NewsCategory = "All" | "Work Visas" | "Residence" | "Visitor & Holiday" | "Policy Changes";

const CATEGORY_COLORS: Record<string, string> = {
  "Work Visas": "bg-blue-100 text-blue-700",
  "Residence": "bg-fern-100 text-fern-700",
  "Visitor & Holiday": "bg-orange-100 text-orange-700",
  "Policy Changes": "bg-purple-100 text-purple-700",
};

const defaultTitle = `${siteMeta.name}`;

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `News & Updates — ${siteMeta.shortName}`;
    return () => {
      document.title = defaultTitle;
    };
  }, []);

  const categories: NewsCategory[] = [
    "All",
    "Work Visas",
    "Residence",
    "Visitor & Holiday",
    "Policy Changes",
  ];

  const filtered =
    activeCategory === "All"
      ? newsData
      : newsData.filter((n) => n.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main id="main-content" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fern-700 transition hover:text-fern-800"
            >
              <span aria-hidden>←</span> Back to home
            </Link>
          </nav>

          {/* Page heading */}
          <p className="text-sm font-semibold uppercase tracking-wider text-fern-600">
            Immigration New Zealand
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            News & Updates
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-700">
            The latest policy changes and announcements from Immigration New Zealand,
            summarised in plain language. Always refer to{" "}
            <a
              href="https://www.immigration.govt.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fern-700 underline underline-offset-2 hover:text-fern-800"
            >
              immigration.govt.nz
            </a>{" "}
            for authoritative requirements.
          </p>

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-fern-700 text-white"
                    : "bg-white text-ink-600 ring-1 ring-ink-200 hover:bg-ink-100"
                }`}
              >
                {cat === "All" ? "All Updates" : cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="mt-10">
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-ink-500">
                No updates in this category yet.
              </p>
            ) : (
              <>
                {/* Featured / latest article */}
                {featured && (
                  <div className="mb-8 rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          CATEGORY_COLORS[featured.category] ?? "bg-ink-100 text-ink-600"
                        }`}
                      >
                        {featured.category}
                      </span>
                      <span className="text-xs text-ink-400">{featured.date}</span>
                      <span className="rounded-full bg-fern-100 px-2.5 py-0.5 text-xs font-semibold text-fern-700">
                        Latest
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-semibold leading-snug text-ink-950 sm:text-2xl">
                      {featured.title}
                    </h2>

                    <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                      {featured.summary}
                    </p>

                    {featured.keyPoints && featured.keyPoints.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {featured.keyPoints.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-ink-700"
                          >
                            <span className="mt-0.5 flex-shrink-0 text-fern-600">✓</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-ink-100 pt-5">
                      <a
                        href={featured.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-fern-700 transition hover:text-fern-800"
                      >
                        Read on INZ website
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <Link
                        to="/#contact"
                        className="text-sm font-semibold text-ink-500 transition hover:text-ink-700"
                      >
                        Ask us about this →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Remaining articles grid */}
                {rest.length > 0 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    {rest.map((article, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col rounded-xl border border-ink-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              CATEGORY_COLORS[article.category] ?? "bg-ink-100 text-ink-600"
                            }`}
                          >
                            {article.category}
                          </span>
                          <span className="text-xs text-ink-400">{article.date}</span>
                        </div>

                        <h3 className="font-display font-semibold leading-snug text-ink-950">
                          {article.title}
                        </h3>

                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                          {article.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-ink-100 pt-4">
                          <a
                            href={article.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-fern-700 transition hover:text-fern-800"
                          >
                            INZ source
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <Link
                            to="/#contact"
                            className="text-xs font-semibold text-ink-500 transition hover:text-ink-700"
                          >
                            Ask us →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-fern-200 bg-fern-50 p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-ink-950">
              Not sure how these changes affect you?
            </h3>
            <p className="mt-2 text-[15px] text-ink-700">
              Our licensed advisers keep up with every policy change so you don't have to.
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-block rounded-lg bg-fern-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-fern-800"
            >
              Get in touch
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}