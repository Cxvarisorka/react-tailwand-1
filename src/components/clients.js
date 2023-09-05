import React from "react";
import client1 from '../images/client-4.jpg'
import client2 from '../images/client-5.jpg'
import client3 from '../images/client-6.jpg'
import client4 from '../images/client-7.jpg'
import client5 from '../images/client-1.jpg'
import client6 from '../images/client-2.jpg'

function Clients() {
    return ( 
        <div className="w-full flex justify-center items-center gap-20 sm:py-24 py-16 2xl:px-72 px-5 bg-slate-200 overflow-hidden">
            <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-5">
                <div className="flex w-full lg:justify-between justify-center items-center phone:flex-row flex-col gap-5">
                    <div>
                    <img src={client1} className="phone:w-48 w-full"></img>
                    </div>
                    <div>
                    <img src={client2} className="phone:w-48 w-full"></img>
                    </div>
                    <div>
                    <img src={client3} className="phone:w-48 w-full"></img>
                    </div>
                </div>
                <div className="flex w-full lg:justify-between justify-center items-center phone:flex-row flex-col gap-5">
                    <div>
                    <img src={client4} className="phone:w-48 w-full"></img>
                    </div>
                    <div>
                    <img src={client5} className="phone:w-48 w-full"></img>
                    </div>
                    <div>
                    <img src={client6} className="phone:w-48 w-full"></img>
                    </div>
                </div>
               
            </div>
        </div>
     );
}

export default Clients;