import ThemeContext from "@/contexts/ThemeContext"
import { useContext, useState } from "react";
import Link from 'next/link'
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
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
      className="text-xl text-light-secondary dark:text-dark-text hover:cursor-pointer"
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
        relative overflow-hidden text-xl flex justify-center align-middle items-center transition-all duration-500 rounded-lg
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
  const { dark, toggle } = useContext(ThemeContext);
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const [isHovering, setIsHovering] = useState(false)

  const handleHover = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <nav className="z-20 shadow-xl font-satoshi transition-all flex fixed top-0 left-0 w-full bg-light-section dark:bg-dark-background scale-95 my-5 px-6 h-16 align-middle items-center justify-between rounded-2xl">
      <div className="flex gap-6 align-middle justify-center items-center">
        <Link onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} href='/' className={`w-32 overflow-hidden flex h-8 transition-all items-center text-2xl font-bold text-light-secondary dark:text-dark-accent whitespace-pre-line`}>
          <p>G</p>
          <div 
            className={`transition-all duration-500 overflow-hidden ${isHovering ? "w-full" : "w-0"}`}
          >
            <p>EM</p>
          </div>
          <p>ILANG</p>
        </Link>
        {/* <motion.button
          onClick={toggle}
          className="flex align-middle items-center text-xl bg-light-secondary dark:bg-dark-secondary rounded-full w-14 transition-all px-2"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="rounded-full w-4 h-4 bg-light-primary dark:bg-dark-primary transition-all ml-0 dark:ml-6" />
        </motion.button> */}
      </div>
      <div className="flex flex-row align-middle items-center gap-12">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
      </div>
      <div className="w-28">
        <ContactLink href="#contact">Contact</ContactLink>
      </div>
    </nav>
  )
}

export default Navbar