import React from "react";

function Footer() {
    return ( 
        <div className="text-white w-full flex lg:flex-row flex-col justify-center items-center gap-11 sm:py-24 py-16 2xl:px-72 px-5 bg-gradient-to-r from-violet-500 to-blue-500">
            <div className="w-full tablet:h-52 h-auto flex tablet:flex-row flex-col justify-between gap-11">
                <div className="flex flex-col w-full h-full justify-between text-center miniphone:text-start tablet:gap-0 gap-5">
                    <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">About Us</p>
                    <hr className="border-1 border-white"></hr>
                    </div>
                    <p className="text-sm miniphone:text-phsm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex flex-row gap-3  miniphone:justify-start justify-center">
                    <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center  hover:bg-blue-500 hover:text-white  duration-300 text-lg"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center  hover:bg-blue-500 hover:text-white  duration-300 text-lg"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center  hover:bg-blue-500 hover:text-white  duration-300 text-lg"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" className="w-9 h-9 rounded-md bg-white text-blue-500 flex justify-center items-center  hover:bg-blue-500 hover:text-white  duration-300 text-lg"><i class="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full justify-between text-center miniphone:text-start gap-5">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">Our Services</p>
                    <hr className="border-1 border-white"></hr>
                </div>
                <ul className="text-sm miniphone:text-phsm text-white list-none h-full justify-between w-full flex flex-col">
                    <li><a href="#" className="hover:underline">IT Solution</a></li>
                    <li><a href="#" className="hover:underline">Web Development</a></li>
                    <li><a href="#" className="hover:underline">Networking Services</a></li>
                    <li><a href="#" className="hover:underline">SEO Optimization</a></li>
                    <li><a href="#" className="hover:underline">App Optimization</a></li>
                </ul>
                </div>
            </div>
            <div className="w-full tablet:h-52 h-auto flex tablet:flex-row flex-col justify-between gap-11">
                <div className="flex flex-col w-full h-full justify-between text-center miniphone:text-start gap-5">
                    <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">Quick Links</p>
                    <hr className="border-1 border-white"></hr>
                    </div>
                    <ul className="text-sm miniphone:text-phsm text-white list-none h-full justify-between w-full flex flex-col">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Case Study</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="flex flex-col w-full h-full justify-between text-center miniphone:text-start gap-5 ">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">Contact Information</p>
                    <hr className="border-1 border-white"></hr>
                </div>
                <div className="text-sm miniphone:text-phsm flex flex-col gap-3">
                    <p><strong>Phone:</strong> +995 555 277 335</p>
                    <p><strong>Email:</strong> lcxvaradzee400@gmail.com</p>
                    <p><strong>Addres:</strong> Kutaisi,Kharebavas street</p>
                </div>
                <form className="flex miniphone:flex-row flex-col miniphone:drop-shadow-xl drop-shadow-none ">
                    <input placeholder="Enter Your Email" className="h-12 pl-6 miniphone:rounded-s-md rounded-none focus:outline-none" required></input>
                    <button className="bg-blue-700 duration-500 hover:bg-blue-900 h-12 miniphone:rounded-e-md rounded-none px-5 text-white">Subscribe</button>
                </form>
                </div>
            </div>
            
        </div>
     );
}

export default Footer;