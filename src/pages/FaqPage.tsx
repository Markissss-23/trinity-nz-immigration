import { useEffect } from "react";
import { Link } from "react-router-dom";
import { faqBlock, faqs, siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionShell } from "../components/SectionShell";

export default function FaqPage() {
  useEffect(() => {
    document.title = `FAQ — ${siteMeta.shortName}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = siteMeta.shortName;
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

          <SectionShell
            id="faq"
            eyebrow={faqBlock.eyebrow}
            title={faqBlock.title}
            subtitle={faqBlock.subtitle}
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-ink-200 bg-ink-50 p-6 shadow-card"
                >
                  <h3 className="font-display text-lg font-semibold text-ink-950">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>
        </div>
      </main>
      <Footer />
    </div>
  );
}
