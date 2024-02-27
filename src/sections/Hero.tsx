import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)

export default function Hero() {
  const roles = [
    'Fullstack\nDeveloper', 1000,
    'Competitive\nProgrammer', 1000,
    'Software\nEngineer', 1000,
    'Problem\nSolver', 1000,
    'Lifelong\nLearner', 1000
  ];

  return (
    <section className="font-satoshi min-h-screen">
      <div className='flex flex-col justify-center h-screen px-24'>
        <div className='flex flex-col'>
          <h2 className='text-6xl font-bold outline-dark-text outline-4'>Mahartha Gemilang</h2>
          <h1 style={{ WebkitTextFillColor: 'transparent' }} className='bg-gradient-to-br from-dark-accent to-dark-primary mb-8 h-52 text-8xl font-bold whitespace-pre-line bg-clip-text'>
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex gap-4">
            <div
              className="text-xl px-6 py-4 w-fit rounded-xl text-black bg-dark-primary hover:bg-dark-accent font-bold hover:cursor-pointer hover:scale-105 active:scale-90 transition-all"
              onClick={() => {
                gsap.to(window, { duration: 2, scrollTo: { y: "#about", offsetY: 150 }, ease: "circ.out"});
              }}
            >
              Learn More
            </div>
            <Link
              href='https://drive.google.com/file/d/1Wl3PkP8tsxTe8lMkubiJAin6k3URnJ7p/view?usp=sharing'
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="text-xl px-6 py-4 w-fit rounded-xl text-almond opacity-95 border-almond border-2 bg-transparent hover:text-dark-accent  font-bold hover:cursor-pointer hover:scale-105 active:scale-90 transition-all"
              >
                View Resume
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}