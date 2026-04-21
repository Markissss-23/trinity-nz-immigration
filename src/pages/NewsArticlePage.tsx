import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { newsData, siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ShareBar } from "../components/ShareBar";

const CATEGORY_COLORS: Record<string, string> = {
  "Work Visas": "bg-blue-100 text-blue-700",
  "Residence": "bg-fern-100 text-fern-700",
  "Visitor & Holiday": "bg-orange-100 text-orange-700",
  "Policy Changes": "bg-purple-100 text-purple-700",
};

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.find((a) => a.slug === slug);

  // 404 state — article slug not found
  if (!article) {
    return (
      <div className="min-h-screen bg-ink-50">
        <Header />
        <main id="main-content" className="scroll-mt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
            <p className="font-display text-6xl font-bold text-fern-200">404</p>
            <h1 className="mt-4 font-display text-2xl font-semibold text-ink-950">
              Article not found
            </h1>
            <p className="mt-3 text-[15px] text-ink-600">
              This article may have been moved or removed.
            </p>
            <Link
              to="/news"
              className="mt-8 rounded-full bg-fern-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-fern-700"
            >
              Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find prev / next articles for navigation
  const currentIndex = newsData.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? newsData[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-ink-50">
        <Helmet>
          <title>{article.title} — {siteMeta.shortName}</title>
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.summary} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://trinitynzimmigration.co.nz/news/${article.slug}`} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={article.title} />
          <meta name="twitter:description" content={article.summary} />
        </Helmet>
      <Header />
      <main id="main-content" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="font-semibold text-fern-700 transition hover:text-fern-800"
            >
              Home
            </Link>
            <span className="text-ink-400">/</span>
            <Link
              to="/news"
              className="font-semibold text-fern-700 transition hover:text-fern-800"
            >
              News & Updates
            </Link>
            <span className="text-ink-400">/</span>
            <span className="truncate text-ink-500">{article.title}</span>
          </nav>

          {/* Category + date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                CATEGORY_COLORS[article.category] ?? "bg-ink-100 text-ink-600"
              }`}
            >
              {article.category}
            </span>
            <span className="text-xs text-ink-400">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="mt-5 text-[15px] leading-relaxed text-ink-600 border-l-4 border-fern-300 pl-4">
            {article.summary}
          </p>

          {/* Key points */}
          {article.keyPoints && article.keyPoints.length > 0 && (
            <div className="mt-8 rounded-xl border border-fern-200 bg-fern-50 p-6">
              <p className="text-sm font-semibold text-fern-800 mb-3">Key points</p>
              <ul className="space-y-2">
                {article.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-0.5 flex-shrink-0 text-fern-600">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full article content */}
          {article.content && article.content.length > 0 && (
            <div className="mt-10 space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink-700">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <ShareBar
            title={article.title}
            url={`https://trinitynzimmigration.co.nz/news/${article.slug}`}
          />

          {/* Source link */}
          <div className="mt-10 border-t border-ink-200 pt-8">
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-fern-700 transition hover:text-fern-800"
            >
              {article.sourceLabel ?? "Read on INZ website"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="mt-2 text-xs text-ink-400">
              Information on this page is for general guidance only. Always refer to{" "}
              <a
                href="https://www.immigration.govt.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ink-600"
              >
                Immigration New Zealand
              </a>{" "}
              for authoritative requirements.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-fern-200 bg-fern-50 p-6 text-center">
            <p className="font-display font-semibold text-ink-950">
              Not sure how this affects you?
            </p>
            <p className="mt-1 text-sm text-ink-600">
              Our licensed advisers can assess your specific situation.
            </p>
            <Link
              to="/#contact"
              className="mt-4 inline-block rounded-full bg-fern-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-fern-700"
            >
              Get in touch
            </Link>
          </div>

          {/* Prev / Next navigation */}
          {(prevArticle || nextArticle) && (
            <nav
              aria-label="Article navigation"
              className="mt-12 grid gap-4 border-t border-ink-200 pt-8 sm:grid-cols-2"
            >
              {prevArticle ? (
                <Link
                  to={`/news/${prevArticle.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-ink-200 bg-white p-4 transition hover:border-fern-300 hover:shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    ← Previous
                  </span>
                  <span className="text-sm font-semibold text-ink-800 group-hover:text-fern-700 transition">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link
                  to={`/news/${nextArticle.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-ink-200 bg-white p-4 text-right transition hover:border-fern-300 hover:shadow-sm sm:items-end"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Next →
                  </span>
                  <span className="text-sm font-semibold text-ink-800 group-hover:text-fern-700 transition">
                    {nextArticle.title}
                  </span>
                </Link>
              ) : <div />}
            </nav>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}