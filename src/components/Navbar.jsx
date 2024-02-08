// import React from 'react'
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLinks";
import { motion } from "framer-motion";

const menuList = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-xl">
      {/* menuList */}
      <div className="hidden md:flex gap-4 ">
        {menuList.map((item) => (
          <NavLink menuList={item} key={item.title} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex justify-center">
        <Link
          href="/"
          className="text-3xl font-bold font-serif text-violet-500"
        >
          Aman Jain
        </Link>
      </div>
      {/* menu */}
      <div className="hidden md:flex gap-4 ">
        <Link href="#">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="insta" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/twitter.png" alt="X" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="X" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-7 flex flex-col justify-between items-center z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-9 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-9 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-9 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>

      {/* MenuList */}

      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10"
        >
          {menuList.map((item) => (
            <motion.div
              variants={listItemVariants}
              className="div"
              key={item.title}
            >
              <Link href={item.url}>{item.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
