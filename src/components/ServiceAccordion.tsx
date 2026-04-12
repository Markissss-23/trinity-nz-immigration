import { useId, useState } from "react";
import type { ServiceItem } from "../content/site";
import { InzLinkifiedText } from "./InzLinkifiedText";

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition ${
        open ? "rotate-180 bg-ink-50" : ""
      }`}
      aria-hidden
    >
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function ItemCard({ item, depth }: { item: ServiceItem; depth: number }) {
  const hasBody = item.paragraphs.length > 0;
  const hasChildren = Boolean(item.children?.length);
  if (!hasBody && !hasChildren) return null;

  const [open, setOpen] = useState(depth === 0);
  const panelId = useId();
  const img = item.image;
  const isTopLevel = depth === 0;
  const isNestedWithImage = depth > 0 && img;

  const panelContent = (
    <>
      {hasBody ? (
        <div className="space-y-3 pt-4 text-ink-700">
          {item.paragraphs.map((p, idx) => (
            <p key={idx} className="text-[15px] leading-relaxed">
              <InzLinkifiedText text={p} />
            </p>
          ))}
        </div>
      ) : null}
      {hasChildren ? (
        <div
          className={`space-y-4 ${hasBody ? "mt-6 border-t border-dashed border-ink-200 pt-6" : "pt-4"}`}
        >
          {item.children!.map((child) => (
            <ItemCard key={child.title} item={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </>
  );

  const titleButton = (
    <button
      type="button"
      className={`flex w-full items-center justify-between gap-4 text-left ${
        isNestedWithImage ? "px-5 py-4 sm:px-6 sm:py-5" : "px-5 py-4 sm:px-6 sm:py-5"
      } ${isTopLevel && img ? "border-t border-ink-100 bg-white" : ""}`}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="font-display text-lg font-semibold text-ink-950">{item.title}</span>
      <Chevron open={open} />
    </button>
  );

  /* Top-level category: wide banner + title bar */
  if (isTopLevel && img) {
    return (
      <div className="group overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-card transition hover:border-ink-200 hover:shadow-lg">
        <div className="relative aspect-[20/11] w-full overflow-hidden bg-ink-100 sm:aspect-[2.35/1] sm:max-h-[min(280px,40vw)]">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, min(1152px, 100vw)"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/15 to-transparent"
            aria-hidden
          />
        </div>
        {titleButton}
        {open ? (
          <div id={panelId} className="border-t border-ink-100 px-5 pb-5 sm:px-6 sm:pb-6">
            {panelContent}
          </div>
        ) : null}
      </div>
    );
  }

  /* Nested visa type: thumbnail + content */
  if (isNestedWithImage) {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-card ${
          depth > 1 ? "sm:ml-2" : "sm:ml-3"
        }`}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-44 w-full shrink-0 overflow-hidden bg-ink-100 sm:h-auto sm:w-44 sm:max-w-[40%]">
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 176px"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            {titleButton}
            {open ? (
              <div id={panelId} className="border-t border-ink-100 px-5 pb-5 sm:px-6 sm:pb-6">
                {panelContent}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  /* Default accordion (no image, or top-level without image) */
  return (
    <div
      className={`rounded-2xl border border-ink-200/80 bg-white shadow-card ${depth > 0 ? "sm:ml-3" : ""}`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-display text-lg font-semibold text-ink-950">{item.title}</span>
        <Chevron open={open} />
      </button>
      {open ? (
        <div id={panelId} className="border-t border-ink-100 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
          {panelContent}
        </div>
      ) : null}
    </div>
  );
}

export function ServiceAccordion({ categories }: { categories: ServiceItem[] }) {
  return (
    <div className="space-y-6">
      {categories.map((cat) => (
        <ItemCard key={cat.title} item={cat} depth={0} />
      ))}
    </div>
  );
}
