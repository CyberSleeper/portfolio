import Image from "next/image";
import React from "react";
import { useRef } from "react";

const HoverCraft = ({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) => {
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseMove = (e: any) => {
    const ref = imageRef.current;
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
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-2xl aspect-square transition-transform duration-100"
      style={{
        transformStyle: 'preserve-3d',
        transform: `${ isHovered || 'perspective(500px) rotateY(0deg) rotateX(0deg)'} `,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    />
  )
}

export default HoverCraft;