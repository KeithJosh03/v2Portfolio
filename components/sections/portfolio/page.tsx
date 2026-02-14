'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { press, inter } from "@/utils/font";
import { experience, project } from '@/utils/portfolio';

export default function PorfolioComponent() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen col-span-12 flex flex-col gap-20"
    >

      {/* HEADER */}
      <div className={`${press.className} text-4xl flex gap-x-4`}>
        <h1 className="text-PrimaryCol">My</h1>
        <h1 className="text-SecondaryCol">Portfolio</h1>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="flex flex-col gap-12">
        <h2 className={`${press.className} text-2xl text-PrimaryCol`}>
          Experience
        </h2>

        {experience.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-avatarBG rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col gap-8"
          >
            {/* TEXT CONTENT */}
            <div>
              <h3 className={`${press.className} text-2xl md:text-3xl text-SecondaryCol`}>
                {itemData.info.projectname}
              </h3>

              {itemData.experience && (
                <div className="mt-2 text-sm text-SecondaryCol">
                  <p>
                    {itemData.experience.title} @{" "}
                    <a
                      href={itemData.experience.url}
                      target="_blank"
                      className="underline hover:text-PrimaryCol"
                    >
                      {itemData.experience.company}
                    </a>
                  </p>
                  <p>
                    {formatDate(itemData.experience.StartDate)} –{" "}
                    {formatDate(itemData.experience.EndDate)}
                  </p>
                </div>
              )}

              <p className={`${inter.className} mt-4 text-PrimaryCol leading-relaxed`}>
                {itemData.info.desc}
              </p>

              {/* STACKS */}
              <div className="flex flex-wrap gap-2 mt-6">
                {itemData.info.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="bg-stackBG text-SecondaryCol text-xs px-3 py-1 rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BELOW (Controlled Size) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl"
            >
              <Image
                src={itemData.info.image}
                alt={itemData.info.projectname}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ================= PERSONAL PROJECTS ================= */}
      <div className="flex flex-col gap-12">
        <h2 className={`${press.className} text-2xl text-PrimaryCol`}>
          Personal Projects
        </h2>

        {project.map((proj, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-alterBG rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col gap-8"
          >
            <div>
              <h3 className={`${press.className} text-2xl md:text-3xl text-SecondaryCol`}>
                {proj.info.projectname}
              </h3>

              <p className={`${inter.className} mt-4 text-PrimaryCol leading-relaxed`}>
                {proj.info.desc}
              </p>

              {proj.info.github && (
                <a
                  href={proj.info.github}
                  target="_blank"
                  className="inline-block mt-4 text-sm text-SecondaryCol underline hover:text-PrimaryCol"
                >
                  View on GitHub →
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-6">
                {proj.info.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="bg-stackBG text-PrimaryCol text-xs px-3 py-1 rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl"
            >
              <Image
                src={proj.info.image}
                alt={proj.info.projectname}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}
