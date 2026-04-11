import { team, teamBlock } from "../content/site";
import { SectionShell } from "./SectionShell";

export function TeamSection() {
  return (
    <SectionShell id="team" eyebrow={teamBlock.eyebrow} title={teamBlock.title}>
      <p className="max-w-3xl text-lg text-ink-700">{teamBlock.intro}</p>
      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {team.map((m) => (
          <li
            key={m.name}
            className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-ink-950">{m.name}</h3>
            <p className="mt-1 text-sm font-medium text-fern-700">{m.license}</p>
            <p className="mt-1 text-sm text-ink-600">{m.credentials}</p>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">{m.bio}</p>
          </li>
        ))}
      </ul>
      <div className="mt-14 rounded-2xl bg-ink-900 px-6 py-10 text-center sm:px-10">
        <h3 className="font-display text-2xl font-semibold text-white">Ready to get started?</h3>
        <p className="mt-2 text-ink-200">Tell us about your goals and we will guide your next steps.</p>
        <a
          href="#contact"
          className="mt-6 inline-flex rounded-full bg-fern-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fern-600"
        >
          Inquire now
        </a>
      </div>
    </SectionShell>
  );
}
