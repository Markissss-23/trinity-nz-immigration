import { FormEvent, useCallback, useMemo, useState, type ReactNode } from "react";
import { evaluationBlock } from "../content/site";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-ink-900 outline-none ring-fern-600/30 transition focus:border-fern-600 focus:ring-2";
const labelClass = "block text-sm font-medium text-ink-800";

type YesNo = "" | "yes" | "no";

const MAX_CHILDREN = 6;
const MAX_QUAL = 5;
const MAX_PAST = 3;
const MAX_SPOUSE_CHILD_AGES = 4;

function FormSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink-950">{title}</h3>
      <div className="mt-6 space-y-5">{children}</div>
    </div>
  );
}

function YesNoFieldset({
  legend,
  name,
  value,
  onChange,
  idPrefix,
}: {
  legend: string;
  name: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
  idPrefix: string;
}) {
  return (
    <fieldset>
      <legend className={`${labelClass} mb-3`}>{legend}</legend>
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-ink-800">
          <input
            id={`${idPrefix}-yes`}
            type="radio"
            name={name}
            value="yes"
            checked={value === "yes"}
            onChange={() => onChange("yes")}
            className="text-fern-600 focus:ring-fern-600"
          />
          Yes
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-800">
          <input
            id={`${idPrefix}-no`}
            type="radio"
            name={name}
            value="no"
            checked={value === "no"}
            onChange={() => onChange("no")}
            className="text-fern-600 focus:ring-fern-600"
          />
          No
        </label>
      </div>
    </fieldset>
  );
}

function parseBoundedInt(raw: string, max: number): number {
  const n = parseInt(raw.replace(/\D/g, ""), 10);
  if (Number.isNaN(n) || n < 0) return 0;
  return Math.min(max, n);
}

function initialFormUiState() {
  return {
    inNz: "" as YesNo,
    beenToNz: "" as YesNo,
    numChildrenInput: "",
    qualCount: 1,
    pastJobCount: 1,
    ieltsTaken: "" as YesNo,
    hasSpouse: "" as YesNo,
    spouseOwnChildren: "" as YesNo,
    spouseChildrenCountInput: "",
    spouseQualCount: 1,
    spousePastCount: 1,
    jobLicense: "" as YesNo,
    spouseLicense: "" as YesNo,
    nzFamily: "" as YesNo,
    healthConditions: "" as YesNo,
    healthMeds: "" as YesNo,
    charOffences: "" as YesNo,
    charVisa: "" as YesNo,
    purposeOtherChecked: false,
    referralSource: "" as string,
  };
}

type FormUiState = ReturnType<typeof initialFormUiState>;

export function EvaluationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err" | "dev">("idle");
  const [ui, setUi] = useState(initialFormUiState);

  const setField = useCallback(<K extends keyof FormUiState>(key: K, value: FormUiState[K]) => {
    setUi((s) => ({ ...s, [key]: value }));
  }, []);

  const childCount = useMemo(
    () => parseBoundedInt(ui.numChildrenInput, MAX_CHILDREN),
    [ui.numChildrenInput],
  );

  const spouseChildAgeSlots = useMemo(() => {
    const n = parseBoundedInt(ui.spouseChildrenCountInput, MAX_SPOUSE_CHILD_AGES);
    return ui.spouseOwnChildren === "yes" ? n : 0;
  }, [ui.spouseOwnChildren, ui.spouseChildrenCountInput]);

  const resetAll = useCallback(() => {
    setUi(initialFormUiState());
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      params.append(key, typeof value === "string" ? value : String(value));
    });
    const action = (form.getAttribute("action") || "/").trim() || "/";
    fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        setStatus("ok");
        form.reset();
        resetAll();
      })
      .catch(() => {
        setStatus(import.meta.env.DEV ? "dev" : "err");
      });
  };

  return (
    <form
      name="evaluation"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field-eval"
      className="max-w-4xl space-y-8"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="evaluation" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field-eval" />
        </label>
      </p>

      <FormSection title="Personal details">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="ev-full-name" className={labelClass}>
              Full name
            </label>
            <input id="ev-full-name" name="full_name" type="text" autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ev-dob" className={labelClass}>
              Date of birth
            </label>
            <input id="ev-dob" name="dob" type="text" autoComplete="bday" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ev-citizenship" className={labelClass}>
              Country of citizenship
            </label>
            <input id="ev-citizenship" name="citizenship" type="text" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ev-address" className={labelClass}>
              Current home address
            </label>
            <textarea
              id="ev-address"
              name="home_address"
              rows={3}
              className={`${inputClass} resize-y`}
            />
          </div>
          <div>
            <label htmlFor="ev-mobile" className={labelClass}>
              Mobile
            </label>
            <input id="ev-mobile" name="mobile" type="tel" autoComplete="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ev-phone" className={labelClass}>
              Phone (other)
            </label>
            <input id="ev-phone" name="phone" type="tel" autoComplete="tel-national" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ev-email" className={labelClass}>
              Email address
            </label>
            <input id="ev-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
        </div>
      </FormSection>

      <FormSection title="New Zealand">
        <YesNoFieldset
          legend="Are you currently in New Zealand?"
          name="in_nz"
          idPrefix="ev-innz"
          value={ui.inNz}
          onChange={(v) => setField("inNz", v)}
        />

        {ui.inNz === "yes" ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ev-nz-visa-type" className={labelClass}>
                Type of visa you hold
              </label>
              <input id="ev-nz-visa-type" name="nz_visa_type" type="text" className={inputClass} />
            </div>
            <div>
              <label htmlFor="ev-nz-visa-expiry" className={labelClass}>
                Visa expiry
              </label>
              <input id="ev-nz-visa-expiry" name="nz_visa_expiry" type="text" className={inputClass} />
            </div>
          </div>
        ) : null}

        {ui.inNz === "no" ? (
          <>
            <YesNoFieldset
              legend="Have you ever been to New Zealand before?"
              name="been_to_nz"
              idPrefix="ev-been"
              value={ui.beenToNz}
              onChange={(v) => setField("beenToNz", v)}
            />
            {ui.beenToNz === "yes" ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ev-prev-duration" className={labelClass}>
                    How long did you stay?
                  </label>
                  <input id="ev-prev-duration" name="prev_stay_duration" type="text" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ev-prev-visa" className={labelClass}>
                    What type of visa did you have then?
                  </label>
                  <input id="ev-prev-visa" name="prev_visa_type" type="text" className={inputClass} />
                </div>
              </div>
            ) : null}
          </>
        ) : null}
      </FormSection>

      <FormSection title="Family details">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ev-num-children" className={labelClass}>
              Number of children
            </label>
            <input
              id="ev-num-children"
              name="num_children"
              type="number"
              min={0}
              max={MAX_CHILDREN}
              inputMode="numeric"
              className={inputClass}
              value={ui.numChildrenInput}
              onChange={(e) => setField("numChildrenInput", e.target.value)}
            />
          </div>
        </div>

        {childCount > 0 ? (
          <>
            <p className="text-sm font-medium text-ink-700">Ages of children</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: childCount }, (_, i) => i + 1).map((n) => (
                <div key={n}>
                  <label htmlFor={`ev-child-age-${n}`} className={labelClass}>
                    Child {n}
                  </label>
                  <input id={`ev-child-age-${n}`} name={`child_age_${n}`} type="text" className={inputClass} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-ink-700">Citizenship of children</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: childCount }, (_, i) => i + 1).map((n) => (
                <div key={n}>
                  <label htmlFor={`ev-child-cit-${n}`} className={labelClass}>
                    Child {n}
                  </label>
                  <input id={`ev-child-cit-${n}`} name={`child_cit_${n}`} type="text" className={inputClass} />
                </div>
              ))}
            </div>
          </>
        ) : null}

        <YesNoFieldset
          legend="Do you or your spouse/partner have immediate family (children, parent, brother, sister) who are citizens or residents of New Zealand?"
          name="nz_family"
          idPrefix="ev-nzfam"
          value={ui.nzFamily}
          onChange={(v) => setField("nzFamily", v)}
        />
        {ui.nzFamily === "yes" ? (
          <div>
            <label htmlFor="ev-nz-family-years" className={labelClass}>
              How many years have they lived in New Zealand since becoming a resident?
            </label>
            <input id="ev-nz-family-years" name="nz_family_years" type="text" className={inputClass} />
          </div>
        ) : null}
      </FormSection>

      <FormSection title="Education">
        <p className="text-sm text-ink-600">
          List your formal qualifications. Choose how many rows you need (up to {MAX_QUAL}).
        </p>
        <div>
          <label htmlFor="ev-qual-count" className={labelClass}>
            Number of qualifications to enter
          </label>
          <input
            id="ev-qual-count"
            type="number"
            min={1}
            max={MAX_QUAL}
            inputMode="numeric"
            className={`${inputClass} max-w-xs`}
            value={ui.qualCount}
            onChange={(e) =>
              setField("qualCount", Math.min(MAX_QUAL, Math.max(1, parseInt(e.target.value, 10) || 1)))
            }
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-ink-600">
                <th className="py-2 pr-3 font-medium">Course / degree / certificate completed</th>
                <th className="py-2 pr-3 font-medium">Name of school / country</th>
                <th className="py-2 pr-3 font-medium">Date started (month/year)</th>
                <th className="py-2 font-medium">Date completed (month/year)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: ui.qualCount }, (_, i) => i + 1).map((row) => (
                <tr key={row} className="border-b border-ink-100">
                  <td className="py-2 pr-2 align-top">
                    <label htmlFor={`ev-edu-${row}-course`} className="sr-only">
                      Qualification {row} — course
                    </label>
                    <input id={`ev-edu-${row}-course`} name={`edu_${row}_course`} type="text" className={inputClass} />
                  </td>
                  <td className="py-2 pr-2 align-top">
                    <label htmlFor={`ev-edu-${row}-school`} className="sr-only">
                      Qualification {row} — school
                    </label>
                    <input id={`ev-edu-${row}-school`} name={`edu_${row}_school`} type="text" className={inputClass} />
                  </td>
                  <td className="py-2 pr-2 align-top">
                    <label htmlFor={`ev-edu-${row}-start`} className="sr-only">
                      Qualification {row} — started
                    </label>
                    <input id={`ev-edu-${row}-start`} name={`edu_${row}_start`} type="text" className={inputClass} />
                  </td>
                  <td className="py-2 align-top">
                    <label htmlFor={`ev-edu-${row}-end`} className="sr-only">
                      Qualification {row} — completed
                    </label>
                    <input id={`ev-edu-${row}-end`} name={`edu_${row}_end`} type="text" className={inputClass} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FormSection>

      <FormSection title="Present employment">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ev-job-title" className={labelClass}>
              Occupation / position
            </label>
            <input id="ev-job-title" name="job_title" type="text" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ev-employer" className={labelClass}>
              Name of company / country
            </label>
            <input id="ev-employer" name="employer_location" type="text" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ev-job-started" className={labelClass}>
              Date started
            </label>
            <input id="ev-job-started" name="job_started" type="text" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ev-job-tasks" className={labelClass}>
              Your main tasks
            </label>
            <textarea id="ev-job-tasks" name="job_tasks" rows={4} className={`${inputClass} resize-y`} />
          </div>
          <div className="sm:col-span-2">
            <YesNoFieldset
              legend="Do you hold an occupational licence or registration?"
              name="job_license"
              idPrefix="ev-joblic"
              value={ui.jobLicense}
              onChange={(v) => setField("jobLicense", v)}
            />
          </div>
          {ui.jobLicense === "yes" ? (
            <div className="sm:col-span-2">
              <label htmlFor="ev-job-license-detail" className={labelClass}>
                What occupation?
              </label>
              <input id="ev-job-license-detail" name="job_license_detail" type="text" className={inputClass} />
            </div>
          ) : null}
        </div>
      </FormSection>

      <FormSection title="Past employment">
        <div>
          <label htmlFor="ev-past-count" className={labelClass}>
            Number of past roles to enter (up to {MAX_PAST})
          </label>
          <input
            id="ev-past-count"
            type="number"
            min={1}
            max={MAX_PAST}
            inputMode="numeric"
            className={`${inputClass} max-w-xs`}
            value={ui.pastJobCount}
            onChange={(e) =>
              setField("pastJobCount", Math.min(MAX_PAST, Math.max(1, parseInt(e.target.value, 10) || 1)))
            }
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-ink-600">
                <th className="py-2 pr-3 font-medium">Employer / country</th>
                <th className="py-2 pr-3 font-medium">Nature of business</th>
                <th className="py-2 pr-3 font-medium">Your position</th>
                <th className="py-2 pr-3 font-medium">Years of service</th>
                <th className="py-2 font-medium">From / to (month/year)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: ui.pastJobCount }, (_, i) => i + 1).map((row) => (
                <tr key={row} className="border-b border-ink-100">
                  <td className="py-2 pr-2 align-top">
                    <input
                      name={`past_${row}_employer`}
                      type="text"
                      className={inputClass}
                      aria-label={`Past job ${row} employer`}
                    />
                  </td>
                  <td className="py-2 pr-2 align-top">
                    <input
                      name={`past_${row}_business`}
                      type="text"
                      className={inputClass}
                      aria-label={`Past job ${row} business`}
                    />
                  </td>
                  <td className="py-2 pr-2 align-top">
                    <input name={`past_${row}_role`} type="text" className={inputClass} aria-label={`Past job ${row} position`} />
                  </td>
                  <td className="py-2 pr-2 align-top">
                    <input name={`past_${row}_years`} type="text" className={inputClass} aria-label={`Past job ${row} years`} />
                  </td>
                  <td className="py-2 align-top">
                    <input name={`past_${row}_period`} type="text" className={inputClass} aria-label={`Past job ${row} period`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FormSection>

      <FormSection title="Language">
        <YesNoFieldset
          legend="Have you taken IELTS?"
          name="ielts"
          idPrefix="ev-ielts"
          value={ui.ieltsTaken}
          onChange={(v) => setField("ieltsTaken", v)}
        />
        {ui.ieltsTaken === "yes" ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ev-ielts-when" className={labelClass}>
                When did you take it?
              </label>
              <input id="ev-ielts-when" name="ielts_when" type="text" className={inputClass} />
            </div>
            <div>
              <label htmlFor="ev-ielts-score" className={labelClass}>
                Overall band score
              </label>
              <input id="ev-ielts-score" name="ielts_score" type="text" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <fieldset>
                <legend className={`${labelClass} mb-3`}>Academic / General IELTS</legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 text-sm text-ink-800">
                    <input type="radio" name="ielts_module" value="academic" className="text-fern-600 focus:ring-fern-600" />
                    Academic
                  </label>
                  <label className="flex items-center gap-2 text-sm text-ink-800">
                    <input type="radio" name="ielts_module" value="general" className="text-fern-600 focus:ring-fern-600" />
                    General
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        ) : null}
      </FormSection>

      <FormSection title="Spouse / partner / fiancé">
        <YesNoFieldset
          legend="Do you have a spouse, partner, or fiancé to include in this assessment?"
          name="has_spouse"
          idPrefix="ev-has-spouse"
          value={ui.hasSpouse}
          onChange={(v) => setField("hasSpouse", v)}
        />

        {ui.hasSpouse === "yes" ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ev-spouse-name" className={labelClass}>
                  Name
                </label>
                <input id="ev-spouse-name" name="spouse_name" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="ev-spouse-dob" className={labelClass}>
                  Date of birth
                </label>
                <input id="ev-spouse-dob" name="spouse_dob" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="ev-spouse-nat" className={labelClass}>
                  Nationality
                </label>
                <input id="ev-spouse-nat" name="spouse_nationality" type="text" className={inputClass} />
              </div>
            </div>

            <YesNoFieldset
              legend="Does your spouse have any children of their own?"
              name="spouse_has_children"
              idPrefix="ev-spouse-own"
              value={ui.spouseOwnChildren}
              onChange={(v) => setField("spouseOwnChildren", v)}
            />

            {ui.spouseOwnChildren === "yes" ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="ev-spouse-ch-count" className={labelClass}>
                    How many?
                  </label>
                  <input
                    id="ev-spouse-ch-count"
                    name="spouse_children_count"
                    type="number"
                    min={1}
                    max={MAX_SPOUSE_CHILD_AGES}
                    inputMode="numeric"
                    className={inputClass}
                    value={ui.spouseChildrenCountInput}
                    onChange={(e) => setField("spouseChildrenCountInput", e.target.value)}
                  />
                </div>
                {spouseChildAgeSlots > 0 ? (
                  <>
                    <p className="text-sm font-medium text-ink-700">Age of each child</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {Array.from({ length: spouseChildAgeSlots }, (_, i) => i + 1).map((n) => (
                        <div key={n}>
                          <label htmlFor={`ev-spouse-ch-age-${n}`} className={labelClass}>
                            Child {n}
                          </label>
                          <input
                            id={`ev-spouse-ch-age-${n}`}
                            name={`spouse_child_age_${n}`}
                            type="text"
                            className={inputClass}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}

            <p className="pt-2 text-sm font-medium text-ink-800">Formal qualifications</p>
            <div>
              <label htmlFor="ev-spouse-qual-count" className={labelClass}>
                Number of qualifications to enter
              </label>
              <input
                id="ev-spouse-qual-count"
                type="number"
                min={1}
                max={MAX_QUAL}
                inputMode="numeric"
                className={`${inputClass} max-w-xs`}
                value={ui.spouseQualCount}
                onChange={(e) =>
                  setField("spouseQualCount", Math.min(MAX_QUAL, Math.max(1, parseInt(e.target.value, 10) || 1)))
                }
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink-200 text-left text-ink-600">
                    <th className="py-2 pr-3 font-medium">Course / degree / certificate completed</th>
                    <th className="py-2 pr-3 font-medium">Name of school / country</th>
                    <th className="py-2 pr-3 font-medium">Date started (month/year)</th>
                    <th className="py-2 font-medium">Date completed (month/year)</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: ui.spouseQualCount }, (_, i) => i + 1).map((row) => (
                    <tr key={row} className="border-b border-ink-100">
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_edu_${row}_course`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse qualification ${row} course`}
                        />
                      </td>
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_edu_${row}_school`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse qualification ${row} school`}
                        />
                      </td>
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_edu_${row}_start`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse qualification ${row} started`}
                        />
                      </td>
                      <td className="py-2 align-top">
                        <input
                          name={`spouse_edu_${row}_end`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse qualification ${row} completed`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="pt-4 text-sm font-medium text-ink-800">Present employment</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ev-spouse-job" className={labelClass}>
                  Occupation / position
                </label>
                <input id="ev-spouse-job" name="spouse_job_title" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="ev-spouse-emp" className={labelClass}>
                  Name of company / country
                </label>
                <input id="ev-spouse-emp" name="spouse_employer" type="text" className={inputClass} />
              </div>
              <div>
                <label htmlFor="ev-spouse-started" className={labelClass}>
                  Date started
                </label>
                <input id="ev-spouse-started" name="spouse_job_started" type="text" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ev-spouse-tasks" className={labelClass}>
                  Main tasks
                </label>
                <textarea id="ev-spouse-tasks" name="spouse_job_tasks" rows={4} className={`${inputClass} resize-y`} />
              </div>
              <div className="sm:col-span-2">
                <YesNoFieldset
                  legend="Occupational licence or registration?"
                  name="spouse_license"
                  idPrefix="ev-splic"
                  value={ui.spouseLicense}
                  onChange={(v) => setField("spouseLicense", v)}
                />
              </div>
              {ui.spouseLicense === "yes" ? (
                <div className="sm:col-span-2">
                  <label htmlFor="ev-spouse-lic-d" className={labelClass}>
                    What occupation?
                  </label>
                  <input id="ev-spouse-lic-d" name="spouse_license_detail" type="text" className={inputClass} />
                </div>
              ) : null}
            </div>

            <p className="pt-4 text-sm font-medium text-ink-800">Past employment</p>
            <div>
              <label htmlFor="ev-spouse-past-count" className={labelClass}>
                Number of past roles to enter (up to {MAX_PAST})
              </label>
              <input
                id="ev-spouse-past-count"
                type="number"
                min={1}
                max={MAX_PAST}
                inputMode="numeric"
                className={`${inputClass} max-w-xs`}
                value={ui.spousePastCount}
                onChange={(e) =>
                  setField("spousePastCount", Math.min(MAX_PAST, Math.max(1, parseInt(e.target.value, 10) || 1)))
                }
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink-200 text-left text-ink-600">
                    <th className="py-2 pr-3 font-medium">Employer / country</th>
                    <th className="py-2 pr-3 font-medium">Nature of business</th>
                    <th className="py-2 pr-3 font-medium">Your position</th>
                    <th className="py-2 pr-3 font-medium">Years of service</th>
                    <th className="py-2 font-medium">From / to (month/year)</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: ui.spousePastCount }, (_, i) => i + 1).map((row) => (
                    <tr key={row} className="border-b border-ink-100">
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_past_${row}_employer`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse past job ${row} employer`}
                        />
                      </td>
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_past_${row}_business`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse past job ${row} business`}
                        />
                      </td>
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_past_${row}_role`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse past job ${row} position`}
                        />
                      </td>
                      <td className="py-2 pr-2 align-top">
                        <input
                          name={`spouse_past_${row}_years`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse past job ${row} years`}
                        />
                      </td>
                      <td className="py-2 align-top">
                        <input
                          name={`spouse_past_${row}_period`}
                          type="text"
                          className={inputClass}
                          aria-label={`Spouse past job ${row} period`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </FormSection>

      <FormSection title="Health requirements">
        <YesNoFieldset
          legend="Do you, your partner and/or your children have any known medical condition(s)?"
          name="health_conditions"
          idPrefix="ev-health"
          value={ui.healthConditions}
          onChange={(v) => setField("healthConditions", v)}
        />
        {ui.healthConditions === "yes" ? (
          <div>
            <label htmlFor="ev-health-detail" className={labelClass}>
              Please provide details
            </label>
            <textarea id="ev-health-detail" name="health_conditions_detail" rows={3} className={`${inputClass} resize-y`} />
          </div>
        ) : null}

        <YesNoFieldset
          legend="Do you, your partner and/or children have medical conditions that require regular medications?"
          name="health_medication"
          idPrefix="ev-health-med"
          value={ui.healthMeds}
          onChange={(v) => setField("healthMeds", v)}
        />
        {ui.healthMeds === "yes" ? (
          <div>
            <label htmlFor="ev-health-meds-d" className={labelClass}>
              Please provide details
            </label>
            <textarea id="ev-health-meds-d" name="health_medication_detail" rows={3} className={`${inputClass} resize-y`} />
          </div>
        ) : null}
      </FormSection>

      <FormSection title="Character requirements">
        <YesNoFieldset
          legend="Have you ever been investigated for, charged with or convicted of any offence against the law in your home country or any other country?"
          name="char_offences"
          idPrefix="ev-char-law"
          value={ui.charOffences}
          onChange={(v) => setField("charOffences", v)}
        />
        {ui.charOffences === "yes" ? (
          <div>
            <label htmlFor="ev-char-law-d" className={labelClass}>
              Please provide details
            </label>
            <textarea id="ev-char-law-d" name="char_offences_detail" rows={3} className={`${inputClass} resize-y`} />
          </div>
        ) : null}

        <YesNoFieldset
          legend="Have you or any member of your family ever been denied a visa, deported or refused entry by any country?"
          name="char_visa_issues"
          idPrefix="ev-char-visa"
          value={ui.charVisa}
          onChange={(v) => setField("charVisa", v)}
        />
        {ui.charVisa === "yes" ? (
          <div>
            <label htmlFor="ev-char-visa-d" className={labelClass}>
              Please provide details
            </label>
            <textarea id="ev-char-visa-d" name="char_visa_issues_detail" rows={3} className={`${inputClass} resize-y`} />
          </div>
        ) : null}
      </FormSection>

      <FormSection title="Purpose in coming to New Zealand">
        <p className="text-sm text-ink-700">What is your intention in coming to New Zealand? (You do not have to answer if uncertain.)</p>
        <fieldset>
          <legend className="sr-only">Purpose</legend>
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="purpose_study" value="yes" className="rounded text-fern-600 focus:ring-fern-600" />
              Study
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="purpose_visit" value="yes" className="rounded text-fern-600 focus:ring-fern-600" />
              Visit
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="purpose_work" value="yes" className="rounded text-fern-600 focus:ring-fern-600" />
              Work
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input type="checkbox" name="purpose_reside" value="yes" className="rounded text-fern-600 focus:ring-fern-600" />
              Reside
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-800">
              <input
                type="checkbox"
                name="purpose_other_selected"
                value="yes"
                checked={ui.purposeOtherChecked}
                onChange={(e) => setField("purposeOtherChecked", e.target.checked)}
                className="rounded text-fern-600 focus:ring-fern-600"
              />
              Other
            </label>
          </div>
        </fieldset>
        {ui.purposeOtherChecked ? (
          <div>
            <label htmlFor="ev-purpose-other" className={labelClass}>
              Other reasons for coming to New Zealand
            </label>
            <textarea id="ev-purpose-other" name="purpose_other" rows={4} className={`${inputClass} resize-y`} />
          </div>
        ) : null}
      </FormSection>

      <FormSection title="How did you hear about Trinity NZ Immigration Services?">
        <fieldset>
          <legend className={`${labelClass} mb-3`}>Select one</legend>
          <div className="space-y-3">
            {(
              [
                ["referral", "Referral"],
                ["iaa", "IAA"],
                ["facebook", "Facebook"],
                ["instagram", "Instagram"],
                ["other", "Other"],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="flex items-center gap-2 text-sm text-ink-800">
                <input
                  type="radio"
                  name="referral_source"
                  value={value}
                  checked={ui.referralSource === value}
                  onChange={() => setField("referralSource", value)}
                  className="text-fern-600 focus:ring-fern-600"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
        {ui.referralSource === "referral" ? (
          <div>
            <label htmlFor="ev-referee" className={labelClass}>
              Name of referee
            </label>
            <input id="ev-referee" name="referee_name" type="text" className={inputClass} />
          </div>
        ) : null}
        {ui.referralSource === "other" ? (
          <div>
            <label htmlFor="ev-referral-other" className={labelClass}>
              Please specify
            </label>
            <input id="ev-referral-other" name="referral_other" type="text" className={inputClass} />
          </div>
        ) : null}
      </FormSection>

      <p className="text-[15px] text-ink-700">{evaluationBlock.closingNote}</p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex rounded-full bg-fern-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fern-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit evaluation"}
        </button>
        {status === "ok" ? (
          <p className="text-sm font-medium text-fern-700" role="status">
            Thank you — we have received your evaluation form.
          </p>
        ) : null}
        {status === "dev" ? (
          <p className="text-sm text-ink-600" role="status">
            Netlify Forms only accepts submissions from the deployed site (or{" "}
            <code className="rounded bg-ink-100 px-1 py-0.5 text-xs">netlify dev</code>). Your fields are configured
            correctly for production.
          </p>
        ) : null}
        {status === "err" ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            Something went wrong. Please email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
