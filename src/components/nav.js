import React from 'react'
import { useEffect, useState, useRef  } from 'react';


let class1 = 'list-none lg:gap-8 lg:align-middle lg:justify-center lg:flex-row lg:flex lg:static lg:bg-transparent items-center lg:h-auto lg:w-auto hidden -z-10 duration-1000';
let classButton = 'fa-solid fa-bars text-2xl';
let navAClass = 'text-gray-600 hover:text-blue-500 duration-300 text-base font-medium h-full w-full';
function Nav() {

    const [click, setClick] = useState(true);

    const [navClass , setNavClass] = useState('static');

    

    function handleClick(){
        setClick((perv) => !perv);
        if(click === true){
            classButton = 'fa-solid fa-xmark text-2xl'
            class1 = 'items-center overflow-hidden list-none lg:gap-8 lg:align-middle lg:justify-center lg:flex-row lg:flex lg:static lg:bg-transparent lg:h-auto lg:w-auto flex flex-col justify-evenly bg-white w-full absolute top-full left-0 h-64  w-full ml-0 lg:-ml-0 -z-10 duration-1000'
        } else{
            classButton = 'fa-solid fa-bars text-2xl';
            class1 = 'items-center list-none lg:gap-8 lg:align-middle lg:justify-center lg:flex-row lg:flex lg:static lg:bg-transparent lg:h-auto lg:w-auto flex flex-col justify-evenly  bg-white absolute top-full left-0 h-64  w-0 -ml-full  lg:-ml-0 -z-10 duration-1000'
        }
    }

    


    return (
        <div className='sticky top-0 w-full z-50'>
            <nav className=' bg-white drop-shadow flex-row relative items-center flex lg:justify-between 2xl:px-72 px-5 align-middle p-6 w-full justify-between z-50'>
            <a href='#' className='text-3xl font-bold uppercase'>TechMax</a>
            <ul className={class1}>
                <li><a href='#' className={navAClass}>Home</a></li>
                <li><a href='#' className={navAClass}>About Us</a></li>
                <li><a href='#' className={navAClass}>Services</a></li>
                <li><a href='#' className={navAClass}>Projects</a></li>
                <li><a href='#' className={navAClass}>Pricing</a></li>
                <li><a href='#' className={navAClass}>FAQ</a></li>
                <li><a href='#' className={navAClass}>Contact</a></li>
            </ul>
            <div className='lg:flex gap-5 hidden'>
                <a href='#' className='text-white bg-blue-500 font-medium py-2 px-6 rounded-3xl hover:bg-blue-700 duration-300'>Log In</a>
                <a href='#' className='text-white bg-blue-500 font-medium py-2 px-6 rounded-3xl hover:bg-blue-700 duration-300'>Get Quotes</a>
            </div>
            <button className='lg:hidden block focus:outline-none' onClick={handleClick}><i className={classButton}></i></button>
            </nav> 
        </div>
    );
}

export default Nav;