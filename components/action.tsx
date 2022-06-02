import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import twitter from "../public/Twitter_circle_blue.png";
import discord from "../public/Discord-Logo-Color.png";
import telegram from "../public/telegram.png";


const action = () => (
    <div className="container px-5 py-12 mx-auto flex flex-col">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
        SEE OUR ACTION
        <br className="hidden md:block" />
        
      </h5>
      <br/><br/>
      <a className="twitter-timeline" data-width="600" data-height="700" data-theme="light" text-align="center" data-tweet-limit="3" href="https://twitter.com/ExploratriumM?ref_src=twsrc%5Etfw">
            Tweets by ExploratriumM
        </a>
        <script src="https://platform.twitter.com/widgets.js"/>
        <br/><br/>
        <Link href= "./">
            <h5 className="pt-12 pb-4 b-2 mb-8 text-4xl font-extrabold leading-none md:pl-2 hover:text-gray-600">
            CO-CREATIVE
            <br/>
            EXPLORATRIUM
            <br/>
            WITH
            
            </h5>
        </Link>
        <div className="flex flex-wrap -m-3 justify-center">
            <div className="lg:h-28 w-28 p-4 m-6">
                <div className="hover:cursor-pointer">
                    <Link href="https://twitter.com/ExploratriumM">
                        <img src={twitter}/>
                    </Link>
                </div>
            </div>
            <div className="lg:h-28 w-28 p-4 m-6">
                <div className="hover:cursor-pointer">
                    <Link href="./">
                        <Image src={discord}/>
                    </Link>
                </div>
            </div>
            <div className="lg:h-28 w-28 p-4 m-6">
                <div className="hover:cursor-pointer">
                    <Link href="./">
                        <Image src={telegram}/>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
);
export default action;