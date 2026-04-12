export const siteMeta = {
  /** Official site name */
  name: "Trinity New Zealand Immigration",
  shortName: "Trinity New Zealand Immigration",
  logoUrl: "/assets/img/logo.png",
  tagline: "Immigration consultation and advice for New Zealand",
  email: "info@trinitynzimmigration.co.nz",
  phones: [
    { label: "Luz Cu", href: "tel:+64224071965", display: "+64 22 407 1965" },
    { label: "Tonet Jang", href: "tel:+642102293266", display: "+64 21 0229 3266" },
  ],
  address: {
    lines: ["395 Lake Road", "Takapuna", "Auckland 0622", "New Zealand"],
    mapsQuery: "395+Lake+Road+Takapuna+Auckland",
  },
  /** Google Maps listing (location & reviews) */
  googleMapsUrl: "https://maps.app.goo.gl/RsTbdGaEyWMCYYtp8",
  facebookUrl: "https://www.facebook.com/trinityNZimmigration/",
  facebookReviewsUrl: "https://www.facebook.com/trinityNZimmigration/reviews",
  iaaUrl: "https://www.iaa.govt.nz/",
  assets: {
    iaaLogo: "/assets/img/team/iaa.png",
    nzamiLogo: "/assets/img/team/nzami.png",
  },
} as const;

/** Authoritative visa criteria — use alongside licensed advice (requirements change). */
export const immigrationNzLinks = {
  visasHome: "https://www.immigration.govt.nz/new-zealand-visas",
  nzeta: "https://www.immigration.govt.nz/visit/",
  visitor: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/visitor-visa/",
  student: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/student-visa",
  workingHoliday: "https://www.immigration.govt.nz/work/working-holiday-visas/",
  aewv: "https://www.immigration.govt.nz/visas/accredited-employer-work-visa/",
  skilledResidence: "https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/living-in-new-zealand-permanently/new-zealand-skilled-residence-pathways",
  greenList: "https://www.immigration.govt.nz/green-list",
  smc: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/skilled-migrant-category-resident-visa",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "why-nz", label: "Why NZ" },
  { id: "settle", label: "Settle" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  title: "Navigate your New Zealand visa with confidence",
  subtitle:
    "Licensed immigration advisers providing personalised consulting and representation for all visa types — wherever you are in the world.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "Explore services", href: "#services" },
  image: {
    src: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=2000&q=80",
    alt: "Auckland city and harbour at dusk, New Zealand",
  },
};

export const about = {
  eyebrow: "About us",
  title: "Immigration support tailored to you",
  body: [
    "Trinity New Zealand Immigration is the official website of our practice, offering immigration consultation and advice. We provide a wide range of personalised immigration consulting and representation services for all visa types and immigration categories. Our unique ability to provide our services internationally allows us to assist foreign nationals from any country in the world.",
  ],
};

export const whyNz = {
  eyebrow: "Why New Zealand?",
  title: "A welcoming place to visit, study, work, and live",
  body: [
    "With a patchwork history of Māori, European, Pacific Island and Asian cultures, New Zealand has become a melting-pot population — but one with some uniting features that make it unique in the world. Today, of the 4.4 million New Zealanders (informally known as Kiwis), approximately 69% are of European descent, 14.6% are indigenous Māori, 9.2% Asian and 6.9% non-Māori Pacific Islanders. Geographically, over three-quarters of the population live in the North Island, with one-third of the total population living in Auckland. The other main cities of Wellington, Christchurch and Hamilton are where the majority of the remaining Kiwis dwell.",
    "There is a reason New Zealand is consistently among the top 10 best countries to live in in the world. It is a safe place to live in, clean and beautiful. The New Zealanders are famous for their natural warmth and hospitality. Kiwis, as what the people of New Zealand are otherwise called, welcome visitors as well as migrants from all over the world. New Zealand is also one of the best places to raise a family. There are also jobs available for people with qualifications and experience.",
  ],
  links: [
    {
      label: "New Zealand History — Culture and Society",
      href: "http://www.nzhistory.net.nz/culture-and-society",
    },
    { label: "100% Pure New Zealand", href: "http://www.newzealand.com/int/" },
    {
      label: "New Zealand Now — Why New Zealand?",
      href: "https://www.newzealandnow.govt.nz/resources/why-new-zealand",
    },
  ],
};

/** Placeholder: source site had a heading only. Client can extend `body` when copy is ready. */
export const settle = {
  eyebrow: "How to settle",
  title: "How to settle in New Zealand?",
  body: [
    "Every pathway to living in New Zealand is different. Whether you are exploring work, study, partnership, or skilled residence, the right approach depends on your background, goals, and eligibility.",
    "Our licensed immigration advisers can walk you through realistic options, timelines, and documentation — and help you plan the next practical step. Use the contact form below to tell us a little about your situation.",
  ],
};

export const servicesBlock = {
  eyebrow: "Our services",
  title: "Visa types and immigration categories",
  intro: [
    "We can assist you on many visa types and immigration categories. The summaries below are for orientation only — Immigration New Zealand (INZ) sets the legal requirements, and those rules change over time.",
  ],
  guideTitle: "Which visa type is right for you?",
  guideBody:
    "Use this page as a starting point, then confirm eligibility, fees, and evidence requirements on the official INZ website or through a Licensed Immigration Adviser. There are additional categories not listed here (for example specific-purpose work visas, religious worker visas, or sector-specific pathways).",
  officialNotice:
    "Visa settings are updated regularly (including fees, English and health rules, wage thresholds, and residence pathways). Always check the current INZ instructions before you apply.",
  officialLink: {
    label: "Immigration New Zealand — New Zealand visas",
    href: immigrationNzLinks.visasHome,
  },
};

export type ServiceItem = {
  title: string;
  paragraphs: string[];
  children?: ServiceItem[];
};

export const serviceCategories: ServiceItem[] = [
  {
    title: "Visitor travel — NZeTA and visitor visas",
    paragraphs: [
      "Travellers from visa-waiver countries and territories usually need an NZeTA (New Zealand Electronic Travel Authority) before boarding; others need an appropriate visitor visa (or another valid visa) for their purpose of travel. Length of stay, conditions, and whether you can study or work depend on the visa or NZeTA you hold.",
      "If you are already in New Zealand and want to stay longer, you may need a further visa — not every visit can be extended. Confirm the current rules on INZ’s visitor and NZeTA pages.",
      `Official references: NZeTA — ${immigrationNzLinks.nzeta} · Visitor visa — ${immigrationNzLinks.visitor}`,
    ],
  },
  {
    title: "Student visa",
    paragraphs: [
      "A student visa is for people who meet INZ requirements to study full-time with an approved education provider. Course length, fees, insurance, and work rights (if any) are set by INZ and your offer of place.",
      "School-age children of some work visa holders may be eligible for a dependent student visa for primary or secondary school — the principal parent’s visa type matters.",
      `Official reference: ${immigrationNzLinks.student}`,
    ],
  },
  {
    title: "Work visas",
    paragraphs: [],
    children: [
      {
        title: "Partner work visas",
        paragraphs: [
          "If you are the partner of a New Zealand citizen or resident, or of someone who holds certain work or student visas, you may be eligible for a partner-linked work visa. Eligibility, work rights, and duration depend on your partner’s visa and on evidence that your relationship is genuine and stable. INZ publishes the current partner instructions online.",
        ],
      },
      {
        title: "Working holiday schemes",
        paragraphs: [
          "New Zealand runs working holiday schemes with specific countries. Typical age bands are 18–30, but some schemes allow applicants up to 35 — caps and rules differ by passport. Check INZ’s scheme list for your country before you plan travel or work.",
          `Official reference: ${immigrationNzLinks.workingHoliday}`,
        ],
      },
      {
        title: "Accredited Employer Work Visa (AEWV)",
        paragraphs: [
          "For many temporary skilled roles, the Accredited Employer Work Visa (AEWV) is the main pathway: you need a job offer from an employer that holds (or is eligible for) accreditation with INZ, and INZ may require a job check to confirm the role is genuine and meets labour-market settings. Skill level, pay, and maximum stay depend on the job and INZ instructions — these settings are updated from time to time.",
          "Older categories such as the Essential Skills Work Visa are largely superseded for new applicants in this space; always use the current AEWV instructions.",
          `Official reference: ${immigrationNzLinks.aewv}`,
        ],
      },
      {
        title: "Other work visas",
        paragraphs: [
          "Depending on your situation you might consider post-study work, specific-purpose work, religious worker, seasonal schemes, or other INZ work categories. Each has its own requirements and caps.",
          `Browse all work options from INZ’s visa list: ${immigrationNzLinks.visasHome}`,
        ],
      },
    ],
  },
  {
    title: "Residence — skilled and family pathways",
    paragraphs: [],
    children: [
      {
        title: "Skilled Migrant Category (SMC)",
        paragraphs: [
          "The Skilled Migrant Category is INZ’s principal points-based residence pathway for skilled migrants. Points, selection, and acceptable work or qualifications change — INZ publishes upcoming SMC changes on its news centre and operational instructions.",
          "We can help you understand how current settings apply to your profile; final eligibility is determined by INZ against the rules in force when you apply.",
          `Official references: Skilled residence overview — ${immigrationNzLinks.skilledResidence} · SMC visa — ${immigrationNzLinks.smc}`,
        ],
      },
      {
        title: "Green List and related skilled residence",
        paragraphs: [
          "INZ maintains a Green List of occupations with defined residence pathways. Tier 1 roles may qualify for Straight to Residence; Tier 2 roles may lead to residence after a required period of skilled work in New Zealand. Separate sector pathways (for example care workforce or transport, where available) have their own published requirements.",
          "Lists and eligible occupations change — search the current Green List on INZ before relying on any job title.",
          `Official references: Green List — ${immigrationNzLinks.greenList} · Skilled residence pathways — ${immigrationNzLinks.skilledResidence}`,
        ],
      },
      {
        title: "Partners, dependent children, and other family",
        paragraphs: [
          "Partner-based residence and dependent-child residence each have relationship, age, health, and character requirements that INZ updates. Living together history, dependency, and custody arrangements are assessed against the instructions that apply to your application date.",
          "If you do not yet meet a residence requirement, a temporary visa may still be an option — we can discuss realistic steps.",
          `Start from INZ’s visa finder and family categories: ${immigrationNzLinks.visasHome}`,
        ],
      },
    ],
  },
];

export const trustStats = [
  { value: "2", label: "Licensed Immigration Advisers (IAA)" },
  { value: "6+", label: "Languages & dialects supported" },
  { value: "All", label: "Major visa pathways covered" },
  { value: "Global", label: "Clients assisted worldwide" },
] as const;

export const teamBlock = {
  eyebrow: "Our team",
  title: "Experienced licensed advisers",
  intro:
    "Our immigration advisers have experience working with immigrants from many backgrounds and countries. We can provide the information you need to immigrate to New Zealand and help ensure the process is as smooth as possible.",
};

export const team = [
  {
    name: "Luz Bayog Cu",
    license: "License No. 201601321",
    credentials: "BS Zoo, MPA, MS Bio, GCNZIA",
    photo: "/assets/img/team/team-cu.jpg",
    bio: "Luz has a long background and expansive experiences as a university lecturer as well as a scientific and social researcher. Luz is a competent administrator and finance officer of a privately–owned corporation. Luz is well qualified and holds Master degrees both in Biology and Public Administration. These multidisciplinary backgrounds equip her to successfully handle visa applications. Luz speaks fluent English, Tagalog, Cebuano and understands Spanish and Latin.",
  },
  {
    name: "Tonet Cruz Jang",
    license: "License No. 201601367",
    credentials: "BS Bus Admin, GCNZIA",
    photo: "/assets/img/team/team-jang.jpg",
    bio: "Tonet holds a Bachelor’s degree in Science with a major in Business Administration. Tonet has extensive experience in sales and customer service from diverse industries. This has strongly developed her communication skills and high attention to detail. Providing personalized service and giving absolute focus to each individual case is one of her strengths. Tonet speaks fluent English, Cebuano and Tagalog.",
  },
];

export const testimonialsBlock = {
  eyebrow: "Testimonials",
  title: "What our clients say",
  subtitle:
    "Feedback from people we have supported through their visa journeys — and live reviews on Google Maps and Facebook.",
};

/** Highlights from public review pages (see links for full threads). */
export const socialReviewHighlights = [
  {
    source: "Google Maps",
    badge: "Google reviews",
    summary:
      "Read ratings and client feedback on our Google Business Profile — open the Maps listing for the full review history.",
    href: "https://maps.app.goo.gl/RsTbdGaEyWMCYYtp8",
    cta: "Open Google Maps reviews",
  },
  {
    source: "Facebook",
    badge: "100% recommend (15 reviews)",
    summary:
      "I am extremely grateful to Trinity New Zealand Immigration Services Ltd, particularly to Ma'am Luz Cu, who assisted us with our visa application. My daughter is now a resident of this country, and I am currently waiting for my own resident visa. I am overjoyed that one of our greatest desires—living together as a family—has finally come true.",
    attribution: "Marites Sastrillo · Facebook review",
    href: "https://www.facebook.com/trinityNZimmigration/reviews",
    cta: "See all Facebook reviews",
  },
] as const;

export const testimonials = [
  "First of all, this service is well managed. They have provided good services. They helped me put together the right documents that I needed. Since the beginning until my visa was approved, they never left me alone. I really thank the services, especially to Luz Bayog Cu who truly helped me get my visa approved. After so many years of waiting, I have finally come to New Zealand and see my family. That's why I am so thankful for Trinity New Zealand Immigration Services, they were the ones who guided and helped get my visa approved. I am so happy for your help, thank you very much. It is my hope that you will be able to help others more, especially those similar to my situation. God bless!",
  "I would like to give my sincere compliments and gratitude to Trinity New Zealand Immigration Services Ltd, specifically to Luz Bayog Cu, the Licensed Immigration Adviser, for their invaluable support in obtaining my Student Visa. Luz was very patient and thorough in helping me through this process. I was very nervous through the whole process but Luz gave me all the necessary information to lessen my worries. She constantly provided me regular updates regarding the status of my application through phone calls and emails. Also, she would conscientiously ring and email the INZ for follow ups and updates with regards to my application. With her help, I got my e-visa in less than two weeks. She is very attentive with her work and care for her clients. I am very grateful and thankful for having Luz as my Licensed Immigration Adviser and I will definitely recommend her and their company to my friends. Thank you so much!",
  "Thank you Trinity New Zealand Immigration Services in assisting me for obtaining my work visa. Luz Bayog Cu, one of the licensed immigration adviser, helped me with my visa application (PPI). I lodged my visa without any immigration adviser, thinking it would be easy since the category of my job is in the shortage list. However, when I received a PPI letter and my case officer only gave me seven days to submit the necessary documents. So I decided to seek for an assistance from a licensed immigration adviser. Trinity New Zealand Immigration Services was recommended by a friend and it was my first time to avail of their service. Luz was highly organized and patiently updates me regularly. I would highly recommend her and this company to my friends. Thank you Trinity New Zealand Immigration Services Ltd once again for my approved visa. This is my second time to seek their services and I didn't have any doubts, as they did an excellent job in organizing my papers and it was approved speedily. Luz Bayog Cu did an outstanding job in preparing my documents. That time it was almost Christmas break when I started submitting to her the required documents and she was able to lodge my application before the break. After 11 working days my work visa was approved for 3 years.",
  "Tita Luz! My heartfelt thanks again, Tita. I'm still over the moon thinking back the whole process. I would definitely recommend Tita Luz Cu (Trinity New Zealand) to my family and friends if someone has an intention to visit New Zealand. To have the visa granted in such a short time (just one day) has been a dream come true for me. You made me feel confident and took away my worries, also helped explain each stage of the process. You are very professional but easy going in day to day emails. Thank you Tita for putting up with my 100s of questions and always being so good to reply straight away. I appreciate all your help and would recommend you to everyone we know. Thank you, Thank you po!",
  "Granting a visitor visa that is valid for further travel for 6 months from first arrival in just 1 working day is very amazing and overwhelming for me, despite that what I only applied was for 2 months holiday in New Zealand to be with my wife. Foremost, I owe this euphoria to the Majesty and the splendour of our Lord. Truly, His greatness is beyond comprehension. Likewise, I am very thankful and happy that He directed me to Trinity New Zealand Immigration Services. They prove very professional and excellent services to their clients to which I can truly testify. If not for them, I will not be able to have a visitor visa in just 1 working day of processing. I am happy and thankful to Tita Luz Cu who did her best for my visa application. From my experience, I recommend this company Trinity New Zealand Immigration Services to anyone without any reservations.",
];

export const contactBlock = {
  eyebrow: "Contact",
  title: "Get in touch",
  intro:
    "Our licensed immigration advisers can assist you with all of your immigration needs. Contact us today for answers to any of your immigration questions.",
};
