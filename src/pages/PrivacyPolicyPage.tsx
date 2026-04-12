import { useEffect } from "react";
import { Link } from "react-router-dom";
import { siteMeta } from "../content/site";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = `Privacy Policy — ${siteMeta.shortName}`;
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

          <p className="text-sm font-semibold uppercase tracking-wider text-fern-600">Privacy policy</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Privacy policy for Trinity New Zealand Immigration Services
          </h1>

          <div className="mt-8 space-y-8 text-ink-700">
            <section className="space-y-4">
              <p className="text-lg leading-relaxed">
                Trinity New Zealand Immigration Services is committed to protecting your privacy and handling personal information in accordance with New Zealand privacy law, including the Privacy Act 2020.
              </p>
              <p className="text-base leading-relaxed">
                This policy applies to the personal information collected through our website, including information submitted via the evaluation form. If you have questions about our privacy practices, please contact us using the details on this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">What information we collect</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-700">
                <li>Contact details such as name, email address, phone number, and country of residence.</li>
                <li>Immigration information provided through the evaluation form, including visa history and personal circumstances.</li>
                <li>Any additional information you choose to provide to help us assess your immigration options.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">How we use personal information</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  We use the information you provide to assess your eligibility for New Zealand immigration pathways, respond to your enquiry, and provide immigration advice and services.
                </p>
                <p>
                  We do not use the personal information collected through the evaluation form for marketing purposes unless you explicitly consent to that use.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">How we protect your information</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  We take reasonable steps to protect your personal information from unauthorised access, use, disclosure, alteration, or loss. Our website is hosted securely, and sensitive data is handled with care.
                </p>
                <p>
                  Where we engage third parties to process information on our behalf, we require them to follow appropriate privacy and security practices.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Retention and access</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as otherwise required by law.
                </p>
                <p>
                  You may request access to the personal information we hold about you, ask us to correct it, or ask for it to be deleted where appropriate. Contact us if you want to exercise these rights.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Third-party links and data sharing</h2>
              <div className="space-y-2 text-sm leading-relaxed text-ink-700">
                <p>
                  Our website may contain links to external websites, including official Immigration New Zealand resources. We are not responsible for the privacy practices of external sites.
                </p>
                <p>
                  We do not disclose your personal information to unrelated third parties without your consent, except as required by law or to provide the services you request.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-ink-950">Changes to this policy</h2>
              <p className="text-sm leading-relaxed text-ink-700">
                We may update this privacy policy from time to time. The current version is available on this page.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-ink-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-ink-950">Contact us</h2>
              <p className="text-sm leading-relaxed text-ink-700">
                If you have any concerns or requests about your personal information, please contact Trinity New Zealand Immigration Services through the contact form or by using the details on the homepage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
