import { trustStats } from "../content/site";

export function TrustStats() {
  return (
    <div className="border-y border-ink-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-px bg-ink-200 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        {trustStats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col justify-center bg-white px-6 py-8 text-center sm:text-left"
          >
            <span className="font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 text-sm font-medium text-ink-600">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
