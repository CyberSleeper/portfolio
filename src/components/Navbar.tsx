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
      <div>
        {children}
        <div className={`w-full h-1 rounded-full bg-dark-section dark:bg-light-section transition-all ${ isHovered ? "scale-100" : "scale-0" }`}/>
      </div>
    </div>
  )
}

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <nav className="z-20 shadow-xl font-satoshi transition-all flex fixed top-0 left-0 w-full z-10 bg-light-section dark:bg-dark-background scale-95 my-5 px-6 py-4 align-middle justify-between rounded-2xl">
      <div className="flex gap-6">
        <Link href='/' className="text-2xl font-bold text-light-secondary dark:text-dark-accent whitespace-pre-line">
          GILANG
        </Link>
        <motion.button
          onClick={toggle}
          className="flex align-middle items-center text-xl bg-light-secondary dark:bg-dark-secondary rounded-full w-14 transition-all px-2"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="rounded-full w-4 h-4 bg-light-primary dark:bg-dark-primary transition-all ml-0 dark:ml-6" />
        </motion.button>
      </div>
      <div className="flex flex-row align-middle items-center gap-16">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </div>
      <div className="flex flex-row align-middle items-center gap-8">
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar