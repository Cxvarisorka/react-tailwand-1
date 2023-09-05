import React from "react";

function Idea() {
    return ( 
        <div className="text-center w-full flex bg-gradient-to-r from-violet-500 to-blue-500 flex-col  justify-center sm:h-80 items-center gap-5 sm:py-24 phone:py-16 py-8 2xl:px-72 px-5">
            <div className="flex flex-col gap-5 items-center">
                <p className="font-semibold md:text-4xl miniphone:text-3xl text-2xl text-white">Have a project in mind?</p>
                <p className="text-white md:w-1/2 w-full phone:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p>
                <a href="#" className="font-semibold text-blue-500 flex justify-center items-center px-10 py-3 bg-white rounded-3xl drop-shadow-xl hover:bg-blue-500 duration-500 hover:text-white">Contact Us</a>
            </div>
        </div>
     );
}

export default Idea;