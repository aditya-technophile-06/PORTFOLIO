import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiKubernetes, SiGit, SiGithub, SiJenkins,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiGraphql, SiApachekafka,
  SiSpringboot, SiKeycloak, SiGooglecloud,
  SiLinux, SiPostman, SiSwagger, SiJira, SiFigma,
  SiFlask, SiDjango, SiFastapi, SiNginx, SiOracle,
  SiBitbucket, SiJfrog, SiNomad
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export const personalInfo = {
  name: "Aditya M",
  title: "Full Stack Developer",
  email: "adityamanjunath613@gmail.com",
  phone: "+91 8861061103",
  location: "Bangalore, Karnataka, India",
  bio: "Full stack developer with deep interest in web architecture, application security, and AI/ML-powered experiences. I enjoy shipping resilient products that blend clean engineering with thoughtful design.",
  profileImage: "/images/profile.png",
  resume: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/aditya-technophile-06",
  linkedin: "https://www.linkedin.com/in/aditya-m-5249b8228/",
  email: "adityamanjunath613@gmail.com",
};

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Languages" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Languages" },
  
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Flask", icon: SiFlask, color: "#000000", category: "Backend" },
  
  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "Oracle", icon: SiOracle, color: "#F80000", category: "Database" },
  { name: "Qdrant", icon: FaDatabase, color: "#00D4FF", category: "Database" },
  { name: "Chroma DB", icon: FaDatabase, color: "#4CAF50", category: "Database" },
  
  // DevOps & Cloud
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps" },
  { name: "Nomad", icon: SiNomad, color: "#00BC7F", category: "DevOps" },
  { name: "JFrog", icon: SiJfrog, color: "#40B3E0", category: "DevOps" },
  { name: "Azure AI", icon: FaMicrosoft, color: "#0078D4", category: "Cloud" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4", category: "Cloud" },
  
  // Tools & Others
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "Tools" },
  { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC", category: "Tools" },
  { name: "Keycloak", icon: SiKeycloak, color: "#4D4D4D", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
  { name: "Swagger", icon: SiSwagger, color: "#85EA2D", category: "Tools" },
  { name: "Jira", icon: SiJira, color: "#0052CC", category: "Tools" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", category: "Tools" },
  
  // Security
  { name: "Cryptography", icon: FaShieldAlt, color: "#FF6B6B", category: "Security" },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "TrueDiagnose - Healthcare ML Platform",
    description: "A Flask-based healthcare assistant that delivers multi-disease predictions (diabetes, heart, cancer, kidney, liver) alongside deep learning image diagnostics (malaria & pneumonia) and integrated doctor appointments with email follow-ups.",
    image: "/images/TrueDiagnose.png",
    tags: ["Python", "Flask", "Scikit-learn", "TensorFlow", "HTML/CSS"],
    github: "https://github.com/aditya-technophile-06/TrueDiagnose",
    demo: "https://truediagnose-preview.com",
    featured: true,
  },
  {
    title: "Blockchain-based E-Voting System",
    description: "A Django demo that showcases a decentralized, tamper-proof voting workflow using OTP authentication, SHA-256 encryption, and Merkle trees for transparent and immutable vote tracking.",
    image: "/images/E-voting.png",
    tags: ["Django", "Python", "SHA-256", "Merkle Tree", "PostgreSQL"],
    github: "https://github.com/aditya-technophile-06/BlockChain-based-E-Voting-System",
    demo: "https://e-voting-demo.com",
    featured: true,
  },
  {
    title: "Karnataka Tourism Experience Portal",
    description: "A modern React + TypeScript website promoting 25+ destinations across Karnataka with destination cards, hero sliders, and itinerary-ready content deployed on Vercel.",
    image: "/images/Karnataka_Tourism.png",
    tags: ["React", "TypeScript", "TailwindCSS", "SwiperJS", "Vercel"],
    github: "https://github.com/aditya-technophile-06/Tourism-Website",
    demo: "https://tourism-website-eight-rho.vercel.app/",
    featured: true,
  },
  {
    title: "Chocolate House Management System",
    description: "A Flask + SQLite operations portal that lets chocolatiers manage seasonal flavors, ingredient inventory, and customer feedback with full CRUD workflows.",
    image: "/images/Choco.png",
    tags: ["Flask", "Python", "SQLite", "CRUD", "Bootstrap"],
    github: "https://github.com/aditya-technophile-06/Chocolates_House_Management_System",
    featured: true,
  },
  {
    title: "VS Code MCP Server",
    description: "A Model Context Protocol server delivering 29 VS Code-focused tools for file editing, command automation, diagnostics, and project analysis so AI copilots can work inside any repo via Claude Desktop.",
    image: "/images/vs-mcp.png",
    tags: ["TypeScript", "Node.js", "MCP", "VS Code", "CLI"],
    github: "https://github.com/aditya-technophile-06/VS-CODE_MCP-SERVER",
    featured: true,
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering - BE, Computer Science Engineering (Artificial Intelligence and Machine Learning)",
    university: "Vidyavardhaka College of Engineering",
    duration: "Dec 2021 - Jun 2025",
    grade: "8.81",
    activities: "IEEE",
    logo: "/images/vvceofficial_logo.jpeg",
    skills: [
      "REST APIs", "Team Leadership", "Python (Programming Language)", "Artificial Intelligence (AI)",
      "Flutter", "Data Structures", "Analytical Skills", "Version Control", "Java", "Machine Learning",
      "Database Management System (DBMS)", "Algorithms", "MySQL", "Google Cloud Platform (GCP)",
      "Computer Science", "Problem Solving", "Git", "Cryptography and Network Security"
    ]
  },
  {
    degree: "XII, Science",
    university: "Expert Group of Institutions",
    duration: "2020 - 2021",
    stream: "Science & Mathematics",
    grade: "88.6 %",
    logo: "/images/expert_group_of_institutions_logo.jpeg",
    skills: ["Public Speaking", "Communication"]
  },
  {
    degree: "X, Science",
    university: "JSS Public School, Sakleshpur",
    duration: "2018 - 2019",
    stream: "Science & Mathematics",
    grade: "87.6 %",
    logo: "/images/JSSPS.jpeg",
    activities: "Athlete, State level Handball player",
    skills: ["Leadership", "Communication"]
  }
];

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  logo: string;
  summary?: string;
  description: string[];
  skills?: string[];
  timeline?: {
    position: string;
    duration: string;
    employmentType?: string;
    location?: string;
    description: string[];
    skills?: string[];
  }[];
}

export const workExperience: Experience[] = [
  {
    title: "Software Developer",
    company: "Azentio Software",
    duration: "Dec 2024 - Present · 1 yr",
    location: "Bangalore Urban, Karnataka, India · On-site",
    logo: "/images/azentio_logo.jpeg",
    summary: "Building enterprise banking solutions across apprentice and internship programs with a focus on TypeScript, React.js, and modern backend services.",
    description: [
      "Drive the SiteBuilder platform for BFSI clients, delivering modern digital products with reusable React components and AI-enabled workflows",
      "Engineer and optimize REST APIs for configuration, translation, migration, and import/export features with caching for performance",
      "Integrate Keycloak-based RBAC, regex-driven bindings, and security architecture into responsive frontend experiences",
      "Work cross-functionally with product, design, and DevOps teams to ship banking capabilities from concept to deployment"
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Bitbucket",
      "Keycloak",
      "Microservices"
    ],
    timeline: [
      {
        position: "Software Developer Apprentice (Trainee Engineer)",
        duration: "Jul 2025 - Present · 5 mos",
        employmentType: "Full-time",
        location: "Bangalore Urban, Karnataka, India",
        description: [
          "Own SiteBuilder UI releases using TypeScript and React, integrating APIs and AI features into drag-and-drop journeys",
          "Build reusable components and mentor interns on repository workflows, code reviews, and quality gates"
        ],
        skills: ["TypeScript", "React", "APIs", "AI Integrations"]
      },
      {
        position: "Software Developer Intern",
        duration: "Dec 2024 - Jun 2025 · 7 mos",
        employmentType: "Internship",
        location: "Bangalore Urban, Karnataka, India",
        description: [
          "Built responsive BFSI web components using React and TypeScript, improving SiteBuilder usability",
          "Optimized backend queries, caching layers, and deployment automations via Bitbucket-driven CI/CD"
        ],
        skills: ["React", "TypeScript", "PostgreSQL", "Bitbucket"]
      }
    ]
  },
  {
    title: "Software Development Intern",
    company: "Finlatics",
    duration: "May 2022 - Aug 2022",
    location: "Remote",
    logo: "/images/finlatics_logo.jpeg",
    description: [
      "Built dashboard components and API integrations using React and Node.js",
      "Paired with senior engineers in agile ceremonies to deliver sprint commitments"
    ],
    skills: ["React", "Node.js", "Agile"]
  },
  {
    title: "Co-Founder",
    company: "Public Policy and Governance Society, VVCE",
    duration: "Sep 2024 - Present · 1 yr 3 mos",
    location: "Mysore, Karnataka, India",
    logo: "/images/ppgs.jpeg",
    summary: "Leading a student-led initiative that drives policy discussions, mentorship, and civic impact programs across campus.",
    description: [
      "Facilitate UPSC discussions, mentorship sessions, and dialogues with industry experts and civil servants",
      "Design programs that cultivate leadership, analytical thinking, and community engagement"
    ],
    skills: ["Public Speaking", "Analytical Skills", "+4 skills"]
  },
  {
    title: "Department Placement Coordinator",
    company: "Vidyavardhaka College of Engineering",
    duration: "May 2024 - Jun 2025 · 1 yr 2 mos",
    location: "Mysore, Karnataka, India",
    logo: "/images/vvceofficial_logo.jpeg",
    description: [
      "Acted as liaison between students and the placement cell to streamline recruitment drives",
      "Facilitated communication, scheduling, and reporting to keep students informed about opportunities"
    ],
    skills: ["Interpersonal Skills", "Communication", "+3 skills"]
  }
];

export interface Education {
  degree: string;
  university: string;
  duration: string;
  stream?: string;
  grade?: string;
  activities?: string;
  logo: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional level certification for designing distributed systems on AWS",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    description: "Certification for building scalable applications on GCP",
  },
  {
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    description: "Certification for Kubernetes administration and orchestration",
  },
  {
    title: "Hackathon Winner",
    issuer: "TechFest 2022",
    date: "2022",
    description: "First place in national level hackathon for innovative AI solution",
  },
];
