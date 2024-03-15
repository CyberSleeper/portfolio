import Image from "next/image";
import React from "react";
import { useRef } from "react";

const HoverCraft = ({children}: {children: React.ReactNode}) => {
  const hoverRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseMove = (e: any) => {
    const ref = hoverRef.current;
    if (!ref) return;
    const el = ref as HTMLElement;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    console.log(x, y)
    el.style.transform = `perspective(500px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div
      ref={hoverRef}
      style={{
        transformStyle: 'preserve-3d',
        transform: `${ isHovered || 'perspective(500px) rotateY(0deg) rotateX(0deg)'} `,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="transition-transform duration-100"
    >
      {children}
    </div>
  )
}

export default HoverCraft;