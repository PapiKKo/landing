import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twitter from "../public/images/Twitter_circle_blue.png";
import discord from "../public/images/Discord-Logo-Color.png";
import telegram from "../public/images/telegram.png";


const action = () => (
    <div className="container px-5 py-12 mx-auto flex flex-col">
    <div className="py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 id="action" className="mb-8 sm:text-3xl lg:text-5xl font-extrabold leading-none md:pl-2 text-center">
      SEE OUR ACTION
       
      </h1>
      <br/><br/>
      <a className="twitter-timeline" data-width="100%" data-height="700" href="https://twitter.com/ExploratriumM?ref_src=twsrc%5Etfw">
          Tweets by ExploratriumM</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <br/><br/>
        <Link href= "./">
            <h3 className="py-8 mb-12 sm:text-3xl lg:text-5xl font-extrabold leading-loose hover:text-gray-600 text-center">
            CO-CREATIVE
            <br/>
            EXPLORATRIUM
            <br/>
            WITH
            
            </h3>
        </Link>
        <div className="flex flex-wrap -m-3 grid grid-cols-3 gap-4 justify-center">
            <div className="relative lg:h-24 lg:w-24 p-6 m-6 md:h-18 md:w-18 sm:h-8 sm:w-8">
                <a href="https://twitter.com/ExploratriumM" className="hover:cursor-pointer">
                    <Image src={twitter} alt="twitter social icon" layout="fill" objectFit="contain"/>
                </a>
            </div>
            <div className="relative lg:h-24 lg:w-24 p-6 m-6 md:h-18 md:w-18 sm:h-8 sm:w-8">
                <a href="./" className="hover:cursor-pointer">
                    <Image src={discord} alt="discord social icon" layout="fill" objectFit="contain"/>
                </a>
            </div>
            <div className="relative lg:h-24 lg:w-24 p-6 m-6 md:h-18 md:w-18 sm:h-8 sm:w-8">
                <a href="./" className="hover:cursor-pointer">
                    <Image src={telegram} alt="teleram social icon" layout="fill" objectFit="contain"/>
                </a>
            </div>
        </div>
      </div>
    </div>
);
export default action;