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
  name: "Siyam",
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
      href: "https://appszonebd.com",
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
  ],
  hackathons: [
    {
      title: "Hack Western 15",
      dates: "November 23rd - 25th, 2012",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [] as HackathonLink[],
    },
    {
      title: "Deploy Central Network System",
      dates: "September 14th - 16th, 2020",
      location: "Ascott Dhaka, BD",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [] as HackathonLink[],
    },
  ],
} as const;
