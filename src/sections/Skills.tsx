import Image from "next/image"
import { useRef, useState } from "react"
import gsap from "gsap"

const skills = [
  '/skills/C++_logo.png',
  '/skills/CSS_logo.png',
  '/skills/Django_logo.png',
  '/skills/expressjs_logo.png',
  '/skills/Golang_logo.png',
  '/skills/HTML_logo.png',
  '/skills/Java_logo.png',
  '/skills/JavaScript_logo.png',
  '/skills/Nextjs_logo.png',
  '/skills/PostgreSQL_logo.png',
  '/skills/Prisma_logo.png',
  '/skills/Python_logo.png',
  '/skills/Tailwind_logo.png',
  '/skills/TypeScript_logo.png',
]

export default function Skills() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorDiv = useRef(null)
  const baseDiv = useRef(null)
  
  const handleMouseMove = (e: any) => {
    const refCursor = cursorDiv.current
    const refBase = baseDiv.current
    if (!refCursor || !refBase) return
    const elCursor = refCursor as HTMLElement
    const elBase = refBase as HTMLElement

    const { left, top, width, height } = elBase.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(elBase);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);
    const cursorRadius = parseFloat(window.getComputedStyle(elCursor).width)/2;
    
    const x = e.clientX - left - paddingLeft - cursorRadius;
    const y = e.clientY - top - cursorRadius;
    const xTo = gsap.quickTo(elCursor, "x", {duration: 0.2, ease: "power3.out"})
    const yTo = gsap.quickTo(elCursor, "y", {duration: 0.2, ease: "power3.out"})
    console.log("client:", e.clientX, e.clientY)
    console.log(x, y)
    xTo(x)
    yTo(y)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    gsap.to(cursorDiv.current, { opacity: 1, duration: 0.2 })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    gsap.to(cursorDiv.current, { opacity: 0, duration: 0.2 })
  }

  return (
    <div 
      ref={baseDiv}
      onMouseMove={handleMouseMove}
      className="bg-light-secondary dark:bg-dark-secondary px-20 overflow-hidden relative hover:cursor-none"
    >
      <div
        ref={cursorDiv}
        className="opacity-0 absolute w-16 h-16 bg-black rounded-full pointer-events-none z-10 mix-blend-difference"
        style={{filter: "invert(1)"}}
      />
      <div 
        className="flex w-full py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center ml-16 h-full w-max align-middle">
                <img src={skill} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center ml-16 h-full w-max align-middle">
                <img src={skill} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}