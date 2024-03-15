import Image from "next/image";
import React, { useRef } from "react";
import FadeIn from "@/components/animations/fadeIn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const el = useRef(null);
  const curved = useRef(null);

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

  useGSAP(() => {
    gsap.from(curved.current, {
      scrollTrigger: {
        trigger: curved.current,
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
      borderTopLeftRadius: "100% 0%",
      borderTopRightRadius: "100% 0%",
      marginTop: "0",
      // ease: "none",
    });
  })

  return (
    <div ref={curved} className="-mt-48 transition-all font-satoshi pb-24 bg-dark-background md:px-24 px-12 pt-16 flex flex-col items-center"
      style={{
        left: "-3%",
        borderTopLeftRadius: "100% 50%",
        borderTopRightRadius: "100% 50%",
      }}
    >
      <FadeIn>
        <h1 className="md:text-5xl flex justify-center text-3xl font-bold text-dark-text">About Me</h1>
      </FadeIn>
      <div className="flex mt-10 md:gap-16 gap-4 md:flex-row flex-col-reverse items-center">
        <div className="md:w-3/5 w-full">
          <FadeIn>
            <div className="md:text-2xl text-md text-white opacity-50 whitespace-pre-line text-justify">
              Hello, I am Mahartha Gemilang but people usually call me Gilang. I am an undergraduate computer 
              science student at University of Indonesia. As an undergraduate student, I always seek the 
              opportunity to learn new things everyday.
            </div>
          </FadeIn>
            <br/>
          <FadeIn>
            <div className="md:text-2xl text-md text-white opacity-50 whitespace-pre-line text-justify">
              I like to solve new problems and learn new things from 
              it. I do web development eagerly while maintaining my competitive programming skill in my free 
              time. I have participated in numerous competitive programming contests and authored many 
              competitive programming problems as well.
            </div>
          </FadeIn>
        </div>
        <aside className="flex justify-end relative md:w-2/5 w-1/2 h-fit">
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
    </div>
  );
}