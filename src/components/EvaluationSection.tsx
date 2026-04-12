import { Link } from "react-router-dom";
import { evaluationBlock } from "../content/site";
import { SectionShell } from "./SectionShell";

export function EvaluationSection() {
  return (
    <SectionShell
      id="evaluation"
      eyebrow={evaluationBlock.eyebrow}
      title={evaluationBlock.title}
      className="bg-ink-50"
    >
      <div className="max-w-4xl space-y-4 text-[15px] leading-relaxed text-ink-700">
        {evaluationBlock.intro.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
      <div className="mt-8">
        <Link
          to="/evaluation"
          className="inline-flex rounded-full bg-fern-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fern-700"
        >
          {evaluationBlock.ctaLabel}
        </Link>
      </div>
    </SectionShell>
  );
}
