import React from "react";


function Services() {
    return (  
        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-5 sm:py-24 phone:py-16 py-8 2xl:px-72 px-5">
            <div className="group   sm:w-1/2 w-full flex flex-col justify-center items-center text-center phone:gap-6 gap-4 bg-white drop-shadow-xl rounded-xl phone:px-8 phone:py-9 px-3 py-4 duration-500 hover:scale-105 hover:bg-blue-500">
                <div className="flex justify-center items-center phone:w-20 phone:h-20 w-16 h-16 bg-gray-100 rounded-full group-hover:bg-white duration-500"><i class="fa-solid fa-screwdriver-wrench phone:text-4xl text-2xl group-hover:text-blue-500 duration-500"></i></div>
                <p className="text-lg font-semibold group-hover:text-white duration-500">IT Solution</p>
                <p className="text-gray-600 group-hover:text-white duration-500 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <a className="underline font-semibold text-blue-600 group-hover:text-white duration-500" href="#">Read More</a>
            </div>
            <div className="group   sm:w-1/2 w-full flex flex-col justify-center items-center text-center phone:gap-6 gap-4 bg-white drop-shadow-xl rounded-xl phone:px-8 phone:py-9 px-3 py-4 duration-500 hover:scale-105 hover:bg-blue-500">
                <div className="flex justify-center items-center phone:w-20 phone:h-20 w-16 h-16 bg-gray-100 rounded-full group-hover:bg-white duration-500"><i class="fa-solid fa-desktop phone:text-4xl text-2xl group-hover:text-blue-500 duration-500"></i></div>
                <p className="text-lg font-semibold group-hover:text-white duration-500">Web Development</p>
                <p className="text-gray-600 group-hover:text-white duration-500 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <a className="underline font-semibold text-blue-600 group-hover:text-white duration-500" href="#">Read More</a>
            </div>
            <div className="group   sm:w-1/2 w-full flex flex-col justify-center items-center text-center phone:gap-6 gap-4 bg-white drop-shadow-xl rounded-xl phone:px-8 phone:py-9 px-3 py-4 duration-500 hover:scale-105 hover:bg-blue-500">
                <div className="flex justify-center items-center phone:w-20 phone:h-20 w-16 h-16 bg-gray-100 rounded-full group-hover:bg-white duration-500"><i class="fa-solid fa-server phone:text-4xl text-2xl group-hover:text-blue-500 duration-500"></i></div>
                <p className="text-lg font-semibold group-hover:text-white duration-500">Networking Service</p>
                <p className="text-gray-600 group-hover:text-white duration-500 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <a className="underline font-semibold text-blue-600 group-hover:text-white duration-500" href="#">Read More</a>
            </div>
        </div>
    );
}

export default Services;