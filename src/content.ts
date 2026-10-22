// Every word on the site lives in this file. Edit here; the components only lay it out.

export type Domain = "Robotics" | "ML" | "Web" | "Mobile" | "Embedded" | "Blockchain";

export const DOMAINS: readonly Domain[] = ["Robotics", "ML", "Web", "Mobile", "Embedded", "Blockchain"];

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
  headline: "Software engineer, robotics & AI",
  breadth: "I work across software, embedded hardware and machine learning, from ROS 2 robots on construction sites to production web platforms.",
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
  "600+ DAU app on both stores",
  "Winner, EasyA x Ripple",
];

/* ---------- 01 Now ---------- */

export interface NowItem {
  org: string;
  role: string;
  since: string;
  summary: string;
  stack: readonly string[];
}

export const now: readonly NowItem[] = [
  {
    org: "Fabrica AI",
    role: "Software Engineer",
    since: "Jul 2026",
    summary:
      "Sole software engineer on the ROS 2 codebase of an autonomous tile-grouting robot for construction, deployed commercially in Singapore and Australia. I own perception, SLAM and navigation, motion planning and behaviour trees, and direct the intern engineers.",
    stack: ["ROS 2", "LiDAR", "SLAM", "Behaviour trees", "Gazebo", "Docker", "GitHub Actions"],
  },
  {
    org: "Lumerva",
    role: "Co-Founder and Full Stack Engineer",
    since: "Sep 2025",
    summary:
      "A learning platform that builds personalised course paths, quizzes and content modules. I own it end to end: React and TypeScript on the front, Python services behind, background jobs on Celery and Redis.",
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
  /** A drawn plate shown in place of a screenshot, for work with nothing public to show. */
  plate?: "robot";
}

const shot = (file: string, alt: string): Image => ({ src: `img/${file}.webp`, alt, width: 800, height: 450 });

export const work: readonly Work[] = [
  {
    id: "grouting-robot",
    name: "Autonomous tile-grouting robot",
    context: "Fabrica AI · deployed in Singapore and Australia",
    period: "Jul 2026 – present",
    domains: ["Robotics", "Embedded"],
    summary: "The ROS 2 software of a construction robot that grouts tiles on its own.",
    points: [
      "Perception with LiDAR and cameras, SLAM and navigation, motion planning and behaviour trees.",
      "Delivered a complete LiDAR sensor upgrade, from integration to on-site deployment, in one month.",
      "Behaviour tested in Gazebo, packaged with Docker and GitHub Actions.",
    ],
    stack: ["ROS 2", "LiDAR", "SLAM", "Gazebo", "Docker", "GitHub Actions"],
    callouts: [{ value: "1 month", note: "LiDAR upgrade, integration to site" }],
    links: [],
    plate: "robot",
  },
  {
    id: "myccds",
    name: "MyCCDS",
    context: "Student platform for NTU's College of Computing and Data Science",
    period: "Nov 2024 – present",
    domains: ["Mobile"],
    summary: "A production iOS and Android app for CCDS students, on the App Store and Google Play.",
    points: [
      "Shipped a cross-platform mobile app using React Native, Expo and Redux.",
      "Reached 600 or more daily active users with a 5-star store rating.",
      "Optimised caching to improve content discovery workflows.",
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
    image: shot("myccds", "MyCCDS Google Play listing with a 5.0 rating and six app screenshots"),
  },
  {
    id: "mhc-peptide",
    name: "MHC-peptide binding prediction",
    context: "Final Year Project (Graded A), Bioinformatics Lab, NTU · submitted to ICLR 2027",
    period: "Aug 2025 – May 2026",
    domains: ["ML"],
    summary:
      "ESM-2 (650M) sequence embeddings fused with an AlphaFold-based structural pipeline, fine-tuned with LoRA/PEFT in PyTorch on an NVIDIA A100 80GB.",
    points: [
      "PCC 0.859 against 0.847 for the best state-of-the-art baseline retrained on the same dataset and split; R-squared and Spearman up 0.5 to 2 percent.",
      "Dataset built from IEDB, with 3D structures from a self-developed ColabFold extension.",
      "Homology-based 80/10/10 splits to prevent sequence-similarity leakage.",
      "Supervisor: Prof. Jagath C. Rajapakse.",
    ],
    stack: ["PyTorch", "ESM-2", "AlphaFold", "ColabFold", "LoRA / PEFT"],
    callouts: [{ value: "0.859", note: "PCC vs 0.847 baseline" }],
    links: [{ label: "Code", href: "https://github.com/Unknown-Blaze/FYP-Research" }],
    image: shot("fyp", "Bar chart of Pearson correlation: best retrained baseline 0.847, this model 0.859"),
  },
  {
    id: "ngodonate",
    name: "nGoDonate",
    context: "Winner, Best Developer Tooling · EasyA x Ripple Hackathon",
    period: "Jun 2025 – Nov 2025",
    domains: ["Blockchain", "Web"],
    summary: "A transparent donation workflow on XRPL and Ethereum.",
    points: [
      "Built a donation workflow on XRPL and Ethereum achieving 2-second transaction finality.",
      "Implemented milestone-based escrow with on-chain transparency, and NFT receipts and certificates.",
      "Added IPFS storage for verifiable supporting documents linked to on-chain records.",
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
    id: "synctube",
    name: "SyncTube",
    context: "Real-time synchronised video streaming and collaboration",
    period: "Sep 2024 – Dec 2024",
    domains: ["Web"],
    summary: "Watch YouTube with friends, in sync, in real time.",
    points: [
      "Built synchronised playback and room-state management for multi-user watch sessions.",
      "Implemented real-time communication and reconnect handling for stable room continuity.",
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
    summary: "Ordering and payments for a retailer, end to end.",
    points: ["Built end-to-end ordering and payment workflows using React, Firebase and Stripe."],
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
    summary: "Website for a chess academy.",
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
    domains: ["Web", "ML"],
    summary: "An automotive advisor in production across 4 ASEAN markets.",
    points: [
      "Next.js 15 and PostgreSQL with a RAG pipeline over structured Japanese and English automotive listings.",
      "Containerised microservices on Alibaba Cloud, provisioned with Terraform.",
      "API latency cut from 300 ms to 50 ms; cloud cost down 70 percent.",
    ],
    stack: ["Next.js 15", "PostgreSQL", "RAG", "Alibaba Cloud", "Terraform"],
    callouts: [
      { value: "300→50 ms", note: "API latency" },
      { value: "−70%", note: "cloud cost" },
    ],
    links: [],
  },
  {
    id: "edge-ai",
    name: "Edge-AI security pipeline",
    context: "President Research Scholar, URECA · ODROID N2",
    period: "Aug 2024 – Apr 2025",
    domains: ["Embedded", "ML"],
    summary: "Motion detection for an IoT security system, running on the edge.",
    points: [
      "96 percent motion-detection accuracy at 180 ms latency on an ODROID.",
      "Tuned thresholds and buffering to cut false positives under changing light.",
      "Presented as a research poster for the URECA programme.",
    ],
    stack: ["Edge AI", "IoT", "ODROID N2"],
    callouts: [{ value: "96% @ 180 ms", note: "accuracy at latency" }],
    links: [],
  },
  {
    id: "sentiment",
    name: "Sentiment analysis platform",
    context: "SC4001 group project",
    period: "Jan 2024 – Apr 2024",
    domains: ["ML", "Web"],
    summary: "End-to-end text analytics with model-serving APIs.",
    points: [
      "Built preprocessing and model-inference endpoints for sentiment classification.",
      "Delivered dashboard views for trend analysis.",
    ],
    stack: ["NLP", "Model-serving APIs", "Dashboards"],
    callouts: [],
    links: [{ label: "Code", href: "https://github.com/Unknown-Blaze/SC4001-Group-Project" }],
  },
  {
    id: "vr-chem",
    name: "Virtual reality chemistry laboratory",
    context: "NTU School of Materials Science and Engineering · team of four",
    period: "May 2026 – Jul 2026",
    domains: [],
    summary:
      "Students manipulate 3D molecular structures in a Meta Quest 3 headset and sit in-VR quizzes, replacing static diagrams in an introductory chemistry course.",
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
  period: string;
  location: string;
  bullets: readonly string[];
}

export const experience: readonly Role[] = [
  {
    title: "Software Engineer",
    org: "Fabrica AI",
    tag: "FABRICA",
    period: "Jul 2026 – present",
    location: "Singapore",
    bullets: [
      "Sole software engineer, owning the ROS 2 codebase of a fully autonomous tile-grouting robot for construction, deployed commercially in Singapore and Australia.",
      "Directing intern engineers and integrating across the mechanical and electrical teams.",
      "Integrating, tuning and debugging across the autonomy stack: perception with LiDAR and cameras, SLAM, navigation, motion planning and behaviour trees.",
      "Delivered a complete LiDAR sensor upgrade from integration through on-site deployment in one month.",
      "Gazebo simulation for behaviour testing; Docker for reproducible builds on development machines and on the robot; GitHub Actions for build, test and release.",
    ],
  },
  {
    title: "Co-Founder and Full Stack Engineer",
    org: "Lumerva",
    tag: "LUMERVA",
    period: "Sep 2025 – present",
    location: "Singapore",
    bullets: [
      "Building a production learning platform with full-stack ownership across a React and TypeScript frontend and Python backend services.",
      "Designed an asynchronous background-job architecture with Celery and Redis to improve throughput and reduce request latency.",
      "Implemented modular API and content pipelines for personalised course paths, quizzes and content modules.",
      "Integrated the YouTube Data API and Brave Search API with ranking logic to improve discovery quality.",
    ],
  },
  {
    title: "DevOps Engineer and Team Lead",
    org: "Misumi Kaizen OU Group (MISUMI.AI)",
    tag: "MISUMI.AI",
    period: "Sep 2025 – Aug 2026",
    location: "Singapore",
    bullets: [
      "Led development and deployment of LISA 1.0, an automotive advisor platform built with Next.js 15, PostgreSQL and AI-enabled retrieval, used by MISUMI to serve customers internationally.",
      "Owned cloud architecture and infrastructure operations for production delivery across 4 ASEAN markets.",
      "Co-architected containerised microservices on Alibaba Cloud with a RAG pipeline over structured Japanese and English automotive listings, with infrastructure in Terraform.",
      "Reduced API latency from 300 ms to 50 ms through caching, query optimisation and service-level tuning.",
      "Drove performance and workload tuning that reduced cloud costs by 70 percent.",
      "Moved on to developer and technical advisor for LISA 2.0, supporting a new team on architecture and retrieval design.",
    ],
  },
  {
    title: "DevOps Intern",
    org: "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
    tag: "MODEC",
    period: "Dec 2025 – Jan 2026",
    location: "Singapore",
    bullets: [
      "Managed end-to-end deployment of an analytical data application from proof of concept to secure production.",
      "Configured and operated AWS Elastic Beanstalk environments with security-aligned release processes.",
      "Integrated a CI/CD workflow and validation gates for stable, repeatable delivery.",
      "Executed testing and rollback planning to meet organisational security and reliability benchmarks.",
    ],
  },
  {
    title: "AI Engineer (part-time)",
    org: "National Institute of Education, NTU",
    tag: "NIE",
    period: "Jun 2025 – Oct 2025",
    location: "Singapore",
    bullets: [
      "One of two primary developers of the backend and real-time infrastructure for an intelligent tutoring system.",
      "Architected WebSocket-based low-latency communication, achieving 99.9 percent session stability.",
      "Organised the user study and consolidated qualitative and quantitative findings for product iteration.",
      "Co-authored the peer-reviewed AIED 2026 paper (Springer) on scaffolding emotion regulation in productive failure, based on a 60-participant study (PI: Dr. Tanmay Sinha).",
    ],
  },
  {
    title: "Software Engineer Intern, Sustainability Analytics",
    org: "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
    tag: "MODEC",
    period: "Jun 2025 – Aug 2025",
    location: "Singapore",
    bullets: [
      "Independently delivered a full-stack web application for sustainability and environmental analytics.",
      "Built responsive React workflows for complex vendor data collection and reporting.",
      "Engineered a Django and Django REST Framework backend handling 500 or more concurrent requests with 99.9 percent uptime.",
      "Improved retrieval performance by 40 percent with Redis caching and optimised query paths.",
      "Managed AWS deployment and IoT log ingestion through AWS Lambda and Amazon S3.",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    org: "Panasonic R&D Center Singapore",
    tag: "PANASONIC",
    period: "Jan 2025 – Jun 2025",
    location: "Singapore",
    bullets: [
      "Deployed an inference API with FastAPI and Docker serving YOLOv8, with async processing for real-time workflows.",
      "Debugged and optimised workflows across SQL, Python, Redis and network-integrated services.",
      "Implemented and refined caching strategies to improve retrieval speed, latency and reliability.",
      "Designed and ran testing strategies to find bottlenecks and validate system integrity.",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "NTU College of Computing and Data Science (CCDS)",
    tag: "NTU CCDS",
    period: "May 2024 – Jul 2025",
    location: "Singapore",
    bullets: [
      "Led end-to-end development of a networking platform connecting alumni and students for startup and event collaboration.",
      "Built and maintained full-stack features with WordPress, SQL, PHP and frontend customisation.",
      "Optimised backend processes and site performance for reliability and user experience.",
    ],
  },
  {
    title: "Embedded Engineering Intern, Edge Data Systems",
    org: "Schaeffler Hub for Advanced Research",
    tag: "SCHAEFFLER",
    period: "May 2024 – Aug 2024",
    location: "Singapore",
    bullets: [
      "Integrated the CAN bus protocol on an XMC4800 microcontroller, establishing a master-slave configuration between controller and actuator.",
      "Improved performance by 20 percent with low-latency EtherCAT and FreeRTOS scheduling on the XMC4800.",
      "Contributed to embedded framework development across Arduino, STM32F4 and XMC4800.",
      "Enabled higher-frequency telemetry pipelines for predictive maintenance and edge analytics.",
    ],
  },
  {
    title: "SCSE Peer Coach",
    org: "Nanyang Technological University",
    tag: "NTU",
    period: "Jan 2024 – Apr 2024",
    location: "Singapore",
    bullets: [
      "Selected as one of four SCSE peer coaches to support students on academic warning.",
      "Delivered personalised study planning, mentorship and accountability support.",
    ],
  },
  {
    title: "Chess CCA Coach, MOE-qualified",
    org: "Freelance",
    tag: "FREELANCE",
    period: "Jan 2024 – Apr 2024",
    location: "Singapore",
    bullets: [
      "Delivered structured chess lessons in school CCA sessions, focused on critical thinking and strategy.",
      "Built training plans to improve problem-solving and decision-making under constraints.",
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
      "ESM-2 (650M) embeddings integrated with a fine-tuned AlphaFold-based pipeline. PCC 0.859 against 0.847 for the strongest retrained baseline on the same dataset and split. Graded A. Supervised by Prof. Jagath C. Rajapakse, Bioinformatics Lab, NTU.",
    meta: "Aug 2025 – May 2026",
    link: { label: "github.com/Unknown-Blaze/FYP-Research", href: "https://github.com/Unknown-Blaze/FYP-Research" },
  },
  {
    kind: "URECA · research poster",
    title: "Edge-AI motion detection for IoT security on an ODROID N2",
    detail:
      "96 percent motion-detection accuracy at 180 ms latency. Thresholds and buffering tuned to reduce false positives under changing lighting. Presented as a research poster as a URECA President Research Scholar.",
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
    note: "Donations on XRPL and Ethereum with milestone escrow, NFT receipts and IPFS documents.",
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
    note: "Chrome extension against misinformation, with deepfake detection and Grad-CAM explanations.",
    link: { label: "Code", href: "https://github.com/Unknown-Blaze/techfest-truth-fairy" },
  },
  {
    placing: "FINALIST",
    name: "GroceryGrabber",
    event: "DSTA BrainHack",
    date: "May 2024",
    note: "Led the team; PostGIS filtering within a 5 km radius, GPT-powered parsing and ranking for nearby inventory.",
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
    note: "Co-author, CCIS pp. 17–32.",
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
    note: "Every academic year. Top 5 percent of the cohort.",
  },
  {
    placing: "SCHOLAR",
    name: "President Research Scholar",
    event: "URECA, NTU",
    date: "2024–2025",
    note: "Edge-AI motion detection research.",
  },
  {
    placing: "FINALIST",
    name: "Malaysia National Cubing Open",
    event: "Speedcubing",
    date: "",
    note: "National finalist.",
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
    group: "Robotics",
    items:
      "ROS, ROS 2, robot perception, robot control, autonomous navigation, simulation, reinforcement learning, LiDAR, computer vision, sensor fusion",
  },
  {
    group: "Embedded and hardware",
    items:
      "FreeRTOS, STM32, STM32F4, XMC4800, MSP432, ESP32, Arduino, ODROID, EtherCAT, CAN bus, I2C, SPI, UART, sensor integration, motor control, real-time scheduling, firmware debugging",
  },
  {
    group: "AI/ML and LLM systems",
    items:
      "PyTorch, TensorFlow, Scikit-Learn, Hugging Face, Transformers, LoRA, PEFT, RAG, LangChain, LangGraph, Ollama, prompt engineering, fine-tuning, model evaluation",
  },
  {
    group: "Computer vision and NLP",
    items: "YOLO, YOLOv8, Grad-CAM, tokenisation, sentiment analysis, multimodal integration, ESM-2, AlphaFold",
  },
  {
    group: "Data and analytics",
    items:
      "ETL, ELT, data modelling, feature engineering, Pandas, NumPy, PostGIS, Power BI, Tableau, dashboard design, time-series forecasting",
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
      "Honours (Highest Distinction).",
      "Elective focus awarded: Artificial Intelligence.",
      "Lee Kuan Yew Gold Medal, awarded to the top graduating student of the cohort.",
      "NTU Science and Engineering Scholar (full scholarship).",
      "Dean's List in all four academic years; top 5 percent of the cohort.",
      "President Research Scholar, URECA.",
      "Final Year Project graded A; submitted to ICLR 2027.",
    ],
  },
  {
    name: "Sri KDU International School",
    award: "IB Diploma · 100 percent Tuition Scholar",
    period: "Sep 2020 – May 2022",
    place: "Malaysia",
    points: ["Score: 42 / 45."],
  },
  {
    name: "Global Indian International School, Kuala Lumpur",
    award: "CBSE Class 10",
    period: "Apr 2019 – Mar 2020",
    place: "Malaysia",
    points: ["Score: 96.2 percent."],
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
  title: string;
  detail: string;
}

export const beyond: readonly Pastime[] = [
  {
    label: "CHESS",
    title: "President and Captain, NTU International Chess Varsity",
    detail: "Led team selection, training and competition for the varsity team. MOE-qualified chess CCA coach.",
  },
  {
    label: "PIANO",
    title: "Music Director, NTU Piano Ensemble",
    detail: "ABRSM Piano Grade 8 with Distinction.",
  },
  {
    label: "CUBING",
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
  50, 60, 45, 39, 54, 44, 59, 49, 32, 42, 25, 35, 29, 19, 34, 28, 11, 17, 0, 10, 27, 21, 4, 14, 20, 26, 43, 37, 31,
  46, 36, 53, 63,
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
