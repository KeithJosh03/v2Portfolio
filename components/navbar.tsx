"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  experience,
  home,
  write,
  info,
  expericeactive,
  homeactive,
  writeactive,
  infoactive,
} from "../public/headericon";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: home, activeIcon: homeactive, label: "Home" },
    { href: "/about", icon: info, activeIcon: infoactive, label: "About" },
    { href: "/portfolio", icon: experience, activeIcon: expericeactive, label: "Portfolio" },
    { href: "/email", icon: write, activeIcon: writeactive, label: "Email" },
  ];

  return (
    <div className="flex justify-center items-center relative top-4">
      <nav className="bg-headerBG/80 backdrop-blur-xl rounded-2xl flex items-center gap-2 p-2 shadow-2xl border border-white/5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className="relative group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-3 rounded-xl flex items-center justify-center"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-stackBG rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
                <Image
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  width={22}
                  height={22}
                  className="relative z-10"
                />
              </motion.div>
              <span className="
                absolute 
                -top-5 
                left-1/2 
                -translate-x-1/2
                text-xs font-medium 
                text-SecondaryCol 
                bg-stackBG 
                px-3 py-1 
                rounded-md 
                opacity-0 
                group-hover:opacity-100 
                transition
                whitespace-nowrap
              ">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
