import { useState } from "react";
import Link from "next/link";

export default function Hyperlink({ children, href, hexColor }: { children: string, href: string, hexColor: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative inline-block"
    >
      <span className={`${isHovered ? "opacity-100" : "opacity-80"} transition-all font-bold`} style={{ color: hexColor }}>
        {children}
      </span>
      <span className={`rounded-full absolute h-1 bottom-0 left-0 transition-width duration-200 ease-in-out ${isHovered ? "w-full" : "w-0"}`} style={{ backgroundColor: hexColor }}/>
    </Link>
  );
}