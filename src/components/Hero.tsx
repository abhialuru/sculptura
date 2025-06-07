"use client";
import {
  AnimatePresence,
  easeIn,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";

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

  const [showModal, setShowModal] = useState(false);

  return (
    <main id="hero" ref={containerRef} className="w-full h-auto">
      <Navbar />
      <AnimatePresence mode="wait">
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
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
          onClick={() => setShowModal(true)}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 4.2,
          ease: easeIn,
        }}
        className="w-full h-[100vh] mx-auto p-5 mb-5 md:hidden"
      >
        <video
          className="w-full h-full object-cover"
          src="/Interior.mp4"
          loop
          muted
          autoPlay
        />
      </motion.div>
    </main>
  );
}

export default Hero;
