//import { VFC } from 'react';
import React from "react";
import Image from 'next/image';
import rocket from "../public/images/logo_rocket.png";


const Footer = () => (
  /* ここにペースト */
<footer className="text-gray-600 body-font bg-gray-200">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a href="./" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 hover:cursor-pointer">
    <Image 
        src={rocket}
        height="50px"
        width="50px"
     />
      <span className="ml-3 text-xl hover:text-gray-600">Exploratrium</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Bluebirdsong —
      <a href="./" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@copy right</a>
    </p>
  </div>
</footer>);
export default Footer;