import React from 'react';
import Image from 'next/image';
import pictogram from '../public/images/スタンダードな人物ピクトグラム.svg';

const handleOnClick = (v:string) => {
    console.log(v);
};

const roadmap = () => (
    <section className="body-font">
        <div className="container px-5 py-12 mx-auto flex flex-col">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center lg:w-4/6 mx-auto">
                <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">Road Map</h5>
            </div>
            <div className="flex flex-wrap md:-m-4 sm:justify-center">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="  max-w-2xl overflow-hidden">
                        <div className="px-4 py-5 sm:px-6">
                        <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                            Apr-Jun 2022  &nbsp;&nbsp;▶
                            </h3>
                        </div>
                        <div className="border-gray-200">
                            <dl>
                                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                        ●Biz
                                    </dt>
                                    <dd className="h-24 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ・Lite Paper<br/>
                                    ・NFT Pre-sale<br/>
                                    ・Closed β Open<br/>
                                    ・DEX Listening(EXA)
                                    </dd>
                                </div>
                                <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    ●Dev
                                    </dt>
                                    <dd className="h-12 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ・MVP Dev<br/>
                                    </dd>
                                </div>
                                <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                    <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    ●Est User
                                    </dt>
                                    <div className="sm:flex sm:flex-wrap sm:justify-center">
                                    <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0">
                                    ・30K
                                    </dd>
                                    <dd className="lg:text-base sm:text-sm text-gray-900 h-6 w-6 -bottom-1">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Jul-Sep 2022  &nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                   
                                </dt>
                                <dd className="h-24 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                ・Gov Token IDO<br/>
                                ・Open β Open<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                
                                </dt>
                                <dd className="h-12 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・Mobile App Dev<br/>
                                ・Contents on IPFS
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                
                                </dt>
                                <div className="sm:flex sm:flex-wrap sm:justify-center">
                                <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・50K<br/>
                                </dd>
                                <dd className="lg:text-base sm:text-sm text-gray-900 h-8 w-8 -bottom-1">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                    </div>
                            </div>
                        </dl>
                    </div>
                </div>
                </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Oct-Dec 2022 &nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    
                                </dt>
                                <dd className="h-24 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                ・Join IP contents<br/>
                                ・DEX Listing (SHE)<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                
                                </dt>
                                <dd className="h-12 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2 font ">
                                ・Mobile App Launch<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                                <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                
                                </dt>
                                <div className="sm:flex sm:flex-wrap sm:justify-center">
                                <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・500K<br/>
                                </dd>
                                <dd className="lg:text-base sm:text-sm text-gray-900 h-12 w-12 -bottom-1">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                    </div>
                            </div>
                        </dl>
                    </div>
                </div>
                </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="max-w-2xl overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                    <h3 className="tracking-widest text-white font-medium lg:text-xl sm:text-lg title-font bg-gray-500 p-4 rounded-lg">
                        Jan-&nbsp; 2023  &nbsp;&nbsp;▶
                        </h3>
                    </div>
                    <div className="border-gray-200">
                        <dl>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                            <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    
                                    </dt>
                                <dd className="h-24 mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・CEX Listing<br/>
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                            <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    
                                    </dt>
                                <dd className="h-12 mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2  ">
                                    
                                </dd>
                            </div>
                            <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                            <dt className="w-0 lg:text-base sm:text-sm font-medium text-gray-500">
                                    
                                    </dt>
                                    <div className="sm:flex sm:flex-wrap sm:justify-center">
                                <dd className="mt-1 lg:text-base sm:text-sm text-gray-900 sm:mt-0 sm:col-span-2  ">
                                ・1M
                                </dd>
                                <dd className="lg:text-base sm:text-sm text-gray-900 h-24 w-24 -bottom-1">
                                        <Image src={pictogram}></Image>
                                    </dd>
                                    </div>
                            </div>
                        </dl>
                    </div>
            </div>
        </div>

        <div className="p-2 w-full text-5xl text-center">
        <button className="inline-flex items-center bg-black border-0 py-4 px-6 focus:outline-none hover:bg-gray-300 rounded mt-4 md:mt-0 text-white hover:text-black text-4xl font-extrabold leading-none">R2E NOW
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button> 
      </div>
    </div>
  </div>
</section>
);
export default roadmap;