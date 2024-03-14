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
        <p className={`md:flex hidden text-base font-normal transition-all ${isHovered ? "text-dark-accent" : "opacity-95 border-white"}`}>{alt}</p>
      </div>
    </Link>
  )
}

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:w-96 w-full bg-dark-primary h-max shadow-2xl rounded-xl md:-mr-28 z-10 md:px-12 py-12 text-3xl font-bold text-dark-text">
      <h2>
        Contact Me!
      </h2>
      <div className="mt-12 flex md:flex-col flex-row md:gap-10 gap-3">
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
    <div className="w-full bg-dark-darkGrey h-[80vh] shadow-2xl rounded-xl md:pl-36 pl-8 md:pr-12 pr-8 py-12 text-dark-text">
      <h2 className="md:text-3xl text-3xl font-bold">Get in Touch</h2>
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
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-background dark:bg-dark-background md:px-24 px-8 pt-16 flex flex-col">
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