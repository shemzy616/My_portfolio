export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  status?: string;
  description: string;
  tags: string[];
  details: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Security" | "Full-Stack" | "Frontend" | "AI & Data";
}

export interface Certification {
  name: string;
  issuer: string;
  status: "Completed" | "In Progress";
  credlyUrl?: string;
  color: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const portfolioData = {
  personal: {
    name: "SHEM I MUIRURI",
    title: "Cybersecurity Analyst | Network Admin | Software Developer",
    tagline: "I hunt threats across logs — then automate the parts a human shouldn't repeat.",
    location: "Nairobi, Kenya",
    email: "shemmuiruri1@gmail.com",
    phone: "+254 726 090 669",
    linkedin: "https://www.linkedin.com/in/shem-muiruri1",
    github: "https://github.com/shemzy616",
    credly: "https://www.credly.com/users/shem-muiruri",
    summary: "I hunt threats across logs — then automate the parts a human shouldn't repeat.",
  },
  stats: [
    { label: "Certifications", value: "8+" },
    { label: "Projects", value: "7" },
    { label: "SLA Score", value: "95%" },
    { label: "Domains", value: "3" },
  ],
  services: [
    { title: "SIEM & Threat Triage", icon: "circle" },
    { title: "Incident Response", icon: "target" },
    { title: "Network Security", icon: "triangle" },
    { title: "Access Control / UAR", icon: "diamond" },
    { title: "Python Tooling", icon: "square" },
    { title: "Full-Stack Dev", icon: "hexagon" },
    { title: "Cisco LAN / WAN", icon: "dot" },
    { title: "Linux / Windows", icon: "ring" },
  ],
  certifications: [
    {
      name: "Cybersecurity Fundamentals",
      issuer: "IBM",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/06ba4aa6-e229-4acd-95cf-400760acef62/public_url",
      color: "#054ADA",
    },
    {
      name: "Google Cybersecurity Professional",
      issuer: "Google",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/116ea48c-1fe9-4084-bfdd-4a81759c9e3b/public_url",
      color: "#34A853",
    },
    {
      name: "Networking Devices & Initial Configuration",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/e165a271-5846-462a-b9d5-a68621f773ea/public_url",
      color: "#1BA0D7",
    },
    {
      name: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/cdaf3784-3811-4949-82d3-1d7e28c25240/public_url",
      color: "#1BA0D7",
    },
    {
      name: "Endpoint Security",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/0109fcd9-ba2b-4a66-8476-5699f7932696/public_url",
      color: "#1BA0D7",
    },
    {
      name: "Network Defense",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/1aca2875-95cd-4383-a030-b1c9a49fda1e/public_url",
      color: "#1BA0D7",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/697b45dc-edf5-415f-b8e1-241a3fb02f5a/public_url",
      color: "#1BA0D7",
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
      status: "Completed",
      credlyUrl: "https://www.credly.com/badges/e3d26415-3dd0-490d-addd-b5c50117843e/public_url",
      color: "#1BA0D7",
    },
  ] as Certification[],
  skillCategories: [
    {
      categoryName: "SecOps & Cybersecurity",
      skills: [
        "SIEM & EDR",
        "KQL Querying",
        "Threat Triage",
        "Incident Response (NIST)",
        "MITRE ATT&CK",
        "Malware Analysis",
        "VirusTotal / IOC",
        "Vulnerability Mgmt",
        "User Access Reviews",
      ],
    },
    {
      categoryName: "Networking & Admin",
      skills: [
        "Cisco LAN/WAN",
        "TCP/IP, DNS, HTTPS",
        "NAC & Segmentation",
        "Linux & Windows",
        "Security Patching",
        "Network Documentation",
      ],
    },
    {
      categoryName: "Development & Databases",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Python",
        "Tailwind CSS",
        "Supabase & MongoDB",
        "Git & Version Control",
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "crop-advisor",
      title: "CROP ADVISOR",
      status: "COMPLETED",
      description:
        "AI-powered full-stack platform integrating geospatial analytics to optimize agricultural decision-making workflows.",
      tags: ["HTML", "JavaScript", "TypeScript", "Supabase"],
      details: [
        "Combines AI-assisted recommendations with location-aware geospatial insights.",
        "Built on a TypeScript + Supabase stack with full-stack architecture.",
        "Designed to help users make faster, data-backed farming decisions.",
      ],
      githubUrl: undefined,
      category: "AI & Data",
    },
    {
      id: "parenting-assessment",
      title: "PARENTING ASSESSMENT",
      status: "COMPLETED",
      description:
        "Single-page psychological evaluation application that analyzes behavioral data and categorizes parenting methodologies through automated diagnostics.",
      tags: ["HTML", "React", "CSS", "JavaScript", "TypeScript"],
      details: [
        "Interactive assessment flow collecting behavioral inputs from end users.",
        "Automated diagnostic engine categorizes parenting styles from response data.",
        "Built as a polished SPA with React and TypeScript.",
      ],
      githubUrl: undefined,
      category: "Frontend",
    },
    {
      id: "chama-app",
      title: "CHAMA — KIJIJI SAVINGS",
      status: "COMPLETED",
      description:
        "Frontend solution to digitize informal investment group operations, replacing legacy manual record-keeping with digital ledger workflows.",
      tags: ["HTML", "TypeScript", "JavaScript"],
      details: [
        "Digitizes chama record-keeping to remove reliance on manual ledgers.",
        "Structures contribution and investment workflows into a clear digital interface.",
        "Designed as a lightweight frontend portal for community savings operations.",
      ],
      githubUrl: "https://github.com/shemzy616/Chama-application-.git",
      category: "Frontend",
    },
    {
      id: "job-tracker",
      title: "JOB TRACKER",
      status: "COMPLETED",
      description:
        "Career management tool utilizing Kanban visualization and progress monitoring to centralize and audit the employment application lifecycle.",
      tags: ["HTML", "Next.js", "MongoDB", "BetterAuth"],
      details: [
        "Organizes job applications into a visual Kanban workflow.",
        "Progress tracking dashboard audits each stage of the application lifecycle.",
        "Secure authentication via BetterAuth within a full-stack Next.js + MongoDB setup.",
      ],
      githubUrl: "https://github.com/shemzy616/ICP-AKQ1VR-2026-REPO.git",
      category: "Full-Stack",
    },
    {
      id: "phishing-response",
      title: "PHISHING IR & ANALYSIS",
      status: "COMPLETED",
      description:
        "Python-driven threat intelligence tool to automate malicious URL triage and extract Indicators of Compromise (IOCs), mapping attack infrastructure into actionable incident reports.",
      tags: ["Python", "VirusTotal API", "OSINT", "Git"],
      details: [
        "Automates URL triage and IOC extraction from submitted phishing samples.",
        "Maps attack infrastructure data into structured, actionable incident reports.",
        "Integrates VirusTotal API and OSINT sources into the analysis pipeline.",
      ],
      githubUrl: "https://github.com/shemzy616/Phishing-incident-response-and-Analysis.git",
      category: "Security",
    },
    {
      id: "ai-soc-pipeline",
      title: "AI SOC TRIAGE PIPELINE",
      status: "FEATURED",
      description:
        "Automated Python-based SOC triage pipeline that enriches raw SIEM logs via threat intel APIs and leverages Gemini LLM to map threats to MITRE ATT&CK and auto-generate incident reports.",
      tags: ["Python", "REST APIs", "Gemini LLM", "JSON", "Regex"],
      details: [
        "Enriches raw SIEM logs using VirusTotal and AbuseIPDB threat intel APIs.",
        "Gemini LLM maps identified threats to the MITRE ATT&CK framework.",
        "Auto-generates actionable Markdown incident reports from triage output.",
      ],
      githubUrl: "https://github.com/shemzy616/ai-soc-analyst.git",
      category: "Security",
    },
    {
      id: "azure-soc-lab",
      title: "AZURE SOC & DETECTION LAB",
      status: "COMPLETED",
      description:
        "Azure-based SOC environment with automated telemetry pipeline using Microsoft Sentinel to ingest endpoint logs, develop KQL detection rules, and triage simulated adversary attacks.",
      tags: ["Microsoft Azure", "Microsoft Sentinel", "KQL", "Log Analytics", "NSG"],
      details: [
        "Architected a cloud SOC environment on Azure with Sentinel as the SIEM.",
        "Developed custom KQL detection rules targeting adversary persistence techniques.",
        "Triaged simulated attacks using the automated telemetry and alerting pipeline.",
      ],
      githubUrl: undefined,
      category: "Security",
    },
  ] as Project[],
  experience: [
    {
      role: "ICT Assistant",
      company: "State Department of Trade",
      location: "Nairobi, Kenya",
      period: "May 2025 – Aug 2025",
      bullets: [
        "Automated Linux deployments using Python, improving system availability.",
        "Configured Cisco LAN/WAN with encryption and network segmentation.",
        "Performed security audits, UAR, and least privilege enforcement.",
      ],
    },
    {
      role: "Multimedia & Content Assistant",
      company: "State Department of Trade",
      location: "Nairobi, Kenya",
      period: "Aug 2025 – Nov 2025",
      bullets: [
        "Managed WordPress publishing with branding standards and version control.",
        "Analyzed digital campaign metrics for strategic optimization.",
      ],
    },
    {
      role: "Sales Executive",
      company: "Mo Phones",
      location: "Nairobi, Kenya",
      period: "Nov 2025 – Apr 2026",
      bullets: [
        "Provided mobile hardware support and resolved critical SLA escalations.",
        "Achieved 95% customer satisfaction through analytical diagnostics.",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "BSc. Information Technology",
      institution: "Mount Kenya University",
      period: "Sep 2022 – Dec 2025",
    },
    {
      degree: "National Trade Test Certificates (Grade 1–3)",
      institution: "Jeremiah Nyaga Polytechnic",
      period: "Sep 2023 – Apr 2024",
    },
  ] as EducationItem[],
  simulations: [
    {
      role: "Cybersecurity Analyst (Virtual)",
      company: "Mastercard — via Forage",
      location: "Remote",
      period: "June 2026",
      bullets: [
        "Served as analyst on Mastercard's Security Awareness Team.",
        "Identified and reported security threats including phishing campaigns.",
        "Analyzed business units needing stronger security training and implemented targeted procedures.",
      ],
    },
    {
      role: "Security Analyst (Virtual)",
      company: "Tata Consultancy Services — via Forage",
      location: "Remote",
      period: "June 2026",
      bullets: [
        "Completed IAM simulation collaborating with a Cybersecurity Consulting team.",
        "Conducted end-to-end incident investigations from initial alert through to report.",
        "Correlated evidence across endpoint, network, authentication, and email logs.",
        "Identified lateral movement, persistence mechanisms, and C2 activity.",
        "Pivoted on indicators (IPs, hashes, domains, usernames) across multiple data sources.",
      ],
    },
  ] as ExperienceItem[],
};
