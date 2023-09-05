import React from "react";
import servicePhoto from "../images/services-details-1.jpg"

function ServiceDetailText() {
    return ( 
        <div className="w-full flex flex-col items-center md:gap-20 gap-8 sm:py-24 phone:py-16 py-8 2xl:px-72 px-5">
            <img src={servicePhoto}></img>
        </div>
     );
}

export default ServiceDetailText;