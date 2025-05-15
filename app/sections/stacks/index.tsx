'use client';

import React from 'react';
import { poppins } from '@/utils/font';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { skills } from '@/utils/skills';

export const StackComponent = () => {
  return (
    <motion.section className={`${poppins.className} min-h-screen container col-span-12 gap-10`}>
      <div className="container mx-auto p-4">
        <motion.h1
          className="text-7xl font-extrabold flex flex-col mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="text-PrimaryCol">MY</span>
          <span className="text-SecondaryCol">SKILL SET</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-headerBG rounded-2xl shadow-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-bold text-teal-400 mb-4">{skill.title}</h2>
              <div className="flex flex-wrap gap-4">
                {skill.icons.map((icon, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center w-[60px] h-[60px]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <Image
                      priority
                      alt={`${skill.title} icon`}
                      className="object-contain"
                      src={icon.src}
                      width={icon.width}
                      height={icon.height}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
