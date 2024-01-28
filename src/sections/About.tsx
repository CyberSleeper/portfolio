import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function About() {  
  useEffect(() => {
    const profileElement = document.querySelector("#profile");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(profileElement, {
      scrollTrigger: {
        trigger: profileElement,
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="font-satoshi min-h-screen bg-light-section dark:bg-dark-section my-10 rounded-3xl px-24">
      <h1 className="text-4xl font-bold text-light-secondary dark:text-dark-secondary pt-10">About Me</h1>
      <div className="flex mt-6 gap-8">
        <div className="w-3/5 text-xl text-white opacity-50">
          Hello, I am Mahartha Gemilang but people usually call me Gilang. I am an undergraduate computer 
          science student from University of Indonesia. As an undergraduate student, I always seek the 
          opportunity to learn new things everyday. I like to solve new problems and learn new things from 
          it. I do web development eagerly while maintaining my competitive programming skill in my free 
          time. I have participated in numerous competitive programming contests and authored many 
          competitive programming problems as well.
        </div>
        <aside className="justify-end">
          <Image
            id="profile"
            src="/profile.jpg"
            alt="Profile"
            width={350}
            height={350}
            className="rounded-2xl"
          />
        </aside>
      </div>
    </section>
  );
}