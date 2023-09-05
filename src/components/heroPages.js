import React from "react";

function HeroPage() {
    return ( 
        <div className="text-white w-full flex flex-col text-center justify-center items-center bg-cover bg-center h-96 bg-hero-page relative">
            <div className="bg-gradient-to-r from-violet-500 to-blue-500 w-full h-full absolute opacity-70"></div>
            <div className="z-10 flex flex-col gap-3">
                <p className="font-semibold lg:text-4xl text-3xl">About Us</p>
                <p><a href="#" className="underline-none hover:underline">Home</a> &#9679; About Us</p>
            </div>
        </div>
     );
}

export default HeroPage;