import { useId, useState } from "react";
import type { ServiceItem } from "../content/site";
import { InzLinkifiedText } from "./InzLinkifiedText";

function ItemCard({ item, depth }: { item: ServiceItem; depth: number }) {
  const hasBody = item.paragraphs.length > 0;
  const hasChildren = Boolean(item.children?.length);
  if (!hasBody && !hasChildren) return null;

  const [open, setOpen] = useState(depth === 0);
  const panelId = useId();

  return (
    <div
      className={`rounded-2xl border border-ink-200/80 bg-white shadow-card ${
        depth > 0 ? "sm:ml-3" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-display text-lg font-semibold text-ink-950">{item.title}</span>
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
      </button>
      {open ? (
        <div id={panelId} className="border-t border-ink-100 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
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
        </div>
      ) : null}
    </div>
  );
}

export function ServiceAccordion({ categories }: { categories: ServiceItem[] }) {
  return (
    <div className="space-y-4">
      {categories.map((cat) => (
        <ItemCard key={cat.title} item={cat} depth={0} />
      ))}
    </div>
  );
}
