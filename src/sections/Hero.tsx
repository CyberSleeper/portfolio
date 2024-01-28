import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const roles = [
    'Fullstack\nDeveloper', 1000,
    'Competitive\nProgrammer', 1000,
    'Software\nEngineer', 1000,
    'Problem\nSolver', 1000,
    'Lifelong\nLearner', 1000
  ];

  return (
    <section className="min-h-screen">
      <div className='flex flex-col justify-center h-screen px-24'>
        <div className='flex flex-col'>
          <h2 className='text-6xl font-bold text-light-secondary dark:text-dark-secondary'>Mahartha Gemilang</h2>
          <h1 className='my-8 h-48 text-8xl font-bold text-light-primary dark:text-dark-primary whitespace-pre-line'>
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className=" text-xl px-6 py-4 w-fit rounded-xl bg-dark-primary dark:bg-light-primary font-bold hover:cursor-pointer hover:scale-105 active:scale-90 transition-all">
            Learn More
          </div>
        </div>
      </div>
    </section>
  );
}