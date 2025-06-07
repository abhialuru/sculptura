import { MoveRightIcon } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "motion/react";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <AnimatePresence mode="wait">
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
      <div
        onClick={() => setShowModal(true)}
        className="flex gap-5  border-b text-xl font-playfair "
      >
        <span className="text-2xl">Get in touch</span>
        <MoveRightIcon className="size-8 " />
      </div>
    </div>
  );
}

export default Contact;
