
import React from "react";
import Image from 'next/image';
import background from "../logo/book.png";


const vision = () => (
    <section className="text-gray-600 body-font">
        <Image src={background} />
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      
      
        <div className="sm:w-full sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-center">
          <p className="leading-relaxed text-lg ">
          Exploratrium is a Web3 contents sharing platform<br/> with SOCIAL-FI AND GAME-FI ELEMENTS,<br/> whereby Creators and Readers both can make handsome<br/>
            earnings through uploading/reading contents.
              </p>
              <path d="M5 12h14M12 5l7 7-7 7"></path>
        </div>
    </div>
  </div>
</section>
);
export default vision;