"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-8">
          <Image src="/hero.png" alt="alt" fill className="object-contain" />
        </div>

        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl  font-bold">
            Crafting Web Experiences,Designing the Future.
          </h1>
          {/* desc */}
          <p className="md:text-xl">
            Welcome to my canvas, a realm where creativity intertwines
            seamlessly with excellence. With a discerning eye for aesthetics and
            a command of the finest coding practices, my portfolio stands as a
            testament to a rich tapestry of projects and professional endeavors.
            Each entry reflects a steadfast dedication to achieving the pinnacle
            of excellence in my craft.
          </p>
          {/* button */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-slate-800 text-white ">
              View My work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black ">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
