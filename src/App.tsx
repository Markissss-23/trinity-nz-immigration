import {
  about,
  serviceCategories,
  servicesBlock,
  whyNz,
  settle,
} from "./content/site";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SectionShell } from "./components/SectionShell";
import { ServiceAccordion } from "./components/ServiceAccordion";
import { TrustStats } from "./components/TrustStats";
import { TeamSection } from "./components/TeamSection";
import { TestimonialSlider } from "./components/TestimonialSlider";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main id="main-content">
        <Hero />
        <SectionShell id="about" eyebrow={about.eyebrow} title={about.title}>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-700">
            {about.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="why-nz"
          eyebrow={whyNz.eyebrow}
          title={whyNz.title}
          className="bg-white"
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4 text-[15px] leading-relaxed text-ink-700">
              {whyNz.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <aside className="rounded-2xl border border-ink-200 bg-ink-50 p-6 shadow-card h-fit">
              <h3 className="font-display text-lg font-semibold text-ink-950">Further reading</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {whyNz.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-medium text-fern-700 underline decoration-fern-600/30 underline-offset-4 hover:decoration-fern-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </SectionShell>

        <SectionShell id="settle" eyebrow={settle.eyebrow} title={settle.title}>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-700">
            {settle.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="services"
          eyebrow={servicesBlock.eyebrow}
          title={servicesBlock.title}
          className="bg-white"
        >
          <div className="max-w-3xl space-y-4 text-ink-700">
            {servicesBlock.intro.map((p, idx) => (
              <p key={idx} className="text-lg">
                {p}
              </p>
            ))}
            <div className="rounded-2xl border border-ink-200 bg-ink-50/80 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-ink-950">
                {servicesBlock.guideTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                {servicesBlock.guideBody}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-5 sm:p-6">
              <p className="text-sm font-medium text-ink-900">{servicesBlock.officialNotice}</p>
              <a
                href={servicesBlock.officialLink.href}
                className="mt-3 inline-flex text-sm font-semibold text-fern-800 underline decoration-fern-600/40 underline-offset-4 hover:decoration-fern-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {servicesBlock.officialLink.label}
              </a>
            </div>
          </div>
          <div className="mt-12 max-w-4xl">
            <ServiceAccordion categories={serviceCategories} />
          </div>
        </SectionShell>

        <TrustStats />
        <TeamSection />
        <TestimonialSlider />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
