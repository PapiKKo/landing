
import React from "react";
import Image from 'next/image';
import background from "../public/book.png";


const vision = () => (
    <section className="body-font">      
        <Image
            src={background} />
        <div className="absolute sm:right-4 sm:text-lg md:right-8 md:text-2xl lg:right-24 lg:text-3xl text-white top-48">Share the Voice for Good of All, Not Benefit of One
    </div>
  <div className="container px-5 py-12 mx-auto flex flex-col">
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center lg:w-4/6 mx-auto">
      <h5 className="pt-12 pb-4 mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
        VISION
        <br className="hidden md:block" />
        </h5>
        <p className="leading-relaxed text-lg ">
          NOT a Taker, BUT a Giver.
        </p><br className="hidden md:block" /><br className="hidden md:block" /><br className="hidden md:block" />
        <h5 className="pt-12 pb-4 mb-8 text-4xl font-black leading-none md:pl-2">
        SPREAD YOUR WORDSa<br/>+ GET FB
        <br className="hidden md:block" />
        </h5>
          <p className="leading-relaxed text-lg ">
          Exploratrium is a Web3 contents sharing platform<br/> with SOCIAL-FI AND GAME-FI ELEMENTS,<br/> whereby Creators and Readers both can make handsome<br/>
            earnings through uploading/reading contents.
              </p>
    </div>
  </div>
</section>
);
export default vision;