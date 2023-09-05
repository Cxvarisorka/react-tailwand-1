import React, { useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import comImg from '../images/about.jpg';

function Comp1() {
    const [counterOn, setCounterOn] = useState(false);

    return ( 
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="w-full overflow-hidden flex soul:flex-row flex-col bg-slate-50 justify-between items-center gap-5 sm:py-24 py-16 2xl:px-72 px-5">
                <div className="soul:w-1/2 w-full flex flex-col gap-7">
                    <p className="sm:text-3xl text-2xl font-semibold"><span className="text-blue-500">Our mission</span> is to make your business better through technology.</p>
                    <p className="text-gray-600 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <div className="sm:text-base text-sm w-full flex flex-row justify-between items-center">
                                <p className="text-blue-500 font-semibold">Web Development</p>
                                <p className="text-blue-500 font-semibold">{counterOn && <CountUp start={0} end={90} duration={2} delay={0} />}%</p>
                            </div>
                            <div className="bg-gray-200 w-full h-1.5 rounded-xl overflow-hidden">
                                <div className="bg-blue-500 w-10/12 h-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="sm:text-base text-sm w-full flex flex-row justify-between items-center">
                                <p className="text-blue-500 font-semibold">Discovery & Strategy</p>
                                <p className="text-blue-500 font-semibold">{counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}%</p>
                            </div>
                            <div className="bg-gray-200 w-full h-1.5 rounded-xl overflow-hidden">
                                <div className="bg-blue-500 w-1/2 h-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="sm:text-base text-sm  w-full flex flex-row justify-between items-center">
                                <p className="text-blue-500 font-semibold">IOS Apps</p>
                                <p className="text-blue-500 font-semibold">{counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}%</p>
                            </div>
                            <div className="bg-gray-200 w-full h-1.5 rounded-xl overflow-hidden">
                                <div className="bg-blue-500 w-3/5 h-full"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <img src={comImg} className="soul:block hidden w-200 drop-shadow-2xl"></img>
            </div>
        </ScrollTrigger>
        
    
     );
}

export default Comp1;