import { siteMeta, team, teamBlock } from "../content/site";
import { SectionShell } from "./SectionShell";

export function TeamSection() {
  return (
    <SectionShell id="team" eyebrow={teamBlock.eyebrow} title={teamBlock.title}>
      <p className="max-w-3xl text-lg text-ink-700">{teamBlock.intro}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 border-y border-ink-200 py-8">
        <a
          href={siteMeta.iaaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block shrink-0 transition hover:opacity-90"
        >
          <img
            src={siteMeta.assets.iaaLogo}
            alt="Immigration Advisers Authority"
            width={200}
            height={80}
            className="h-14 w-auto max-w-[200px] object-contain sm:h-16"
            loading="lazy"
            decoding="async"
          />
        </a>
        <img
          src={siteMeta.assets.nzamiLogo}
          alt="NZAMI"
          width={200}
          height={80}
          className="h-14 w-auto max-w-[200px] object-contain sm:h-16"
          loading="lazy"
          decoding="async"
        />
      </div>
      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {team.map((m) => (
          <li
            key={m.name}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card"
          >
            <div className="flex w-full items-center justify-center bg-ink-100 px-4 py-6 sm:px-6 sm:py-8">
              <img
                src={m.photo}
                alt={`Portrait of ${m.name}`}
                className="h-auto max-h-44 w-full max-w-[220px] rounded-3xl object-contain object-center shadow-sm ring-1 ring-ink-200/80 sm:max-h-52 sm:max-w-[260px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-ink-950">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-fern-700">{m.license}</p>
              <p className="mt-1 text-sm text-ink-600">{m.credentials}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">{m.bio}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-14 rounded-2xl bg-ink-900 px-6 py-10 text-center sm:px-10">
        <h3 className="font-display text-2xl font-semibold text-white">Ready to get started?</h3>
        <p className="mt-2 text-ink-200">Tell us about your goals and we will guide your next steps.</p>
        <a
          href="/#contact"
          className="mt-6 inline-flex rounded-full bg-fern-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fern-600"
        >
          Inquire now
        </a>
      </div>
    </SectionShell>
  );
}
