import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full h-auto bg-[#1a1a1a] text-white mt-10">
      <div className="w-full flex justify-center items-center text-8xl opacity-15 pt-10 font-cinzel">
        sculptura interiors
      </div>
      <div className="flex px-20 w-full justify-between items-end opacity-90">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl flex flex-col font-playfair">
            <span>Transforming Spaces,</span>
            <span>Elevating Living</span>
          </h1>
          <div className="flex gap-8">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
        </div>
        <ul
          className="text-lg flex flex-col gap-2
        "
        >
          <li>Home</li>
          <li>About us</li>
          <li>Recent Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-[90%] mx-auto py-4 border-t flex justify-between items-center opacity-60 text-xs mt-4">
        <p>&copy;Sculptura Interiors.2025.All rights reserved</p>
        <ul className="flex gap-5">
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
