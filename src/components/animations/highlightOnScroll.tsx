import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HighlightOnScroll({ children, ...props }: { children: React.ReactNode }) {
  const el = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: "center bottom",
        end: "center top",
        toggleActions: "restart none none reverse",
        scrub: 1,
      },
      defaults: {
        duration: 1,
      }
    });

    tl.from(el.current, {
      ease: "power1.in",
      opacity: 0.2,
      scale: 0.95,
      y: 60,
    });
    tl.to(el.current, {
      
    });
    tl.to(el.current, {
      ease: "power1.out",
      opacity: 0.2,
      scale: 0.95,
      y: -60,
    });
  });

  return (
    <div ref={el} {...props}>
      {children}
    </div>
  );
}