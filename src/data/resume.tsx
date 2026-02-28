import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Php } from "@/components/ui/svgs/php";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Mysql } from "@/components/ui/svgs/mysql";

type HackathonLink = {
  href: string;
  title: string;
  icon: ReactNode;
};

export const DATA = {
  name: "Siyam Zakir",
  initials: "DV",
  url: "#",
  location: "Dhaka, Bangladesh",  
  locationLink: "#",
  description:
    "Full Stack Developer turned Entrepreneur.",
  summary:
    "CTO with strong full-stack expertise in web and software development, DevOps, and cloud-native architecture. Experienced in building scalable applications, implementing CI/CD and automation, and leading end-to-end software lifecycles aligned with business goals, performance, and security.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PHP", icon: Php },
    { name: "Laravel", icon: Laravel },
    { name: "MySQL", icon: Mysql },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "siyamzakir@outlook.com",
    tel: "+8801717862830",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/siyamzakir",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X (Twitter)",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hawlader-zakir-hossain/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:siiyamzakir@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "AppsZone",
      href: "https://appszonebd.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: "/appszone.png",
      start: "June 2024",
      end: "Current",
      description:
        "AppsZone is a forward-thinking software development company delivering AI-powered, secure, and scalable digital solutions. We specialize in web and mobile applications, AI automation, MERN stack development, blockchain innovation, and smart technology for real estate and learning platforms. Our mission is to help businesses grow with future-ready, high-performance software built by a dedicated expert team.",
    },
    {
      company: "Freelancer",
      href: "http://freelancer.com/u/siyam30",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/Freelancer.webp",
      start: "February 2018",
      end: "Current",
      description:
        "Freelancer is a global freelancing platform where businesses and independent professionals connect and collaborate remotely. I offer a wide range of services, including web development and Application Development.",
    },
    {
      company: "Fiverr",
      badges: [],
      href: "https://www.fiverr.com/siyam30?public_mode=true",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/fiverr.png",
      start: "May 2017",
      end: "Current",
      description:
        "Fiverr is a global selling platform where businesses and independent professionals connect and collaborate remotely. I offer a wide range of services, including Real Estate solutions, Learning Management System and AI Automation, web development and Application Development.",
    },
    {
      company: "Upwork",
      badges: [],
      href: "https://www.upwork.com/freelancers/siyamzakir",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/upwork-icon.webp", 
      start: "April 2014",
      end: "Current",
      description:
        "Upwork is a global marketplace platform where businesses and independent professionals connect and collaborate remotely. I offer a wide range of services, including Real Estate solutions, Learning Management System and AI Automation, web development and Application Development.",
    },
  ],
  education: [
    {
      school: "Asian University of Bangladesh",
      href: "https://aub.ac.bd/",
      degree: "Bsc in Computer Science and Engineering",
      logoUrl: "/aub.jpg",
      start: "2010",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "AI Chatbot Setup",
      href: "https://github.com/siyamzakir",
      dates: "June 2024 - Present",
      active: true,
      description:
        "End-to-end AI chatbot solution for businesses — covering chatbot basics, rapid deployment in minutes, intelligent lead capture bots, and seamless CRM connection to supercharge customer engagement and automate support workflows.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/siyamzakir",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ai-myths.gif",
      video: "",
    },
    {
      title: "CRM Integration Platform",
      href: "https://fccrm.futureconnect.net.au",
      dates: "March 2023 - Present",
      active: true,
      description:
        "Immigration-focused CRM built for Australian migration agencies — streamlining Student Visa and Skilled Migration pipelines. Features applicant contact management, real-time case tracking, document checklist automation, compliance follow-up scheduling, and a smart dashboard to move every visa application faster and with fewer errors.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "React",
        "TailwindCSS",
        "CICD",
        "Docker",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://appszonebd.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/crm.png",
      video: "",
    },
    
      {
      title: "Smart Real Estate Platform",
      href: "https://realestate.appszonebd.com/",
      dates: "June 2023 - December 2023",
      active: true,
      description:
        "A comprehensive real estate management platform featuring smart property search, virtual tour integration, automated lead capture, and a powerful agent dashboard — built to connect buyers, sellers, and agents seamlessly.",
      technologies: [
        "Php",
        "Wordpress",
        "Bootstrap",
        "CRM",
        "Hubspot",
        "Docker",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://realestate.appszonebd.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/realestate.png",
      video: "",
    },
    {
      title: "Learning Management System",
      href: "https://theanalytichub.com/training/",
      dates: "January 2022 - June 2023",
      active: true,
      description:
        "Enterprise-grade LMS platform for educators and organizations. Features include course creation, HD video streaming, interactive quizzes, real-time progress tracking, and automated certificate generation for learners. This platform is used by many educational institutions in Bangladesh and abroad.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "React",
        "TailwindCSS",
        "FFmpeg",
        "Redis",
      ],
      links: [
        {
          type: "Profile",
          href: "https://theanalytichub.com/training/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lms.png",
      video: "",
    },
    {
      title: "ZeuZ - Powered Codeless Automation Platform",
      href: "https://zeuz.ai",
      dates: "January 2025 - Currently",
      active: true,
      description:
        "ZeuZ.ai is an AI-powered, no-code software testing platform that automates test creation, execution, and reporting for web, mobile, desktop, API, IoT, and database applications.",
      technologies: [
        "Laravel",
        "Next.js",
        "MySQL",
        "React",
        "TailwindCSS",
        "AWS S3",
        "CI/CD",
      ],
      links: [
        {
          type: "Profile",
          href: "https://zeuz.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/zeuz.gif",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Chatbot × CRM — One Seamless Brain",
      dates: "June 2024 - Present",
      location: "AppsZone, Dhaka, BD · Remote",
      description:
        "Conceived and shipped an AI-powered chatbot that lives inside a purpose-built CRM — not bolted on top of it. Conversations, lead captures, and follow-up tasks all collapse into a single workflow: a prospect chats, the bot qualifies, the CRM logs, and the agent acts — zero manual handoff. Built on the OpenAI API with a Laravel + React backbone, the system slashed response time by 80% and freed agents from repetitive triage work entirely.",
      image: "/chatbot.png",
      mlh: "",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/siyamzakir",
          icon: <Icons.github className="size-3" />,
        },
      ] as HackathonLink[],
    },
    {
      title: "Self-Hosted Mail Server — Zero Dependency",
      dates: "March 2024",
      location: "AppsZone HQ · Dhaka, BD",
      description:
        "Designed and deployed a fully self-hosted mail server infrastructure for AppsZone, taking the company off third-party email providers entirely. Set up Postfix + Dovecot on bare metal with DKIM, DMARC, and SPF records tuned to hit a near-perfect deliverability score. Added spam filtering via SpamAssassin, automated TLS certificate renewal, and a real-time monitoring dashboard. The result: full ownership of company communications with zero monthly SaaS fees and an inbox reputation that commercial providers envy.",
      image: "/appszone.png",
      mlh: "",
      links: [
        {
          title: "AppsZone",
          href: "https://appszonebd.com",
          icon: <Icons.globe className="size-3" />,
        },
      ] as HackathonLink[],
    },
    {
      title: "10 Years of Shipping — A Full-Stack Chronicle",
      dates: "April 2014 - Present",
      location: "Worldwide · Remote",
      description:
        "From a single freelance gig in 2014 to leading full-stack architecture at AppsZone — this is a decade of relentlessly building things that work. Immigration CRMs for Australian agencies, real estate platforms, AI-assisted learning management systems, blockchain prototypes, and Docker-orchestrated cloud deployments. Every project a new constraint. Every constraint a new skill. The stack keeps evolving; the drive to ship clean, scalable software never changes.",
      image: "/me.png",
      mlh: "",
      links: [
        {
          title: "Upwork",
          href: "https://www.upwork.com/freelancers/siyamzakir",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Fiverr",
          href: "https://www.fiverr.com/siyam30",
          icon: <Icons.globe className="size-3" />,
        },
      ] as HackathonLink[],
    },
  ],
} as const;
