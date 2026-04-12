import { useState } from "react";
import { socialReviewHighlights, testimonials, testimonialsBlock } from "../content/site";
import { SectionShell } from "./SectionShell";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  return (
    <SectionShell
      id="testimonials"
      eyebrow={testimonialsBlock.eyebrow}
      title={testimonialsBlock.title}
      subtitle={testimonialsBlock.subtitle}
      className="bg-white"
    >
      <div className="relative rounded-2xl border border-ink-200 bg-ink-50/50 p-6 shadow-card sm:p-10 lg:p-12">
        <figure>
          <blockquote className="border-l-4 border-fern-600 pl-6 text-lg leading-relaxed text-ink-800 sm:text-xl">
            {testimonials[i]}
          </blockquote>
        </figure>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Testimonial ${idx + 1} of ${total}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-fern-600" : "w-2.5 bg-ink-300 hover:bg-ink-400"
                }`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {socialReviewHighlights.map((block) => (
          <div
            key={block.source}
            className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-fern-700">{block.source}</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink-950">{block.badge}</p>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">{block.summary}</p>
            {"attribution" in block && block.attribution ? (
              <p className="mt-4 text-sm font-medium text-ink-500">{block.attribution}</p>
            ) : null}
            <a
              href={block.href}
              className="mt-6 inline-flex w-fit text-sm font-semibold text-fern-800 underline decoration-fern-600/40 underline-offset-4 hover:decoration-fern-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {block.cta}
            </a>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
