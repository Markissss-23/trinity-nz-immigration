import { Fragment } from "react";

/** Matches Immigration New Zealand site URLs for inline linking (stops at space or common separators). */
const INZ_URL = /(https:\/\/www\.immigration\.govt\.nz[^\s)·•,;]*)/gi;

function trimTrailingPunctuation(href: string): string {
  return href.replace(/[.,;)\]'"»]+$/u, "");
}

export function InzLinkifiedText({ text }: { text: string }) {
  const parts = text.split(INZ_URL);
  return (
    <>
      {parts.map((part, i) => {
        if (!part.startsWith("https://www.immigration.govt.nz")) {
          return <Fragment key={i}>{part}</Fragment>;
        }
        const href = trimTrailingPunctuation(part);
        return (
          <a
            key={i}
            href={href}
            className="font-medium text-fern-800 underline decoration-fern-600/35 underline-offset-2 hover:decoration-fern-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {href}
          </a>
        );
      })}
    </>
  );
}
