'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { me, linken, email, github } from '@/public/avatar';
import { inter, press } from '@/utils/font';

export const Avatar = () => {
  // Container stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`${inter.className} xl:col-span-4 lg:col-span-12 grid grid-rows-3 gap-4 justify-center`}
    >
      {/* Main Profile Card */}
      <motion.div
        variants={item}
        className="row-span-2 flex flex-col justify-around text-center items-center bg-avatarBG shadow-2xl rounded-2xl mx-4 p-4"
      >
        {/* Profile Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={me}
            alt="Me"
            className="rounded-3xl object-cover m-auto"
          />
        </motion.div>

        {/* Name & Description */}
        <motion.div variants={item}>
          <h1
            className={`${press.className} text-PrimaryCol text-3xl font-extrabold mt-4`}
          >
            KEITH JOSHUA SALAVER
          </h1>
          <p className="font-medium text-lg text-SecondaryCol mt-2">
            A self-taught Junior Web Developer with a track record of building
            responsive and efficient web solutions.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div variants={item} className="w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-base text-PrimaryCol font-extrabold p-4 w-full bg-stacksBG hover:bg-stackBG shadow-2xl rounded-2xl"
          >
            DOWNLOAD CV
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={item}
        className="row-span-1 text-left text-base font-extrabold bg-alterBG shadow-2xl items-center content-center rounded-2xl mx-4 p-4"
      >
        <div className="grid grid-flow-col grid-rows-3 gap-4 text-PrimaryCol">
          
          {[
            { icon: linken, label: "LINKEDIN" },
            { icon: email, label: "EMAIL" },
            { icon: github, label: "GITHUB" },
            { icon: linken, label: "TEAMS" },
            { icon: email, label: "GOOGLE CHAT" },
          ].map((contact, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between items-center w-full hover:bg-avatarBG group cursor-pointer"
            >
              <Image
                src={contact.icon}
                alt="iconavatar"
                width={28}
                height={28}
              />
              <h3 className="group-hover:text-SecondaryCol">
                {contact.label}
              </h3>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </motion.div>
  );
};
