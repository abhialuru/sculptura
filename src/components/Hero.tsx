"use client";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import { easeIn, motion, useScroll, useTransform } from "motion/react";

function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);

  const slideUp = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
      transition: {
        duration: 0.5,
        delay: 4,
        easeIn,
      },
    },
  };

  return (
    <main id="hero" ref={containerRef} className="w-full h-auto">
      <Navbar />
      <div className="w-full flex flex-col gap-10 justify-center items-center my-[80px]">
        <h1 className="text-4xl  font-playfair  flex flex-col gap-1 text-center">
          <span className="relative inline-flex overflow-hidden leading-[120%]">
            <motion.span
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Transforming Spaces,
            </motion.span>
          </span>
          <span className="relative inline-flex overflow-hidden leading-[120%] mx-auto">
            <motion.span
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Elevating Living
            </motion.span>
          </span>
        </h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 4.2,
            ease: easeIn,
          }}
          className="w-[250px] py-3 border rounded-lg"
        >
          Start Designing
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 4.2,
          ease: easeIn,
        }}
        style={{ width: width }}
        className="h-[100vh] mx-auto p-5 mb-5 hidden md:block"
      >
        <video
          className="w-full h-full object-cover"
          src="/Interior.mp4"
          loop
          muted
          autoPlay
        />
      </motion.div>
      <div className="h-[100vh] mx-auto p-5 mb-5 md:hidden">
        <video
          className="w-full h-full object-cover"
          src="/Interior.mp4"
          loop
          muted
          autoPlay
        />
      </div>
    </main>
  );
}

export default Hero;
