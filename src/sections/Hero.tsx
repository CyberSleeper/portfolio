import React from "react";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import FadeIn from "@/components/animations/fadeIn";
gsap.registerPlugin(ScrollToPlugin)

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  const roles = [
    'Fullstack\nDeveloper', 1000,
    'Competitive\nProgrammer', 1000,
    'Software\nEngineer', 1000,
    'Problem\nSolver', 1000,
    'Lifelong\nLearner', 1000
  ];

  return (
    <section className="font-satoshi min-h-screen">
      <div className='flex flex-col justify-center h-screen md:px-24 px-8'>
        <div className='flex flex-col'>
          <FadeIn duration={2} ease="bounce.out" delay={1}>
            <h2 className='tracking-tight md:text-6xl text-3xl outline-dark-text outline-4'>Mahartha Gemilang</h2>
          </FadeIn>
          <h1 style={{ WebkitTextFillColor: 'transparent' }} className={`transition-all delay-[3000ms] duration-[1000ms] tracking-tight mb-8 md:h-52 h-32 md:text-8xl text-6xl font-bold whitespace-pre-line bg-clip-text bg-gradient-to-br from-dark-accent to-dark-primary ${isLoaded ? '' : 'opacity-0'}`}>
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex md:flex-row flex-col md:w-auto gap-4">
            <FadeIn delay={4} duration={0.5}>
              <div
                className="text-center md:text-xl text-lg md:px-6 px-5 md:py-4 py-3 md:w-fit rounded-xl text-white bg-dark-primary hover:bg-dark-accent font-bold hover:cursor-pointer hover:scale-105 active:scale-90 transition-all"
                onClick={() => {
                  gsap.to(window, { duration: 2, scrollTo: { y: "#about", offsetY: 150 }, ease: "circ.out"});
                }}
              >
                Learn More
              </div>
            </FadeIn>
            <FadeIn delay={4.5} duration={0.5}>
              <Link
                href='https://ristek.link/MaharthaGemilang_Resume'
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="text-center md:text-xl text-lg md:px-6 px-5 md:py-4 py-3 md:w-fit rounded-xl text-almond opacity-95 border-almond border-2 bg-transparent hover:text-dark-accent font-bold hover:cursor-pointer hover:scale-105 active:scale-90 transition-all"
                >
                  View Resume
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}