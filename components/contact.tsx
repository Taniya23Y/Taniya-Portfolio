"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // toast.loading("Sending...");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "9b8b8fea-dbff-4de7-9e7c-d5c294f8a624");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset(); // Ensuring the target is of type HTMLFormElement
        setTimeout(() => setResult(""), 5000); // Hide result message after 5 seconds
      } else {
        toast.error(data.message || "Failed to send the message.");
        setResult(data.message || "Failed to send the message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:taniyayadav882@gmail.com">
          taniyayadav882@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={onSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
        {/* {result && (
        <div
          className={`mt-4 text-center text-lg font-medium ${
            result === "Form Submitted Successfully" ? "text-green-500" : "text-red-500"
          }`}
        >
          {result}
        </div>
      )} */}
      </form>
      
    </motion.section>
  );
}
