import { GiMoonOrbit } from "react-icons/gi";
import { PiAsteriskDuotone, PiStarFourFill } from "react-icons/pi";

export default function Revolution() {
  return (
    <div className="relative rounded-full border-2 w-20 h-20 flex items-center align-middle justify-center border-solid border-white border-opacity-40">
      <div className="text-black z-20 absolute flex w-max h-max min-w-24 min-h-24 items-center animate-spin-slow-10">
        <PiStarFourFill color="#FDE68A" className="w-5 h-5 animate-spin-reverse-slow-5"/>
      </div>
      <div className="text-black z-20 absolute flex w-max h-max min-w-36 min-h-36 justify-center animate-spin-reverse-slow-15">
        <GiMoonOrbit color="white" className="w-5 h-5 animate-spin-slow-15"/>
      </div>
      <div className="text-black absolute flex w-max h-max min-w-32 min-h-32 border-2 rounded-full border-solid border-white border-opacity-40"/>
      <PiAsteriskDuotone color="#60C1E3" className=" text-black w-16 h-16 animate-spin-slow-25" />
    </div>
  )
}