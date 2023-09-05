import React from "react";
import profile1 from '../images/team-1.jpg'
import profile2 from '../images/team-2.jpg'
import profile3 from '../images/team-3.jpg'
import profile4 from '../images/team-4.jpg'

function Team() {
    return ( 
        <div className="w-full flex flex-col justify-center items-center md:gap-20 gap-8 sm:py-24 phone:py-16 py-8 2xl:px-72 px-5">
            <p className="font-bold md:text-4xl miniphone:text-3xl text-2xl text-gray-600 text-center">Expert Team Member</p>
            <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5">
                <div className="miniphone:w-80 w-full h-96 flex flex-col group">
                    <div className="w-full h-72 relative">
                        <div className="w-full h-72 overflow-hidden rounded">
                            <img src={profile1} className="w-full h-full object-cover group-hover:scale-105 duration-300"></img>
                        </div>
                        <div className="absolute top-0 left-0 duration-300 w-full h-full">
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-70 w-full h-full duration-300"></div>
                            <div className="absolute flex flex-row justify-center items-center w-full h-full gap-3 z-30 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <p className="text-lg font-semibold">Lewis Lucas</p>
                        <p className="text-blue-500">IT Manager</p>
                    </div>
                </div>
                <div className="miniphone:w-80 w-full h-96 flex flex-col group">
                    <div className="w-full h-72 relative">
                        <div className="w-full h-72 overflow-hidden rounded">
                            <img src={profile2} className="w-full h-full object-cover group-hover:scale-105 duration-300"></img>
                        </div>
                        <div className="absolute top-0 left-0 duration-300 w-full h-full">
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-70 w-full h-full duration-300"></div>
                            <div className="absolute flex flex-row justify-center items-center w-full h-full gap-3 z-30 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <p className="text-lg font-semibold">Lewis Lucas</p>
                        <p className="text-blue-500">IT Manager</p>
                    </div>
                </div>     
                <div className="miniphone:w-80 w-full h-96 flex flex-col group">
                    <div className="w-full h-72 relative">
                        <div className="w-full h-72 overflow-hidden rounded">
                            <img src={profile3} className="w-full h-full object-cover group-hover:scale-105 duration-300"></img>
                        </div>
                        <div className="absolute top-0 left-0 duration-300 w-full h-full">
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-70 w-full h-full duration-300"></div>
                            <div className="absolute flex flex-row justify-center items-center w-full h-full gap-3 z-30 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <p className="text-lg font-semibold">Lewis Lucas</p>
                        <p className="text-blue-500">IT Manager</p>
                    </div>
                </div>
                <div className="miniphone:w-80 w-full h-96 flex flex-col group">
                    <div className="w-full h-72 relative">
                        <div className="w-full h-72 overflow-hidden rounded">
                            <img src={profile4} className="w-full h-full object-cover group-hover:scale-105 duration-300"></img>
                        </div>
                        <div className="absolute top-0 left-0 duration-300 w-full h-full">
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-70 w-full h-full duration-300"></div>
                            <div className="absolute flex flex-row justify-center items-center w-full h-full gap-3 z-30 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center scale-50 group-hover:scale-100 duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <p className="text-lg font-semibold">Lewis Lucas</p>
                        <p className="text-blue-500">IT Manager</p>
                    </div>
                </div>   
            </div>
        </div>
     );
}

export default Team;