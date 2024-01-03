"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./menu.module.css";
import Navigation from "./NavComponent";
import { FiAlignRight } from "react-icons/fi";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto z-20 py-3 px-4 xl:px-0">
        <div className="flex items-center justify-between">
          <div className="logo xl:w-[400px] w-[120px]">
            <div className="text-3xl">Logo</div>
          </div>
          <div
            className={`${styles.header_menu} ${
              isVisible ? styles.responsive_menu : ""
            }`}
          >
            <button
              onClick={() => setIsVisible((prevState) => !prevState)}
              className="xl:hidden"
            >
              <FaTimes className="text-xl xl:relative absolute bg-base-green rounded-full text-black p-1 h-6 w-6 top-4 right-4" />
            </button>
            <div className="text-3xl mb-5 xl:hidden block">Logo</div>
            <Navigation />
          </div>
        </div>
        <button
          className="btn visible xl:hidden"
          onClick={() => setIsVisible((prevState) => !prevState)}
        >
          <FiAlignRight className="text-2xl xl:relative text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
