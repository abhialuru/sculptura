import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface ServiceCardPropTypes {
  heading: string;
  src: string;
  description: string;
}

function ServiceCard({ heading, src, description }: ServiceCardPropTypes) {
  return (
    <motion.div
      initial={{ translate: 0 }}
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full h-[400px] relative hover:-translate-y-2 flex justify-center items-end"
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt="bedroom"
        width={250}
        height={500}
      />
      <h2 className="absolute bottom-0 p-2 py-5 text-white text-2xl font-bold ">
        {heading}
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[400px] flex bg-transparent lg:opacity-1   items-end absolute top-0 "
      >
        <div className="w-full h-[40%] flex flex-col gap-4 p-2 justify-end bg-gradient-to-t text-white from-[#1a1a1a] via-[#1a1a1a] to-transparent ">
          <h3 className="text-xl font-playfair">{heading}</h3>
          <p className="text-xs">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceCard;
