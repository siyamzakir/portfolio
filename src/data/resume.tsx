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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
