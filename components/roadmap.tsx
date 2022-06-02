
const handleOnClick = (v:string) => {
    console.log(v);
};

const roadmap = () => (
    <section className="body-font">
        <div className="container px-5 py-12 mx-auto flex flex-col">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center lg:w-4/6 mx-auto">
                <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">Road Map</h5>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                        <h3 className="tracking-widest text-white font-medium title-font bg-gray-500 p-6 rounded-lg">Apr-Jun 2022&emsp;▶</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font">●Biz</h2>
                        <p className="leading-relaxed text-base">
                            ・Lite Paper<br/>
                            ・NFT Pre-sale<br/>
                            ・Closed β Open<br/>
                            ・DEX Listening(EXA)<br/>
                        </p>
                        <h2 className="py-2 text-lg text-gray-900 font-medium title-font">●Dev</h2>
                        <p className="leading-relaxed text-base">
                            ・MVP Dev</p>
                        <h2 className="py-2 text-lg text-gray-900 font-medium title-font ">●Est User</h2>
                        <p className="leading-relaxed text-base">
                            ・30K
                        </p>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <h3 className="tracking-widest text-white font-medium title-font bg-gray-500 p-6 rounded-lg">Jul-Sep 2022&emsp;▶</h3>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "><br/></h2>
            <p className="leading-relaxed text-base">
                ・Gov Token IDO<br/>
                ・Open β Open<br/>
                </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "><br/></h2>
            <p className="leading-relaxed text-base">
                ・Mobile App Dev<br/>
                ・Contents on IPFS<br/>
                </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "><br/></h2>
            <p className="leading-relaxed text-base">
                ・50K<br/>
                </p>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <h3 className="tracking-widest text-white font-medium title-font bg-gray-500 p-6 rounded-lg">Oct-Dec 2022&emsp;▶</h3>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                ・Join IP contents<br/>
                ・DEX Listing (SHE)<br/>
                </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                ・Mobile App Launch<br/>
                <br/>
                </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                ・500K<br/>
            </p>        
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <h3 className="tracking-widest text-white font-medium title-font bg-gray-500 p-6 rounded-lg">Jan- 2023&emsp;▶</h3>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                ・CEX Listing<br/>
                <br/>
                </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                <br/>
                <br/>
            </p>
            <h2 className="py-2 text-lg text-gray-900 font-medium title-font "></h2>
            <p className="leading-relaxed text-base">
                ・1M<br/>
            </p>
        </div>
        <div className="p-2 w-full text-5xl text-center">
        <button className="inline-flex items-center bg-black border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-white hover:text-black">R2E NOW
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