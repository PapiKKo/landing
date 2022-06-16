//import { VFC } from 'react';
import React, { ReactNode, useState } from "react";
import Image from 'next/image';
import logo2_rocket from "../public/images/logo2_head.PNG";
import openTag from '../public/images/openTag.svg';
import css from '../styles/Home.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from "react-burger-menu";
import rocket from "../public/images/logo_rocket.png";
import { BsBoxArrowUpRight } from 'react-icons/bs';



export const Layout = ({ children }: Props) => {
    return (
        <div>
            {Header()}
                    {children}
            {Footer()}
        </div>
    );
};

  
  
  const Header = () => {
      const [active,setActive] = useState({isActive: false});
      const onClickActive = () => {
        setActive({
            isActive: !active.isActive
        });
      }
    return (
        <header className="text-blackbody-font bg-gray-200">
            <div className="container mx-auto flex flex-wrap pt-4 px-auto md:flex-row items-center">
                <a href="./" className="hidden sm:block flex title-font font-medium items-left text-gray-900 mb-4">
                    <Image 
                        src={logo2_rocket}
                        height="50px"
                        width="330px"
                    />
                </a>
                <a href="./" className="block sm:hidden flex title-font font-medium items-left text-gray-900 mb-3">
                    <Image 
                        src={logo2_rocket}
                        height="30px"
                        width="198px"
                    />
                </a>
                <div className="navbar-menu lg:ml-auto lg:mr-auto flex flex-wrap text-base lg:mb-4">
                        
                    <AnchorLink href='#vision' className="hidden lg:inline-block mr-5 text-xl font-medium hover:border-b-2 hover:border-gray-800 border-gray-200 border-b-2">Vision</AnchorLink>
                    <AnchorLink href='#roadmap' className="hidden lg:inline-block mx-5 text-xl font-medium hover:border-b-2 hover:border-gray-800 border-gray-200 border-b-2">RoadMap</AnchorLink>
                    <AnchorLink href='#action' className="hidden lg:inline-block mx-5 text-xl font-medium hover:border-b-2 hover:border-gray-800 border-gray-200 border-b-2">Community</AnchorLink>
                    <a href="https://doc.exploratrium.io" className="hidden lg:flex mx-5 text-xl font-medium hover:border-b-2 hover:border-gray-800 border-gray-200 border-b-2 content-between">
                        Lite Paper
                        <Image 
                            src={openTag}
                            height="35px"
                            width="35px"
                        />
                    </a>

                </div>

                <div className={css.btn+' hidden lg:block lg:mb-4'}>
                    <button className="flex hidden lg:block items-right text-center bg-black w-56 py-3 px-3 focus:outline-none hover:text-black hover:bg-white rounded text-base mt-4 md:mt-0 text-white font-medium transition-all">
                        <span className={css.btn__text}>LAUNCH UP</span>
                        <span className={css.btn__text}>COMING SOON ......</span>
                    </button>
                </div>
                <button className="inline-block lg:hidden p-3 pt-1.5 mr-0 ml-auto float-right text-gray-700 bg-gray-200 border border-transparent rounded-md dark:text-white focus:outline-none"
                    onClick={onClickActive}>
                    <svg width="20" height="20" fill="currentColor" className="w-6 mr-0 ml-auto float-right" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                        </path>
                    </svg>
                </button>
                <div className={"absolute lg:hidden right-0 top-16 z-40 w-full py-2 mt-2 bg-white shadow-xl text-center transition-all"+ (active.isActive==true ? ' block' : ' hidden')}>
                    <AnchorLink href='#vision' className="block px-4 py-3 font-medium text-black capitalize transition-colors duration-200 transform hover:bg-gray-100">Vision</AnchorLink>
                    <AnchorLink href='#roadmap' className="block px-4 py-3 font-medium text-black capitalize transition-colors duration-200 transform hover:bg-gray-100">RoadMap</AnchorLink>
                    <AnchorLink href='#action' className="block px-4 py-3 font-medium text-black capitalize transition-colors duration-200 transform hover:bg-gray-100">Community</AnchorLink>
                    <a href="https://doc.exploratrium.io" className="justify-center flex px-4 py-3 text-black font-medium capitalize transition-colors duration-200 transform hover:bg-gray-100 whitespace-nowrap">
                        Lite Paper<Image 
                            src={openTag}
                            height="30px"
                            width="30px"
                        />
                    </a>
                    <button className={css.btn+" px-4 py-3 text-center bg-black w-56 focus:outline-none hover:text-black hover:bg-gray-300 rounded text-white font-medium"}>
                        <span className={css.btn__text}>LAUNCH UP</span>
                        <span className={css.btn__text}>COMING SOON ......</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

  const Footer = () => (
    /* ここにペースト */
    <footer className="text-gray-600 body-font bg-gray-200">
      <div className="container px-4 pt-6 pb-4 mx-auto flex items-center sm:flex-row flex-col">
        <a href="./" className="hidden sm:block flex title-font font-medium items-left text-gray-900">
            <Image 
                src={logo2_rocket}
                height="50px"
                width="330px"
            />
        </a>
        <a href="./" className="block sm:hidden flex title-font font-medium items-left text-gray-900">
            <Image 
                src={logo2_rocket}
                height="30px"
                width="198px"
            />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Bluebirdsong —
          <a href="./" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@copy right</a>
        </p>
      </div>
    </footer>
  );

type Props = {
    children?: ReactNode;
};

export default Layout;