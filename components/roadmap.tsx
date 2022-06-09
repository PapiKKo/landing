import React from 'react';
import Image from 'next/image';
import pictogram from '../public/images/スタンダードな人物ピクトグラム.svg';
import css from '../styles/Home.module.css';


const roadmap = () => (
    <section className="body-font">
        <div className="container px-5 py-12 mx-auto flex flex-col">
            <div className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center lg:w-4/6">
                <h5 id="roadmap" className="mb-2 mb-8 sm:text-3xl lg:text-5xl font-extrabold leading-none md:pl-2">
                    ROAD MAP
                    </h5>
            </div>
            <div className="flex flex-wrap -m-2 justify-center">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="  max-w-2xl overflow-hidden">
                        <div className="sm:px-6">
                        <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                            Apr-Jun 2022 &nbsp;&nbsp;▶
                            </h3>
                        </div>
                        <div className="border-gray-200">
                            <dl>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                        ●Biz
                                    </dt>
                                    <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ・Lite Paper<br/>
                                    ・NFT Pre-sale<br/>
                                    <span className="text-blue-800 border-blue-800 border-b-2 font-semibold">・Closed β Open&nbsp;</span><br/>
                                    ・DEX Listening(EXA)
                                    </dd>
                                </div>
                                <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    ●Dev
                                    </dt>
                                    <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ・MVP Dev<br/>
                                    </dd>
                                </div>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500 whitespace-nowrap">
                                    ●Est&thinsp;User<br/>
                                    </dt>
                                    <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0">
                                    ・30K<br/>
                                    </dd>
                                    <dd className=" lg:text-base sm:text-sm text-gray-900 h-28 w-8 align-text-bottom">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Jul-Sep 2022 &nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                   &thinsp;<br/>
                                </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                ・Gov Token IDO<br/>
                                ・Open β Open<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                &thinsp;<br/>
                                </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・Mobile App Dev<br/>
                                ・Contents on IPFS
                                </dd>
                            </div>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    &thinsp;<br/>
                                    </dt>
                                    <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0">
                                    ・50K<br/>
                                    </dd>
                                    <dd className="lg:text-base sm:text-sm text-gray-900 h-28 w-12 -bottom-1 object-center">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                </div>
                        </dl>
                    </div>
                </div>
                </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Oct-Dec 2022&nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                &thinsp;<br/>
                                </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                ・Join IP contents<br/>
                                ・DEX Listing (SHE)<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                &thinsp;<br/>
                                </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="text-blue-800 border-blue-800 border-b-2 font-semibold">・Mobile App Launch&nbsp;</span><br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    &thinsp;<br/>
                                    </dt>
                                    <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0">
                                    ・500K<br/>
                                    </dd>
                                    <dd className="lg:text-base sm:text-sm text-gray-900 h-28 w-20 -bottom-1 col-start-3">
                                        <Image src={pictogram}></Image>
                                    </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Jan-&nbsp;&nbsp;&nbsp;&thinsp;&thinsp; 2023 &nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                            <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                            &thinsp;<br/>
                                    </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・CEX Listing<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                            <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                            &thinsp;<br/>
                                </dt>
                                <dd className="h-20 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2 font ">
                                <br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    &thinsp;<br/>
                                    </dt>
                                    <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0">
                                    ・1M<br/>
                                    </dd>
                                    <dd className="lg:text-base sm:text-sm text-gray-900 h-28 w-28 -bottom-1 col-start-3">
                                        <Image src={pictogram}></Image>
                                    </dd>
                            </div>
                        </dl>
                    </div>
            </div>
        </div>

        <div className={css.Btn}>
            <button className="inline-flex items-center bg-black border-0 py-4 px-6 focus:outline-none hover:bg-gray-300 rounded mt-4 md:mt-0 text-white hover:text-black hover:border-black sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-none">
                <span className={css.Btn__text}>LAUNCH UP</span>
                <span className={css.Btn__text}>COMING SOON ......</span>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="md:w-8 md:h-8 w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button> 
      </div>
    </div>
  </div>
</section>
);
export default roadmap;