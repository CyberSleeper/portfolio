import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({ children, delay = 0, ...props }: { children: React.ReactNode, delay?: number }) {
  const el = useRef(null);

  useGSAP(() => {
    gsap.from(el.current, {
      scrollTrigger: {
        trigger: el.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      delay: delay,
    });
  })

  return (
    <div className="md:w-auto w-full" ref={el} {...props}>
      {children}
    </div>
  );
}