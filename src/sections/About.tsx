import Image from "next/image";
import React, { useRef, useState } from "react";
import FadeIn from "@/components/animations/fadeIn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hyperlink from "@/components/Hyperlink";
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
            <div style={{color: 'rgba(255, 255, 255, 0.8)'}} className="md:text-2xl text-md text-white whitespace-pre-line text-justify font-thin">
              Hello, I am <Hyperlink 
                href="https://www.linkedin.com/in/mahartha-gemilang/" 
                hexColor="#60C1E3"
              >Mahartha Gemilang</Hyperlink> but people usually call me Gilang. I&apos;m an 
              undergraduate computer science student at <Hyperlink 
                href="https://www.ui.ac.id" 
                hexColor="#FDE047"
              > University of Indonesia</Hyperlink>. As a student, I&apos;m constantly seeking opportunities 
              to learn and grow. This drive to learn fuels my passion for both web development and 
              competitive programming.
            </div>
          </FadeIn>
            <br/>
          <FadeIn>
            <div style={{color: 'rgba(255, 255, 255, 0.8)'}} className="md:text-2xl text-md text-white whitespace-pre-line text-justify font-thin">
              This passion for problem-solving translates into real-world projects. My experience with 
              competitive programming, honed through <Hyperlink
                href="https://osn.toki.id/statistik/peserta/1026"
                hexColor="#DC2626"
              >
                IA TOKI
              </Hyperlink>, has helped me develop creative solutions. 
              Additionally, my role as a lead of web development SIG at <Hyperlink
                href="https://www.ristek.cs.ui.ac.id"
                hexColor="#8b5cf6"
              >
                RISTEK Fasilkom UI
              </Hyperlink> has allowed me to create 
              impactful applications used by thousands of users.
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