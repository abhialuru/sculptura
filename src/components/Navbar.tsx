import { easeIn } from "motion";
import { motion } from "motion/react";
import React from "react";

function Navbar() {
  const slideUp = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 0.5,
        delay: 4,
        easeIn,
      },
    },
  };

  return (
    <motion.nav
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full flex justify-between items-center pt-5 px-5"
    >
      <button className="w-[160px] border border-black text-black rounded-full py-1.5 flex gap-4 justify-center items-center">
        <p className="flex flex-col gap-2">
          <span className="w-7 h-[0.5px] bg-black inline-block" />
          <span className="w-7 h-[1px] bg-black inline-block" />
        </p>
        Menu
      </button>
      <p className="font-cinzel ">SCULPTURA INTERIORS</p>
      <button className="w-[120px] border border-black text-black rounded-full py-1.5">
        Contact us
      </button>
    </motion.nav>
  );
}

export default Navbar;
