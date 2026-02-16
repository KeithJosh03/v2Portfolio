"use client";

import React from "react";
import { motion } from "framer-motion";
import { inter, press } from "@/utils/font";
import Image from "next/image";
import { SkillProps } from "@/utils/skills";

type Props = {
  data: any;
};

export const Details = ({ data }: Props) => {
  const [frontend, backend, others] = data;

  // Container animation (stagger effect)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Each card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-9 gap-6"
    >
      {/* Title */}
      <motion.div
        variants={item}
        className={`${press.className} 
        col-span-1 md:col-span-6 xl:col-span-9 
        text-left 
        text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
        font-extrabold 
        bg-alterBG shadow-2xl rounded-2xl p-4`}
      >
        <h1 className="text-PrimaryCol">WEB</h1>
        <h1 className="text-SecondaryCol">DEVELOPER</h1>
      </motion.div>

      {/* About */}
      <motion.div
        variants={item}
        className={`${inter.className} col-span-6 row-span-1 text-left font-extrabold text-xl bg-avatarBG shadow-2xl rounded-2xl p-4`}
      >
        <p className="text-PrimaryCol font-medium">
          Hi <span className="inline-block">👋</span>! I'm a self-taught IT
          professional with expertise in JavaScript, HTML, CSS, and responsive
          web development, seeking an opportunity to collaborate with a company
          that fosters skill development while allowing me to contribute my
          knowledge and write clean, efficient code.
        </p>
      </motion.div>

      {/* Full Stack Card */}
      <motion.div
        variants={item}
        className={`${press.className} col-span-3 row-span-1 text-left text-lg sm:text-xl md:text-2xl font-extrabold bg-alterBG shadow-2xl rounded-2xl p-4`}
      >
        <h3 className="text-PrimaryCol">Full-Stack</h3>
        <h3 className="text-SecondaryCol">Developer</h3>
      </motion.div>

      {/* Experience */}
      <motion.div
        variants={item}
        className={`${press.className} col-span-3 row-span-1 text-left text-2xl font-extrabold bg-avatarBG shadow-2xl rounded-2xl p-4`}
      >
        <p className="text-3xl text-SecondaryCol">2+</p>
        <p className="text-PrimaryCol">YEARS OF</p>
        <p className="text-PrimaryCol">EXPERIENCE</p>
      </motion.div>

      {/* Skills Container */}
      <motion.div
        variants={item}
        className={`${inter.className} col-span-6 row-span-1 grid grid-cols-4 grid-rows-2 gap-4 text-left text-PrimaryCol text-sm bg-alterBG shadow-2xl rounded-2xl p-4`}
      >
        {/* Frontend */}
        <div className="col-span-2 bg-avatarBG shadow-2xl rounded-2xl p-2">
          <p className={press.className}>Frontend Development:</p>
          <div className="flex space-x-2 items-center p-4">
            {frontend.skills.map((skill: SkillProps, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group flex flex-col items-center"
              >
                <Image
                  width={30}
                  height={30}
                  alt={skill.name}
                  src={skill.icon}
                  className="cursor-pointer"
                />
                <span className="absolute -bottom-6 scale-0 group-hover:scale-100 transition-all duration-200 text-xs text-SecondaryCol bg-stackBG px-2 py-1 rounded">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="col-span-2 bg-avatarBG shadow-2xl rounded-2xl p-2">
          <p className={press.className}>Backend Development:</p>
          <div className="flex space-x-2 items-center p-4">
            {backend.skills.map((skill: SkillProps, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group flex flex-col items-center"
              >
                <Image
                  width={30}
                  height={30}
                  alt={skill.name}
                  src={skill.icon}
                  className="cursor-pointer"
                />
                <span className="absolute -bottom-6 scale-0 group-hover:scale-100 transition-all duration-200 text-xs text-SecondaryCol bg-stackBG px-2 py-1 rounded">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="col-span-4 bg-avatarBG shadow-2xl rounded-2xl p-2">
          <p className={press.className}>Others:</p>
          <div className="flex space-x-2 items-start p-4">
            {others.skills.map((skill: SkillProps, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group flex flex-col items-center"
              >
                <Image
                  width={30}
                  height={30}
                  alt={skill.name}
                  src={skill.icon}
                  className="cursor-pointer"
                />
                <span className="absolute -bottom-6 scale-0 group-hover:scale-100 transition-all duration-200 text-xs text-SecondaryCol bg-stackBG px-2 py-1 rounded">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
