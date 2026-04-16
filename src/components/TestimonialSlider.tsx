import { useState } from "react";
import { socialReviewHighlights, testimonials, testimonialsBlock } from "../content/site";
import { SectionShell } from "./SectionShell";
import { FacebookBrandIcon, GoogleBrandIcon } from "./SocialBrandIcons";

// Unified card layout used by all three testimonial sections
function ReviewCard({
  source,
  badge,
  rating,
  reviewCount,
  summary,
  reviews,
  href,
  cta,
}: {
  source: string;
  badge: string;
  rating?: string;
  reviewCount?: number;
  summary: string;
  reviews: readonly { text: string; author: string }[];
  href: string;
  cta: string;
}) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const prev = () => setIndex((v) => (v - 1 + total) % total);
  const next = () => setIndex((v) => (v + 1) % total);
  const review = reviews[index];

  return (
    <div className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8">
      {/* Source label + badge */}
      <p className="text-xs font-semibold uppercase tracking-wide text-fern-700">{source}</p>
      <p className="mt-2 font-display text-lg font-semibold text-ink-950">{badge}</p>

      {/* Star rating */}
      {rating ? (
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink-900">
          <span className="inline-flex gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg key={idx} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </span>
          <span>{rating} · {reviewCount} reviews</span>
        </div>
      ) : null}

      {/* Summary */}
      <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{summary}</p>

      {/* Review quote */}
      <div className="mt-6 flex-1 rounded-2xl bg-ink-50 p-6 text-sm leading-relaxed text-ink-700">
        <p>{review.text}</p>
        <p className="mt-4 text-xs font-semibold text-ink-500">— {review.author}</p>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
            aria-label={`Previous ${source} review`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 hover:bg-ink-50"
            aria-label={`Next ${source} review`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-2.5 rounded-full transition-all ${
                idx === index ? "w-8 bg-fern-600" : "w-2.5 bg-ink-300 hover:bg-ink-400"
              }`}
              aria-label={`${source} review ${idx + 1} of ${total}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* External link */}
      <a
        href={href}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-fern-800 underline decoration-fern-600/40 underline-offset-4 hover:decoration-fern-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {source === "Google Maps" ? (
          <GoogleBrandIcon className="h-5 w-5 shrink-0" aria-hidden />
        ) : source === "Facebook" ? (
          <FacebookBrandIcon className="h-5 w-5 shrink-0 text-[#1877F2]" aria-hidden />
        ) : null}
        {cta}
      </a>
    </div>
  );
}

export function TestimonialSlider() {
  // Build a synthetic "Trinity Clients" block from the testimonials array in site.ts
  const trinityBlock = {
    source: "Trinity Clients",
    badge: "Client testimonials",
    summary:
      "First-hand accounts from people we have supported through their New Zealand visa journey.",
    reviews: testimonials.map((t) => ({ text: t.text, author: t.author })),
    href: "/#contact",
    cta: "Get in touch",
  };

  const googleBlock = socialReviewHighlights.find((b) => b.source === "Google Maps");
  const facebookBlock = socialReviewHighlights.find((b) => b.source === "Facebook");

  return (
    <SectionShell
      id="testimonials"
      eyebrow={testimonialsBlock.eyebrow}
      title={testimonialsBlock.title}
      subtitle={testimonialsBlock.subtitle}
      className="bg-white"
    >
      {/*
        1 column on mobile/tablet, 3 columns on large screens.
        Each card uses flex-col + flex-1 on the quote so cards stretch to equal height in a row.
      */}
      <div className="grid gap-6 lg:grid-cols-1">
        <ReviewCard
          source={trinityBlock.source}
          badge={trinityBlock.badge}
          summary={trinityBlock.summary}
          reviews={trinityBlock.reviews}
          href={trinityBlock.href}
          cta={trinityBlock.cta}
        />
        {googleBlock && (
          <ReviewCard
            source={googleBlock.source}
            badge={googleBlock.badge}
            rating={googleBlock.rating}
            reviewCount={googleBlock.reviewCount}
            summary={googleBlock.summary}
            reviews={googleBlock.reviews}
            href={googleBlock.href}
            cta={googleBlock.cta}
          />
        )}
        {facebookBlock && (
          <ReviewCard
            source={facebookBlock.source}
            badge={facebookBlock.badge}
            rating={facebookBlock.rating}
            reviewCount={facebookBlock.reviewCount}
            summary={facebookBlock.summary}
            reviews={facebookBlock.reviews}
            href={facebookBlock.href}
            cta={facebookBlock.cta}
          />
        )}
      </div>
    </SectionShell>
  );
}