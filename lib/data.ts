import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nextInImg from "@/public/NextIn LH.png";
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

export const experienceData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "FrontendDeveloper",
    location: "Indore, India",
    description: "I worked as a frontend developer for 3 month",
    icon: React.createElement(CgWorkAlt),
    data: "2023",
  },
] as const;;

export const projectsData = [
  {
    title: "NextIn Learning Hub",
    description:
    "NextIn 🎯 is innovative online learning platform, offers users seamless access to a wide range of courses through an intuitive interface.",
    tags: ["Javascript", "React", "Redux-toolkit", "MongoDB"],
    imageUrl: nextInImg,
    projectUrl: "https://github.com/Taniya23Y/NextIn-Project",
  },
  {
    title: "DuoStudio-Clone",
    description:
      "Developed a 🕸️ responsive web application Clone inspired by Duo-Studio, showcasing a deep passion for web design and development.",
    tags: ["Javascript", "Gsap", "Locomotive-scroll", "Design"],
    imageUrl: DuoStudioImg,
    projectUrl: "https://duo-studio-webclone.netlify.app/",
  },
  {
    title: "CodeCompiler",
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
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Shadcn",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "SQL",
  "MySQL",
  "C/C++",
  "Figma",
  "GSAP",
] as const;
