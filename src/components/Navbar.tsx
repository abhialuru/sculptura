import { easeIn } from "motion";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./Modal";

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

  const MenuUp = {
    initial: {
      height: 0,
    },
    enter: {
      height: "100vh",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (openMenu) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Clean up if component unmounts
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, [openMenu]);

  const [showModal, setShowModal] = useState(false);

  return (
    <motion.nav
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full h-auto"
    >
      <AnimatePresence mode="wait">
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
      <div className="w-full h-auto flex flex-row-reverse md:flex-row justify-between items-center pt-5 px-5">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:w-[160px] md:border border-black text-black rounded-full py-1.5 flex gap-5 justify-center  items-center z-40"
        >
          <p
            className={`relative 
    before:content-[''] before:w-6 before:h-[0.5px] before:bg-black before:absolute before:transform  before:transition-all before:duration-1000 before:ease-[cubic-bezier(0.76,0,0.24,1)]  after:transition-all after:duration-1000 after:ease-[cubic-bezier(0.76,0,0.24,1)]
    after:content-[''] after:w-6 after:h-[0.5px] after:bg-black after:absolute after:transform  
    ${
      openMenu
        ? "before:top-[1px] before:-rotate-45 after:top-[1px] after:rotate-45"
        : "before:top-[-4px] after:top-[4px]"
    }
  `}
          ></p>
          <span></span>

          <span className="hidden md:block">{openMenu ? "Close" : "Menu"}</span>
        </button>
        <p className="font-cinzel z-40">SCULPTURA INTERIORS</p>
        <button
          onClick={() => setShowModal(true)}
          className="w-[120px] hidden md:inline-block border border-black text-black rounded-full py-1.5 z-40"
        >
          Contact us
        </button>
      </div>
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            variants={MenuUp}
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full fixed bottom-0 z-30  bg-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col gap-5 text-5xl font-light p-5 w-full h-full md:ml-40 justify-center">
              {["hero", "about", "projects", "services"].map((word, i) => (
                <motion.li
                  className="w-full"
                  key={i}
                  initial={{ x: 0 }}
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.6, ease: easeIn }}
                >
                  <Link
                    className="w-full block"
                    onClick={() => setOpenMenu(false)}
                    href={`#${word}`}
                  >
                    {word === "hero"
                      ? "Hero"
                      : word === "about"
                      ? "About us"
                      : word === "projects"
                      ? "Recent Projects"
                      : "Services"}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="https://abhialuru.vercel.app"
              target="_blank"
              className="absolute text-xl font-light bottom-0 right-0 p-5"
            >
              Website by abhialuru
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
// bg-[#D5D1CF]
