//import { VFC } from 'react';
import React from "react";
import Image from 'next/image';
import rocket from "../public/images/logo2_head.PNG";
import css from '../styles/Home.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from "react-burger-menu";

const Header = () => (
  <header className="text-blackbody-font bg-gray-200">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="./" className="flex title-font font-medium items-left text-gray-900 mb-4 md:mb-0">
      <Image 
          src={rocket}
          height="50px"
          width="330px"
      />
      </a>
      <div className="navbar-menu md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <button className="block lg:hidden relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>            
            </button>
            <div className="block lg:hidden absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <AnchorLink href='#vision' className="block lg:hidden px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Vision</AnchorLink>
              <AnchorLink href='#action' className="block lg:hidden px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Action</AnchorLink>
              <AnchorLink href='#roadmap' className="block lg:hidden px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">RoadMap</AnchorLink>
              <a href="https://doc.exploratrium.io" className="block lg:hidden px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Lite Paper</a>
            </div>
        <AnchorLink href='#vision' className="hidden lg:inline-block mr-4 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Vision</AnchorLink>
        <AnchorLink href='#action' className="hidden lg:inline-block mx-4 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Action</AnchorLink>
        <AnchorLink href='#roadmap' className="hidden lg:inline-block mx-4 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">RoadMap</AnchorLink>
        <a href="https://doc.exploratrium.io" className="hidden lg:inline-block mx-4 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Lite Paper</a>

      </div>

    <div className={css.btn}>
      <button className="flex hidden md:block items-right justify-center bg-black w-56 py-3 px-3 focus:outline-none hover:text-black hover:bg-white rounded text-base mt-4 md:mt-0 text-white font-medium">
        <span className={css.btn__text}>LAUNCH UP</span>
        <span className={css.btn__text}>COMING SOON ......</span>
      </button>
    </div>
  </div>
</header>
);
export default Header;