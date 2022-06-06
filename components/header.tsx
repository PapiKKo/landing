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
      <button className="flex justify-center bg-black w-48 py-3 px-3 focus:outline-none hover:text-black hover:bg-white rounded text-base mt-4 md:mt-0 text-white font-medium">
        <span className={css.btn__text}>LAUNCH UP</span>
        <span className={css.btn__text}>COMING SOON ......</span>
    </button>
    </div>
  </div>
</header>
);
export default Header;