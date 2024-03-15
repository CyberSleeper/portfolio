import ThemeContext from "@/contexts/ThemeContext"
import { useContext, useState } from "react";
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useEffect } from "react";
gsap.registerPlugin(ScrollToPlugin)

const NavLink = ({
  children,
  href
}: {
  children: React.ReactNode
  href: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="text-xl text-dark-text hover:cursor-pointer"
      onClick={() => {
        gsap.to(window, { duration: 2, scrollTo: { y: href, offsetY: 150 }, ease: "circ.out"});
      }}
    >
      <div className="flex flex-col justify-between">
        <div className={`w-full h-0.5 rounded-full bg-dark-section bg-white transition-all duration-300 ${ isHovered ? "scale-100" : "scale-0" }`}/>
        <div className={`transition-all duration-500 my-0.5 ${isHovered ? 'tracking-widest text-dark-accent font-bold' : ''}`}>
          {children}
        </div>
        <div className={`w-full h-0.5 rounded-full bg-dark-section bg-white transition-all duration-300 ${ isHovered ? "scale-100" : "scale-0" }`}/>
      </div>
    </div>
  )
}

const ContactLink = ({
  children,
  href
}: {
  children: React.ReactNode
  href: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className={`
        before:absolute before:h-[500%] before:-z-10 before:transition-all before:duration-300
        relative overflow-hidden text-xl flex justify-center align-middle items-center transition-all duration-500 rounded-lg px-3
        after:absolute after:inset-0.5 after:bg-dark-background after:rounded-lg after:-z-10
        ${isHovered ? 
          "before:w-[30%] py-2 before:bg-gradient-to-r from-dark-primary via-dark-accent to-dark-text before:animate-spin-slow-5 cursor-pointer tracking-widest font-bold text-dark-accent"
        :
          "before:w-[50%] py-1 before:bg-white text-dark-text"
        }
      `}
      onClick={() => {
        gsap.to(window, { duration: 2, scrollTo: { y: href, offsetY: 150 }, ease: "circ.out"});
      }}
    >
      {children}
    </div>
  )
}

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleHover = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className={`${isLoaded ? 'top-0 delay-[5000ms]' : '-top-24'} duration-[2000ms] z-50 shadow-xl font-satoshi transition-all flex fixed left-0 w-full bg-dark-background scale-95 my-5 px-6 h-16 align-middle items-center justify-between rounded-2xl`}>
      <div className="flex gap-6 align-middle justify-center items-center">
        <Link onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} href='/' className={`w-32 overflow-hidden flex h-8 transition-all items-center text-2xl font-bold text-dark-accent whitespace-pre-line`}>
          <p>G</p>
          <div 
            className={`transition-all duration-500 overflow-hidden ${isHovering ? "w-full" : "w-0"}`}
          >
            <p>EM</p>
          </div>
          <p>ILANG</p>
        </Link>
      </div>
      <div className="flex-row align-middle items-center gap-12 hidden md:flex">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
      </div>
      <div className="w-28 hidden md:flex items-center justify-center">
        <ContactLink href="#contact">Contact</ContactLink>
      </div>
      <div className="md:hidden md:scale-0">
        <button
          className="text-2xl text-dark-text hover:cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
    {/* {isMobileMenuOpen && ( */}
      <div className={`z-50 md:hidden fixed w-full h-full bg-black bg-opacity-90 transition-all duration-700 flex items-center justify-center ${isMobileMenuOpen ? "top-0" : "-top-full"}`} onClick={handleMobileMenuToggle}>
        <div className="flex flex-col gap-8 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <div className="border-2 border-white px-3 rounded-md">
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    {/* )} */}
    </>
  );
}

export default Navbar