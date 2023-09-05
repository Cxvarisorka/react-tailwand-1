import React from "react";
import banner2 from '../images/choose-1.png'
let soulP = 'sm:w-64 phone:w-52 w-full sm:text-base text-sm  pl-6 border-l-2 border-blue-500 h-12 flex items-center drop-shadow-2xl rounded-br-xl soulP gradientHover hover:pl-7'
let soulPMain = 'sm:w-64 phone:w-52 w-full sm:text-base text-sm pl-6 bg-gradient-to-r border-l-2 border-blue-500 from-blue-500 to-violet-500 text-white h-12 flex items-center rounded-br-xl soulP'
function Soul() {
    return ( 
        <div className="w-full flex soul:flex-row flex-col bg-slate-50 justify-between items-center gap-5 sm:py-24 py-16 2xl:px-72 px-5">
            <div className="flex flex-col gap-8 lg:w-1/2 w-full lg:items-start lg:justify-start items-center justify-center lg:text-start text-center">
                <p className="text-gray-600 sm:text-4xl text-2xl font-bold">Creating Website Solutions</p>
                <p className="text-gray-500 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex phone:w-auto w-full phone:flex-row flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <p className={soulPMain}>E-Commerce Development</p>
                        <p className={soulP}>WordPress Development</p>
                        <p className={soulP}>Page Speed Optimization</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className={soulP}>Web Design</p>
                        <p className={soulP}>Network Monitoring</p>
                        <p className={soulP}>Shopify Development</p>
                    </div>
                </div>
            </div>
            <img src={banner2} className="lg:w-1/2 w-92 "></img>
        </div>
     );
}

export default Soul;