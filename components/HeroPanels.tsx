import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const HeroPanels = ({}: Props) => {
  return (
    <AnimatePresence>
      <header className="h-1/2 w-[90%] border-2 border-black md:w-2/3">
        <motion.div className="group flex h-full w-full md:w-1/3">
          <motion.div className="flex h-full w-full bg-red-500 group-hover:hidden"></motion.div>
          <motion.div className="hidden h-full w-full bg-blue-500 group-hover:flex">
            <button onClick={() => console.log("click")}>click here</button>
          </motion.div>
        </motion.div>
      </header>
    </AnimatePresence>
  );
};

export default HeroPanels;
