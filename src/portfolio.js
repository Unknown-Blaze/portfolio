/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rudra Prasadh Ganesh",
  description:
    "Software engineer, robotics & AI at Fabrica AI. Software, embedded hardware and machine learning.",
  og: {
    title: "Rudra Prasadh Ganesh",
    type: "website",
    url: "https://unknown-blaze.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Rudra Prasadh Ganesh",
  logo_name: "RudraPrasadh",
  nickname: "@unknown_blaze",
  subTitle:
    "Software engineer, robotics & AI at Fabrica AI. I work across software, embedded hardware and machine learning, from ROS 2 robots on construction sites to production web platforms.",
  resumeLink:
    "https://drive.google.com/file/d/1XFGr17Un9jiYomV1hmLBeARwAGvIjOdl/view?usp=drive_link",
  portfolio_repository: "https://github.com/Unknown-Blaze/portfolio",
  githubProfile: "https://github.com/Unknown-Blaze",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/Unknown-Blaze",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/unknown-blaze",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:grudraprasadh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Robotics & Embedded",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building the ROS 2 software of an autonomous construction robot: perception with LiDAR and cameras, SLAM and navigation, motion planning and behaviour trees.",
        "⚡ Testing robot behaviour in Gazebo simulation, packaged with Docker and GitHub Actions.",
        "⚡ Writing embedded firmware in C and C++: FreeRTOS, STM32, ESP32, CAN bus and EtherCAT.",
      ],
      softwareSkills: [
        {
          skillName: "ROS 2",
          fontAwesomeClassname: "simple-icons:ros",
          style: { color: "#22314E" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: { color: "#A8B9CC" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "STM32",
          fontAwesomeClassname: "simple-icons:stmicroelectronics",
          style: { color: "#03234B" },
        },
        {
          skillName: "ESP32",
          fontAwesomeClassname: "simple-icons:espressif",
          style: { color: "#E7352C" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#000000" },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Fine-tuning protein language models with LoRA/PEFT in PyTorch for MHC-peptide binding prediction.",
        "⚡ Building retrieval-augmented generation (RAG) systems and LLM features for production apps.",
        "⚡ Serving computer vision models such as YOLOv8 behind FastAPI and Docker.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "YOLOv8",
          fontAwesomeClassname: "simple-icons:ultralytics",
          style: { color: "#111F68" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
      ],
    },
    {
      title: "Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building web and mobile apps with React, Next.js, React Native and TypeScript.",
        "⚡ Writing backends in Python (FastAPI, Django, Celery) and Node, on PostgreSQL, Redis and Firebase.",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4169E1" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: { color: "#363636" },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "DesignImg",
      skills: [
        "⚡ Running production systems on AWS and Alibaba Cloud, with infrastructure as code in Terraform.",
        "⚡ Containers and CI/CD with Docker, Kubernetes and GitHub Actions.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#844FBA" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonwebservices",
          style: { color: "#232F3E" },
        },
        {
          skillName: "Alibaba Cloud",
          fontAwesomeClassname: "simple-icons:alibabacloud",
          style: { color: "#FF6A00" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/UnknownBlaze/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "NtuLogo.jpg",
      alt_name: "NTU Singapore",
      duration: "Aug 2022 - May 2026",
      descriptions: [
        "⚡ Honours (Highest Distinction), with an elective focus on AI.",
        "⚡ Lee Kuan Yew Gold Medal, awarded to the top graduating student of the cohort.",
        "⚡ NTU Science and Engineering Undergraduate Scholar (full scholarship).",
        "⚡ Dean's List in all four years.",
        "⚡ Final Year Project: MHC-peptide binding affinity prediction with ESM-2 and AlphaFold-derived structure, supervised by Prof. Jagath C. Rajapakse. Submitted to ICLR 2027.",
      ],
      website_link: "https://www.ntu.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, research and leadership",
  description:
    "Robotics at Fabrica AI today; before that, cloud platforms, full-stack products, AI research and embedded firmware across startups, research institutes and industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Fabrica AI",
          company_url: "#",
          logo_path: "monogram_fabrica.png",
          duration: "Jul 2026 - Present",
          location: "Singapore",
          description:
            "Sole software engineer owning the ROS 2 codebase of an autonomous tile-grouting robot for construction, deployed in Singapore and Australia. Perception (LiDAR, cameras), SLAM and navigation, motion planning, behaviour trees, Gazebo simulation, Docker and GitHub Actions. Led a LiDAR upgrade in one month and directs the interns.",
          color: "#374151",
        },
        {
          title: "Co-Founder and Full Stack Engineer",
          company: "Lumerva",
          company_url: "#",
          logo_path: "monogram_lumerva.png",
          duration: "Sep 2025 - Present",
          location: "Singapore",
          description:
            "Building a learning platform: React and TypeScript, a Python backend with Celery and Redis, the YouTube Data API and the Brave Search API.",
          color: "#374151",
        },
        {
          title: "DevOps Engineer and Team Lead",
          company: "MISUMI.AI (Misumi Kaizen OU Group)",
          company_url: "#",
          logo_path: "monogram_misumi.png",
          duration: "Sep 2025 - Aug 2026",
          location: "Singapore",
          description:
            "Led LISA 1.0, an automotive advisor (Next.js 15, PostgreSQL, RAG) in production across 4 ASEAN markets on Alibaba Cloud with Terraform. Cut API latency from 300 ms to 50 ms and cloud cost by 70%.",
          color: "#374151",
        },
        {
          title: "DevOps Intern",
          company: "MODEC",
          company_url: "https://www.modec.com/",
          logo_path: "modec_logo.png",
          duration: "Dec 2025 - Jan 2026",
          location: "Singapore",
          description:
            "Took an analytics app from proof of concept to secure production on AWS Elastic Beanstalk, with CI/CD.",
          color: "#003A70",
        },
        {
          title: "Software Engineer Intern, Sustainability Analytics",
          company: "MODEC",
          company_url: "https://www.modec.com/",
          logo_path: "modec_logo.png",
          duration: "Jun 2025 - Aug 2025",
          location: "Singapore",
          description:
            "React and Django/DRF application handling 500+ concurrent requests, with Redis, and IoT data ingestion on AWS Lambda and S3.",
          color: "#003A70",
        },
        {
          title: "AI Engineer (Part-Time)",
          company: "National Institute of Education (NTU)",
          company_url: "https://www.ntu.edu.sg/nie",
          logo_path: "nie_logo.png",
          duration: "Jun 2025 - Oct 2025",
          location: "Singapore",
          description:
            "Built the real-time WebSocket backend of an intelligent tutoring system used in a 60-participant study, and co-authored the resulting AIED 2026 paper.",
          color: "#A6192E",
        },
        {
          title: "Full Stack Engineer Intern",
          company: "Panasonic R&D Center Singapore",
          company_url: "https://www.panasonic.com/sg/",
          logo_path: "panasonic.png",
          duration: "Jan 2025 - Jun 2025",
          location: "Singapore",
          description:
            "Built a FastAPI and Docker inference API serving a YOLOv8 model.",
          color: "#004B8D",
        },
        {
          title: "Embedded Engineering Intern",
          company: "Schaeffler Hub for Advanced Research",
          company_url: "https://www.schaeffler.sg/",
          logo_path: "schaeffler.png",
          duration: "May 2024 - Aug 2024",
          location: "Singapore",
          description:
            "CAN bus master-slave system on the XMC4800, EtherCAT, FreeRTOS and STM32F4.",
          color: "#00873E",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "URECA President Research Scholar",
          company: "Nanyang Technological University",
          company_url:
            "https://www.ntu.edu.sg/education/undergraduate-programmes/ureca",
          logo_path: "NtuLogo.jpg",
          duration: "Aug 2024 - Apr 2025",
          location: "Singapore",
          description:
            "Edge-AI motion detection for IoT security on an ODROID N2 (URECA research paper, NTU, 2025). 96% motion-detection accuracy at 180 ms latency; President Research Scholar.",
          color: "#D71440",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "President and Captain",
          company: "NTU International Chess Varsity",
          company_url: "#",
          logo_path: "chess.jpeg",
          duration: "NTU",
          location: "Singapore",
          description: "Led the club and captained the varsity team.",
          color: "#1d4ed8",
        },
        {
          title: "Music Director",
          company: "NTU Piano Ensemble",
          company_url: "#",
          logo_path: "monogram_piano.png",
          duration: "NTU",
          location: "Singapore",
          description:
            "Music director of the ensemble. ABRSM Piano Grade 8 with Distinction.",
          color: "#374151",
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      name: "MyCCDS",
      subtitle:
        "iOS and Android app for NTU CCDS students | React Native, Expo",
      image: "project_myccds.png",
      description:
        "Student platform for NTU's College of Computing and Data Science, on the App Store and Google Play, with 600+ daily active users.",
      footerLinks: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.ntu.myccds",
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/myccds/id6753279278",
        },
        {
          name: "NTU article",
          url: "https://www.ntu.edu.sg/computing/news-events/news/detail/ganesh-rudra-prasadh-transforms-student-experience-with-myccds",
        },
      ],
    },
    {
      name: "nGoDonate",
      subtitle: "Winner, Best Developer Tooling | EasyA x Ripple hackathon",
      image: "project_ngodonate.png",
      description:
        "Transparent donations on the XRP Ledger and Ethereum, with NFT receipts stored on IPFS.",
      footerLinks: [
        { name: "Live", url: "https://easya-hackathon-tawny.vercel.app" },
        {
          name: "Live (course build)",
          url: "https://sc-4053-bc-project.vercel.app",
        },
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/SC4053-Project",
        },
      ],
    },
    {
      name: "MHC-peptide binding prediction",
      subtitle: "Final Year Project | Submitted to ICLR 2027",
      image: "project_fyp.png",
      description:
        "ESM-2 650M with AlphaFold-derived structure, fine-tuned with LoRA/PEFT in PyTorch. PCC 0.859 against 0.847 for the best retrained state-of-the-art baseline.",
      footerLinks: [
        { name: "Code", url: "https://github.com/Unknown-Blaze/FYP-Research" },
      ],
    },
    {
      name: "Blazing Chess",
      subtitle: "Chess academy website | Next.js 14, TypeScript, Tailwind CSS",
      image: "project_blazing_chess.png",
      description: "Website for a chess academy.",
      footerLinks: [
        { name: "Live", url: "https://blazing-chess.vercel.app" },
        { name: "Code", url: "https://github.com/Unknown-Blaze/blazing-chess" },
      ],
    },
    {
      name: "SyncTube",
      subtitle: "Watch parties | Next.js 15, Socket.IO, YouTube IFrame API",
      image: "project_synctube.png",
      description: "Watch YouTube with friends, in sync, in real time.",
      footerLinks: [
        { name: "Live", url: "https://synctube-tau.vercel.app" },
        { name: "Code", url: "https://github.com/Unknown-Blaze/synctube" },
      ],
    },
    {
      name: "Mango order management",
      subtitle:
        "Order management with online payments | React, Firebase, Stripe",
      image: "project_mango.png",
      description: "Order management with online payments.",
      footerLinks: [{ name: "Live", url: "https://mango-club.vercel.app" }],
    },
    {
      name: "Truth Fairy",
      subtitle: "Top 5 | NTU TechFest",
      image: null,
      description:
        "Chrome extension against misinformation, with deepfake detection and Grad-CAM explanations.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/techfest-truth-fairy",
        },
      ],
    },
    {
      name: "FunctionGemma",
      subtitle: "National Top 10 | Cactus x Google Global Hackathon",
      image: null,
      description:
        "Routing tool calls between an on-device model and the cloud.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/functiongemma-hackathon",
        },
      ],
    },
    {
      name: "Scaffolding Emotion Regulation in Productive Failure Using an AIED System",
      subtitle: "Publication | AIED 2026, Springer CCIS",
      image: null,
      description:
        "Sinha, T., Huang, R., & Ganesh, R. P. (2026). Scaffolding Emotion Regulation in Productive Failure Using an AIED System: Prototyping and Evaluation. AIED 2026, CCIS, pp. 17-32, Springer.",
      footerLinks: [
        { name: "DOI", url: "https://doi.org/10.1007/978-3-032-29791-4_2" },
      ],
    },
    {
      name: "More hackathons",
      subtitle: "Finalist | DSTA BrainHack and PSA Code Sprint",
      image: null,
      description:
        "GroceryGrabber, a grocery app built at DSTA BrainHack (finalist), and the PSA Code Sprint (finalist).",
      footerLinks: [
        {
          name: "GroceryGrabber",
          url: "https://github.com/Unknown-Blaze/BrainHacks-Code-Exp",
        },
        {
          name: "PSA Code Sprint",
          url: "https://github.com/Unknown-Blaze/PSASprint",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Apps in production, hackathon builds and research, from mobile and web to machine learning.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research papers and submissions.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "aied-2026-emotion-regulation",
      name: "Scaffolding Emotion Regulation in Productive Failure Using an AIED System: Prototyping and Evaluation",
      createdAt: "2026",
      description:
        "Sinha, T., Huang, R., & Ganesh, R. P. (2026). AIED 2026, CCIS, pp. 17-32, Springer.",
      url: "https://doi.org/10.1007/978-3-032-29791-4_2",
    },
    {
      id: "fyp-mhc-peptide",
      name: "MHC-peptide binding affinity prediction with ESM-2 and AlphaFold-derived structure",
      createdAt: "2026",
      description: "Submitted to ICLR 2027.",
      url: "https://github.com/Unknown-Blaze/FYP-Research",
    },
    {
      // TODO: URECA paper title/link
      id: "ureca-edge-ai",
      name: "Edge-AI motion detection for IoT security",
      createdAt: "2025",
      description:
        "Edge-AI motion detection for IoT security on an ODROID N2 (URECA research paper, NTU, 2025). 96% motion-detection accuracy at 180 ms latency; President Research Scholar.",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_rudra.jpg",
    description:
      "Email or LinkedIn is the best way to reach me. Happy to talk about robotics, embedded systems, machine learning and full-stack engineering.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Singapore",
    locality: "Singapore",
    country: "Singapore",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
