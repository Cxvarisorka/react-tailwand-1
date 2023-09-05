import React from "react";

function FooterLast() {
    return ( 
        <div className="text-white bg-gray-900 w-full flex lg:flex-row flex-col justify-between items-center gap-5 sm:py-8 py-5 2xl:px-72 px-5 miniphone:text-start text-center">
            <p className="miniphone:text-phsm text-sm">&copy; 2022 Techmax - All Rights Reserved.</p>
            <div className="flex flex-row gap-3 miniphone:text-phsm text-sm">
                <a href="#" className="hover:text-blue-500 duration-500">Terms & Conditions</a>
                <hr className="border h-5 border-white"></hr>
                <a href="#" className="hover:text-blue-500 duration-500">Privacy Policy</a>
            </div>
        </div>
     );
}

export default FooterLast