export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  result: string;
  image: string;
  alt: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  description: string;
  icon: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Datshin Abinanth Raj N H",
    shortName: "Datshin",
    initials: "DA",
    title: "AI Trainer & Human Data Specialist",
    tagline: "Former Senior Structural CAD/BIM Lead • AI Operations Specialist",
    city: "Helsinki",
    country: "Finland",
    locationStr: "Pasila, Helsinki, Finland",
    email: "abinanth28@gmail.com",
    phone: "+358 46 5752287",
    statusBadge: "Available for work • Remote globally or Helsinki",
    heroHeadline: "Precision Engineering Meets Frontier AI Evaluation.",
    heroIntro: "Bridging 10+ years of structural precision with rigorous LLM training, human feedback datasets, and quality-first AI data operations.",
    aboutBio1: "I work at the high-stakes intersection of human data, AI model evaluation, and operational quality. Currently an AI Trainer at micro1 and AI Tech Team Lead at HappyVerse Summit Finland, I evaluate frontier LLM outputs against strict rubrics—judging accuracy, edge cases, and consistency to refine the datasets shaping machine intelligence.",
    aboutBio2: "Before AI, I spent over a decade as a structural CAD and BIM specialist across Germany, the UK, and India, engineering zero-defect blueprints. That decadelong QA-first discipline is my superpower in AI operations today: validating complex multi-turn workflows, eliminating hallucinations, and transforming raw human feedback into benchmark-grade training data.",
    stats: [
      { value: "10+", label: "Years Experience", description: "Engineering CAD precision & AI operations" },
      { value: "45+", label: "Projects Delivered", description: "Across LLM evaluations & CAD frameworks (CHECK)" },
      { value: "15+", label: "Global Partners", description: "Germany, UK, India, US & Finland (CHECK)" },
      { value: "99.4%", label: "Rubric Adherence", description: "Pass rate across multi-turn QA evaluations" },
    ],
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/datshin-abinanth-raj-n-h-a09144176", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/DatshinAbinanthRaj", icon: "github" },
      { name: "Website", url: "https://9up.ai", icon: "globe" },
      { name: "Email", url: "mailto:abinanth28@gmail.com", icon: "mail" },
    ],
  },

  marqueeItems: [
    "micro1",
    "HappyVerse Summit",
    "Anthropic Claude API",
    "RLHF & Model Evaluation",
    "React & TypeScript",
    "Tata Projects",
    "ESTATIKA GmbH",
    "Assystem",
    "AutoCAD & Tekla",
    "BIM & Navisworks",
    "Haaga-Helia UAS",
    "Data Quality Ops",
  ],

  projects: [
    {
      id: "aira-ai",
      title: "Aira — Conversational AI Chat Platform",
      category: "Generative AI & Modern Web",
      tags: ["React", "Anthropic Claude API", "Tailwind CSS", "Token Streaming"],
      year: "2026",
      description: "A high-performance conversational AI interface built with React and Anthropic's Claude API. Features real-time token streaming, multi-turn prompt context retention, and error resilience.",
      result: "Sub-second response orchestration with zero state loss across network fluctuations.",
      image: "/images/aira-cover.svg",
      alt: "Aira conversational React chat platform interface powered by Claude API",
      link: "https://9up.ai",
      featured: true,
    },
    {
      id: "9up-ai",
      title: "9UP.ai — Human Data & LLM Evaluation OS",
      category: "AI Operations & Data Quality",
      tags: ["AI Operations", "RLHF", "Rubric Design", "Annotation QA"],
      year: "2026",
      description: "An operational platform engineered to standardize multi-turn prompt evaluations, edge-case rubric grading, and human feedback calibration for frontier generative models.",
      result: "Reduced rubric annotation disagreement by 38% across distributed evaluation cohorts.",
      image: "/images/9up-cover.svg",
      alt: "9UP.ai human data and LLM evaluation platform with rubric telemetry",
      link: "https://9up.ai",
      featured: true,
    },
    {
      id: "micro1-llm",
      title: "micro1 — Frontier LLM Training & Evaluation Pipeline",
      category: "Model Evaluation & Human-in-the-Loop",
      tags: ["Model Evaluation", "Human Feedback", "Red-Teaming", "Quality Control"],
      year: "2026",
      description: "Human-in-the-loop evaluation pipelines assessing frontier model reasoning, code generation, factuality, and nuance against strict multi-dimensional rubrics.",
      result: "Evaluated 1,200+ high-complexity prompt-response batches with 99%+ rubric pass rate.",
      image: "/images/micro1-cover.svg",
      alt: "micro1 LLM training and data evaluation workflow dashboard",
      link: "https://www.linkedin.com/in/datshin-abinanth-raj-n-h-a09144176",
      featured: true,
    },
    {
      id: "estatika-cad",
      title: "ESTATIKA — German Structural Formwork & Rebar Engineering",
      category: "Structural CAD & Precision Systems",
      tags: ["AutoCAD", "AllPlan", "Rebar Detailing", "German DIN Codes"],
      year: "2021 – 2023",
      description: "High-precision reinforcement and formwork drafting for massive commercial and industrial infrastructure in North Rhine-Westphalia, translating complex engineering into production-ready blueprints.",
      result: "100% compliance across 80+ engineering submissions with 0.0% downstream error rework.",
      image: "/images/estatika-cover.svg",
      alt: "ESTATIKA GmbH technical CAD formwork and rebar engineering drawing schematic",
      link: "https://www.linkedin.com/in/datshin-abinanth-raj-n-h-a09144176",
      featured: true,
    },
  ] as Project[],

  skillGroups: [
    {
      name: "AI & Model Operations",
      description: "Frontier human data quality, rubric engineering, and model auditing.",
      icon: "brain",
      skills: [
        "Human-in-the-Loop (HITL)",
        "RLHF & Model Evaluation",
        "Structured Rubric Architecture",
        "Red-Teaming & Safety Audits",
        "Hallucination Mitigation",
        "Data Annotation Taxonomy",
        "Edge-Case Identification",
      ],
    },
    {
      name: "Software & Web Engineering",
      description: "Modern web applications, APIs, and AI workflow integration.",
      icon: "code",
      skills: [
        "React & Modern UI",
        "Anthropic Claude API",
        "JavaScript & TypeScript",
        "Tailwind CSS",
        "Git & Version Control",
        "REST APIs & JSON-LD",
        "Prompt Engineering",
      ],
    },
    {
      name: "Structural CAD & BIM Systems",
      description: "Over a decade of mission-critical engineering precision and validation.",
      icon: "compass",
      skills: [
        "AutoCAD (10+ Years Expert)",
        "Revit (BIM Modeling)",
        "Tekla Structures",
        "Navisworks Clash Detection",
        "AllPlan (Nemetschek)",
        "Rebar Detailing & BBS",
        "DIN & International Codes",
      ],
    },
    {
      name: "Leadership & Operational Quality",
      description: "Managing distributed technical teams and delivering zero-defect workflows.",
      icon: "layers",
      skills: [
        "AI Tech Team Lead",
        "Cross-Functional Coordination",
        "QA-First Process Engineering",
        "Remote Global Operations",
        "Agile / Sprint Execution",
        "Design Verification",
      ],
    },
  ] as SkillGroup[],

  experiences: [
    {
      company: "HappyVerse Summit Finland",
      role: "AI Tech Team Lead",
      period: "Apr 2026 – Present (6 mos)",
      location: "Helsinki, Finland",
      description: "Directing AI-driven workflow execution, team coordination, and task optimization for scalable AI initiatives.",
      highlights: [
        "Leading a specialized team to deliver high-quality AI task outputs focused on accuracy, consistency, and scalability.",
        "Structuring and refining AI workflows, evaluation criteria, and process optimizations aligned with business objectives.",
      ],
    },
    {
      company: "micro1",
      role: "AI Trainer",
      period: "Feb 2026 – Present (8 mos)",
      location: "San Francisco Bay Area (Remote)",
      description: "Executing frontier model evaluations and human feedback dataset refinement for large language models.",
      highlights: [
        "Assessing model reasoning, code outputs, and factuality against structured multi-tiered rubrics.",
        "Synthesizing qualitative human feedback into high-accuracy calibration data to improve model alignment.",
      ],
    },
    {
      company: "Tata Projects",
      role: "Assistant Manager",
      period: "Mar 2025 – Jan 2026 (11 mos)",
      location: "Gujarat, India",
      description: "Orchestrated complex workflows, engineering planning, and cross-functional execution on large-scale infrastructure.",
      highlights: [
        "Supervised technical drawing validation and cross-team resolution for multimillion-dollar engineering projects.",
        "Instilled rigorous quality control and validation standards, reducing discrepancy turnaround by 25%.",
      ],
    },
    {
      company: "Assystem in India",
      role: "Senior CAD Designer",
      period: "May 2024 – Mar 2025 (11 mos)",
      location: "Chennai, India",
      description: "Delivered high-precision 2D/3D CAD models and structured problem solving for international engineering packages.",
      highlights: [
        "Engineered zero-defect drawings adhering strictly to stringent international engineering standards.",
        "Pioneered structured error-reduction checkpoints supporting systematic computational workflows.",
      ],
    },
    {
      company: "Hadrian Solutions Pvt. Ltd.",
      role: "Team Lead",
      period: "Sep 2023 – Apr 2024 (8 mos)",
      location: "Chennai, India",
      description: "Led engineering teams executing CAD design workflows with focus on accuracy and timeline adherence.",
      highlights: [
        "Managed task allocation, system-level thinking, and issue resolution across stakeholders and team members.",
        "Established QA frameworks that elevated team delivery throughput by 20%.",
      ],
    },
    {
      company: "ESTATIKA GmbH",
      role: "AutoCAD Expert (Schalplaner und Bewehrungsplaner)",
      period: "Mar 2021 – Sep 2023 (2 yrs 7 mos)",
      location: "North Rhine-Westphalia, Germany (Remote)",
      description: "Crafted detailed reinforcement (rebar) and formwork CAD designs for premier German building projects.",
      highlights: [
        "Translated sophisticated structural concepts into production-ready CAD outputs with zero defect rates.",
        "Collaborated seamlessly with remote European engineering teams under rigorous DIN specifications.",
      ],
    },
    {
      company: "ENOIA BABCOCK BORSIG PRIVATE LIMITED",
      role: "Senior CAD Draftsman / Checker",
      period: "Oct 2020 – Feb 2021 (5 mos)",
      location: "Chennai, India",
      description: "Conducted exhaustive validation, error detection, and drawing consistency verification before final issuance.",
      highlights: [
        "Streamlined check-print verification loops, accelerating submittal turnaround while upholding quality standards.",
      ],
    },
    {
      company: "Tata Projects",
      role: "Senior Engineer",
      period: "Aug 2019 – Jul 2020 (1 yr)",
      location: "Hyderabad, India",
      description: "Contributed to civil and structural execution, technical drawing compliance, and site coordination.",
      highlights: [
        "Monitored progress tracking, QA auditing, and cross-departmental issue resolution on active sites.",
      ],
    },
    {
      company: "cadeploy",
      role: "Associate Rebar Detailer",
      period: "Apr 2018 – Jul 2019 (1 yr 4 mos)",
      location: "Hyderabad, India",
      description: "Generated rebar detailing drawings and bar bending schedules (BBS) for high-specification structural builds.",
      highlights: [
        "Maintained high precision and layer discipline, resolving engineering queries collaboratively.",
      ],
    },
    {
      company: "C Tech RC Design India Private Limited",
      role: "CAD Technician / Rebar Detailer",
      period: "Jun 2015 – Mar 2018 (2 yrs 10 mos)",
      location: "Greater Chennai Area, India",
      description: "Foundational role producing civil drafting, BBS schedules, and 2D structural reinforcement drawings.",
      highlights: [
        "Authored 500+ compliant technical drawings with complete layer hierarchy and accurate schedules.",
      ],
    },
  ] as Experience[],

  education: [
    {
      institution: "Haaga-Helia University of Applied Sciences",
      degree: "Bachelor of Business Administration (BBA), Information Technology",
      period: "Jan 2026 – Dec 2027",
      location: "Helsinki, Finland",
      details: "Specialization in data analytics, software development, and modern AI systems.",
    },
    {
      institution: "Golden Gate University",
      degree: "Bachelor of Engineering, Computer Science",
      period: "Mar 2024 – Sep 2025",
      location: "California, USA",
      details: "Core computational foundations, data structures, algorithms, and software engineering.",
    },
    {
      institution: "Murugappa Polytechnic College",
      degree: "Diploma in Civil Engineering",
      period: "Apr 2012 – Apr 2015",
      location: "Chennai, India",
      details: "Structural mechanics, drafting standards, survey analysis, and project planning.",
    },
  ],

  seo: {
    siteUrl: "https://datshin.dev",
    title: "Datshin Abinanth Raj | AI Trainer & Data Lead in Helsinki",
    description: "Datshin Abinanth Raj is an AI Trainer and Human Data Lead in Helsinki, bridging 10+ years of structural precision with LLM evaluation and RLHF operations.",
    keywords: [
      "Datshin Abinanth Raj",
      "Datshin Abinanth Raj portfolio",
      "AI Trainer in Helsinki",
      "Human Data Specialist Finland",
      "AI Operations Lead Helsinki",
      "LLM evaluation specialist",
      "AI data annotation lead",
      "Structural CAD BIM expert Helsinki",
      "Model evaluation engineer remote",
      "RLHF and rubric design specialist remote",
      "React Claude Anthropic chat application developer",
      "Hire AI trainer in Helsinki",
    ],
  },
};
