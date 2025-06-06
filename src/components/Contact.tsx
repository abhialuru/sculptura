import { MoveRightIcon } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="flex gap-5  border-b text-xl font-playfair ">
        <span className="text-2xl">Get in touch</span>
        <MoveRightIcon className="size-8 " />
      </div>
    </div>
  );
}

export default Contact;
