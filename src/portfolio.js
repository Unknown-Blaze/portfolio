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
  title: "Rudra Prasadh Gan",
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.js",
        "⚡ Developing mobile applications using Expo React Native",
        "⚡ Creating application backend using Django Rest Framework, working with CRUD and Restful APIs",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#005710FF",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#F86700FF",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Embedded Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Arduino, Raspberry Pi, STM32 and other custom ARM based microcontrollers",
        "⚡ Integrate IoT into Full Stack applications to create a custom hardware based apps",
        "⚡ Understand control and working with PID controllers",
        "⚡ Working on Ubuntu Linux to implement RTOS and various multithreading and socket mechanisms on a microcontroller scale",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#EEF700FF",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: {
            color: "#690065FF",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "ARM Based Microprocessors",
          fontAwesomeClassname: "simple-icons:arm",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GNU Toolchain",
          fontAwesomeClassname: "simple-icons:gnu",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and other neural networks projects",
        "⚡ Integrate with backend for a more robust full stack AI application",
      ],
      softwareSkills: [
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
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
      title: "Nanyang Technological University Singapore",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "NtuLogo.jpg",
      alt_name: "NTU Singapore",
      duration: "Aug 2022 - Apr 2026",
      descriptions: [
        "⚡ NTU Science and Engineering Undergraduate Scholar - Full Scholarship eligible only to those with outstanding academics, co-curriculars and leadership qualities",
        "⚡ Dean's List for First and Second year of studies - Awarded to the top 5% of the cohort (~ 8 to 12 students)",
        "⚡ Completed and received A+ in key modules such as Discrete Math, Data Structures and Algorithms, Microprocessor System Design, Digital Systems, Computer Networks, Data Science & AI, etc.",
      ],
      website_link: "https://www.ntu.edu.sg/",
    },
    {
      title: "Sri KDU International School",
      subtitle: "IB Diploma",
      logo_path: "srikdu_logo.png",
      alt_name: "Sri KDU International School",
      duration: "Aug 2020 - May 2022",
      descriptions: [
        "⚡ Secured Second topper of school with a score of 42 / 45.",
        "⚡ Organized talent shows and competitions to raise money for the TREAK community in Siep Reap, Cambodia",
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
  subtitle: "Work, Internship, and Research",
  description:
    "I have had the privilege of working on impactful projects across various domains, including IoT, AI, and full-stack development. My journey has spanned industry internships, undergraduate research, and part-time roles, each contributing to my growth as a well-rounded engineer. My passion for creating innovative solutions and fostering collaboration drives me to excel in every endeavor.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "NTU College of Computing and Data Science (CCDS)",
          company_url: "https://www.ntu.edu.sg",
          logo_path: "ntuccds.png",
          duration: "May 2024 - Present",
          location: "Singapore · Remote",
          description:
            "Independently leading the development of a networking website for NTU's CCDS, connecting alumni and undergraduates. The platform facilitates collaboration around startups and mutual events, fostering a vibrant community. Utilized WordPress for streamlined development, integrating SQL and PHP to optimize backend processes. Delivered a user-friendly experience while strengthening the CCDS network. I have been tasked with many more projects now, with more to come.",
          color: "#005aff",
        },
        {
          title: "Undergraduate Research Experience On Campus (URECA)",
          company: "Nanyang Technological University",
          company_url: "https://www.ntu.edu.sg",
          logo_path: "NtuLogo.jpg",
          duration: "Aug 2024 – May 2025",
          location: "Singapore",
          description:
            "Built an IoT system using an O-Droid microcontroller to capture video and detect motion via the ViBe algorithm. Designed a theft detection system using computer vision and optimized data transmission for low-latency operations. Encrypted sensitive video data for secure Wi-Fi transmission, ensuring robust real-time security monitoring.",
          color: "#ff6600",
        },
        {
          title: "Chess CCA Mentor",
          company: "Freelance",
          company_url: "https://www.ntu.edu.sg",
          logo_path: "chess.jpeg",
          duration: "Jan 2024 - Apr 2024",
          location: "Singapore",
          description:
            "Approved by MOE as a Chess Instructor, training primary and secondary students at One World International School. Developing structured lessons and training programs, enhancing students' strategic thinking and game skills. Promoting chess as an educational tool, contributing to students' cognitive development and competitive spirit",
          color: "#0a0a0a",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Engineering Intern",
          company: "Panasonic R&D Center",
          company_url: "https://www.panasonic.com",
          logo_path: "panasonic.png",
          duration: "Jan 2025 – May 2025",
          location: "Singapore",
          description:
            "Worked on innovative solutions within Panasonic's R&D team. Collaborated on full-stack development tasks, contributing to the design, implementation, and optimization of software solutions tailored for real-world applications.",
          color: "#000000",
        },
        {
          title: "Applied Research Engineering Intern - Embedded Engineering",
          company: "Schaeffler Hub for Advanced REsearch (SHARE)",
          company_url: "https://www.schaeffler.com",
          logo_path: "schaeffler.png",
          duration: "May 2024 – Jul 2024",
          location: "Singapore",
          description:
            "Developed communication between XMC4800 and host/actuators via USB and EtherCAT, optimizing data flow and system integration. Contributed to the embedded framework on STM32 for motor controller projects, enhancing future user applications and system scalability. Engineered both projects integrating FreeRTOS and various middlewares, ensuring reliable and efficient operation. Enhanced system efficiency and reliability, enabling seamless integration and future scalability.",
          color: "#00873e",
        },
      ],
    },
    {
      title: "Co-curriculars",
      experiences: [
        {
          title: "President and Varsity Team Captain",
          company: "NTU International Chess Club",
          company_url: "https://www.ntu.edu.sg",
          logo_path: "chess.jpeg",
          duration: "Jan 2023 - Present",
          location: "Singapore",
          description:
            "Leading a 150-member club, organizing events, training sessions, and competitive tournaments. Guided the varsity team to win several accolades, enhancing the club's reputation and member skills. Fostered a collaborative environment, increasing member engagement and skill development.",
          color: "#005aff",
        },
        {
          title: "Migrant Worker Appreciation and Student Support Volunteer",
          company: "NTU Red Cross Club",
          company_url: "https://www.redcross.sg",
          logo_path: "ntu_red_cross.png",
          duration: "May 2024 - Jul 2024",
          location: "Singapore",
          description:
            "Volunteered to appreciate and support migrant workers, aiding in their integration and welfare. Organized events and activities to promote well-being and recognition of migrant workers. Enhanced cross-cultural understanding and community spirit, positively affecting the lives of migrant workers.",
          color: "#d91e18",
        },
        {
          title: "Music Director and Instructor",
          company: "NTU Piano Ensemble Club",
          company_url: "https://www.ntu.edu.sg",
          logo_path: "ntupe.png",
          duration: "Aug 2022 - Jul 2023",
          location: "Singapore",
          description:
            "Directed the NTU Piano Ensemble, training beginners and preparing them for concert-like performances. Organized rehearsals and performances, showcasing the talents of ensemble members. Contributed to the cultural life of NTU, enriching musical skills and experiences of participants.",
          color: "#ff9900",
        },
        {
          title: "Private Tutor – Mathematics, Physics, Chemistry, Chess",
          company: "Self-employed",
          company_url: "https://www.example.com",
          logo_path: "mentor.jpg",
          duration: "Aug 2020 - May 2022",
          location: "Malaysia",
          description:
            "Provided personalized instruction in Math, Physics, Chemistry, chess, table tennis, and Rubik's cube solving. Taught students aged 4-17, tailoring lessons to individual needs and promoting academic and skill growth. Empowered students with knowledge and confidence, significantly improving their performance and interest.",
          color: "#1976d2",
        },
        {
          title: "Talent Show Organizer and Fundraiser",
          company: "Sri KDU International School",
          company_url: "https://www.srikdu.edu.my",
          logo_path: "srikdu_logo.png",
          duration: "Jan 2021 - May 2021",
          location: "Malaysia",
          description:
            "Organized talent shows and fundraising events for TREAK Community in Siam Reap, Cambodia. Coordinated with students, teachers, and sponsors, raising significant funds for community support. Promoted cultural exchange and community service, impacting the lives of underprivileged individuals.",
          color: "#0a0a0a",
        },
      ],
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
