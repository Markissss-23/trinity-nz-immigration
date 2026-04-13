import { useEffect } from "react";
import { Link } from "react-router-dom";
import { siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function TermsAndConditionsPage() {
  useEffect(() => {
    document.title = `Terms & conditions — ${siteMeta.shortName}`;
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

          <p className="text-sm font-semibold uppercase tracking-wider text-fern-600">Terms &amp; conditions</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Terms and conditions for Trinity New Zealand Immigration Services
          </h1>

          <div className="mt-8 space-y-8 text-ink-700">
            <section className="space-y-4">
              <p className="text-lg leading-relaxed">
                These terms and conditions govern the use of this website and the provision of immigration advisory services by Trinity New Zealand Immigration Services.
              </p>
              <p className="text-base leading-relaxed">
                By using this website or engaging our services, you agree to these terms. They are intended to be consistent with New Zealand immigration law and the professional standards of the Immigration Advisers Authority (IAA).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Scope of our services</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  We provide licensed immigration advice and application support for New Zealand visa pathways. This includes eligibility assessment, document preparation, application guidance, and communication with immigration authorities on your behalf if agreed.
                </p>
                <p>
                  We do not guarantee any particular outcome, approval, or timeframe for any visa application. Final decisions are made by Immigration New Zealand or other relevant authorities.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Client responsibilities</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-700">
                <li>You must provide accurate, complete and timely information, including supporting documents and any changes to your circumstances.</li>
                <li>You must read and understand the advice we provide and ask questions if anything is unclear.</li>
                <li>You are responsible for meeting application deadlines, paying any government fees, and complying with New Zealand immigration requirements.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Fees and payment</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  All professional fees are agreed in advance with the client. Payment terms will be outlined in any service agreement or quote provided before work begins.
                </p>
                <p>
                  Government fees and third-party charges are separate from our advisory fees and are payable directly by the client unless otherwise agreed.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Advice and disclaimers</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  Advice provided on this website or by our team is general in nature and based on the information supplied. It is not a substitute for a full personalised immigration assessment unless a formal engagement has been agreed.
                </p>
                <p>
                  We are licensed by the Immigration Advisers Authority and act in accordance with the IAA Code of Conduct. We do not provide legal advice unless explicitly stated.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Website use and intellectual property</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  This website and its content are owned by Trinity New Zealand Immigration Services. You may use the material for personal information only, and must not reproduce or distribute it without permission.
                </p>
                <p>
                  Links to external websites are provided for convenience. We are not responsible for the content or policies of third-party sites.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Changes to these terms</h2>
              <p className="text-sm leading-relaxed text-ink-700">
                We may update these terms and conditions from time to time. Latest updates will be published on this page, and the current version applies to your use of the website and services.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-ink-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-ink-950">Contact us</h2>
              <p className="text-sm leading-relaxed text-ink-700">
                If you have any questions about these terms, please get in touch using the contact form or details provided on the homepage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
