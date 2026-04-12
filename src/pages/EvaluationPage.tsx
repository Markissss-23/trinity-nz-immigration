import { useEffect } from "react";
import { Link } from "react-router-dom";
import { evaluationBlock, siteMeta } from "../content/site";
import { EvaluationForm } from "../components/EvaluationForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const defaultTitle = `${siteMeta.name}`;

export default function EvaluationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${evaluationBlock.title} — ${siteMeta.shortName}`;
    return () => {
      document.title = defaultTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main id="main-content" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fern-700 transition hover:text-fern-800"
            >
              <span aria-hidden>←</span> Back to home
            </Link>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wider text-fern-600">{evaluationBlock.eyebrow}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {evaluationBlock.title}
          </h1>
          <div className="mt-6 max-w-4xl space-y-4 text-[15px] leading-relaxed text-ink-700">
            {evaluationBlock.intro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <EvaluationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
