"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  return (
    <div className=" h-full flex items-center justify-center ">
      <motion.div
        className="h-96 w-96 rounded-lg bg-green-900"
        initial={{ x: -100 }}
        animate={{ x: 400, y: 300, opacity: 0.5 }}
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
