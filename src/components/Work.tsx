"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface WorkPropTypes {
  heading: string;
  description: string;
  year: string;
  src: string;
  sides: string;
}

function Work({ heading, description, year, src, sides }: WorkPropTypes) {
  return (
    <div className={`w-full flex flex-col-reverse ${sides}`}>
      <div className="w-full md:w-[50%] h-[60vh] lg:h-[100vh] flex flex-col items-center justify-between py-10">
        <div className="w-full flex flex-col items-center gap-5 p-5">
          <h2 className="text-2xl font-playfair">{heading}</h2>
          <p className="text-sm w-[90%] md:w-[70%]">{description}</p>
        </div>
        <p>{year}</p>
      </div>
      <motion.div className="w-full md:w-[50%] h-[60vh] lg:h-[100vh] bg-slate-200">
        <Image
          className="w-full h-full object-cover"
          src={src}
          alt="living room"
          width={500}
          height={1000}
        />
      </motion.div>
    </div>
  );
}

export default Work;
