import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import piyushFolio from "@/public/PortFolio.png";
import eduMeetImg from "@/public/Banner.png";
import tasteTrekImg from "@/public/TasteTrek.png";
import codeCompilerImg from "@/public/CodeCompiler.png";
import DuoStudioImg from "@/public/DuoStudio.png";
import RazorpayImg from "@/public/Razorpay.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation bootcamp",
    location: "SVCE, Indore",
    description:
      "I am a third year under graduate Student 👩‍🎓 in computer science & Engineering. I am learning a lot in my college journey.",
    icon: React.createElement(LuGraduationCap), 
    date: "2021 - present",
  },
  {
    title: "Frontend Web Developer",
    location: "Indore, India",
    description: "I worked as a frontend web developer at Oasis Infobyte for 1 month(Remote) 👩‍💻.",
    icon: React.createElement(CgWorkAlt),
    date: "2023- 1 month WFH",
  },
  {
    title: "Mern-Stack Developer(Learner)",
    location: "Indore, India",
    description:
      "I'm now a full-stack developer 🚀 with a focus on JavaScript and React.js. Although my experience started with a one-month remote Frontend Developer role at Oasis Infobyte, I'm dedicated to mastering (DSA) & MERN stack. My stack includes React.js, Next.js(Familiar), TypeScript(Familiar), Tailwind CSS, and Prisma. I'm actively seeking full-time opportunities to apply my skills and contribute to impactful projects. 💻",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;;

export const projectsData = [
  {
    title: "Piyush Portfolio",
    description:
    "This portfolio 🎯 was designed and developed by me 🎨 for my classmate Piyush 👨‍💻. It showcases Piyush's projects and skills in an intuitive and visually appealing manner 🌟.",
    tags: ["Figma", "React", "Redux-toolkit", "Framer Motion", "GSAP"],
    imageUrl: piyushFolio,
    projectUrl: "https://ui-portfolio-umber.vercel.app/",
  },
  {
    title: "TasteTrek Website ",
    description:
    "TasteTrek 🍽️ is a React.js-based food website using React Router, Redux Toolkit, and Jest. Designed in Figma and inspired by Dribbble.",
    tags: ["Javascript", "React", "Redux-toolkit", "Jest"],
    imageUrl: tasteTrekImg,
    projectUrl: "https://github.com/Taniya23Y/tastetrek",
  },
  {
    title: "EduMeet Learning Hub",
    description:
    "EduMeet 🎯 is innovative online learning platform, offers users seamless access to a wide range of courses through an intuitive interface.",
    tags: ["Javascript", "React", "Redux-toolkit", "MongoDB"],
    imageUrl: eduMeetImg,
    projectUrl: "https://github.com/Taniya23Y/edumeet",
  },
  {
    title: "DuoStudio-Clone",
    description:
      "Developed a 🕸️ responsive web application Clone inspired by Duo-Studio, showcasing a deep passion for web design and development.",
    tags: ["Javascript", "Gsap", "Locomotive-scroll", "Design"],
    imageUrl: DuoStudioImg,
    projectUrl: "https://github.com/Taniya23Y/Duo-Studio-Clone",
  },
  {
    title: "Code.Compiler",
    description:
      "Elevate your coding experience with CodeCompiler 💻, enabling real-time HTML, CSS, and JS coding, sharing. Seamlessly save, share, edit and download your projects.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind", "Shadcn"],
    imageUrl: codeCompilerImg,
    projectUrl: "https://github.com/Taniya23Y/Code.Compiler.Project",
  },
  {
    title: "Razorpay-Clone",
    description:
      "A 🌐 responsive web application Clone inspired by 💸Razorpay, built using HTML, CSS, and Tailwind CSS.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "Tailwind"],
    imageUrl: RazorpayImg,
    projectUrl: "https://github.com/Taniya23Y/Razorpay.com-clone",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  // "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Shadcn",
  "MongoDB",
  "Redux",
  // "GraphQL",
  "Express",
  "SQL",
  "MySQL",
  "C/C++",
  "Figma",
  "GSAP",
  "Locomotive JS",
  "Framer Motion",
  "Problem-solving",
  "DSA",
  "Frontend", 
  "Backend", 
  "MERN Stack", 
] as const;