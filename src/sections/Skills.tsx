import Image from "next/image"
import { useState } from "react"

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
  const [progress, setProgress] = useState(0)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="bg-light-secondary dark:bg-dark-secondary w-max flex relative">
      <div className="w-full h-full absolute">
      </div>
      <div 
        className="flex w-max py-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite overflow-hidden`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex-1 flex justify-center items-center ml-16">
                <Image src={skill} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
        <div className={`flex ${isHovering && 'pause'} animate-marquee-infinite overflow-hidden`}>
          {
            skills.map((skill, index) => (
              <div key={index} className="flex-1 flex justify-center items-center ml-16">
                <Image src={skill} alt="skill" width={100} height={100} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}