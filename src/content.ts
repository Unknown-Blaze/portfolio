// Every word on the site lives in this file. Edit here; the components only lay it out.
// Product names that must not break across lines ("ROS 2") use a no-break space, written \u00a0.

export type Domain = "AI & ML" | "Web" | "Mobile" | "Robotics" | "Embedded" | "Blockchain";

export const DOMAINS: readonly Domain[] = ["AI & ML", "Web", "Mobile", "Robotics", "Embedded", "Blockchain"];

export interface Link {
  label: string;
  href: string;
}

/** A key number pinned to a card with a leader line, like a dimension note on a drawing. */
export interface Callout {
  value: string;
  note: string;
}

export interface Image {
  /** Path under public/, without the base prefix. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const REVISION = "2026-10";

export const person = {
  name: "Rudra Prasadh Ganesh",
  // Word joiners and no-break spaces keep "AI, full-stack & robotics" on one line.
  headline: "Software engineer · AI,\u00a0full-\u2060stack\u00a0&\u00a0robotics",
  breadth:
    "Machine learning · web & mobile · embedded & robotics. I take software from research model to production, and today I own the ROS\u00a02 software of an autonomous construction robot deployed in Singapore and Australia.",
  location: "Singapore",
  email: "grudraprasadh@gmail.com",
  github: "https://github.com/Unknown-Blaze",
  linkedin: "https://www.linkedin.com/in/unknown-blaze",
  repo: "https://github.com/Unknown-Blaze/portfolio",
  resumePdf: "Rudra_Prasadh_Ganesh_Resume.pdf",
  photo: {
    src: "img/rudra.webp",
    alt: "Rudra Prasadh Ganesh standing at a lecture-theatre console at NTU, smiling",
    width: 480,
    height: 480,
  } satisfies Image,
};

export const facts: readonly string[] = [
  "Lee Kuan Yew Gold Medal",
  "AIED 2026 co-author",
  "600+ daily users on iOS & Android",
  "Winner, EasyA x Ripple",
];

/* ---------- Colour code, used across the sheet ---------- */

/** What kind of work a role or a number comes from; each kind has one colour on every sheet. */
export type Kind = "industry" | "research" | "venture" | "campus";

export const KINDS: readonly { kind: Kind; label: string; note: string }[] = [
  { kind: "industry", label: "Industry", note: "employed engineering roles" },
  { kind: "research", label: "Research", note: "papers, lab and study work" },
  { kind: "venture", label: "Own venture", note: "co-founded, freelance and own builds" },
  { kind: "campus", label: "Campus", note: "university roles" },
];

/* ---------- 00A By the numbers ---------- */

/** One key dimension. `from` is where the count-up starts; `to` is the figure shown at rest. */
export interface KeyNumber {
  from: number;
  to: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
  source: string;
  kind: Kind;
}

export const numbers: readonly KeyNumber[] = [
  {
    from: 0,
    to: 600,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "daily active users",
    source: "MyCCDS",
    kind: "venture",
  },
  {
    from: 0,
    to: 0.859,
    decimals: 3,
    prefix: "",
    suffix: "",
    label: "PCC vs 0.847 best baseline",
    source: "Final Year Project",
    kind: "research",
  },
  {
    from: 300,
    to: 50,
    decimals: 0,
    prefix: "300→",
    suffix: " ms",
    label: "API latency",
    source: "LISA 1.0",
    kind: "industry",
  },
  { from: 0, to: 70, decimals: 0, prefix: "−", suffix: "%", label: "cloud cost", source: "LISA 1.0", kind: "industry" },
  {
    from: 90,
    to: 99.9,
    decimals: 1,
    prefix: "",
    suffix: "%",
    label: "session stability",
    source: "NIE tutoring backend",
    kind: "research",
  },
  {
    from: 0,
    to: 5,
    decimals: 0,
    prefix: "",
    suffix: "",
    label: "hackathon placings",
    source: "Winner to finalist",
    kind: "venture",
  },
];

/* ---------- 01 Now ---------- */

export interface NowItem {
  org: string;
  role: string;
  since: string;
  summary: string;
  stack: readonly string[];
}

export const nowIntro =
  "I own the software of an autonomous construction robot at Fabrica AI, and I build Lumerva, the learning platform I co-founded, end to end.";

export const now: readonly NowItem[] = [
  {
    org: "Fabrica AI",
    role: "Software Engineer",
    since: "Jul 2026",
    summary:
      "Sole software engineer on a autonomous tile-grouting robot deployed in Singapore and Australia. I own its ROS\u00a02 codebase, from perception to release.",
    stack: ["ROS\u00a02", "LiDAR", "SLAM", "Behaviour trees", "Gazebo", "Docker", "GitHub Actions"],
  },
  {
    org: "Lumerva",
    role: "Co-Founder and Full Stack Engineer",
    since: "Sep 2025",
    summary:
      "A learning platform that builds personalised course paths, quizzes and content modules. I build all of it: React and TypeScript front end, Python services, Celery and Redis background jobs.",
    stack: ["React", "TypeScript", "Python", "Celery", "Redis", "YouTube Data API", "Brave Search API"],
  },
];

/* ---------- 02 Selected work ---------- */

export interface Work {
  id: string;
  name: string;
  context: string;
  period: string;
  domains: readonly Domain[];
  summary: string;
  points: readonly string[];
  stack: readonly string[];
  callouts: readonly Callout[];
  links: readonly Link[];
  image?: Image;
  /** Phone screenshots shown as a strip, in place of `image`. */
  gallery?: readonly Image[];
  /** A drawn plate shown in place of a screenshot, for work with nothing public to show. */
  plate?: "robot";
  /** A system plate (light and dark SVG in public/plates/). Leads the figure unless there is a gallery. */
  system?: SystemPlate;
}

export interface SystemPlate {
  /** File stem: public/plates/<name>-light.svg and <name>-dark.svg. */
  name: "fyp" | "lisa" | "modec" | "myccds" | "truthfairy";
  alt: string;
  width: number;
  height: number;
}

const shot = (file: string, alt: string): Image => ({ src: `img/${file}.webp`, alt, width: 800, height: 450 });
// Taken from the app's own store listing, status and navigation bars trimmed.
const phone = (file: string, alt: string): Image => ({ src: `work/myccds/${file}.webp`, alt, width: 300, height: 582 });

export const work: readonly Work[] = [
  {
    id: "myccds",
    name: "MyCCDS",
    context: "Student platform for NTU's College of Computing and Data Science",
    period: "Nov 2024 – present",
    domains: ["Mobile"],
    summary: "One app for CCDS students' links, guides and calendars, used by 600+ students a day on iOS and Android.",
    points: [
      "Shipped to the App Store and Google Play from one React Native, Expo and Redux codebase.",
      "600+ daily active users and a 5-star store rating.",
      "Tuned caching to speed up content discovery.",
    ],
    stack: ["React Native", "Expo", "Redux"],
    callouts: [{ value: "600+", note: "daily active users" }],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.ntu.myccds" },
      { label: "App Store", href: "https://apps.apple.com/us/app/myccds/id6753279278" },
      {
        label: "NTU article",
        href: "https://www.ntu.edu.sg/computing/news-events/news/detail/ganesh-rudra-prasadh-transforms-student-experience-with-myccds",
      },
    ],
    gallery: [
      phone("welcome", "MyCCDS welcome screen: your one-stop portal for all CCDS needs"),
      phone("home", "MyCCDS home screen with top links to the student intranet, STARS and NTULearn"),
      phone("guide", "MyCCDS getting-started guide explaining the links, side navigation and in-app browser"),
      phone("calendar", "MyCCDS academic calendar page listing the calendars by academic year"),
    ],
    system: {
      name: "myccds",
      alt: "System plate: an Expo and React Native app on iOS and Android, backed by Firebase Authentication and Firestore. 600+ daily active users, 5-star store rating.",
      width: 600,
      height: 560,
    },
  },
  {
    id: "mhc-peptide",
    name: "MHC-peptide binding prediction",
    context: "Final Year Project, graded A · Bioinformatics Lab, NTU · submitted to ICLR 2027",
    period: "Aug 2025 – May 2026",
    domains: ["AI & ML"],
    summary:
      "Predicts MHC-peptide binding affinity, a core problem in vaccine and immunotherapy design, from ESM-2 sequence embeddings and AlphaFold-derived structure.",
    points: [
      "PCC 0.859 vs 0.847 for the best state-of-the-art baseline retrained on the same split; R² and Spearman up 0.5–2%.",
      "ESM-2 (650M) fine-tuned with LoRA/PEFT in PyTorch on an NVIDIA A100 80GB.",
      "Dataset from IEDB; 3D structures from a self-built ColabFold extension.",
      "Homology-based 80/10/10 split to prevent sequence-similarity leakage.",
      "Supervised by Prof. Jagath C. Rajapakse.",
    ],
    stack: ["PyTorch", "ESM-2", "AlphaFold", "ColabFold", "LoRA/PEFT"],
    callouts: [{ value: "0.859", note: "PCC vs 0.847 baseline" }],
    links: [{ label: "Code", href: "https://github.com/Unknown-Blaze/FYP-Research" }],
    image: shot("fyp", "Bar chart of Pearson correlation: best retrained baseline 0.847, this model 0.859"),
    system: {
      name: "fyp",
      alt: "System plate: IEDB data feeds a sequence branch (ESM-2 650M with LoRA) and a structure branch (ColabFold structures as graphs for a GNN); an ensemble predicts binding affinity. PCC 0.859 against 0.847.",
      width: 600,
      height: 660,
    },
  },
  {
    id: "ngodonate",
    name: "nGoDonate",
    context: "Winner, Best Developer Tooling · EasyA x Ripple Hackathon",
    period: "Jun 2025 – Nov 2025",
    domains: ["Blockchain", "Web"],
    summary:
      "Donations that donors can audit: milestone escrow on XRPL and Ethereum, with NFT receipts and certificates.",
    points: [
      "2 s transaction finality across XRPL and Ethereum.",
      "Milestone-based escrow keeps every release on chain; donors receive NFT receipts and certificates.",
      "Supporting documents stored on IPFS and linked to on-chain records for verification.",
    ],
    stack: ["XRPL", "Ethereum", "NFT receipts", "IPFS"],
    callouts: [{ value: "2 s", note: "transaction finality" }],
    links: [
      { label: "Live", href: "https://easya-hackathon-tawny.vercel.app" },
      { label: "Live (course build)", href: "https://sc-4053-bc-project.vercel.app" },
      { label: "Code", href: "https://github.com/Unknown-Blaze/SC4053-Project" },
    ],
    image: shot("ngodonate", "nGoDonate landing page: Amplify your impact, transparently"),
  },
  {
    id: "grouting-robot",
    name: "Autonomous tile-grouting robot",
    context: "Fabrica AI · deployed in Singapore and Australia",
    period: "Jul 2026 – present",
    domains: ["Robotics", "Embedded"],
    summary: "The ROS\u00a02 software of a autonomous robot that automates tile grouting on construction sites.",
    points: [
      "Delivered a complete LiDAR upgrade, from integration to on-site deployment, in one month.",
      "Autonomy stack: LiDAR and camera perception, SLAM, navigation, motion planning and behaviour trees.",
      "Behaviour tested in Gazebo; reproducible Docker builds; CI/CD on GitHub Actions.",
    ],
    stack: ["ROS\u00a02", "LiDAR", "SLAM", "Gazebo", "Docker", "GitHub Actions"],
    callouts: [{ value: "1 month", note: "LiDAR upgrade, integration to site" }],
    links: [],
    plate: "robot",
  },
  {
    id: "synctube",
    name: "SyncTube",
    context: "Real-time synchronised video streaming and collaboration",
    period: "Sep 2024 – Dec 2024",
    domains: ["Web"],
    summary: "Watch parties for YouTube: one room, one shared player, playback kept in sync for everyone in real time.",
    points: [
      "Built synchronised playback and room-state management for multi-user watch sessions.",
      "Added reconnect handling so a dropped connection rejoins the room without breaking the session.",
    ],
    stack: ["Next.js 15", "Socket.IO", "YouTube IFrame API"],
    callouts: [],
    links: [
      { label: "Live", href: "https://synctube-tau.vercel.app" },
      { label: "Code", href: "https://github.com/Unknown-Blaze/synctube" },
    ],
    image: shot("synctube", "SyncTube create-party form for watching YouTube in sync"),
  },
  {
    id: "mango",
    name: "Mango order management",
    context: "B2B ordering, payments and operational analytics for a retailer",
    period: "Jan 2025 – May 2025",
    domains: ["Web"],
    summary: "A live ordering and Stripe payment system for a B2B retailer.",
    points: ["Built the ordering and payment flows end to end with React, Firebase and Stripe."],
    stack: ["React", "Firebase", "Stripe"],
    callouts: [],
    links: [{ label: "Live", href: "https://mango-club.vercel.app" }],
    image: shot("mango", "Mango ordering page listing varieties with per-box quantities"),
  },
  {
    id: "blazing-chess",
    name: "Blazing Chess",
    context: "Academy website",
    period: "",
    domains: ["Web"],
    summary: "The live website of a chess academy, built with Next.js 14 and Tailwind CSS.",
    points: [],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    callouts: [],
    links: [
      { label: "Live", href: "https://blazing-chess.vercel.app" },
      { label: "Code", href: "https://github.com/Unknown-Blaze/blazing-chess" },
    ],
    image: shot("blazing-chess", "Blazing Chess academy homepage: Build your chess mastery"),
  },
  {
    id: "lisa",
    name: "LISA 1.0",
    context: "Automotive advisor platform · MISUMI.AI",
    period: "Sep 2025 – Aug 2026",
    domains: ["AI & ML", "Web"],
    summary: "An AI automotive advisor that serves MISUMI's customers in production across 4 ASEAN markets.",
    points: [
      "API latency cut from 300 ms to 50 ms; cloud cost down 70%.",
      "Next.js 15 and PostgreSQL, with RAG over structured Japanese and English automotive listings.",
      "Containerised microservices on Alibaba Cloud, provisioned with Terraform.",
    ],
    stack: ["Next.js 15", "PostgreSQL", "RAG", "Alibaba Cloud", "Terraform"],
    callouts: [
      { value: "300→50 ms", note: "API latency" },
      { value: "−70%", note: "cloud cost" },
    ],
    links: [],
    system: {
      name: "lisa",
      alt: "System plate: users in 4 ASEAN markets reach a Next.js 15 app; an API layer with PostgreSQL runs retrieval over a document store, then an LLM returns the answer. Alibaba Cloud with Terraform. API latency 300 ms to 50 ms; cloud cost down 70%.",
      width: 600,
      height: 640,
    },
  },
  {
    id: "nie-tutoring",
    name: "Real-time tutoring backend",
    context: "AI Engineer (part-time) · National Institute of Education, NTU",
    period: "Jun 2025 – Oct 2025",
    domains: ["AI & ML", "Web"],
    summary: "The real-time backend of an intelligent tutoring system, evaluated in a peer-reviewed AIED 2026 study.",
    points: [
      "One of two primary developers; WebSocket sessions held 99.9% stability.",
      "Organised the 60-participant study behind the co-authored AIED 2026 paper.",
    ],
    stack: ["WebSockets", "Real-time backend"],
    callouts: [{ value: "99.9%", note: "session stability" }],
    links: [{ label: "AIED 2026 paper", href: "https://doi.org/10.1007/978-3-032-29791-4_2" }],
  },
  {
    id: "yolo-api",
    name: "YOLOv8 inference API",
    context: "Full Stack Engineer Intern · Panasonic R&D Center Singapore",
    period: "Jan 2025 – Jun 2025",
    domains: ["AI & ML", "Web"],
    summary: "A FastAPI service that serves YOLOv8 object detection to real-time workflows.",
    points: ["Packaged with Docker; async processing and caching tuned for latency."],
    stack: ["FastAPI", "Docker", "YOLOv8", "Python"],
    callouts: [],
    links: [],
  },
  {
    id: "birdclef",
    name: "BirdCLEF on Kaggle",
    context: "SC4000 course project · Kaggle competition",
    period: "",
    domains: ["AI & ML"],
    summary: "An entry for BirdCLEF, the Kaggle competition to identify bird species from audio recordings.",
    points: [],
    stack: ["Machine learning", "Kaggle"],
    callouts: [],
    links: [],
  },
  {
    id: "bloomberg",
    name: "Bloomberg Code Crunch",
    context: "Quantitative trading-signal pipeline",
    period: "",
    domains: ["AI & ML"],
    summary:
      "A deep-learning pipeline that predicts trading signals with LSTM, GRU and Transformer models, backtested net of transaction costs.",
    points: [],
    stack: ["Python", "PyTorch", "pandas", "scikit-learn"],
    callouts: [],
    links: [],
  },
  {
    id: "careeraxis",
    name: "CareerAxis automator",
    context: "Personal automation tool · co-built with a fellow student",
    period: "",
    domains: ["AI & ML"],
    summary: "An LLM pipeline that collects NTU CareerAxis job listings and drafts tailored applications.",
    points: [],
    stack: ["Python", "Playwright", "LLM", "SQLite"],
    callouts: [],
    links: [],
  },
  {
    id: "edge-ai",
    name: "Edge-AI security pipeline",
    context: "President Research Scholar, URECA · ODROID N2",
    period: "Aug 2024 – Apr 2025",
    domains: ["AI & ML", "Embedded"],
    summary: "Motion detection for an IoT security system that runs on the device itself, an ODROID N2.",
    points: [
      "96% motion-detection accuracy at 180 ms latency.",
      "Tuned thresholds and buffering to cut false positives under changing light.",
      "Presented as a research poster for the URECA programme.",
    ],
    stack: ["Edge AI", "IoT", "ODROID N2"],
    callouts: [{ value: "96% @ 180 ms", note: "accuracy at latency" }],
    links: [],
  },
  {
    id: "mdp-robot-car",
    name: "STM32 robot car",
    context: "SC2079 Multidisciplinary Project · group coursework",
    period: "",
    domains: ["Embedded"],
    summary: "Firmware for a robot car: FreeRTOS tasks, PID motor control and IMU feedback.",
    points: [],
    stack: ["C", "STM32F407", "FreeRTOS", "PID", "IMU"],
    callouts: [],
    links: [],
  },
  {
    id: "sentiment",
    name: "Sentiment analysis platform",
    context: "SC4001 group project",
    period: "Jan 2024 – Apr 2024",
    domains: ["AI & ML", "Web"],
    summary: "A text-analytics platform that classifies sentiment through model-serving APIs and charts the trends.",
    points: [
      "Built preprocessing and model-inference endpoints for sentiment classification.",
      "Built dashboard views for trend analysis.",
    ],
    stack: ["NLP", "Model-serving APIs", "Dashboards"],
    callouts: [],
    links: [{ label: "Code", href: "https://github.com/Unknown-Blaze/SC4001-Group-Project" }],
  },
  {
    id: "modec-analytics",
    name: "Sustainability analytics platform",
    context: "Software Engineer Intern · MODEC",
    period: "Jun 2025 – Aug 2025",
    domains: ["Web"],
    summary:
      "A sustainability analytics platform, built solo, that turns vendor data and IoT logs into environmental reporting.",
    points: [
      "React vendor-data workflows on a Django REST Framework backend serving 500+ concurrent requests.",
      "Redis caching cut retrieval time by 40%; IoT logs ingested through AWS Lambda and Amazon S3.",
    ],
    stack: ["React", "Django", "DRF", "Redis", "AWS Lambda", "Amazon S3"],
    callouts: [
      { value: "500+", note: "concurrent requests" },
      { value: "−40%", note: "retrieval time" },
    ],
    links: [],
    system: {
      name: "modec",
      alt: "System plate: IoT logs ingested through AWS Lambda and Amazon S3 into a Django REST backend with a Redis cache, serving a React dashboard. 500+ concurrent requests; retrieval time down 40%.",
      width: 600,
      height: 600,
    },
  },
  {
    id: "truth-fairy",
    name: "Truth Fairy",
    context: "NTU TechFest Hackathon · Top 5",
    period: "Jan 2025",
    domains: ["AI & ML", "Web"],
    summary:
      "A Chrome extension that slows misinformation by checking highlighted text and flagging manipulated images as you browse.",
    points: [
      "The extension sends page images to a Flask API running a PyTorch deepfake classifier.",
      "Grad-CAM heatmaps are drawn back over the page to show where the model looked.",
    ],
    stack: ["Chrome extension", "JavaScript", "Flask", "PyTorch", "Grad-CAM"],
    callouts: [{ value: "Top 5", note: "NTU TechFest" }],
    links: [{ label: "Code", href: "https://github.com/Unknown-Blaze/techfest-truth-fairy" }],
    system: {
      name: "truthfairy",
      alt: "System plate: a Chrome extension calls a Flask API with a PyTorch deepfake classifier; a Grad-CAM heatmap is overlaid back in the page.",
      width: 600,
      height: 490,
    },
  },
  {
    id: "ccds-alumni",
    name: "CCDS alumni platform",
    context: "Full Stack Developer · NTU College of Computing and Data Science",
    period: "May 2024 – Jul 2025",
    domains: ["Web"],
    summary: "A platform that connects CCDS alumni with students for startup and event collaboration.",
    points: ["Led development end to end: features, backend and site performance."],
    stack: ["WordPress", "PHP", "SQL"],
    callouts: [],
    links: [],
  },
  {
    id: "kaboo",
    name: "Kaboo",
    context: "Card game for the web",
    period: "",
    domains: ["Web"],
    summary: "The Kaboo card game in the browser, with lobbies for friends and an AI opponent.",
    points: [],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    callouts: [],
    links: [],
  },
  {
    id: "inventory-erp",
    name: "Inventory ERP",
    context: "Built for a trading company",
    period: "",
    domains: ["Web"],
    summary:
      "Runs a trading company's daily operations: stock in and out, orders, shipments, a printable catalogue, invoices and delivery orders.",
    points: [],
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    callouts: [],
    links: [],
  },
  {
    id: "mango-season-erp",
    name: "Mango-season ERP",
    context: "Inventory and sales for a seasonal fruit business",
    period: "",
    domains: ["Web"],
    summary:
      "A local-first inventory and sales app for a seasonal business: works offline, imports Excel and syncs to Supabase.",
    points: [],
    stack: ["React", "Supabase", "Python", "Playwright"],
    callouts: [],
    links: [],
  },
  {
    id: "restaurant-site",
    name: "Restaurant website",
    context: "Client work",
    period: "",
    domains: ["Web"],
    summary: "A marketing website for a restaurant.",
    points: [],
    stack: ["React", "Vite", "CSS"],
    callouts: [],
    links: [],
  },
  {
    id: "vr-chem",
    name: "Virtual reality chemistry laboratory",
    context: "NTU School of Materials Science and Engineering · team of four",
    period: "May 2026 – Jul 2026",
    domains: [],
    summary:
      "Replaces static diagrams in an introductory chemistry course: students handle 3D molecules in a Meta Quest 3 and sit in-VR quizzes.",
    points: [],
    stack: ["Unity", "Meta Quest 3"],
    callouts: [],
    links: [],
  },
];

/* ---------- 03 Experience ---------- */

export interface Role {
  title: string;
  org: string;
  tag: string;
  kind: Kind;
  period: string;
  location: string;
  bullets: readonly string[];
}

export const experience: readonly Role[] = [
  {
    title: "Software Engineer",
    org: "Fabrica AI",
    tag: "FABRICA",
    kind: "industry",
    period: "Jul 2026 – present",
    location: "Singapore",
    bullets: [
      "Sole software engineer: own the ROS\u00a02 codebase of a autonomous tile-grouting robot deployed commercially in Singapore and Australia.",
      "Delivered a complete LiDAR upgrade, from integration to on-site deployment, in one month.",
      "Integrate, tune and debug the autonomy stack: LiDAR and camera perception, SLAM, navigation, motion planning and behaviour trees.",
      "Direct intern engineers and integrate the software with the mechanical and electrical teams.",
      "Test behaviour in Gazebo, build reproducibly with Docker on development machines and the robot, and release through GitHub Actions.",
    ],
  },
  {
    title: "Co-Founder and Full Stack Engineer",
    org: "Lumerva",
    tag: "LUMERVA",
    kind: "venture",
    period: "Sep 2025 – present",
    location: "Singapore",
    bullets: [
      "Build the full stack of a production learning platform: React and TypeScript front end, Python back-end services.",
      "Designed Celery and Redis background jobs that raise throughput and cut request latency.",
      "Built modular API and content pipelines for personalised course paths, quizzes and content modules.",
      "Integrated the YouTube Data API and Brave Search API, with ranking logic that improves discovery quality.",
    ],
  },
  {
    title: "DevOps Engineer and Team Lead",
    org: "Misumi Kaizen OU Group (MISUMI.AI)",
    tag: "MISUMI.AI",
    kind: "industry",
    period: "Sep 2025 – Aug 2026",
    location: "Singapore",
    bullets: [
      "Led LISA 1.0 from build to production: an automotive advisor on Next.js 15, PostgreSQL and RAG serving MISUMI's international customers.",
      "Cut API latency from 300 ms to 50 ms through caching, query optimisation and service-level tuning.",
      "Cut cloud cost by 70% through performance and workload tuning.",
      "Owned cloud architecture and infrastructure operations for production in 4 ASEAN markets.",
      "Co-architected containerised microservices on Alibaba Cloud, in Terraform, with RAG over Japanese and English automotive listings.",
      "Stayed on as developer and technical advisor for LISA 2.0, guiding a new team on architecture and retrieval design.",
    ],
  },
  {
    title: "DevOps Intern",
    org: "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
    tag: "MODEC",
    kind: "industry",
    period: "Dec 2025 – Jan 2026",
    location: "Singapore",
    bullets: [
      "Took an analytical data application from proof of concept to secure production.",
      "Configured and ran AWS Elastic Beanstalk environments with security-aligned release processes.",
      "Added a CI/CD workflow with validation gates for stable, repeatable releases.",
      "Planned testing and rollback to meet the company's security and reliability benchmarks.",
    ],
  },
  {
    title: "AI Engineer (part-time)",
    org: "National Institute of Education, NTU",
    tag: "NIE",
    kind: "research",
    period: "Jun 2025 – Oct 2025",
    location: "Singapore",
    bullets: [
      "One of two primary developers of the backend and real-time infrastructure for an intelligent tutoring system.",
      "Designed low-latency WebSocket communication that held 99.9% session stability.",
      "Co-authored the peer-reviewed AIED 2026 paper (Springer) on scaffolding emotion regulation in productive failure (PI: Dr. Tanmay Sinha).",
      "Organised the 60-participant user study and consolidated its qualitative and quantitative findings for product iteration.",
    ],
  },
  {
    title: "Software Engineer Intern, Sustainability Analytics",
    org: "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
    tag: "MODEC",
    kind: "industry",
    period: "Jun 2025 – Aug 2025",
    location: "Singapore",
    bullets: [
      "Independently delivered a full-stack web application for sustainability and environmental analytics.",
      "Engineered a Django REST Framework backend serving 500+ concurrent requests at 99.9% uptime.",
      "Improved retrieval performance by 40% with Redis caching and optimised query paths.",
      "Built responsive React workflows for complex vendor data collection and reporting.",
      "Ran the AWS deployment and IoT log ingestion through AWS Lambda and Amazon S3.",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    org: "Panasonic R&D Center Singapore",
    tag: "PANASONIC",
    kind: "industry",
    period: "Jan 2025 – Jun 2025",
    location: "Singapore",
    bullets: [
      "Deployed a FastAPI and Docker inference API serving YOLOv8, with async processing for real-time workflows.",
      "Debugged and optimised workflows across SQL, Python, Redis and networked services.",
      "Refined caching strategies to improve retrieval speed, latency and reliability.",
      "Designed and ran tests that found bottlenecks and validated system integrity.",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "NTU College of Computing and Data Science (CCDS)",
    tag: "NTU CCDS",
    kind: "campus",
    period: "May 2024 – Jul 2025",
    location: "Singapore",
    bullets: [
      "Led end-to-end development of a platform connecting alumni and students for startup and event collaboration.",
      "Built and maintained full-stack features in WordPress, PHP and SQL, with custom front-end work.",
      "Optimised backend processes and site performance for reliability and user experience.",
    ],
  },
  {
    title: "Embedded Engineering Intern, Edge Data Systems",
    org: "Schaeffler Hub for Advanced Research",
    tag: "SCHAEFFLER",
    kind: "industry",
    period: "May 2024 – Aug 2024",
    location: "Singapore",
    bullets: [
      "Improved performance by 20% with low-latency EtherCAT and FreeRTOS scheduling on an XMC4800 microcontroller.",
      "Integrated CAN bus on the XMC4800 in a master-slave configuration between controller and actuator.",
      "Enabled higher-frequency telemetry for predictive maintenance and edge analytics.",
      "Contributed to the embedded framework across Arduino, STM32F4 and XMC4800.",
    ],
  },
  {
    title: "SCSE Peer Coach",
    org: "Nanyang Technological University",
    tag: "NTU",
    kind: "campus",
    period: "Jan 2024 – Apr 2024",
    location: "Singapore",
    bullets: [
      "Selected as one of four SCSE peer coaches for students on academic warning.",
      "Gave personalised study planning, mentorship and accountability support.",
    ],
  },
  {
    title: "Chess CCA Coach, MOE-qualified",
    org: "Freelance",
    tag: "FREELANCE",
    kind: "venture",
    period: "Jan 2024 – Apr 2024",
    location: "Singapore",
    bullets: [
      "Taught structured chess lessons in school CCA sessions, focused on critical thinking and strategy.",
      "Built training plans that develop problem-solving and decision-making under constraints.",
    ],
  },
];

/* ---------- 04 Research ---------- */

export interface Research {
  kind: string;
  title: string;
  detail: string;
  meta: string;
  link?: Link;
}

export const research: readonly Research[] = [
  {
    kind: "Peer-reviewed publication",
    title: "Scaffolding Emotion Regulation in Productive Failure Using an AIED System: Prototyping and Evaluation",
    detail:
      "Sinha, T., Huang, R., & Ganesh, R. P. (2026). In Artificial Intelligence in Education (AIED 2026), Communications in Computer and Information Science, pp. 17–32. Springer Nature Switzerland.",
    meta: "AIED 2026 · Springer CCIS",
    link: { label: "doi:10.1007/978-3-032-29791-4_2", href: "https://doi.org/10.1007/978-3-032-29791-4_2" },
  },
  {
    kind: "Final Year Project · submitted to ICLR 2027",
    title: "Multimodal deep learning for MHC-peptide binding affinity prediction",
    detail:
      "PCC 0.859 vs 0.847 for the strongest baseline retrained on the same dataset and split. ESM-2 (650M) sequence embeddings fused with AlphaFold-derived structure, fine-tuned with LoRA/PEFT. Graded A; supervised by Prof. Jagath C. Rajapakse, Bioinformatics Lab, NTU.",
    meta: "Aug 2025 – May 2026",
    link: { label: "github.com/Unknown-Blaze/FYP-Research", href: "https://github.com/Unknown-Blaze/FYP-Research" },
  },
  {
    kind: "URECA · research poster",
    title: "Edge-AI motion detection for IoT security on an ODROID N2",
    detail:
      "96% motion-detection accuracy at 180 ms latency, with thresholds and buffering tuned to cut false positives under changing light. Presented as a research poster as a URECA President Research Scholar.",
    meta: "Aug 2024 – Apr 2025",
  },
];

/* ---------- 05 Hackathons & awards ---------- */

export interface Medal {
  placing: string;
  name: string;
  event: string;
  date: string;
  note: string;
  link?: Link;
}

export const hackathons: readonly Medal[] = [
  {
    placing: "WINNER",
    name: "nGoDonate",
    event: "EasyA x Ripple Hackathon · Best Developer Tooling",
    date: "2025",
    note: "Auditable donations on XRPL and Ethereum: milestone escrow, NFT receipts and IPFS-stored documents.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/SC4053-Project" },
  },
  {
    placing: "NATIONAL TOP 10",
    name: "FunctionGemma",
    event: "Cactus x Google Global Hackathon",
    date: "Feb 2025",
    note: "Agentic workflow on Google Gemma with function calling, routing tool calls between an on-device model and the cloud.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/functiongemma-hackathon" },
  },
  {
    placing: "TOP 5",
    name: "Truth Fairy",
    event: "NTU TechFest Hackathon",
    date: "Jan 2025",
    note: "Chrome extension against misinformation: deepfake detection with Grad-CAM explanations on the page.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/techfest-truth-fairy" },
  },
  {
    placing: "FINALIST",
    name: "GroceryGrabber",
    event: "DSTA BrainHack",
    date: "May 2024",
    note: "Led the team. PostGIS search within a 5 km radius and GPT-powered parsing rank nearby grocery inventory.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/BrainHacks-Code-Exp" },
  },
  {
    placing: "FINALIST",
    name: "Port downtime and freight forecasting",
    event: "PSA Code Sprint",
    date: "May 2024",
    note: "TensorFlow time-series forecasting with a Django backend and an operations dashboard.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/PSASprint" },
  },
];

export const honours: readonly Medal[] = [
  {
    placing: "GOLD MEDAL",
    name: "Lee Kuan Yew Gold Medal",
    event: "Nanyang Technological University",
    date: "2026",
    note: "Awarded to the top graduating student of the cohort.",
  },
  {
    placing: "HIGHEST",
    name: "Honours (Highest Distinction)",
    event: "BEng Computer Engineering, NTU",
    date: "2026",
    note: "The highest degree classification NTU awards.",
  },
  {
    placing: "PUBLISHED",
    name: "Peer-reviewed publication",
    event: "AIED 2026, Springer Nature Switzerland",
    date: "2026",
    note: "Co-author; Springer CCIS, pp. 17–32.",
  },
  {
    placing: "FULL",
    name: "NTU Science and Engineering Scholarship",
    event: "Nanyang Technological University",
    date: "",
    note: "Full scholarship.",
  },
  {
    placing: "4 / 4 YEARS",
    name: "Dean's List",
    event: "Nanyang Technological University",
    date: "",
    note: "Every academic year; top 5% of the cohort.",
  },
  {
    placing: "SCHOLAR",
    name: "President Research Scholar",
    event: "URECA, NTU",
    date: "2024 – 2025",
    note: "Edge-AI motion detection research.",
  },
  {
    placing: "FINALIST",
    name: "Malaysia National Cubing Open",
    event: "Speedcubing",
    date: "",
    note: "Finalist at national level.",
  },
  {
    placing: "DISTINCTION",
    name: "ABRSM Piano Grade 8",
    event: "Associated Board of the Royal Schools of Music",
    date: "",
    note: "Grade 8 with Distinction.",
  },
];

/* ---------- 06 Skills: the résumé's thirteen groups ---------- */

export interface SkillGroup {
  group: string;
  items: string;
}

export const skills: readonly SkillGroup[] = [
  {
    group: "AI/ML and LLM systems",
    items:
      "PyTorch, TensorFlow, scikit-learn, Hugging Face, Transformers, LoRA, PEFT, RAG, LangChain, LangGraph, Ollama, prompt engineering, fine-tuning, model evaluation",
  },
  {
    group: "Computer vision and NLP",
    items: "YOLO, YOLOv8, Grad-CAM, tokenisation, sentiment analysis, multimodal integration, ESM-2, AlphaFold",
  },
  {
    group: "Data and analytics",
    items:
      "ETL, ELT, data modelling, feature engineering, pandas, NumPy, PostGIS, Power BI, Tableau, dashboard design, time-series forecasting",
  },
  {
    group: "Programming languages",
    items: "Python, TypeScript, JavaScript, Java, C#, SQL, C, C++, Bash, HTML, CSS, PHP, Solidity, ARM Assembly",
  },
  {
    group: "Frontend engineering",
    items:
      "React.js, Next.js, React Native, Expo, Redux, Tailwind CSS, Vite, Webpack, responsive UI, state management, component architecture",
  },
  {
    group: "Backend engineering",
    items:
      "FastAPI, Django, Django REST Framework, Node.js, Express.js, ASP.NET, Spring Boot, REST API design, WebSockets, authentication, authorisation, JWT, OAuth",
  },
  {
    group: "Databases and caching",
    items: "PostgreSQL, MySQL, MongoDB, Firebase, Firestore, Redis, SQL query optimisation, schema design, indexing",
  },
  {
    group: "Blockchain and Web3",
    items: "Solidity, Hardhat, Ethers.js, Web3.js, Ethereum, XRPL, IPFS, smart contract integration",
  },
  {
    group: "Cloud and DevOps",
    items:
      "Alibaba Cloud, AWS, AWS Lambda, Amazon S3, AWS Elastic Beanstalk, Amazon SageMaker, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, Vercel, deployment automation",
  },
  {
    group: "Robotics",
    items:
      "ROS, ROS\u00a02, robot perception, robot control, autonomous navigation, simulation, reinforcement learning, LiDAR, computer vision, sensor fusion",
  },
  {
    group: "Embedded and hardware",
    items:
      "FreeRTOS, STM32, STM32F4, XMC4800, MSP432, ESP32, Arduino, ODROID, EtherCAT, CAN bus, I2C, SPI, UART, sensor integration, motor control, real-time scheduling, firmware debugging",
  },
  {
    group: "Software practices",
    items:
      "System design, debugging, performance optimisation, testing, observability, reliability engineering, agile, Scrum, code review",
  },
  { group: "Tools", items: "Git, GitHub, Linux, JIRA, Postman, VS Code, Figma" },
];

/* ---------- 07 Education & certifications ---------- */

export interface School {
  name: string;
  award: string;
  period: string;
  place: string;
  points: readonly string[];
}

export const education: readonly School[] = [
  {
    name: "Nanyang Technological University, Singapore",
    award: "Bachelor of Engineering, Computer Engineering",
    period: "Aug 2022 – May 2026",
    place: "Singapore",
    points: [
      "CGPA: 4.94 / 5.00.",
      "Honours (Highest Distinction).",
      "Elective focus awarded: Artificial Intelligence.",
      "Lee Kuan Yew Gold Medal, awarded to the top graduating student of the cohort.",
      "NTU Science and Engineering Scholar (full scholarship).",
      "Dean's List in all four academic years; top 5% of the cohort.",
      "President Research Scholar, URECA.",
      "Final Year Project graded A; submitted to ICLR 2027.",
    ],
  },
  {
    name: "Sri KDU International School",
    award: "IB Diploma · 100% Tuition Scholar",
    period: "Sep 2020 – May 2022",
    place: "Malaysia",
    points: ["Score: 42 / 45."],
  },
  {
    name: "Global Indian International School, Kuala Lumpur",
    award: "CBSE Class 10",
    period: "Apr 2019 – Mar 2020",
    place: "Malaysia",
    points: ["Score: 96.2%."],
  },
];

export const certifications: readonly string[] = [
  "Meta Front-End Developer Specialization",
  "HTML and CSS in Depth",
  "Introduction to Front-End Development",
  "Version Control",
  "Introduction to Generative AI",
];

export interface Language {
  name: string;
  level: string;
}

export const languages: readonly Language[] = [
  { name: "English", level: "Full professional" },
  { name: "Tamil", level: "Native or bilingual" },
  { name: "Hindi", level: "Professional working" },
  { name: "Spanish", level: "Limited working" },
  { name: "Mandarin", level: "Elementary" },
  { name: "Sanskrit", level: "Elementary" },
];

/* ---------- 08 Beyond code ---------- */

export interface Pastime {
  label: string;
  plate: "knight" | "piano" | "cube";
  title: string;
  detail: string;
}

export const beyond: readonly Pastime[] = [
  {
    label: "CHESS",
    plate: "knight",
    title: "President and Captain, NTU International Chess Varsity",
    detail: "Led selection, training and competition for the varsity team. MOE-qualified chess CCA coach.",
  },
  {
    label: "PIANO",
    plate: "piano",
    title: "Music Director, NTU Piano Ensemble",
    detail: "ABRSM Piano Grade 8 with Distinction.",
  },
  {
    label: "CUBING",
    plate: "cube",
    title: "Malaysia National Cubing Open finalist",
    detail: "Competitive speedcubing.",
  },
];

/**
 * A complete knight's tour from a1, found once with Warnsdorff's rule and frozen here.
 * Squares are numbered row * 8 + column with row 0 at the top of the board.
 */
export const KNIGHTS_TOUR: readonly number[] = [
  56, 41, 24, 9, 3, 13, 7, 22, 5, 15, 30, 47, 62, 52, 58, 48, 33, 16, 1, 18, 8, 2, 12, 6, 23, 38, 55, 61, 51, 57, 40,
  50, 60, 45, 39, 54, 44, 59, 49, 32, 42, 25, 35, 29, 19, 34, 28, 11, 17, 0, 10, 27, 21, 4, 14, 20, 26, 43, 37, 31, 46,
  36, 53, 63,
];

/* ---------- Sheet index ---------- */

export interface Sheet {
  id: string;
  no: string;
  title: string;
}

export const sheets: readonly Sheet[] = [
  { id: "now", no: "01", title: "Now" },
  { id: "work", no: "02", title: "Selected work" },
  { id: "experience", no: "03", title: "Experience" },
  { id: "research", no: "04", title: "Research" },
  { id: "awards", no: "05", title: "Hackathons & awards" },
  { id: "skills", no: "06", title: "Skills" },
  { id: "education", no: "07", title: "Education" },
  { id: "beyond", no: "08", title: "Beyond code" },
  { id: "contact", no: "09", title: "Contact" },
];
