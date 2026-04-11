import { FormEvent, useState } from "react";
import { contactBlock, siteMeta } from "../content/site";
import { SectionShell } from "./SectionShell";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => {
      payload[k] = String(v);
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        setStatus("ok");
        form.reset();
      })
      .catch(() => setStatus("err"));
  };

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${siteMeta.address.mapsQuery}`;

  return (
    <SectionShell id="contact" eyebrow={contactBlock.eyebrow} title={contactBlock.title}>
      <p className="max-w-3xl text-lg text-ink-700">{contactBlock.intro}</p>
      <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">Location</h3>
            <address className="mt-2 not-italic text-ink-800">
              {siteMeta.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={mapsHref}
              className="mt-3 inline-flex text-sm font-semibold text-fern-700 hover:text-fern-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">Email</h3>
            <a
              className="mt-2 inline-block text-ink-900 underline decoration-fern-600/40 underline-offset-4 hover:decoration-fern-600"
              href={`mailto:${siteMeta.email}`}
            >
              {siteMeta.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">Phone</h3>
            <ul className="mt-2 space-y-2">
              {siteMeta.phones.map((p) => (
                <li key={p.href}>
                  <a className="font-medium text-ink-900 hover:text-fern-700" href={p.href}>
                    {p.display}
                  </a>
                  <span className="text-ink-600"> — {p.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="c-name" className="block text-sm font-medium text-ink-800">
                  Name
                </label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-ink-900 outline-none ring-fern-600/30 transition focus:border-fern-600 focus:ring-2"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="c-email" className="block text-sm font-medium text-ink-800">
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-ink-900 outline-none ring-fern-600/30 transition focus:border-fern-600 focus:ring-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-msg" className="block text-sm font-medium text-ink-800">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-y rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-ink-900 outline-none ring-fern-600/30 transition focus:border-fern-600 focus:ring-2"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex rounded-full bg-fern-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fern-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
              {status === "ok" ? (
                <p className="text-sm font-medium text-fern-700" role="status">
                  Thank you — we will be in touch shortly.
                </p>
              ) : null}
              {status === "err" ? (
                <p className="text-sm font-medium text-red-700" role="alert">
                  Something went wrong. Please email us directly.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
