import { X } from "lucide-react";
import { motion } from "motion/react";

interface ModalPropTypes {
  onClose: () => void;
}

const slideUp = {
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

function Modal({ onClose }: ModalPropTypes) {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full h-screen bg-gray-100 fixed top-0 z-50 flex justify-center items-center overflow-hidden"
    >
      <button className=" absolute top-0 right-0 p-5">
        <X
          onClick={onClose}
          className="text-black size-14 border rounded-full p-3"
        />
      </button>
      <div className="md:w-[70%] lg:w-[50%]  p-5  flex flex-col gap-6 justify-center">
        <h1 className="text-3xl">Disclaimer: Concept Project</h1>
        <p>
          This website is a conceptual project created solely for portfolio
          purposes. It is not affiliated with a real interior design studio, and
          all content is fictional. Designed and developed by abhialuru to
          showcase design and development skills.
        </p>
        <p>
          For inquiries or collaborations, feel free to reach out :{" "}
          <span className="font-semibold">alurabhi9346@gmail.com</span>{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default Modal;
