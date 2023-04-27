import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Elayne M. Vélez
          </a>
        </a>
        <img
          class="center"
          src="logo192.png"
          alt="react logo"
          width="50"
          height="50"
        />
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          April 2023
        </p>
      </div>
    </header>
  );
}

export default Footer;
