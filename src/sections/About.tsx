import Image from "next/image";
import React, { useRef } from "react";
import FadeIn from "@/components/gsap/fadeIn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const el = useRef(null);

  useGSAP(() => {
    gsap.from(el.current, {
      scrollTrigger: {
        trigger: el.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
      },
      borderRadius: "100%",
      delay: 1,
      scale: 1.1,
      opacity: 0,
      y: -50,
      duration: 1,
    });
  
  })

  return (
    <section className="font-satoshi min-h-screen bg-light-section dark:bg-dark-section my-10 rounded-3xl px-24">
      <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary pt-10">About Me</h1>
      </FadeIn>
      <div className="flex mt-10 gap-16">
        <div className="w-3/5">
          <FadeIn>
            <div className="text-2xl text-white opacity-50 whitespace-pre-line">
              Hello, I am Mahartha Gemilang but people usually call me Gilang. I am an undergraduate computer 
              science student from University of Indonesia. As an undergraduate student, I always seek the 
              opportunity to learn new things everyday.
            </div>
          </FadeIn>
            <br/>
          <FadeIn>
            <div className="text-2xl text-white opacity-50 whitespace-pre-line">
              I like to solve new problems and learn new things from 
              it. I do web development eagerly while maintaining my competitive programming skill in my free 
              time. I have participated in numerous competitive programming contests and authored many 
              competitive programming problems as well.
            </div>
          </FadeIn>
        </div>
        <aside className="flex justify-end relative w-2/5 h-fit">
          <Image
            ref={el}
            id="profile"
            src="/profile.jpg"
            alt="Profile"
            width={500}
            height={500}
            className="rounded-2xl aspect-square"
          />
        </aside>
      </div>
    </section>
  );
}