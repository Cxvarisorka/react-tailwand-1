import React from 'react'
import homeFont from '../images/home-font.png'

function Hero() {
    return ( 
        <div className='flex lg:flex-row flex-col lg:gap-0 py-8 gap-10 lg:py-24 md:py-12 lg:items-start items-center w-full 2xl:px-72 px-5 lg:h-hero bg-slate-50 overflow-hidden'>
            <div className='flex flex-col gap-7 lg:w-1/2 h-full justify-center md:items-start items-center text-center'>
                <p className='md:text-4xl text-2xl font-medium md:text-start text-gray-800 leading-snug text-center'>Encourage innovation with trusted <span className='text-blue-500'>Technology Solutions</span></p>
                <p className='text-gray-500 md:text-start leading-7 md:text-base text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
                <div className='flex gap-5 miniphone:flex-row flex-col'>
                    <a href='#' className='text-blue-500 bg-white font-medium md:py-2 md:px-8 py-1 px-4 flex justify-center items-center rounded-3xl duration-300 hover:text-white hover:bg-blue-500 drop-shadow-md'>Learn More</a>
                    <a href='#' className='text-white font-medium md:py-2 md:px-8 py-1 px-4 flex justify-center items-center rounded-3xl duration-300 bg-blue-500  hover:text-white hover:bg-blue-700'>Contact Us</a>
                </div>
            </div>
            <div className='md:w-1/2 miniphone:w-72 flex justify-center items-center'>
                <img src={homeFont} className='md:w-92'/>
            </div>
        </div>
     );
}

export default Hero;