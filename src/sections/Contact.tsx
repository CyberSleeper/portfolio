import FadeIn from "@/components/animations/fadeIn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ContactItem = ({ src, alt, link }: { src: string, alt: string, link: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Link href={link} className="w-max">
      <div className="flex items-center gap-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={src} draggable='false' alt={alt} width={50} height={50} className={`shadow-2xl rounded-xl border-2 transition-all ${isHovered ? "border-dark-accent" : "border-white"}`}/>
        <p className={`text-base font-normal transition-all ${isHovered ? "text-dark-accent" : "opacity-95 border-white"}`}>{alt}</p>
      </div>
    </Link>
  )
}

const ContactInfo = () => {
  return (
    <div className="w-96 bg-dark-primary h-[70vh] shadow-2xl rounded-xl -mr-28 z-10 px-12 py-12 text-3xl font-bold text-dark-text">
      <h2>
        Contact Me!
      </h2>
      <div className="mt-12 flex flex-col gap-10">
        <ContactItem src="/contacts/mail_icon.png" alt="mahartha.gemilang@gmail.com" link="mailto:mahartha.gemilang@gmail.com" />
        <ContactItem src="/contacts/instagram_icon.png" alt="@mahartha.gemilang" link="https://www.instagram.com/mahartha.gemilang/" />
        <ContactItem src="/contacts/linkedin_icon.png" alt="mahartha-gemilang" link="https://www.linkedin.com/in/mahartha-gemilang" />
        <ContactItem src="/contacts/github_icon.png" alt="CyberSleeper" link="https://github.com/CyberSleeper" />
      </div>
    </div>
  )
}

const ContactForm = () => {
  return (
    <div className="w-2/3 bg-dark-darkGrey h-[80vh] shadow-2xl rounded-xl pl-36 pr-12 py-12 text-dark-text">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <form className="mt-12 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-bl-xl border-b-2 border-gray-300 focus:outline-none focus:border-dark-accent bg-dark-darkGrey text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-bl-xl border-b-2 border-gray-300 focus:outline-none focus:border-dark-accent bg-dark-darkGrey text-white"
        />
        <textarea
          placeholder="Hello Gilang!"
          className="w-full px-4 py-2 rounded-bl-xl border-l-2 border-r-2 rounded-tr-xl border-b-2 border-t-2 border-gray-300 focus:outline-none focus:border-dark-accent bg-dark-darkGrey text-white"
          rows={6}
        ></textarea>
        <button
          type="submit"
          className="hover:brightness-75 transition-all w-full px-6 py-3 rounded-lg bg-dark-accent text-white font-bold text-lg hover:bg-dark-accent-hover focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-background dark:bg-dark-background px-24 pt-16 flex flex-col">
      {/* <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary">Contact Me!</h1>
      </FadeIn> */}
      <FadeIn>
        <div className="flex items-center justify-center md:flex-row flex-col-reverse">
          <ContactInfo />
          <ContactForm />
        </div>
      </FadeIn>
    </div>
  )
}