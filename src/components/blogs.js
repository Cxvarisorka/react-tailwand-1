import React from "react";
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'

function Blog() {
    return ( 
        <div className="w-full flex flex-col justify-center items-center gap-20 sm:py-24 py-16 2xl:px-72 px-5 bg-slate-50">
            <p className="font-bold md:text-4xl miniphone:text-3xl text-2xl text-gray-600 text-center">Recent Blog & Article</p>
            <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5">
                <div className="phone:w-96 w-full h-200 flex flex-col justify-between items-center text-center bg-white rounded drop-shadow-2xl">
                    <a href="#" className="w-full h-56"><img src={blog1} className="w-full h-full object-cover"></img></a>
                    <div className="px-5 py-7 w-full h-full flex flex-col justify-between items-center text-center">
                        <a href="#" className="text-lg font-medium text-gray-600 hover:text-blue-500 duration-500">The Biggest Trends in Technology We've Seen This Year</a>
                        <p className="text-gray-500 miniphone:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                        <a href="#" className="miniphone:py-3 miniphone:px-8 py-2 px-6 miniphone:text-base text-sm text-white bg-blue-500  rounded-3xl hover:bg-blue-700 duration-500">Continue Reading</a>
                    </div>
                </div>
                <div className="phone:w-96 w-full h-200 flex flex-col justify-between items-center text-center bg-white rounded drop-shadow-2xl">
                    <a href="#" className="w-full h-56"><img src={blog2} className="w-full h-full object-cover"></img></a>
                    <div className="px-5 py-7 w-full h-full flex flex-col justify-between items-center text-center">
                        <a href="#" className="text-lg font-medium text-gray-600 hover:text-blue-500 duration-500">Why We Love Technology (And You Should, Too!)</a>
                        <p className="text-gray-500 miniphone:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                        <a href="#" className="miniphone:py-3 miniphone:px-8 py-2 px-6 miniphone:text-base text-sm text-white bg-blue-500 hover:bg-blue-700 rounded-3xl duration-500">Continue Reading</a>
                    </div>
                </div>
                <div className="phone:w-96 w-full h-200 flex flex-col justify-between items-center text-center bg-white rounded drop-shadow-2xl">
                    <a href="#" className="w-full h-56"><img src={blog3} className="w-full h-full object-cover"></img></a>
                    <div className="px-5 py-7 w-full h-full flex flex-col justify-between items-center text-center">
                        <a href="#" className="text-lg font-medium text-gray-600 hover:text-blue-500 duration-500">The 17 Most Misunderstood Facts About Technology</a>
                        <p className="text-gray-500 miniphone:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt</p>
                        <a href="#" className="miniphone:py-3 miniphone:px-8 py-2 px-6 miniphone:text-base text-sm text-white bg-blue-500  rounded-3xl hover:bg-blue-700 duration-500">Continue Reading</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Blog;