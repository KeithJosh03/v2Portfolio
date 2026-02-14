'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { press, inter } from "@/utils/font";
import { experience, project } from '@/utils/portfolio';

export default function PorfolioComponent() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
      className="min-h-screen col-span-12 flex flex-col gap-16 px-4 md:px-0"
    >
      <div className={`${press.className} text-4xl flex gap-x-4`}>
        <h1 className="text-PrimaryCol">My</h1>
        <h1 className="text-SecondaryCol">Portfolio</h1>
      </div>

      <div className="flex flex-col gap-12">
        <h2 className={`${press.className} text-2xl text-PrimaryCol border-b border-SecondaryCol pb-2`}>
          Experience
        </h2>

        {experience.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`bg-avatarBG rounded-3xl shadow-2xl p-6 md:p-8 mx-auto w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-12 items-center
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* TEXT */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className={`${press.className} text-2xl md:text-3xl text-SecondaryCol`}>
                {itemData.info.projectname}
              </h3>

              {itemData.experience && (
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="bg-primaryBG text-PrimaryCol px-3 py-1 rounded-full text-xs font-medium">
                    {itemData.experience.title}
                  </span>
                  <a
                    href={itemData.experience.url}
                    target="_blank"
                    className="bg-secondaryBG text-SecondaryCol px-3 py-1 rounded-full text-xs font-medium underline hover:text-PrimaryCol"
                  >
                    {itemData.experience.company}
                  </a>
                  <span className="bg-stackBG text-SecondaryCol px-3 py-1 rounded-full text-xs">
                    {formatDate(itemData.experience.StartDate)} – {formatDate(itemData.experience.EndDate)}
                  </span>
                </div>
              )}

              <p className={`${inter.className} mt-2 text-PrimaryCol leading-relaxed`}>
                {itemData.info.desc}
              </p>

              {/* STACKS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {itemData.info.stacks.map((stack, i) => (
                  <span key={i} className="bg-stackBG text-SecondaryCol text-xs px-3 py-1 rounded-full">
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex-1 relative w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-2xl"
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

      <div className="flex flex-col gap-12">
        <h2 className={`${press.className} text-2xl text-PrimaryCol border-b border-SecondaryCol pb-2`}>
          Personal Projects
        </h2>

        {project.map((proj, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`bg-alterBG rounded-3xl shadow-2xl p-6 md:p-8 mx-auto w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-12 items-center
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="flex-1 flex flex-col gap-4">
              <h3 className={`${press.className} text-2xl md:text-3xl text-SecondaryCol`}>
                {proj.info.projectname}
              </h3>

              <p className={`${inter.className} mt-2 text-PrimaryCol leading-relaxed`}>
                {proj.info.desc}
              </p>

              {proj.info.github && (
                <a
                  href={proj.info.github}
                  target="_blank"
                  className="inline-block mt-2 text-sm text-SecondaryCol underline hover:text-PrimaryCol"
                >
                  View on GitHub →
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.info.stacks.map((stack, i) => (
                  <span key={i} className="bg-stackBG text-SecondaryCol text-xs px-3 py-1 rounded-full">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex-1 relative w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-2xl"
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
