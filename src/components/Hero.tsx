import { hero, siteMeta } from "../content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink-200/80 bg-ink-900"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="text-sm font-medium uppercase tracking-wider text-fern-400">
          {siteMeta.shortName}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-100 sm:text-xl">{hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-fern-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fern-900/30 transition hover:bg-fern-600"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <p className="mt-8 text-xs text-ink-300">{hero.image.credit}</p>
      </div>
    </section>
  );
}
