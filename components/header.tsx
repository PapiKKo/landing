//import { VFC } from 'react';
import React from "react";
import Image from 'next/image';
import rocket from "../logo/logo_rocket.png";


const Header = () => (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image 
        src={rocket}
        height="50px"
        width="50px"
     />
      <span className="ml-3 text-xl">Exploratrium</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    </nav>
    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-white hover:text-black">R2E NOW
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
);
export default Header;