"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight} from "react-icons/bs";

export default function About() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3 ">
        👋 Hi there! I’m a passionate fresher with a knack for{" "}
        <span className="font-medium">JavaScript</span>,
        <span className="font-medium"> React</span>, and{" "}
        <span className="font-medium"> UI development</span>. My journey began
        with the <span className="italic underline">MERN Stack</span>, and I’ve
        been crafting delightful web experiences. 🚀
      </p>
      <p className="mb-3 ">
        <span className="font-extrabold block">My Journey 🌟</span>I embarked on my
        coding adventure with a backpack full of curiosity and a heart set on
        creating delightful web experiences. From tinkering with HTML tags to
        diving deep into the React ecosystem, my journey has been nothing short
        of exhilarating! 🌐
      </p>
      <p className="mb-3 ">
        <span className="font-extrabold">Skills 🌟 </span>
        <ul className="list-inside">
          <li>
          <BsArrowRight className="inline-block text-2xl"/> <span className="underline italic">Javascript:</span> My trusty
            sidekick in building dynamic web applications.
          </li>
          <li>
          <BsArrowRight className="inline-block text-2xl"/> <span className="underline italic">React:</span> Where I weave magic
            into user interfaces.
          </li>
          <li>
          <BsArrowRight className="inline-block text-2xl"/> <span className="underline italic">UI Development:</span> My canvas
            for creating pixel-perfect designs.
          </li>
        </ul>
      </p>
    </section>
  );
}
