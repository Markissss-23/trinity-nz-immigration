import { useState } from "react";
import { socialReviewHighlights, testimonials, testimonialsBlock } from "../content/site";
import { SectionShell } from "./SectionShell";
import { FacebookBrandIcon, GoogleBrandIcon } from "./SocialBrandIcons";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [googleReviewIndex, setGoogleReviewIndex] = useState(0);
  const [facebookReviewIndex, setFacebookReviewIndex] = useState(0);
  const total = testimonials.length;
  const googleBlock = socialReviewHighlights.find((block) => block.source === "Google Maps");
  const facebookBlock = socialReviewHighlights.find((block) => block.source === "Facebook");
  const googleTotal = googleBlock?.reviews?.length ?? 0;
  const facebookTotal = facebookBlock?.reviews?.length ?? 0;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const prevGoogle = () => setGoogleReviewIndex((v) => (googleTotal ? (v - 1 + googleTotal) % googleTotal : 0));
  const nextGoogle = () => setGoogleReviewIndex((v) => (googleTotal ? (v + 1) % googleTotal : 0));
  const prevFacebook = () => setFacebookReviewIndex((v) => (facebookTotal ? (v - 1 + facebookTotal) % facebookTotal : 0));
  const nextFacebook = () => setFacebookReviewIndex((v) => (facebookTotal ? (v + 1) % facebookTotal : 0));

  const renderReviewCard = (
    block: (typeof socialReviewHighlights)[number] | undefined,
    currentIndex: number,
    prevFn: () => void,
    nextFn: () => void,
  ) => {
    if (!block || !block.reviews?.length) {
      return null;
    }

    const review = block.reviews[currentIndex];

    return (
      <div className="relative rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-fern-700">{block.source}</p>
        <p className="mt-2 font-display text-lg font-semibold text-ink-950">{block.badge}</p>
        {block.rating ? (
          <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink-900">
            <span className="inline-flex gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg key={idx} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </span>
            <span>
              {block.rating} · {block.reviewCount} reviews
            </span>
          </div>
        ) : null}
        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{block.summary}</p>
        <div className="mt-6 rounded-2xl bg-ink-50 p-6 text-sm leading-relaxed text-ink-700">
          <p>{review.text}</p>
          <p className="mt-4 text-xs font-semibold text-ink-500">— {review.author}</p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prevFn}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
              aria-label={`Previous ${block.source} review`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextFn}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
              aria-label={`Next ${block.source} review`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex gap-2">
            {block.reviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-fern-600" : "w-2.5 bg-ink-300 hover:bg-ink-400"
                }`}
                aria-label={`${block.source} review ${idx + 1} of ${block.reviews.length}`}
                onClick={() => (block.source === "Google Maps" ? setGoogleReviewIndex(idx) : setFacebookReviewIndex(idx))}
              />
            ))}
          </div>
        </div>
        <a
          href={block.href}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-fern-800 underline decoration-fern-600/40 underline-offset-4 hover:decoration-fern-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {block.source === "Google Maps" ? (
            <GoogleBrandIcon className="h-5 w-5 shrink-0" aria-hidden />
          ) : (
            <FacebookBrandIcon className="h-5 w-5 shrink-0 text-[#1877F2]" aria-hidden />
          )}
          {block.cta}
        </a>
      </div>
    );
  };

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
            {testimonials[i].text}
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-ink-900">
            — {testimonials[i].author}
          </figcaption>
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
        {renderReviewCard(googleBlock, googleReviewIndex, prevGoogle, nextGoogle)}
        {renderReviewCard(facebookBlock, facebookReviewIndex, prevFacebook, nextFacebook)}
      </div>
    </SectionShell>
  );
}
