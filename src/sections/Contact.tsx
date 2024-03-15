import FadeIn from "@/components/animations/fadeIn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { ImSpinner9 } from "react-icons/im";
import HoverCraft from "@/components/animations/hoverCraft";

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
    <div className="z-20 flex flex-col md:items-start items-center md:w-96 w-full bg-dark-primary h-max shadow-2xl rounded-xl md:-mr-28 md:px-12 py-12 text-3xl font-bold text-dark-text">
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

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [showToast, setShowToast] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>("")
  const [toastStatus, setToastStatus] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email && message) {
      setIsLoading(true)
      const serviceId = "default_service";
      const templateId = "template_mzrslqd";
      const publicKey = "nxb5Ffrs9zY0zgHFI";
      emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then((result) => {
        setToastMessage("Message sent successfully!")
        setToastStatus("success")
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        setName("")
        setEmail("")
        setMessage("")
        setIsLoading(false)
      }, (error) => {
        setToastMessage("Failed to send message!")
        setToastStatus("error")
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        setIsLoading(false)
      })
    }
  }

  return (
    <div className="z-10 w-full bg-dark-darkGrey min-h-max shadow-2xl rounded-xl md:pl-36 pl-5 md:pr-12 pr-5 py-12 text-dark-text">
      <h2 className="md:text-3xl md:text-left text-center text-4xl font-bold">Get in Touch</h2>
      <form className="md:mt-12 mt-4 flex gap-3 flex-col group" onSubmit={handleSubmit}>
        <label>
          <input
            id="id_name"
            name="user_name"
            required
            type="text"
            placeholder="Name"
            className="peer transition-colors duration-300 w-full px-4 py-2 rounded-bl-xl border-b-2 border-gray-300 focus:border-dark-accent focus:invalid:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none bg-dark-darkGrey text-white"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span className="transition-all duration-300 mt-2 opacity-0 text-sm text-red-500 peer-[:focus:invalid]:opacity-100 peer-[&:not(:placeholder-shown):not(:focus):invalid]:opacity-100">
            Please fill out this field
          </span>
        </label>
        <label>
          <input
            id="id_email"
            name="user_email"
            type="email"
            required
            placeholder="Email"
            className="peer transition-colors duration-300 w-full px-4 py-2 rounded-bl-xl border-b-2 border-gray-300 focus:border-dark-accent focus:invalid:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none bg-dark-darkGrey text-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span className="transition-all duration-300 mt-2 opacity-0 text-sm text-red-500 peer-[:focus:invalid]:opacity-100 peer-[&:not(:placeholder-shown):not(:focus):invalid]:opacity-100">
            Please enter a valid email address
          </span>
        </label>
        <label>
          <textarea
            id="id_message"
            name="message"
            required
            placeholder="Hello Gilang!"
            className="peer transition-colors duration-300 w-full px-4 py-2 rounded-bl-xl border-l-2 border-r-2 rounded-tr-xl border-b-2 border-t-2 border-gray-300 focus:border-dark-accent focus:invalid:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none bg-dark-darkGrey text-white"
            rows={6}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <span className="transition-all duration-300 mt-2 opacity-0 text-sm text-red-500 peer-[:focus:invalid]:opacity-100 peer-[&:not(:placeholder-shown):not(:focus):invalid]:opacity-100">
            Please fill out this field
          </span>
        </label>
        <button
          disabled={isLoading}
          type="submit"
          className={`hover:brightness-90 active:brightness-50 duration-150 disabled:opacity-50 transition-all w-full px-6 py-3 rounded-lg bg-dark-accent text-white font-bold text-lg hover:bg-dark-accent-hover focus:outline-none`}
        >
          {isLoading ? 
            <div className="flex justify-center items-center">
              <ImSpinner9 className="animate-spin"/>
            </div>
          :
            <p>Send Message</p>
          }
        </button>
      </form>

      <div className={`flex justify-center items-center align-middle fixed right-8 ${showToast ? 'bottom-8' : '-bottom-16'} transition-all`}>
        <div className={`flex justify-center items-center align-middle relative bg-slate-950 z-30 font-bold text-lg px-6 duration-300 py-4 text-dark-text rounded-xl shadow-2xl
          ${showToast ? 'after:scale-x-0 after:duration-[2900ms] delay-100' : 'after:delay-200 after:scale-x-100'} after:transition-transform ${toastStatus==='success' ? 'after:bg-green-400' : 'after:bg-red-400'} after:-z-20 after:w-full after:h-full after:absolute after:rounded-lg after:transform
          before:bg-dark-background before:brightness-50 before:-z-10 before:w-full before:inset-2 before-h-full before:absolute before:left-0 before:rounded-2xl before:transform before:transition-all
        `}>
          {toastMessage}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-dark-background md:px-24 px-8 pt-16 flex flex-col">
      <div className="flex items-center justify-center md:flex-row flex-col-reverse">
        <div className="z-20 md:w-96 w-full">
          <FadeIn>
            <HoverCraft>
              <ContactInfo />
            </HoverCraft>
          </FadeIn>
        </div>
        <ContactForm />
      </div>
      
    </div>
  )
}