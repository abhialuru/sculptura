"use client";
import { easeIn, easeOut, motion, useAnimate } from "motion/react";
import React, { useEffect } from "react";

function Preloader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = async () => {
      animate(
        ".left-text",
        {
          y: ["40%", "0"],
          opacity: [0, 1],
        },
        { duration: 0.5, ease: easeIn }
      );
      animate(
        ".right-text",
        {
          y: ["40%", "0"],
          opacity: [0, 1],
        },
        { duration: 0.5, ease: easeIn }
      );
      await animate(
        ".line",
        { y: ["-100%", "0"], opacity: [0, 1] },

        { duration: 0.5, ease: easeIn, delay: 0.6 }
      );
      animate(".left-text", { x: "-80px" }, { duration: 0.3, ease: easeOut });
      animate(".right-text", { x: "80px" }, { duration: 0.3, ease: easeOut });

      await animate(
        ".line",
        { y: ["0", "100%"] },

        { duration: 0.3, ease: easeIn, delay: 0.6 }
      );

      animate(
        ".heightDownSpeed",
        { height: ["100vh", "0vh"] },
        { duration: 0.8, delay: 0.6, ease: easeIn }
      );

      animate(
        ".heightDownSlow",
        { height: ["100vh", "0vh"] },
        { duration: 1.2, delay: 0.6, ease: easeIn }
      );
    };

    startAnimation();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="w-full h-[100vh]  text-3xl fixed top-0 z-20 font-cinzel text-white pointer-events-none  flex overflow-hidden heightDownSlow"
    >
      <div className="w-[50%] h-full bg-[#1a1a1a] flex justify-end items-center  heightDownSlow overflow-hidden">
        <p className="text-3xl font-cinzel mr-1 left-text opacity-0">
          sculptura
        </p>
      </div>
      <div className="h-full w-[0.5px] bg-white opacity-0 line absolute top-o left-[50%]"></div>
      <div className="w-[50%] h-full bg-[#1a1a1a] flex justify-start items-center heightDownSpeed overflow-hidden">
        <p className="text-3xl font-cinzel ml-1 right-text opacity-0">
          Interiors
        </p>
      </div>
    </div>
  );
}

export default Preloader;
