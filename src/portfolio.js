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
        "⚡ Robotics: ROS, ROS2, Robot Operating System, robot perception, robot control, autonomous navigation, simulation, reinforcement learning, LIDAR, computer vision, sensor fusion.",
        "⚡ Embedded and Hardware: FreeRTOS, STM32, STM32F4, XMC4800, MSP432, ESP32, Arduino, ODROID, EtherCAT, CAN bus, CAN, I2C, SPI, UART, sensor integration, motor control, real-time scheduling, firmware debugging.",
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
        "⚡ AI/ML and LLM Systems: PyTorch, TensorFlow, Scikit-Learn, Hugging Face, Transformers, LoRA, PEFT, RAG, LangChain, LangGraph, Ollama, prompt engineering, fine-tuning, model evaluation.",
        "⚡ Computer Vision and NLP: YOLO, YOLOv8, Grad-CAM, tokenization, sentiment analysis, multimodal integration, ESM-2, AlphaFold.",
        "⚡ Data and Analytics: ETL, ELT, data modeling, feature engineering, Pandas, NumPy, PostGIS, Power BI, Tableau, dashboard design, time-series forecasting.",
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
        "⚡ Programming Languages: Python, TypeScript, JavaScript, Java, C#, SQL, C, C++, Bash, HTML, CSS, PHP, Solidity, ARM Assembly.",
        "⚡ Frontend Engineering: React.js, Next.js, React Native, Expo, Redux, Tailwind CSS, Vite, Webpack, responsive UI, state management, component architecture.",
        "⚡ Backend Engineering: FastAPI, Django, Django REST Framework, Node.js, Express.js, ASP.NET, Spring Boot, REST API design, WebSockets, authentication, authorization, JWT, OAuth.",
        "⚡ Databases and Caching: PostgreSQL, MySQL, MongoDB, Firebase, Firestore, Redis, SQL query optimization, schema design, indexing.",
        "⚡ Blockchain and Web3: Solidity, Hardhat, Ethers.js, Web3.js, Ethereum, XRPL, IPFS, smart contract integration.",
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
      title: "Cloud, DevOps & Practices",
      fileName: "DesignImg",
      skills: [
        "⚡ Running production systems on AWS and Alibaba Cloud, with infrastructure as code in Terraform.",
        "⚡ Containers and CI/CD with Docker, Kubernetes and GitHub Actions.",
        "⚡ Cloud and DevOps: Alibaba Cloud, AWS, AWS Lambda, Amazon S3, AWS Elastic Beanstalk, Amazon SageMaker, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, Vercel, deployment automation.",
        "⚡ Software Practices: system design, debugging, performance optimization, testing, observability, reliability engineering, agile, Scrum, code review.",
        "⚡ Tools: Git, GitHub, Linux, JIRA, Postman, VS Code, Figma.",
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

// The education page renders `degrees` as cards; certifications, awards and
// languages are listed as logo-less cards here because the template's
// Certifications container renders nothing.
const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University",
      subtitle: "Bachelor of Engineering, Computer Engineering",
      logo_path: "NtuLogo.jpg",
      alt_name: "NTU Singapore",
      duration: "Aug 2022 - May 2026",
      descriptions: [
        "⚡ CGPA: 4.94 / 5.00.",
        "⚡ Degree Classification: Honours (Highest Distinction).",
        "⚡ Elective Focus Awarded: Artificial Intelligence.",
        "⚡ Lee Kuan Yew Gold Medal, awarded to the top graduating student of the cohort.",
        "⚡ NTU Science and Engineering Undergraduate Scholar (full scholarship).",
        "⚡ Dean's List in all four academic years. Top 5 percent of cohort.",
        "⚡ President Research Scholar, URECA.",
        "⚡ Final Year Project (Graded A): MHC-peptide binding affinity prediction with ESM-2 and AlphaFold-derived structure, Bioinformatics Lab, supervised by Prof. Jagath C. Rajapakse. Submitted to ICLR 2027.",
        "⚡ Publication: Sinha, T., Huang, R., & Ganesh, R. P. (2026). Scaffolding Emotion Regulation in Productive Failure Using an AIED System: Prototyping and Evaluation. AIED 2026, CCIS, pp. 17-32, Springer Nature Switzerland. DOI 10.1007/978-3-032-29791-4_2.",
      ],
      website_link: "https://www.ntu.edu.sg/",
    },
    {
      title: "Sri KDU International School",
      subtitle: "IB Diploma, 100 percent Tuition Scholar",
      logo_path: "monogram_srikdu.png",
      alt_name: "Sri KDU International School",
      duration: "Sep 2020 - May 2022",
      descriptions: ["⚡ Score: 42 / 45.", "⚡ Malaysia."],
    },
    {
      title: "Global Indian International School, Kuala Lumpur",
      subtitle: "CBSE Class 10",
      logo_path: "monogram_giis.png",
      alt_name: "Global Indian International School",
      duration: "Apr 2019 - Mar 2020",
      descriptions: ["⚡ Score: 96.2 percent.", "⚡ Malaysia."],
    },
    {
      title: "Certifications",
      subtitle: "Courses completed",
      duration: "",
      descriptions: [
        "⚡ Meta Front-End Developer Specialization.",
        "⚡ HTML and CSS in Depth.",
        "⚡ Introduction to Front-End Development.",
        "⚡ Version Control.",
        "⚡ Introduction to Generative AI.",
      ],
    },
    {
      title: "Awards and Honours",
      subtitle: "Academic, research, hackathons and music",
      duration: "",
      descriptions: [
        "⚡ Lee Kuan Yew Gold Medal, Nanyang Technological University.",
        "⚡ Honours (Highest Distinction), highest degree classification awarded by NTU.",
        "⚡ Peer-reviewed publication, AIED 2026, Springer Nature Switzerland.",
        "⚡ NTU Science and Engineering Undergraduate Scholarship, Full Scholarship.",
        "⚡ Dean's List, all four academic years.",
        "⚡ President Research Scholar, URECA.",
        "⚡ Winner, Best Developer Tooling, EasyA x Ripple Hackathon.",
        "⚡ National Top 10, Cactus x Google Global Hackathon.",
        "⚡ Top 5, NTU TechFest Hackathon.",
        "⚡ Finalist, DSTA BrainHack.",
        "⚡ Finalist, PSA Code Sprint.",
        "⚡ Malaysia National Cubing Open Finalist.",
        "⚡ ABRSM Piano Grade 8, Distinction.",
      ],
    },
    {
      title: "Languages",
      subtitle: "Spoken",
      duration: "",
      descriptions: [
        "⚡ English: Full Professional.",
        "⚡ Tamil: Native or Bilingual.",
        "⚡ Hindi: Professional Working.",
        "⚡ Spanish: Limited Working.",
        "⚡ Mandarin: Elementary.",
        "⚡ Sanskrit: Elementary.",
      ],
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
    "Software engineer with production experience across robotics, full-stack development, AI/ML systems, cloud infrastructure, and embedded systems. Built and shipped real-time platforms, autonomous robot software, analytics dashboards, data pipelines, and scalable APIs in startup, enterprise, and research environments. Peer-reviewed publication at AIED 2026 (Springer). Lee Kuan Yew Gold Medal recipient, top graduating student, CGPA 4.94 / 5.00, Honours (Highest Distinction).",
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
            "Sole software engineer owning the entire software function, including architecture, delivery, code review, and technical hiring support. Directing intern engineers and integrating across mechanical and electrical teams to build a modular ROS2 (Robot Operating System 2) codebase. Building production software at a robotics startup whose design-automation platform explores hardware and control-policy combinations using simulation and reinforcement learning. Developing and integrating ROS2 nodes for a fully autonomous construction tile-grouting robot deployed commercially in Singapore and Australia. Delivered a complete LiDAR sensor upgrade from integration through on-site deployment in one month. Integrating, tuning, and debugging across the autonomy stack including SLAM (Simultaneous Localisation and Mapping), motion planning, and Gazebo simulation. Containerizing robotics workloads with Docker for reproducible builds across development machines and on-robot deployment targets. Automating build, test, and release pipelines with GitHub Actions and CI/CD workflows.",
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
            "Building a production learning platform with full-stack ownership across React and TypeScript frontend and Python backend services. Designed asynchronous background-job architecture with Celery and Redis to improve throughput and reduce request latency. Implemented modular API and content pipelines for personalized course paths, quizzes, and content modules. Integrated external APIs including YouTube Data API and Brave Search API with ranking logic to improve discovery quality.",
          color: "#374151",
        },
        {
          title: "DevOps Engineer and Team Lead",
          company: "Misumi Kaizen OU Group (MISUMI.AI)",
          company_url: "#",
          logo_path: "monogram_misumi.png",
          duration: "Sep 2025 - Aug 2026",
          location: "Singapore",
          description:
            "Led development and deployment of LISA 1.0, an automotive advisor platform built with Next.js 15, PostgreSQL, and AI-enabled retrieval workflows, deployed to production and used by MISUMI to serve customers internationally. Owned cloud architecture and infrastructure operations for production delivery across 4 ASEAN markets. Co-architected containerized microservices on Alibaba Cloud with a RAG pipeline over structured Japanese and English automotive listings. Reduced API latency from 300ms to 50ms through caching, query optimization, and service-level tuning. Drove performance optimization and workload tuning that reduced cloud costs by 70 percent. Transitioned to developer and technical advisor for LISA 2.0, supporting a new team on architecture and retrieval design.",
          color: "#374151",
        },
        {
          title: "DevOps Intern",
          company:
            "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
          company_url: "https://www.modec.com/",
          logo_path: "modec_logo.png",
          duration: "Dec 2025 - Jan 2026",
          location: "Singapore",
          description:
            "Managed end-to-end deployment of an analytical data application from proof of concept to secure production. Configured and operated AWS Elastic Beanstalk environments with security-aligned release processes. Integrated CI/CD workflow and validation gates to maintain stable, repeatable delivery. Executed testing and rollback planning to satisfy organizational security and reliability benchmarks.",
          color: "#003A70",
        },
        {
          title: "AI Engineer, Part-Time",
          company: "National Institute of Education, Singapore",
          company_url: "https://www.ntu.edu.sg/nie",
          logo_path: "nie_logo.png",
          duration: "Jun 2025 - Oct 2025",
          location: "Singapore",
          description:
            "Developed backend features and real-time infrastructure for an intelligent tutoring system, as one of two primary developers. Architected WebSocket-based low-latency communication patterns, achieving 99.9 percent session stability. Supported end-to-end testing and system hardening for robust production behavior. Organized user-study processes and consolidated qualitative and quantitative insights for product iteration. Co-authored a peer-reviewed Springer publication at AIED 2026 on scaffolding emotion regulation in productive failure, based on a 60-participant human-subjects study (PI: Dr. Tanmay Sinha).",
          color: "#A6192E",
        },
        {
          title: "Software Engineer Intern, Sustainability Analytics",
          company:
            "MODEC Offshore Production Systems (Singapore) / Offshore Frontier Solutions",
          company_url: "https://www.modec.com/",
          logo_path: "modec_logo.png",
          duration: "Jun 2025 - Aug 2025",
          location: "Singapore",
          description:
            "Independently delivered a full-stack web application for sustainability and environmental analytics. Built responsive frontend workflows in React for complex vendor data collection and reporting. Engineered a scalable backend in Django and Django REST Framework handling 500 or more concurrent requests with 99.9 percent uptime. Improved retrieval performance by 40 percent using Redis caching and optimized backend query paths. Managed AWS deployment and ingestion workflows integrating IoT logs via AWS Lambda and Amazon S3.",
          color: "#003A70",
        },
        {
          title: "Full Stack Engineer Intern",
          company: "Panasonic R&D Center Singapore",
          company_url: "https://www.panasonic.com/sg/",
          logo_path: "panasonic.png",
          duration: "Jan 2025 - Jun 2025",
          location: "Singapore",
          description:
            "Deployed an inference API using FastAPI and Docker serving YOLOv8 with async processing for real-time workflows. Debugged and optimized complex workflows across SQL, Python, Redis, and network-integrated services. Implemented and refined caching strategies to improve data retrieval speed, latency, and reliability. Designed and executed testing strategies to identify bottlenecks and validate system integrity. Monitored system performance and proposed data-driven enhancements to uptime and user experience.",
          color: "#004B8D",
        },
        {
          title: "Full Stack Developer",
          company: "NTU College of Computing and Data Science (CCDS)",
          company_url: "https://www.ntu.edu.sg/computing",
          logo_path: "monogram_ccds.png",
          duration: "May 2024 - Jul 2025",
          location: "Singapore",
          description:
            "Led end-to-end development of a networking platform connecting alumni and undergraduates for startup and event collaboration. Built and maintained full-stack features using WordPress, SQL, PHP, and frontend customization workflows. Optimized backend processes and site performance to improve reliability and user experience.",
          color: "#374151",
        },
        {
          title: "Embedded Engineering Intern, Edge Data Systems",
          company: "Schaeffler Hub for Advanced Research",
          company_url: "https://www.schaeffler.sg/",
          logo_path: "schaeffler.png",
          duration: "May 2024 - Aug 2024",
          location: "Singapore",
          description:
            "Integrated the CAN bus protocol on an XMC4800 microcontroller, establishing a master-slave configuration between controller and actuator. Optimized performance by 20 percent leveraging low-latency EtherCAT and FreeRTOS scheduling on the XMC4800 microcontroller. Contributed to embedded framework development across Arduino, STM32F4, and XMC4800 environments. Performed debugging and validation to improve reliability of multi-board integration workflows. Enabled higher-frequency telemetry pipelines for predictive maintenance and edge analytics use cases.",
          color: "#00873E",
        },
        {
          title: "SCSE Peer Coach",
          company: "Nanyang Technological University Singapore",
          company_url: "https://www.ntu.edu.sg/",
          logo_path: "NtuLogo.jpg",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore",
          description:
            "Selected as one of four SCSE peer coaches to support students on academic warning. Delivered personalized study planning, mentorship, and accountability support to improve academic outcomes.",
          color: "#D71440",
        },
        {
          title: "Chess CCA Coach, MOE-qualified",
          company: "Freelance",
          company_url: "#",
          logo_path: "chess.jpeg",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore",
          description:
            "Delivered structured chess lessons during school CCA sessions, focusing on critical thinking and strategy. Built student-focused training plans to improve problem-solving and decision-making under constraints.",
          color: "#1d4ed8",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Researcher, Final Year Project",
          company: "Bioinformatics Lab, Nanyang Technological University",
          company_url: "https://github.com/Unknown-Blaze/FYP-Research",
          logo_path: "NtuLogo.jpg",
          duration: "Aug 2025 - May 2026",
          location: "Singapore",
          description:
            "Multimodal deep learning for MHC-peptide binding affinity prediction, supervised by Prof. Jagath C. Rajapakse; graded A and submitted to ICLR 2027. Outperformed competing state-of-the-art models retrained on the same dataset and split, achieving a Pearson correlation coefficient (PCC) of 0.859 against a best baseline of 0.847. Improved R-squared and Spearman rank correlation by 0.5 to 2 percent over the strongest baseline. Constructed the dataset from IEDB (Immune Epitope Database), generating 3D structures with a self-developed algorithm extending ColabFold. Applied homology-based 80/10/10 train, validation, and test splits to prevent sequence-similarity data leakage. Integrated ESM-2 sequence embeddings with 650M parameters into a fine-tuned AlphaFold-based pipeline for binding affinity prediction. Orchestrated memory-intensive training runs on an NVIDIA A100 80GB GPU. Implemented a reproducible PyTorch training workflow with LoRA and PEFT, metric logging, and experiment tracking.",
          color: "#D71440",
        },
        {
          title: "AI Researcher (Part-Time)",
          company: "National Institute of Education, NTU",
          company_url: "https://doi.org/10.1007/978-3-032-29791-4_2",
          logo_path: "nie_logo.png",
          duration: "Jun 2025 - Oct 2025",
          location: "Singapore",
          description:
            "Scaffolding Emotion Regulation in Productive Failure (PI: Dr. Tanmay Sinha). Co-authored a peer-reviewed Springer publication (AIED 2026) on prototyping and evaluating an AIED system that scaffolds learners' emotion regulation during productive failure. Served as one of two primary developers, implementing the system used to run the study. Instrumented and ran data collection for a 60-participant human-subjects study.",
          color: "#A6192E",
        },
        {
          title: "URECA President Research Scholar",
          company: "Nanyang Technological University",
          company_url:
            "https://www.ntu.edu.sg/education/undergraduate-programmes/ureca",
          logo_path: "NtuLogo.jpg",
          duration: "Aug 2024 - Apr 2025",
          location: "Singapore",
          description:
            "Edge AI security pipeline on ODROID (URECA research paper, NTU, 2025). Achieved 96 percent motion detection accuracy with 180ms latency in an IoT security system on ODROID. Tuned motion pipeline thresholds and buffering to reduce false positives under changing lighting conditions. Presented the work as a research poster for the URECA programme.",
          color: "#D71440",
        },
      ],
    },
    {
      title: "Leadership and Activities",
      experiences: [
        {
          title: "President and Captain",
          company: "NTU International Chess Varsity Team",
          company_url: "#",
          logo_path: "chess.jpeg",
          duration: "NTU",
          location: "Singapore",
          description:
            "Led team selection, training, and competition for the varsity team.",
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
        {
          title: "SCSE Peer Coach",
          company: "Nanyang Technological University Singapore",
          company_url: "#",
          logo_path: "NtuLogo.jpg",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore",
          description:
            "One of four peer coaches selected school-wide to support students on academic warning.",
          color: "#D71440",
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
        "Production iOS and Android app for NTU CCDS students | React Native, Expo, Redux | Nov 2024 - Present",
      image: "project_myccds.png",
      description:
        "Student platform for NTU's College of Computing and Data Science, on the App Store and Google Play. Shipped a cross-platform mobile app using React Native, Expo, and Redux. Reached 600 or more daily active users with a 5-star store rating. Optimized caching to improve content discovery workflows.",
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
      subtitle:
        "Winner, Best Developer Tooling | EasyA x Ripple Hackathon | Jun 2025 - Nov 2025",
      image: "project_ngodonate.png",
      description:
        "Built a donation workflow on XRPL and Ethereum achieving 2 second transaction finality. Implemented milestone-based escrow with on-chain transparency and NFT receipts and certificates. Added IPFS storage for verifiable supporting documents linked to on-chain records.",
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
      subtitle:
        "Final Year Project (Graded A), Bioinformatics Lab, NTU | Submitted to ICLR 2027 | Aug 2025 - May 2026",
      image: "project_fyp.png",
      description:
        "ESM-2 (650M) embeddings fused with an AlphaFold-based structural pipeline, fine-tuned with LoRA/PEFT in PyTorch on an NVIDIA A100 80GB. PCC 0.859 against 0.847 for the best state-of-the-art baseline retrained on the same dataset and split; R-squared and Spearman up 0.5 to 2 percent. Dataset built from IEDB with 3D structures from a self-developed ColabFold extension and homology-based 80/10/10 splits. Supervisor: Prof. Jagath C. Rajapakse.",
      footerLinks: [
        { name: "Code", url: "https://github.com/Unknown-Blaze/FYP-Research" },
      ],
    },
    {
      name: "Scaffolding Emotion Regulation in Productive Failure Using an AIED System",
      subtitle: "Publication | AIED 2026, Springer CCIS | Peer-reviewed",
      image: null,
      description:
        "Sinha, T., Huang, R., & Ganesh, R. P. (2026). Scaffolding Emotion Regulation in Productive Failure Using an AIED System: Prototyping and Evaluation. In Artificial Intelligence in Education (AIED 2026), Communications in Computer and Information Science, pp. 17-32. Springer Nature Switzerland.",
      footerLinks: [
        { name: "DOI", url: "https://doi.org/10.1007/978-3-032-29791-4_2" },
      ],
    },
    {
      name: "Edge AI security pipeline",
      subtitle:
        "President Research Scholar, URECA | ODROID | Aug 2024 - Apr 2025",
      image: null,
      description:
        "Achieved 96 percent motion detection accuracy with 180ms latency in an IoT security system on ODROID. Tuned motion pipeline thresholds and buffering to reduce false positives under changing lighting conditions. Presented the work as a research poster for the URECA programme.",
      footerLinks: [],
    },
    {
      name: "Virtual Reality Chemistry Laboratory",
      subtitle:
        "Interactive 3D molecular modelling for an introductory chemistry course | NTU MSE | Unity, Meta Quest 3 | May 2026 - Jul 2026",
      image: null,
      description:
        "Built in Unity for Meta Quest 3 in a team of four for NTU's School of Materials Science and Engineering. Students manipulate 3D molecular structures in headset and sit in-VR quizzes, replacing static diagrams.",
      footerLinks: [],
    },
    {
      name: "Mango order management",
      subtitle:
        "B2B ordering, payments, and operational analytics for a retailer | React, Firebase, Stripe | Jan 2025 - May 2025",
      image: "project_mango.png",
      description:
        "Built end-to-end ordering and payment workflows using React, Firebase, and Stripe. Processed more than SGD 18,000 monthly in transactions.",
      footerLinks: [{ name: "Live", url: "https://mango-club.vercel.app" }],
    },
    {
      name: "SyncTube",
      subtitle:
        "Real-time synchronized video streaming and collaboration platform | Next.js 15, Socket.IO, YouTube IFrame API | Sep 2024 - Dec 2024",
      image: "project_synctube.png",
      description:
        "Watch YouTube with friends, in sync, in real time. Built synchronized playback and room-state management for multi-user watch sessions. Implemented real-time communication workflows and reconnect handling for stable room continuity.",
      footerLinks: [
        { name: "Live", url: "https://synctube-tau.vercel.app" },
        { name: "Code", url: "https://github.com/Unknown-Blaze/synctube" },
      ],
    },
    {
      name: "Sentiment Analysis Platform",
      subtitle:
        "SC4001 Group Project, end-to-end text analytics with model-serving APIs | Jan 2024 - Apr 2024",
      image: null,
      description:
        "Built preprocessing and model-inference endpoints for sentiment classification workflows. Delivered dashboard views for trend analysis and data-driven business insights.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/SC4001-Group-Project",
        },
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
      name: "FunctionGemma",
      subtitle: "National Top 10 | Cactus x Google Global Hackathon | Feb 2025",
      image: null,
      description:
        "Engineered an agentic workflow using Google Gemma with function calling, routing tool calls between an on-device model and the cloud. Architected a modular Python API backend for rapid feature iteration.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/functiongemma-hackathon",
        },
      ],
    },
    {
      name: "Truth Fairy",
      subtitle: "Top 5 | NTU TechFest Hackathon | Jan 2025",
      image: null,
      description:
        "Chrome extension against misinformation. Built a Chrome extension integrating an AI deepfake detection service with Grad-CAM explainability. Implemented lightweight inference orchestration and caching to keep analysis responsive.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/techfest-truth-fairy",
        },
      ],
    },
    {
      name: "GroceryGrabber",
      subtitle: "Finalist | DSTA BrainHack | May 2024",
      image: null,
      description:
        "Led a team and implemented PostGIS geospatial filtering within a 5km radius with GPT-powered parsing. Designed ranking logic for nearby inventory discovery and reduced redundant queries via server-side caching.",
      footerLinks: [
        {
          name: "Code",
          url: "https://github.com/Unknown-Blaze/BrainHacks-Code-Exp",
        },
      ],
    },
    {
      name: "Port Downtime and Freight Forecasting",
      subtitle: "Finalist | PSA Code Sprint | May 2024",
      image: null,
      description:
        "Built a TensorFlow time-series forecasting pipeline with a Django backend and operational dashboard.",
      footerLinks: [
        {
          name: "Code",
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
    "Apps in production, research, hackathon builds and VR, from mobile and web to machine learning.",
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
