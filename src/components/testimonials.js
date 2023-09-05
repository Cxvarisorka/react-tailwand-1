import React from "react";
import testimonial1 from '../images/testimonial-1.jpg'
import testimonial2 from '../images/testimonial-2.jpg'
import testimonial3 from '../images/testimonial-3.jpg'

function Testimonials() {
    return ( 
        <div className="w-full flex flex-col justify-center items-center gap-20 sm:py-24 py-16 2xl:px-72 px-5 bg-slate-50">
            <p className="font-bold md:text-4xl miniphone:text-3xl text-2xl text-gray-600 text-center">Our Client Say</p>
            <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5">
                <div className="phone:w-96 w-full h-100 flex flex-col justify-evenly items-center text-center bg-white rounded p-5 drop-shadow-2xl">
                    <p className="text-yellow-400"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
                    <p className="phone:text-base text-sm italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p>
                    <img src={testimonial2} className="w-24 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-lg">Lana Shelton</p>
                        <p className="text-base text-gray-700">Architect</p>
                    </div>
                </div>
                <div className="phone:w-96 w-full h-100 flex flex-col justify-evenly items-center text-center bg-white rounded p-5 drop-shadow-2xl">
                    <p className="text-yellow-400"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
                    <p className="phone:text-base text-sm italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p>
                    <img src={testimonial3} className="w-24 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-lg">Mario Huston</p>
                        <p className="text-base text-gray-700">Designer</p>
                    </div>
                </div>
                <div className="phone:w-96 w-full h-100 flex flex-col justify-evenly items-center text-center bg-white rounded p-5 drop-shadow-2xl">
                    <p className="text-yellow-400"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
                    <p className="phone:text-base text-sm italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p>
                    <img src={testimonial1} className="w-24 rounded-full"></img>
                    <div>
                        <p className="font-semibold text-lg">Luka Tskhvaradze</p>
                        <p className="text-base text-gray-700">Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Testimonials;