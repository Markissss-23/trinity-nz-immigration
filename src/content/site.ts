//import { href } from "react-router-dom";

export const siteMeta = {
  /** Official site name */
  name: "Trinity New Zealand Immigration Services",
  shortName: "Trinity New Zealand Immigration Services",
  logoUrl: "/assets/img/logo-2026.png",
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
  nzamiUrl: "https://nzami.co.nz/",
  liaaUrl: "https://liaassociation.com/",
  assets: {
    iaaLogo: "/assets/img/team/iaa.png",
    nzamiLogo: "/assets/img/team/nzami.png",
    liaaLogo: "/assets/img/team/liaa.png",
    ctaBackground: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1500&q=80",
    readyCtaBackground: "https://images.unsplash.com/photo-1695633439545-f61000b336e6?w=1000&auto=format&fit=crop&q=60",
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
  /** Business / investment pathways (confirm current pages on INZ before applying). */
  activeInvestorPlus: "https://www.immigration.govt.nz/visas/active-investor-plus-visa/",
  entrepreneurWork: "https://www.immigration.govt.nz/visas/entrepreneur-work-visa/",
  investorCategoryNews: "https://www.immigration.govt.nz/about-us/news-centre/investor-category",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "why-nz", label: "Why NZ" },
  { id: "settle", label: "Settle" },
  { id: "services", label: "Services" },
  { id: "evaluation", label: "Evaluation" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "news", label: "News", href: "/news" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  title: "Navigate your New Zealand visa with confidence",
  subtitle:
    "Licensed immigration advisers providing personalised consulting and representation for all visa types — wherever you are in the world.",
  primaryCta: { label: "Get in touch", href: "/#contact" },
  secondaryCta: { label: "Explore services", href: "/#services" },
  image: {
    src: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=2000&q=80",
    alt: "",
  },
};

export const about = {
  eyebrow: "About us",
  title: "Immigration support tailored to you",
  body: [
    "Trinity New Zealand Immigration Services has been operating since 2016. We provide a wide range of personalised immigration consulting and representation services for all visa types and immigration categories. Our unique ability to provide our services internationally allows us to assist foreign nationals from any country in the world.",
  ],
};

export const whyNz = {
  eyebrow: "Why New Zealand?",
  title: "A welcoming place to visit, study, work, and live",
  body: [
    "With a rich tapestry woven from Māori, European, Pacific Island, and Asian cultures, Aotearoa New Zealand has evolved into one of the world's most diverse nations—united by a shared spirit that makes it truly unique.",
    "Today, New Zealand's estimated resident population has grown to 5.34 million (informally known as Kiwis). The ethnic makeup reflects this vibrant diversity: approximately 67.8% identify as European, 17.8% as indigenous Māori, 17.3% as Asian, 8.9% as Pacific peoples, and 1.9% as Middle Eastern, Latin American, and African (MELAA).", 
    "Geographically, over three-quarters of the population (76.3%) now live in the North Island, with the urban hub of Auckland remaining home to one-third (33.2%) of all New Zealanders. The other main centres (Christchurch, Wellington, and Hamilton) continue to be where the majority of the remaining Kiwis dwell.",
    "There is a reason New Zealand is consistently among the top 10 best countries to live in the world. It is a safe place to live in, clean and beautiful. The New Zealanders are famous for their natural warmth and hospitality. Kiwis, as what the people of New Zealand are otherwise called, welcome visitors as well as migrants from all over the world. New Zealand is also one of the best places to raise a family. There are also jobs available for people with qualifications and experience.",
  ],
  links: [
    {
      label: "New Zealand History — Culture and Society",
      href: "https://nzhistory.govt.nz/culture-and-society",
    },
    { label: "100% Pure New Zealand", href: "http://www.newzealand.com/int/" },
    {
      label: "New Zealand Now — Why New Zealand?",
      href: "https://www.newzealandnow.govt.nz/resources/why-new-zealand",
    },
    {
      label: "Choose New Zealand Education + Migration — Why NZ",
      href: "https://www.choosenewzealand.com/why-nz/",
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

export const evaluationBlock = {
  eyebrow: "Eligibility assessment",
  title: "Online evaluation form",
  /** Shown on the home section and on `/evaluation` (same wording in both places). */
  intro: [
    "Licensed immigration advisers form an integral part of your plans to travel to New Zealand. Whether your plan is to visit, study, work, or permanently live in New Zealand, immigration advisers can represent and assist you in making your dream a reality. They are equipped with knowledge, experience, and technical know-how to make the process convenient and rewarding for you.",
    "Please fill out our evaluation form — we will reach out as soon as we can.",
    "Please answer the following questions to help us assess your eligibility for a temporary entry or resident visa to New Zealand. Write “Not applicable” or “N/A” for items that do not apply to you.",
    "The personal information you provide to Trinity New Zealand Immigration is collected securely and used only to assess your potential for immigration to New Zealand under current selection criteria. We will respond only in relation to your New Zealand immigration evaluation. We operate strictly according to New Zealand privacy law.",
  ],
  closingNote:
    "Thank you for taking the time to answer these questions. It is not necessary to provide documentation at this stage.",
  ctaLabel: "Open the evaluation form",
};

export type ServiceItem = {
  title: string;
  paragraphs: string[];
  children?: ServiceItem[];
  /** Optional stock photo (Unsplash) for card layout */
  image?: { src: string; alt: string };
};

export const serviceCategories: ServiceItem[] = [
  {
    title: "Visitor travel — NZeTA and visitor visas",
    image: {
      src: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=80",
      alt: "Auckland harbour and skyline at dusk — visiting New Zealand",
    },
    paragraphs: [
      "Travellers from visa-waiver countries and territories usually need an NZeTA (New Zealand Electronic Travel Authority) before boarding; others need an appropriate visitor visa (or another valid visa) for their purpose of travel. Length of stay, conditions, and whether you can study or work depend on the visa or NZeTA you hold.",
      "If you are already in New Zealand and want to stay longer, you may need a further visa — not every visit can be extended. Confirm the current rules on INZ’s visitor and NZeTA pages.",
      `Official references: NZeTA — ${immigrationNzLinks.nzeta} · Visitor visa — ${immigrationNzLinks.visitor}`,
    ],
  },
  {
    title: "Student visa",
    image: {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      alt: "Graduates celebrating — full-time study in New Zealand",
    },
    paragraphs: [
      "A student visa is for people who meet INZ requirements to study full-time with an approved education provider. Course length, fees, insurance, and work rights (if any) are set by INZ and your offer of place.",
      "School-age children of some work visa holders may be eligible for a dependent student visa for primary or secondary school — the principal parent’s visa type matters.",
      `Official reference: ${immigrationNzLinks.student}`,
    ],
  },
  {
    title: "Work visas",
    image: {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      alt: "Office workspace — working in New Zealand",
    },
    paragraphs: [],
    children: [
      {
        title: "Partner work visas",
        image: {
          src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80",
          alt: "Waterfront and city view in Wellington, New Zealand",
        },
        paragraphs: [
          "If you are the partner of a New Zealand citizen or resident, or of someone who holds certain work or student visas, you may be eligible for a partner-linked work visa. Eligibility, work rights, and duration depend on your partner’s visa and on evidence that your relationship is genuine and stable. INZ publishes the current partner instructions online.",
        ],
      },
      {
        title: "Working holiday schemes",
        image: {
          src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
          alt: "Mountain trail — outdoor travel and working holidays in New Zealand",
        },
        paragraphs: [
          "New Zealand runs working holiday schemes with specific countries. Typical age bands are 18–30, but some schemes allow applicants up to 35 — caps and rules differ by passport. Check INZ’s scheme list for your country before you plan travel or work.",
          `Official reference: ${immigrationNzLinks.workingHoliday}`,
        ],
      },
      {
        title: "Accredited Employer Work Visa (AEWV)",
        image: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
          alt: "Team collaborating — skilled employment with a New Zealand employer",
        },
        paragraphs: [
          "For many temporary skilled roles, the Accredited Employer Work Visa (AEWV) is the main pathway: you need a job offer from an employer that holds (or is eligible for) accreditation with INZ, and INZ may require a job check to confirm the role is genuine and meets labour-market settings. Skill level, pay, and maximum stay depend on the job and INZ instructions — these settings are updated from time to time.",
          "Older categories such as the Essential Skills Work Visa are largely superseded for new applicants in this space; always use the current AEWV instructions.",
          `Official reference: ${immigrationNzLinks.aewv}`,
        ],
      },
      {
        title: "Other work visas",
        image: {
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
          alt: "Business meeting — other work visa pathways in New Zealand",
        },
        paragraphs: [
          "Depending on your situation you might consider post-study work, specific-purpose work, religious worker, seasonal schemes, or other INZ work categories. Each has its own requirements and caps.",
          `Browse all work options from INZ’s visa list: ${immigrationNzLinks.visasHome}`,
        ],
      },
    ],
  },
  {
    title: "Residence — skilled and family pathways",
    image: {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      alt: "Keys to a home — living in New Zealand as a resident",
    },
    paragraphs: [],
    children: [
      {
        title: "Skilled Migrant Category (SMC)",
        image: {
          src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
          alt: "Planning and documents — Skilled Migrant Category residence in New Zealand",
        },
        paragraphs: [
          "The Skilled Migrant Category is INZ’s principal points-based residence pathway for skilled migrants. Points, selection, and acceptable work or qualifications change — INZ publishes upcoming SMC changes on its news centre and operational instructions.",
          "We can help you understand how current settings apply to your profile; final eligibility is determined by INZ against the rules in force when you apply.",
          `Official references: Skilled residence overview — ${immigrationNzLinks.skilledResidence} · SMC visa — ${immigrationNzLinks.smc}`,
        ],
      },
      {
        title: "Green List and related skilled residence",
        image: {
          src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
          alt: "Mountain landscape at dawn — skilled residence and Green List pathways in New Zealand",
        },
        paragraphs: [
          "INZ maintains a Green List of occupations with defined residence pathways. Tier 1 roles may qualify for Straight to Residence; Tier 2 roles may lead to residence after a required period of skilled work in New Zealand. Separate sector pathways (for example care workforce or transport, where available) have their own published requirements.",
          "Lists and eligible occupations change — search the current Green List on INZ before relying on any job title.",
          `Official references: Green List — ${immigrationNzLinks.greenList} · Skilled residence pathways — ${immigrationNzLinks.skilledResidence}`,
        ],
      },
      {
        title: "Partners, dependent children, and other family",
        image: {
          src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80",
          alt: "Family outdoors — partners, children, and family residence in New Zealand",
        },
        paragraphs: [
          "Partner-based residence and dependent-child residence each have relationship, age, health, and character requirements that INZ updates. Living together history, dependency, and custody arrangements are assessed against the instructions that apply to your application date.",
          "If you do not yet meet a residence requirement, a temporary visa may still be an option — we can discuss realistic steps.",
          `Start from INZ’s visa finder and family categories: ${immigrationNzLinks.visasHome}`,
        ],
      },
    ],
  },
  {
    title: "Business and investor visas",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      alt: "Business planning and analytics — investment and business visas for New Zealand",
    },
    paragraphs: [
      "If you plan to invest in New Zealand or to establish or buy a business, Immigration New Zealand (INZ) sets separate rules for investor residence and for business-related temporary visas. Minimum investment amounts, acceptable investments, business experience, time in New Zealand, and English language (where required) are updated from time to time — always read the current operational instructions before you commit funds or travel.",
      "The Active Investor Plus visa is INZ’s residence pathway for qualifying investors (including Growth and Balanced investment categories with different minimum amounts and terms). If you are developing a business in New Zealand, the Entrepreneur work visa may be relevant while you meet innovation, capital, and business-plan requirements set by INZ.",
      `Active Investor Plus visa (current visa page): ${immigrationNzLinks.activeInvestorPlus}`,
      `Entrepreneur work visa: ${immigrationNzLinks.entrepreneurWork}`,
      `Investor category overview and policy updates on INZ: ${immigrationNzLinks.investorCategoryNews}`,
      `Browse all visa options, including other business or investment categories: ${immigrationNzLinks.visasHome}`,
    ],
  },
];

export const trustStats = [
  { value: "10", label: "Years of experience" },
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
  affiliationTitle: "Professional associations",
  affiliationSubtitle:
    "We are connected to the leading immigration adviser organisations in New Zealand, including IAA, NZAMI, and LIAA.",
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

export const faqBlock = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  subtitle:
    "Answers to the questions we hear most often from people planning a New Zealand visa or immigration path.",
};

export const faqs = [
  {
    question: "How can Trinity help with my New Zealand visa?",
    answer:
      "We provide licensed immigration advice, eligibility assessment, document review, and application support for visitor, student, work, and residence visas. We help you understand your options, prepare the evidence INZ expects, and keep your application on track.",
  },
  {
    question: "Can I apply for a visa if I am outside New Zealand?",
    answer:
      "Yes. Most New Zealand visas are available from overseas. We work with clients around the world and can help you manage your application remotely, including preparing supporting documents and communicating with Immigration New Zealand.",
  },
  {
    question: "What is the best first step to start my immigration process?",
    answer:
      "The best first step is to describe your situation using our contact form or evaluation form. We will review your goals, current residency status, qualifications, and evidence to identify the strongest pathway for your case.",
  },
  {
    question: "Which visa types does Trinity advise on?",
    answer:
      "We advise on visitor visas, student visas, work visas, accredited employer pathways, partner and family visas, and skilled residence applications. We also provide general guidance on New Zealand immigration policy and changing INZ requirements.",
  },
  {
    question: "How long does the application process usually take?",
    answer:
      "Processing times differ by visa type and by applicant circumstances. Some visitor or student visas may be decided quickly, while residence pathways can take longer. We can help estimate likely timing once we know your specific case.",
  },
  {
    question: "Are your recommendations based on current INZ rules?",
    answer:
      "Yes. Our advice is based on current New Zealand immigration rules and licensed adviser practice. We always recommend checking the latest official INZ instructions before you apply.",
  },
] as const;

/** Highlights from public review pages (see links for full threads). */
export const socialReviewHighlights = [
  {
    source: "Google Maps",
    badge: "Google reviews",
    summary:
      "Selected 5-star reviews from our Google Business Profile — open the Maps listing for full details.",
    rating: "4.9",
    reviewCount: 55,
    reviews: [
      {
        text: "To the Trinity New Zealand Immigration Service specially Mam Luz Cu. Mam Luz was always clear and detailed when explaining the steps we need. She also providing timely updates and suggestions/ advice for a better application process. Thanks to Mam Luz’s dedication and attention to detail, I was able to successfully obtain my resident visa from visitor and work visa. Highly recommended!",
        author: "Janeth C.",
      },
      {
        text: "I would like to sincerely give a huge thanks to Ms. Luz and Trinity New Zealand Immigration Services Ltd. for their exceptional assistance throughout my visa application process. Despite the tight schedule with my previous visa expiring, my visa was approved in just five working days! Highly recommended!! Wishing all the best with Ms. Luz and team!",
        author: "liza",
      },
      {
        text: "I am so grateful for the help of Trinity. With just 1 day my visa was approved. Until now I am still in shocked but I think this is also because of the way Trinity handles the documents and process it with a very detailed information. Trinity was so knowledgeable regarding the process and Maam Luz was so eager  and quick to respond whenever I have questions. This is a legit Immigration services and would 100% recommend.",
        author: "Keigh L.",
      },
      {
        text: "Thank you so much Trinity New Zealand Immigration Services Ltd specially to Ma'am Luz Bayog Cu. With in one week my student visa was approved. Once again, thank you so much ma'am Luz for your help and kindness. I've learned a lot also from you. God bless you always and the rest of the team❤️🙏 …",
        author: "Carl Jerome L.",
      },
      {
        text: "Trinity new Zealand immigration services LTD has the best service. I highly recommend Mam Luz Cu, She was my immigration advisor for my general visitor visa application, she was easily to approach to ask questions. I am thankful for the help she provided and for her expertise being an advisor. I am amazed her for being attention to detail and attentiveness. My application, supporting documents, and forms were thoroughly reviewed by her. Thanks to her commitment to excellence and her ability to observe even the smallest details. My application was approved because of her. Thank you so much Mam Luz Cu and Trinity new Zealand immigration services LTD.",
        author: "Sush Mita D.",
      },
    ],
    href: "https://maps.app.goo.gl/RsTbdGaEyWMCYYtp8",
    cta: "Open Google Maps reviews",
  },
  {
    source: "Facebook",
    badge: "Facebook reviews",
    summary:
      "Selected 5-star Facebook reviews from clients who have successfully used our immigration advice services.",
    rating: "5.0",
    reviewCount: 15,
    reviews: [
      {
        text: "I am extremely grateful to Trinity New Zealand Immigration Services Ltd, particularly to Ma'am Luz Cu, who assisted us with our visa application. My daughter is now a resident of this country, and I am currently waiting for my own resident visa. I am overjoyed that one of our greatest desires—living together as a family—has finally come true.",
        author: "Marites S.",
      },
      {
        text: "We are just dreaming before of spending time with my husband in this amazing country, and here we are treasuring the days we have together.This won't be a success without the help of Trinity New Zealand Immigration Services Ltd. and Luz Cu who is with us guiding and updating in everything we need to prepare in order to make this possible. Big thanks to your Company! Another Visit Visa approved and we can now experience spring and summer season😃God Bless! Hope you can help more people in achieving their New Zealand dream!😊🤩🤩",
        author: "Zoe D.",
      },
      {
        text: "Thank you so much ma'am Luz and trinity new zealand immigration services Ltd. I recommend and rate the services 100% nice good and very kind. Again thank you so much maam luz♥️",
        author: "Aljune B.",
      },
      {
        text: "Massive thanks to Tonet for always sorting out my NZ visa related matters. At the outset, Tonet has always been highly responsive in addressing my queries and sending through all pertinent information. One of the things that I deeply appreciate is the quality service – from providing instant updates to guiding you on next steps which gives you a level of assurance and confidence. If you are looking for a professional with great service, I would strongly recommend Trinity New Zealand Immigration Services Ltd particularly Tonet Jang and rest assured you won’t be disappointed! All the best to you and the team! Cheers",
        author: "BárceNa P.",
      },
      {
        text: "TRINITY NEW ZEALAND Licensed Immigration Advisor TONET JANG processed the following: a. Visitor Visa for  me and my husband to N.Z. a year ago b.  Student Visa for my son who finished his I.T. course a year ago c.  Student Visa for our relative who transferred from Singapore to N.Z.and again the visa for her husband and 3 children to finally join her now in N.Z.",
        author: "Thelma C.",
      },
    ],
    href: "https://www.facebook.com/trinityNZimmigration/reviews",
    cta: "See all Facebook reviews",
  },
] as const;

export const testimonials = [
  {
    text: "First of all, this service is well managed. They have provided good services. They helped me put together the right documents that I needed. Since the beginning until my visa was approved, they never left me alone. I really thank the services, especially to Luz Bayog Cu who truly helped me get my visa approved. After so many years of waiting, I have finally come to New Zealand and see my family. That's why I am so thankful for Trinity New Zealand Immigration Services, they were the ones who guided and helped get my visa approved. I am so happy for your help, thank you very much. It is my hope that you will be able to help others more, especially those similar to my situation. God bless!",
    author: "Mary Cris G.",
  },
  {
    text: "I would like to give my sincere compliments and gratitude to Trinity New Zealand Immigration Services Ltd, specifically to Luz Bayog Cu, the Licensed Immigration Adviser, for their invaluable support in obtaining my Student Visa. Luz was very patient and thorough in helping me through this process. I was very nervous through the whole process but Luz gave me all the necessary information to lessen my worries. She constantly provided me regular updates regarding the status of my application through phone calls and emails. Also, she would conscientiously ring and email the INZ for follow ups and updates with regards to my application. With her help, I got my e-visa in less than two weeks. She is very attentive with her work and care for her clients. I am very grateful and thankful for having Luz as my Licensed Immigration Adviser and I will definitely recommend her and their company to my friends. Thank you so much!",
    author: "Rea M.",
  },
  {
    text: "Thank you Trinity New Zealand Immigration Services in assisting me for obtaining my work visa. Luz Bayog Cu, one of the licensed immigration adviser, helped me with my visa application (PPI). I lodged my visa without any immigration adviser, thinking it would be easy since the category of my job is in the shortage list. However, when I received a PPI letter and my case officer only gave me seven days to submit the necessary documents. So I decided to seek for an assistance from a licensed immigration adviser. Trinity New Zealand Immigration Services was recommended by a friend and it was my first time to avail of their service. Luz was highly organized and patiently updates me regularly. I would highly recommend her and this company to my friends. Thank you Trinity New Zealand Immigration Services Ltd once again for my approved visa. This is my second time to seek their services and I didn't have any doubts, as they did an excellent job in organizing my papers and it was approved speedily. Luz Bayog Cu did an outstanding job in preparing my documents. That time it was almost Christmas break when I started submitting to her the required documents and she was able to lodge my application before the break. After 11 working days my work visa was approved for 3 years.",
    author: "Jayson R.",
  },
  {
    text: "Tita Luz! My heartfelt thanks again, Tita. I'm still over the moon thinking back the whole process. I would definitely recommend Tita Luz Cu (Trinity New Zealand) to my family and friends if someone has an intention to visit New Zealand. To have the visa granted in such a short time (just one day) has been a dream come true for me. You made me feel confident and took away my worries, also helped explain each stage of the process. You are very professional but easy going in day to day emails. Thank you Tita for putting up with my 100s of questions and always being so good to reply straight away. I appreciate all your help and would recommend you to everyone we know. Thank you, Thank you po!",
    author: "Kristine C.",
  },
  {
    text: "Granting a visitor visa that is valid for further travel for 6 months from first arrival in just 1 working day is very amazing and overwhelming for me, despite that what I only applied was for 2 months holiday in New Zealand to be with my wife. Foremost, I owe this euphoria to the Majesty and the splendour of our Lord. Truly, His greatness is beyond comprehension. Likewise, I am very thankful and happy that He directed me to Trinity New Zealand Immigration Services. They prove very professional and excellent services to their clients to which I can truly testify. If not for them, I will not be able to have a visitor visa in just 1 working day of processing. I am happy and thankful to Tita Luz Cu who did her best for my visa application. From my experience, I recommend this company Trinity New Zealand Immigration Services to anyone without any reservations.",
    author: "James M.",
  },
];

export const contactBlock = {
  eyebrow: "Contact",
  title: "Get in touch",
  intro:
    "Our licensed immigration advisers can assist you with all of your immigration needs. Contact us today for answers to any of your immigration questions.",
};

export interface NewsArticle {
  title: string;
  date: string;
  category: "Work Visas" | "Residence" | "Visitor & Holiday" | "Policy Changes";
  summary: string;
  keyPoints?: string[];
  sourceUrl: string;
}
 
export const notFoundBlock = {
  title: "Page not found",
  number: "404",
  body: "Sorry, we couldn't find the page you were looking for. It may have been moved, renamed, or it never existed.",
  primaryCta: { label: "Back to home", to: "/" },
  secondaryCta: { label: "Contact us", to: "/#contact" },
  helpfulLinksTitle: "You might be looking for",
  helpfulLinks: [
    { label: "Our services", to: "/#services" },
    { label: "Online evaluation form", to: "/evaluation" },
    { label: "News & updates", to: "/news" },
    { label: "Frequently asked questions", to: "/faq" },
    { label: "Get in touch", to: "/#contact" },
  ],
} as const;

export interface NewsArticle {
  title: string;
  slug: string;           // URL: /news/<slug>
  date: string;
  category: "Work Visas" | "Residence" | "Visitor & Holiday" | "Policy Changes";
  summary: string;        // Short blurb shown on the news listing page
  keyPoints?: string[];   // Bullet points shown on listing + article page
  sourceUrl: string;      // Link to official INZ page
  sourceLabel?: string;   // Label for the source link (defaults to "Read on INZ website")
  content?: string[];     // Full article body — each string is a paragraph
}

// ─────────────────────────────────────────────────────────────────────────────
// Sorted by date descending (newest first). First item = "Latest" on NewsPage.
// ─────────────────────────────────────────────────────────────────────────────

export const newsData: NewsArticle[] = [
  // ── 1. 14 April 2026 — LATEST ─────────────────────────────────────────────
  {
    title: "Income Thresholds to Increase for Pacific and Parent Visa Categories",
    slug: "income-thresholds-pacific-parent-visa-april-2026",
    date: "14 April 2026",
    category: "Policy Changes",
    summary:
      "From 30 April 2026, income and sponsorship thresholds will increase for the Pacific Access Category, Samoan Quota, Parent Category Resident Visa, and Parent Boost Visitor Visa as part of routine annual reviews.",
    keyPoints: [
      "Pacific Access Category & Samoan Quota: minimum income threshold for applicants with dependent children rises from NZD $54,133.04 to $55,404.96 per year.",
      "Parent Category Resident Visa: sponsorship income thresholds updated to reflect the June 2025 median wage of NZD $35.00/hr.",
      "Parent Boost Visitor Visa: new sponsor income thresholds apply from 30 April 2026 (e.g. NZD $72,800/yr to sponsor 1 parent).",
      "Parent Boost self-funding option: applicants need at least NZD $33,663.24/yr income or NZD $170,000 in personal funds.",
      "Changes apply to applications lodged on or after 30 April 2026.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/income-thresholds-to-increase-for-pacific-and-parent-visa-categories/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "From 30 April 2026, income and sponsorship thresholds will increase for several Pacific and family visa categories. The changes affect the Pacific Access Category, Samoan Quota, Parent Category Resident Visa, and Parent Boost Visitor Visa.",
      "These updates are part of routine annual reviews to ensure income thresholds remain aligned with current wages, benefit settings, and living costs in New Zealand.",
      "For the Pacific Access Category and Samoan Quota, the minimum income threshold for applicants with dependent children will increase from NZD $54,133.04 to NZD $55,404.96 per year. This updated threshold will apply to applications lodged from 30 April 2026 where the principal applicant has dependent children.",
      "For the Parent Category Resident Visa, sponsorship income thresholds will be updated to reflect the June 2025 median wage of NZD $35.00 per hour, up from NZD $33.56. Sponsors must meet the income threshold that applied for the chosen two 12-month periods during the three years before the Expression of Interest was selected. People who have already applied under the Parent Category Resident Visa are not affected.",
      "For the Parent Boost Visitor Visa, new sponsorship and applicant income and funds thresholds will apply to applications lodged on or after 30 April 2026. A single sponsor must earn at least NZD $72,800 per year to sponsor one parent, increasing by approximately NZD $36,400 for each additional parent sponsored. Where two sponsors are combining income, the minimum for one parent rises to NZD $109,200 per year.",
      "Applicants who choose to self-fund their stay under the Parent Boost Visitor Visa must earn at least NZD $33,663.24 per year (or NZD $51,182.56 if including a partner), or hold personal funds of at least NZD $170,000 (or NZD $260,000 if including a partner). These thresholds are based on New Zealand Superannuation rates.",
      "If you are planning to sponsor a parent or apply under one of these Pacific resident categories, contact us to confirm how the updated thresholds apply to your situation before lodging your application.",
    ],
  },

  // ── 2. 20 April 2026 (announced 24 Feb) ───────────────────────────────────
  {
    title: "Open Work Visa Employment Conditions Changing from 20 April 2026",
    slug: "open-work-visa-employment-conditions-april-2026",
    date: "24 February 2026",
    category: "Work Visas",
    summary:
      "From 20 April 2026, INZ is introducing two clearer employment conditions for open work visa holders to better define what work is permitted, helping migrants understand their rights and responsibilities.",
    keyPoints: [
      "Some open work visa holders will be able to work for any employer, sole trade, or own and operate a business.",
      "Other open work visa holders must work for an employer under an employment agreement or contract for services.",
      "Working holiday visa holders cannot operate a business — employment only.",
      "Employer-specific visas like AEWV are not affected by these changes.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/upcoming-changes-to-employment-conditions-for-open-work-visa-holders/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "From Monday 20 April 2026, Immigration New Zealand (INZ) is introducing two clearer employment conditions for people holding open work visas. These changes are designed to provide clarity about what work is allowed, helping migrants better understand their rights and responsibilities.",
      "An open work visa lets you work for almost any employer, in any job or location in New Zealand, without needing a job offer. This is different from an employer-specific work visa like the Accredited Employer Work Visa (AEWV), which links you to one employer and a set role.",
      "Under the new conditions, some open work visa holders will be able to undertake any work in New Zealand — including working for an employer, sole trading, or owning and operating a business. This broader condition applies to visas such as the Partner of a New Zealand Resident visa and the Partner of a Student Work Visa (supported by a New Zealand Scholarship funded by the Ministry of Foreign Affairs and Trade).",
      "Other open work visa holders will be restricted to working for an employer only, either under an employment agreement or a contract for services. INZ considers a contract for services as a form of employment under this condition. This narrower condition applies to visas including the Post Study Work visa and the Skilled Migrant Category Job Search visa.",
      "If you hold a working holiday visa, the same employer-only rule applies — you cannot operate a business on a working holiday visa. The main purpose of a working holiday visa is to allow visitors to holiday in New Zealand, with temporary work permitted to support your stay.",
      "Employer-specific work visas, such as the Accredited Employer Work Visa (AEWV), are not impacted by these changes. If you are unsure which condition applies to your visa, contact us or refer to the INZ website for the current visa conditions.",
    ],
  },

  // ── 3. 1 June 2026 (announced April 2026) ─────────────────────────────────
  {
    title: "Family of Temporary Visa Holders Moving to Immigration Online from June 2026",
    slug: "family-visa-immigration-online-june-2026",
    date: "April 2026",
    category: "Policy Changes",
    summary:
      "From 1 June 2026, applications for family members of temporary visa holders will move to INZ's enhanced Immigration Online system. Applicants lodging around this date should be aware of the transition.",
    keyPoints: [
      "Transition to Immigration Online from 1 June 2026.",
      "Affects partner and dependent child visa applications linked to temporary visa holders.",
      "The new system aims to simplify and speed up the application process.",
      "Contact us if you are planning to apply for a family visa around this date.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/family-of-temporary-visa-holder-applications-moving-to-enhanced-immigration-online/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "From 1 June 2026, applications for family members of temporary visa holders will move to Immigration New Zealand's enhanced Immigration Online system. This affects partner visas and dependent child visas that are linked to a temporary visa holder's status.",
      "The transition is part of INZ's broader rollout of its upgraded online platform, which aims to provide a more streamlined and consistent experience for applicants. The new system is designed to simplify the application process and reduce processing times.",
      "If you are planning to apply for a family visa around the 1 June 2026 date, it is important to be aware of the transition. Applications submitted just before or after the changeover date may be affected by the system migration. We recommend planning your application timeline carefully and seeking advice if you are unsure.",
      "Contact us if you or a family member has an upcoming family visa application so we can help you plan around this transition date.",
    ],
  },

  // ── 4. April 2026 — Samoan Quota ──────────────────────────────────────────
  {
    title: "2026 Samoan Quota and Pacific Access Category Registrations Now Open",
    slug: "samoan-quota-pacific-access-category-2026",
    date: "April 2026",
    category: "Residence",
    summary:
      "Registrations are now open for the 2026 Samoan Quota and Pacific Access Category (PAC). These annual ballots provide a pathway to New Zealand residence for eligible citizens of Samoa, Tonga, Kiribati, and Tuvalu.",
    keyPoints: [
      "Samoan Quota: open to Samoan citizens, 1,100 places available annually.",
      "Pacific Access Category: covers Tonga, Kiribati, and Tuvalu.",
      "Applicants must register during the open period to be included in the ballot.",
      "Contact us to check your eligibility and ensure your registration is complete.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/pacific-access-category-and-samoan-quota-registrations-are-now-open-for-2026/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "Registrations are now open for the 2026 Samoan Quota and Pacific Access Category (PAC). These annual ballot-based programmes provide a pathway to New Zealand residence for eligible citizens of Pacific nations.",
      "The Samoan Quota allows up to 1,100 Samoan citizens and their families to apply for residence in New Zealand each year. Applicants must register during the open registration period to be entered into the ballot. If selected, you will be invited to apply for residence.",
      "The Pacific Access Category covers eligible citizens of Tonga, Kiribati, and Tuvalu. Like the Samoan Quota, it operates as an annual ballot with a limited number of places available for each country.",
      "To be eligible for either programme, you must meet requirements around age, English language, health, character, and an offer of employment in New Zealand. Family members may also be included in your application.",
      "Registrations are only accepted during the open window each year — missing the registration period means waiting until the following year. If you are a citizen of one of these countries or have family members who may be eligible, contact us now to check eligibility and ensure your registration is submitted correctly.",
    ],
  },

  // ── 5. 9 March 2026 ───────────────────────────────────────────────────────
  {
    title: "47 New Occupations Added to National Occupation List & Median Wage Rises to $35/hr",
    slug: "47-new-nol-occupations-median-wage-march-2026",
    date: "9 March 2026",
    category: "Work Visas",
    summary:
      "Immigration New Zealand has expanded the National Occupation List (NOL) with 47 new occupations at skill levels 1–3, including newly reclassified chef roles. The immigration median wage has also increased to NZD $35.00 per hour.",
    keyPoints: [
      "47 additional occupations now recognised under the NOL from 9 March 2026.",
      "Chef roles reclassified into clearer categories based on skill and seniority.",
      "Immigration median wage rises to NZD $35.00/hr — affects AEWV family and residence wage thresholds.",
      "Partner support thresholds also increasing — e.g. skill level 1–3 partner threshold rises to $28.00/hr.",
      "Some current AEWV workers in skill level 4–5 roles may now qualify for a new AEWV under the updated NOL.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/new-occupations-recognised-under-the-national-occupation-list-and-annual-median-wage-increase/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "From 9 March 2026, Immigration New Zealand has expanded the National Occupation List (NOL) with 47 newly recognised occupations at skill levels 1, 2, and 3. The NOL is the official system replacing the older ANZSCO classification, and is used to determine eligibility for the Accredited Employer Work Visa (AEWV) and other immigration pathways.",
      "A notable highlight of this update is the reclassification of chef roles, which have been split into clearer occupations based on skill level and seniority. This brings greater clarity for both employers and migrants working in the hospitality sector.",
      "Three occupations have moved from skill level 3 to skill level 4 under this update. This means new applications for these roles must now meet level 4 requirements, including English language proficiency and Mandatory Social Development (MSD) engagement obligations.",
      "From the same date, the immigration median wage has increased to NZD $35.00 per hour, based on June 2025 data. Although the general median wage requirement for the AEWV was removed in March 2025, several immigration settings remain linked to the median wage and will automatically update. These include wage thresholds for the Skilled Migrant Category (SMC), Green List, and Transport Work to Residence pathways.",
      "Partner and dependent income support thresholds are also increasing. For example, the skill level 1 to 3 partner support threshold rises from NZD $26.85 to $28.00 per hour, and the Green List partner support threshold increases from $33.56 to $35.00 per hour.",
      "If you are currently on an AEWV in a skill level 4 or 5 role and your employer holds an approved Job Check for a relevant NOL skill level 1 to 3 role, you may be eligible to apply for a new AEWV and extend your maximum continuous stay. We can assess whether this applies to your situation — contact us to find out more.",
    ],
  },

  // ── 6. 5 March 2026 ───────────────────────────────────────────────────────
  {
    title: "Major Skilled Migrant Category Changes Coming August 2026",
    slug: "skilled-migrant-category-changes-august-2026",
    date: "5 March 2026",
    category: "Residence",
    summary:
      "INZ has announced significant changes to the Skilled Migrant Category (SMC) taking effect in late August 2026, including two new residence pathways, updated points settings, and simplified wage requirements.",
    keyPoints: [
      "New Skilled Work Experience Pathway: 5 years experience (including 2 years in NZ) at 1.1x median wage.",
      "New Trades & Technician Pathway: Level 4+ qualification with 4 years experience (18 months in NZ).",
      "NZ qualifications now earn 1 more point than equivalent overseas qualifications.",
      "English language test validity extended to 5 years for eligible applicants.",
      "Accountants with CPA Australia membership now eligible under SMC from August 2026.",
      "Migrants only need to maintain the median wage rate from when they started — no higher threshold at residence stage.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/further-changes-to-the-skilled-migrant-category-to-come-into-effect-in-august-2026/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "Immigration New Zealand has announced significant changes to the Skilled Migrant Category (SMC) Resident Visa, taking effect from late August 2026. These changes are part of the Government's Going for Growth programme, designed to help New Zealand employers retain skilled workers and support long-term economic growth.",
      "Two new residence pathways will be introduced under the SMC. The Skilled Work Experience Pathway is for migrants in skilled roles (skill level 1 to 3) who have at least 5 years of directly relevant work experience, including 2 years in New Zealand, and who are earning at least 1.1 times the median wage. The Trades and Technician Pathway is for migrants in specified trades or technician roles who hold a relevant Level 4 or higher qualification and have at least 4 years of post-qualification experience, including 18 months in New Zealand.",
      "Changes to points settings mean that New Zealand university-level qualifications will now earn 1 more point than equivalent overseas qualifications. This is intended to encourage international students to study in New Zealand and to recognise the value of local qualifications. Where overseas qualifications are claimed, applicants must provide an International Qualification Assessment (IQA) from NZQA, or the qualification must appear on the List of Qualifications Exempt from Assessment (LQEA).",
      "The wage requirements have also been simplified. Migrants will only need to meet the SMC median wage in effect when they start gaining skilled work experience, and maintain at least that rate when applying for residence. They will no longer be required to meet a higher wage threshold at the residence application stage. A grace period of 5 months also applies if the median wage increases after a visa is granted.",
      "English language test validity will be extended to 5 years for applicants who hold a recognised qualification. Additionally, accountants who hold membership with Certified Practising Accountants (CPA) Australia and can undertake the work of a Qualified Statutory Accountant in New Zealand will be eligible under the SMC from August 2026.",
      "These pathways will open in late August 2026 and are not available under the current SMC policy. If you think you may be eligible, contact us now to start assessing your profile ahead of the opening date.",
    ],
  },

  // ── 7. 15 January 2026 ────────────────────────────────────────────────────
  {
    title: "2026 Working Holiday Scheme Opening Dates Confirmed",
    slug: "working-holiday-scheme-opening-dates-2026",
    date: "15 January 2026",
    category: "Visitor & Holiday",
    summary:
      "Immigration New Zealand has confirmed the 2026 opening dates for all capped Working Holiday Schemes. Places are limited and fill quickly — applicants should prepare documents in advance.",
    keyPoints: [
      "Opening dates vary by country — check the INZ website for your specific scheme.",
      "Applications open on the confirmed date and close once places are filled.",
      "Working holiday visas allow temporary work to support your stay in New Zealand.",
      "You cannot operate a business on a working holiday visa.",
    ],
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/2026-opening-dates-for-capped-working-holiday-schemes-confirmed/",
    sourceLabel: "Read the full announcement on INZ",
    content: [
      "Immigration New Zealand has confirmed the 2026 opening dates for all capped Working Holiday Schemes (WHS). New Zealand runs working holiday schemes with a number of countries, and many of these schemes have annual caps on the number of places available.",
      "Once a scheme opens, applications are accepted on a first-come, first-served basis until the cap is reached. Popular schemes can fill within hours of opening, so it is important to have your application ready to submit as soon as the scheme opens.",
      "Working holiday visas are intended primarily for travel and holidaying in New Zealand. Visa holders may also do temporary work to support their stay, but must work for an employer under an employment agreement or contract for services — operating a business is not permitted.",
      "Age eligibility typically ranges from 18 to 30 years old, though some schemes allow applicants up to 35. The conditions, length of stay, and any work restrictions vary by country scheme, so check the INZ website for the specific rules that apply to your passport.",
      "If you are planning to apply for a working holiday visa and want to make sure your application is complete and ready to submit on opening day, contact us for assistance.",
    ],
  },
];
