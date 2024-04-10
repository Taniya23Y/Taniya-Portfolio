"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { IoMdDocument } from "react-icons/io";
// import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    // const { ref } = useSectionInView("Home", 0.5);
    // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
    <section>
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div 
           initial={{opacity: 0, scale: 0}}
           animate={{opacity: 1, scale: 1}}
           transition={{
            type: "tween",
            duration: 0.2,
           }}
           >
            <Image
              src="/OwnPic.png"
              alt="ownPic"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem]
             border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span className="absolute bottom-0 right-0 text-4xl"
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
           }}
          >👋</motion.span>
        </div>
      </div>

      <p>

      </p>
    </section>
  );
}
