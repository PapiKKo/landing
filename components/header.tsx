//import { VFC } from 'react';
import React from "react";
import Image from 'next/image';
import rocket from "../public/images/logo_rocket.png";
import css from '../styles/Home.module.css';


const Header = () => (
    <header className="text-blackbody-font bg-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="./" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image 
        src={rocket}
        height="50px"
        width="50px"
     />
      <span className="ml-3 text-xl hover:text-gray-600">Exploratrium</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    </nav>
    <div className={css.btn}>
      <button className="inline-flex items-center bg-black w-48 py-3 px-3 focus:outline-none hover:text-black hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-white font-medium">
        <span className={css.btn__text}>LAUNCH UP</span>
        <span className={css.btn__text}>COMING SOON ......</span>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 r-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </div>
</header>
);
export default Header;