import Image from "next/image"
import { useRef, useState } from "react"
import gsap from "gsap"

interface SkillProps {
  src: string
  alt: string
}

const skills: SkillProps[] = [
  {
    src: '/skills/C++_logo.png',
    alt: 'C++'
  },
  {
    src: '/skills/CSS_logo.png',
    alt: 'CSS'
  },
  {
    src: '/skills/Django_logo.png',
    alt: 'Django'
  },
  {
    src: '/skills/expressjs_logo.png',
    alt: 'ExpressJS'
  },
  {
    src: '/skills/Golang_logo.png',
    alt: 'Golang'
  },
  {
    src: '/skills/HTML_logo.png',
    alt: 'HTML'
  },
  {
    src: '/skills/Java_logo.png',
    alt: 'Java'
  },
  {
    src: '/skills/JavaScript_logo.png',
    alt: 'JavaScript'
  },
  {
    src: '/skills/Nextjs_logo.png',
    alt: 'NextJS'
  },
  {
    src: '/skills/PostgreSQL_logo.png',
    alt: 'PostgreSQL'
  },
  {
    src: '/skills/Prisma_logo.png',
    alt: 'Prisma'
  },
  {
    src: '/skills/Python_logo.png',
    alt: 'Python'
  },
  {
    src: '/skills/Tailwind_logo.png',
    alt: 'Tailwind'
  },
  {
    src: '/skills/TypeScript_logo.png',
    alt: 'TypeScript'
  }
]

export default function Skills() {
  const [skill, setSkill] = useState("")
  const [showSkill, setShowSkill] = useState(false)
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

  const handleSetSkill = (skill: string) => {
    setSkill(skill)
    setShowSkill(true)
  }

  const handleClearSkill = () => {
    setShowSkill(false)
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
      <div className="w-full px-20 overflow-hidden h-12 text-center -mb-10 mt-4">
        <h1 className={`text-4xl font-bold h-full transition-all duration-500 ${showSkill ? 'opacity-100' : 'opacity-0'}`}>{skill}</h1>
      </div>
      <div 
        className="flex w-full py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center ml-16 h-full w-max align-middle" onMouseEnter={() => handleSetSkill(skill.alt)} onMouseLeave={handleClearSkill}>
                <img src={skill.src} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center ml-16 h-full w-max align-middle" onMouseEnter={() => handleSetSkill(skill.alt)} onMouseLeave={handleClearSkill}>
                <img src={skill.src} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}