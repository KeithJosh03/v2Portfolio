"use client";

import React from "react";
import { motion } from "framer-motion";
import { press, inter } from "@/utils/font";
import Image from "next/image";
import { about } from "@/utils/about";

export const AboutComponent = () => {
  let [computerset, student]: any = about;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="col-span-12 grid grid-cols-12 gap-8 mt-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={fadeUp}
        className="col-span-12 md:col-span-4 flex flex-col items-center text-center px-4"
      >
        <Image
          src={student.image}
          alt="Me"
          className="rounded-3xl object-cover shadow-xl w-72 md:w-full"
        />
        <h3
          className={`${inter.className} mt-6 text-xl font-normal text-PrimaryCol`}
        >
          I graduated Senior High School last March of 2020
        </h3>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={`${inter.className} col-span-12 md:col-span-8 bg-alterBG rounded-3xl shadow-xl p-8 md:p-12 flex flex-col gap-6`}
      >
        <div
          className={`${press.className} text-4xl md:text-6xl font-extrabold`}
        >
          <span className="text-PrimaryCol">About</span>{" "}
          <span className="text-SecondaryCol">Me</span>
        </div>

        <div className="flex flex-col text-PrimaryCol text-lg font-medium gap-6 leading-relaxed">
          <motion.p variants={fadeUp}>
            Hello there! I'm{" "}
            <span className="text-SecondaryCol">
              Keith Joshua M. Salaver
            </span>
            , a Senior High School graduate with a specialization in
            Information and Communication Technology from the University of
            Mindanao, Philippines. Since graduating, I’ve been committed to
            self-learning — mastering Vanilla JavaScript and advancing my
            skills as a full-stack developer with PHP and MySQL.
          </motion.p>

          <motion.p variants={fadeUp}>
            Coding feels like playing a game to me — discovering new ideas,
            learning new techniques, fixing bugs, and designing solutions.
            It brings me joy and fuels my passion for turning ideas into
            reality.
          </motion.p>

          <motion.p variants={fadeUp}>
            Over the past two years, my journey in software development has
            been one of rapid growth. After gaining hands-on experience
            through various projects like PSO, an employee login system, and
            a browser extension, I’ve taken time to focus on upskilling —
            particularly in React.js. This dedicated learning period has
            allowed me to sharpen my frontend development skills and prepare
            myself for future opportunities as a React.js Developer.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={`${inter.className} col-span-12 md:col-span-6 bg-avatarBG rounded-3xl shadow-xl p-8 flex flex-col gap-6`}
      >
        <div className={`${press.className} text-3xl font-extrabold`}>
          <span className="text-PrimaryCol">Computer</span>{" "}
          <span className="text-SecondaryCol">Setup</span>
        </div>

        <div className="flex flex-col font-medium text-lg gap-3 text-PrimaryCol leading-relaxed">
          <motion.p variants={fadeUp}>
            MotherBoard -{" "}
            <span className="text-SecondaryCol">
              ASUS PRIME H510M-K 10TH
            </span>
          </motion.p>
          <motion.p variants={fadeUp}>
            CPU -{" "}
            <span className="text-SecondaryCol">
              Intel(R) Core(TM) i5-10400
            </span>
          </motion.p>
          <motion.p variants={fadeUp}>
            Ram -{" "}
            <span className="text-SecondaryCol">
              KINGSTON FURY BEAST DDR4 3200MHZ 8GB 2x
            </span>
          </motion.p>
          <motion.p variants={fadeUp}>
            SSD -{" "}
            <span className="text-SecondaryCol">Kingston 480GB</span>
          </motion.p>
          <motion.p variants={fadeUp}>
            OS - <span className="text-SecondaryCol">Linux</span>
          </motion.p>
          <motion.p variants={fadeUp}>
            GPU -{" "}
            <span className="text-SecondaryCol">GTX 1660 Super</span>
          </motion.p>
          <motion.p variants={fadeUp}>
            IDE -{" "}
            <span className="text-SecondaryCol">Visual Studio Code</span>
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="col-span-12 md:col-span-6 flex justify-center"
      >
        <Image
          src={computerset.image}
          alt="Computer Setup"
          className="rounded-3xl object-cover shadow-xl w-full max-w-md"
        />
      </motion.div>
    </motion.section>
  );
};
