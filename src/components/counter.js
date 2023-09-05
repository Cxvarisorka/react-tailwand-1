import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function InfoNum() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full flex bg-gradient-to-r from-violet-500 to-blue-500 sm:flex-row flex-col  justify-between sm:h-80 items-center sm:gap-5 gap-10 sm:py-24 phone:py-16 py-8 2xl:px-72 px-5">
        <div className="flex flex-col gap-5 text-center text-white justify-center items-center">
          <p className="font-bold sm:text-5xl text-4xl">
            {counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}+
          </p>
          <p className="sm:font-bold sm:text-lg text-base">Years Of Experience</p>
        </div>
        <div className="flex flex-col gap-5 text-center text-white justify-center items-center">
          <p className="font-bold sm:text-5xl text-4xl">
            {counterOn && (
              <CountUp start={0} end={500} duration={2} delay={0} />
            )}
            +
          </p>
          <p className="sm:font-bold sm:text-lg text-base">Complete Projects</p>
        </div>
        <div className="flex flex-col gap-5 text-center text-white justify-center items-center">
          <p className="font-bold sm:text-5xl text-4xl">
            {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
            +
          </p>
          <p className="sm:font-bold sm:text-lg text-base">Employees</p>
        </div>
        <div className="flex flex-col gap-5 text-center text-white justify-center items-center">
          <p className="font-bold sm:text-5xl text-4xl">
            {counterOn && <CountUp start={0} end={300} duration={2} delay={0} /> }
            +</p>
          <p className="sm:font-bold sm:text-lg text-base">5 Star Rating</p>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default InfoNum;
