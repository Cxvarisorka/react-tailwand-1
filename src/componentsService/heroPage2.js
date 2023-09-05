import React from "react";

function HeroPageService() {
    return ( 
        <div className="text-white w-full flex flex-col text-center justify-center items-center bg-cover bg-center h-96 bg-hero-second relative">
            <div className="bg-gradient-to-r from-violet-500 to-blue-500 w-full h-full absolute opacity-40"></div>
            <div className="z-10 flex flex-col gap-3">
                <p className="font-semibold lg:text-4xl text-3xl">Services</p>
                <p><a href="#" className="underline-none hover:underline">Home</a> &#9679; Services</p>
            </div>
        </div>
     );
}

export default HeroPageService;