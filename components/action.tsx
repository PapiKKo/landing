import React from 'react';
import Link from "next/link";


const action = () => (
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
        <h5 className="m-2 mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2 hover:text-gray-600">
        CO-CREATIVE
        <br/>
        EXPLORATRIUM
        <br/>
        WITH
        
      </h5></Link>
      </div>

);
export default action;