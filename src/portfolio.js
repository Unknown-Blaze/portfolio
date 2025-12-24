/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rudra's Portfolio",
  description:
    "A passionate computer engineering student dedicated to creating scalable IoT and software solutions for a sustainable, connected world.",
  og: {
    title: "Rudra Prasadh Ganesh's Portfolio",
    type: "website",
    url: "http://unknown-blaze.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Rudra Prasadh Ganesh",
  logo_name: "RudraPrasadh",
  nickname: "@unknown_blaze",
  subTitle:
    "A passionate computer engineering student dedicated to creating scalable IoT and software solutions for a sustainable, connected world.",
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
    link: "https://www.linkedin.com/in/rudra-prasadh-ganesh-70376494/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:grudraprasadh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/unknown_blaze",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rudraprasadh.ganesh",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/unknown_rudra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg", // <-- Update if you have a specific image file
      skills: [
        "⚡ Building responsive, scalable, and dynamic user interfaces with React.js and React Native.",
        "⚡ Ensuring seamless state management across complex applications using Redux.",
        "⚡ Crafting modern and clean UI/UX with HTML5, CSS3, Tailwind CSS, and Bootstrap.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E", backgroundColor: "#000000" },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: { color: "#0769AD" },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "simple-icons:webpack",
          style: { color: "#8DD6F9" },
        },
      ],
    },
    {
      title: "Backend & Databases",
      fileName: "FullStackImg", // <-- Update if you have a specific image file
      skills: [
        "⚡ Architecting robust and scalable server-side applications using Django, Express.js, and Flask.",
        "⚡ Designing and implementing RESTful APIs, GraphQL endpoints, and microservices.",
        "⚡ Managing data persistence and caching with PostgreSQL, MySQL, MongoDB, Firebase and Redis.",
        "⚡ Automating tasks with Selenium",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4169E1" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "Celery",
          fontAwesomeClassname: "simple-icons:celery",
          style: { color: "#37814A" },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg", // <-- This filename seems appropriate
      skills: [
        "⚡ Developing and fine-tuning models for Computer Vision (YOLO) and NLP (Transformers).",
        "⚡ Utilizing frameworks like PyTorch and TensorFlow for deep learning applications.",
        "⚡ Performing data manipulation, analysis, and statistical modeling with Pandas, NumPy, and Scikit-Learn.",
        "⚡ Building generative AI applications with Hugging Face and LangChain.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "simple-icons:mathworks",
          style: { color: "#0076A8" },
        },
      ],
    },
    {
      title: "Embedded Engineering & DevOps",
      fileName: "CloudInfraImg", // <-- Update if you have a specific image file
      skills: [
        "⚡ Programming microcontrollers like STM32 and ESP32 in C/C++.",
        "⚡ Designing real-time systems with FreeRTOS and interfacing hardware using protocols like EtherCAT.",
        "⚡ Containerizing applications with Docker for consistent development and deployment.",
        "⚡ Implementing CI/CD pipelines with GitHub Actions for automated testing and builds.",
      ],
      softwareSkills: [
        {
          skillName: "C/C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "ARM",
          fontAwesomeClassname: "simple-icons:arm",
          style: { color: "#0091BD" },
        },
        {
          skillName: "STM32",
          fontAwesomeClassname: "simple-icons:stmicroelectronics",
          style: { color: "#03234B" },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: { color: "#A22846" },
        },
        {
          skillName: "FreeRTOS",
          fontAwesomeClassname: "simple-icons:freertos",
          style: { color: "#1A1A3C" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
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
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@unknown",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "NtuLogo.jpg",
      alt_name: "NTU Singapore",
      duration: "Aug 2022 - Present",
      descriptions: [
        "⚡ Maintained a cumulative GPA of 4.76 / 5.00, placing me in the highest distinction.",
        "⚡ Awarded the NTU Science and Engineering Undergraduate Scholarship, a full scholarship for outstanding academic and leadership achievements.",
        "⚡ Named to the Dean's List for both the 2022-23 and 2023-24 academic years, the only student of my cohort to do so.",
        "⚡ Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Microprocessor System Design, Data Science & AI, Computer Networks, Operating Systems.",
      ],
      website_link: "https://www.ntu.edu.sg/",
    },
    {
      title: "Sri KDU International School",
      subtitle: "International Baccalaureate (IB) Diploma",
      logo_path: "srikdu_logo.png",
      alt_name: "Sri KDU International School",
      duration: "Sep 2020 - May 2022",
      descriptions: [
        "⚡ Achieved an IB Diploma score of 42 out of 45, ranking among the top performers of the graduating class.",
        "⚡ Led fundraising initiatives, including talent shows and inter-school competitions, to raise funds for the TREAK community in Siem Reap, Cambodia.",
        "⚡ specialized in Higher Level (HL) subjects: Physics, Chemistry, and Mathematics (Analysis & Approaches).",
      ],
      website_link: "https://srikdu.edu.my/homepage/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships, Work, and Leadership",
  description:
    "I have had the privilege of contributing to impactful projects across software engineering, AI, and embedded systems. My journey spans high-stakes industry internships and part-time engineering roles where I've architected scalable solutions and driven measurable results. I thrive on solving complex problems, leading collaborative teams, and consistently delivering high-quality, end-to-end solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineering Intern - Sustainability",
          company: "MODEC Offshore Production Systems",
          company_url: "https://www.modec.com/",
          logo_path: "modec_logo.png", // <-- Update logo path
          duration: "Jun 2025 – Aug 2025",
          location: "Singapore",
          description:
            "Architected a full-stack sustainability dashboard using React, Django, and PostgreSQL to analyze GHG emissions for 30+ supply chain vendors. I designed and implemented a multi-objective optimization algorithm projected to reduce Scope 3 emissions by 15% by balancing emissions, cost, and logistics. The application was deployed using Docker and CI/CD pipelines to provide a scalable, high-availability tool for global production plants.",
          color: "#003A70",
        },
        {
          title: "Full Stack Engineering Intern",
          company: "Panasonic R&D Center",
          company_url: "https://www.panasonic.com/sg/",
          logo_path: "panasonic.png",
          duration: "Jan 2025 – May 2025",
          location: "Singapore",
          description:
            "Developed an AI-powered security application with a YOLOv5 model that achieved 98% accuracy in detecting unauthorized presence. I optimized backend performance by implementing a Redis cache and refining queries, reducing API response latency by 45%. The final AI model was containerized as a REST API for seamless integration into Panasonic's existing security ecosystems.",
          color: "#004B8D",
        },
        {
          title: "Embedded Engineering Intern",
          company: "Schaeffler Hub for Advanced REsearch (SHARE)",
          company_url: "https://www.schaeffler.sg/",
          logo_path: "schaeffler.png",
          duration: "May 2024 – Aug 2024",
          location: "Singapore",
          description:
            "Engineered a robust EtherCAT communication protocol between an XMC4800 microcontroller and industrial actuators, increasing data throughput by 20%. I also architected a modular embedded framework on an STM32 platform for motor control, designing reusable middleware components that reduced development time for future projects by 30%.",
          color: "#00873E",
        },
      ],
    },
    {
      title: "Work & Research",
      work: true,
      experiences: [
        {
          title: "AI Engineer (Part-Time)",
          company: "National Institute of Education",
          company_url: "https://www.ntu.edu.sg/scse",
          logo_path: "nie_logo.png", // <-- Update logo path
          duration: "Jun 2025 - Present",
          location: "Singapore",
          description:
            "As a part-time AI Engineer, I am enhancing a conversational AI tutor by integrating Generative AI (LLMs) to create adaptive pedagogical feedback, which has improved student engagement by 25%. I manage the end-to-end development lifecycle, from feature implementation to automated deployment with GitHub Actions, ensuring 99.5% system uptime.",
          color: "#A6192E",
        },
        {
          title: "Full Stack Developer",
          company: "NTU College of Computing and Data Science (CCDS)",
          company_url: "https://www.ntu.edu.sg/ccds",
          logo_path: "ntuccds.png",
          duration: "May 2024 - Aug 2024",
          location: "Singapore · Remote",
          description:
            "Led the full-stack development of a scalable networking platform in WordPress and PHP for 1,000+ students and alumni. My work increased user registration by 200% after launch and optimized page load times by 40% by architecting a custom SQL database schema and server-side logic to handle high traffic during peak events.",
          color: "#005aff",
        },
        {
          title: "Undergraduate Researcher (URECA)",
          company: "Nanyang Technological University",
          company_url:
            "https://www.ntu.edu.sg/education/undergraduate-programmes/ureca",
          logo_path: "NtuLogo.jpg",
          duration: "Aug 2024 – May 2025",
          location: "Singapore",
          description:
            "Designed and built an IoT-based theft detection system on an O-Droid microcontroller. By implementing the ViBe computer vision algorithm, the system achieved 95% motion detection accuracy in diverse lighting conditions. I also engineered an encrypted data pipeline that achieved real-time alert generation within 180ms of a detected event.",
          color: "#D71440",
        },
      ],
    },
    {
      title: "Leadership & Volunteering",
      experiences: [
        {
          title: "President & Varsity Team Captain",
          company: "NTU International Chess Club",
          company_url: "#",
          logo_path: "chess.jpeg",
          duration: "Jan 2023 - Present",
          location: "Singapore",
          description:
            "As President and Captain, I grew the club to over 250 members (a 40% increase) and led the varsity team to 3 major inter-university championship victories. My leadership in organizing events and securing sponsorships resulted in a 15% increase in university funding for the club.",
          color: "#1d4ed8",
        },
        {
          title: "Chess Instructor",
          company: "MOE-Approved Freelancer",
          company_url: "#",
          logo_path: "mentor.jpg",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore",
          description:
            "As a Ministry of Education (MOE) approved instructor, I designed and delivered structured chess curriculums for primary and secondary students at One World International School. My training programs focused on enhancing strategic thinking, tactical skills, and competitive readiness.",
          color: "#34495e",
        },
        {
          title: "Volunteer",
          company: "NTU Red Cross Club",
          company_url: "https://www.redcross.sg",
          logo_path: "ntu_red_cross.png",
          duration: "May 2024 - Jul 2024",
          location: "Singapore",
          description:
            "Volunteered in initiatives focused on the appreciation and welfare of migrant workers in Singapore. I helped organize and execute events aimed at promoting well-being, fostering community integration, and enhancing cross-cultural understanding.",
          color: "#d91e18",
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      name: "nGoDONATE - Transparent Philanthropy Platform",
      subtitle:
        "EasyA x Ripple Blockchain Hackathon | Award: Best Developer Tooling",
      image: null,
      description:
        "Won 'Best Developer Tooling' by building a decentralized philanthropy app on the XRP Ledger with a novel Shamir's Secret Sharing validation mechanism.",
      footerLinks: [],
    },
    {
      name: "Predictive AI for Port Logistics",
      subtitle: "PSA Code Sprint 2024 | Hackathon Finalist",
      image: null,
      description:
        "Developed an AI logistics system with a React dashboard and a TensorFlow/Django backend, achieving 92% forecast accuracy to reduce port equipment downtime.",
      footerLinks: [],
    },
    {
      name: "MyCCDS Student Intranet App",
      subtitle: "Personal Project | Open-Source Mobile App for NTU Students",
      image: null,
      description:
        "Single-handedly built and launched a React Native student app with a custom REST API, achieving 1,500+ downloads in the first month by centralizing academic resources.",
      footerLinks: [],
    },
    {
      name: "Bespoke E-commerce & Order Management Platform",
      subtitle: "Full-Stack Freelance Project",
      image: null,
      description:
        "Architected a full-stack e-commerce platform using Django and React, automating order processing with Celery/Redis to reduce manual handling by 95% for a freelance client.",
      footerLinks: [],
    },
    {
      name: "AI in Edge Computing (URECA Research)",
      subtitle: "NTU Research Project | IoT-based Security System",
      image: null,
      description:
        "Engineered an IoT security system on an O-Droid microcontroller, achieving 95% motion detection accuracy and real-time alerts within 180ms using the ViBe algorithm.",
      footerLinks: [],
    },
    {
      name: "Multidisciplinary Robot Car Project",
      subtitle: "Academic Project | Group Leader and Hardware Lead",
      image: null,
      description:
        "Led a team of 8 to build a maze-solving robot, engineering the hardware control system on an STM32 with FreeRTOS and establishing robust communication with a Raspberry Pi.",
      footerLinks: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create an IoT interface using a full stack and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Open Source (GitHub) settings
// Note: For GitHub GraphQL API, a Personal Access Token is required.
// If you don't want to use a token, leave `githubConvertedToken` empty; the Projects page will simply not list pinned repos.
const openSource = {
  githubUserName: "Unknown-Blaze",
  // Base64-encoded GitHub token. Keep empty if not using GraphQL fetch at runtime.
  githubConvertedToken: "",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_rudra.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. We can discuss about React, Android, Embedded systems, IoT, Machine Learning and AI.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.unknown-blaze.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "+65 8178 0206",
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
  openSource,
  contactPageData,
};
