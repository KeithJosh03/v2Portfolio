"use client";

import React from "react";
import { motion } from "framer-motion";
import { press, poppins } from "@/utils/font";

export const EmailComponent = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
      className={`${poppins.className} col-span-12 flex justify-center items-center py-24`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-3xl flex flex-col gap-12">
        
        <motion.div
          variants={fadeUp}
          className={`${press.className} text-center text-5xl md:text-7xl font-extrabold leading-tight`}
        >
          <h1 className="text-PrimaryCol">LET'S WORK</h1>
          <h1 className="text-SecondaryCol">TOGETHER</h1>
        </motion.div>

        <motion.form
          variants={fadeUp}
          className="flex flex-col gap-8 bg-avatarBG p-4 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row gap-6">
            
            <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full">
              <span className="text-sm text-ThirdCol">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full">
              <span className="text-sm text-ThirdCol">Email</span>
              <input
                type="email"
                placeholder="your@email.com"
                className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition"
              />
            </motion.div>

          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <span className="text-sm text-ThirdCol">Message</span>
            <textarea
              placeholder="Tell me about your project..."
              className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition min-h-[160px] resize-none"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="text-base text-PrimaryCol font-extrabold p-4 w-full bg-stacksBG hover:bg-stackBG shadow-2xl rounded-2xl hover:text-SecondaryCol transition"
          >
            Send Message
          </motion.button>

        </motion.form>
      </div>
    </motion.section>
  );
};
