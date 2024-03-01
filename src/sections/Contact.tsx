import FadeIn from "@/components/animations/fadeIn";

export default function Contact() {
  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-background dark:bg-dark-background px-24 pt-16 flex flex-col">
      {/* <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary">Contact Me!</h1>
      </FadeIn> */}
      <FadeIn>
        <div className="flex items-center justify-center">
          <div className="w-1/3 bg-dark-primary h-[70vh] shadow-2xl rounded-xl -mr-28 z-10 px-12 py-12 text-3xl font-bold text-dark-text">
            Contact Me!
          </div>
          <div className="w-2/3 bg-dark-darkGrey h-[80vh] shadow-2xl rounded-xl pl-36 pr-12 py-12 text-3xl font-bold text-dark-text">
            Get in Touch
          </div>
        </div>
      </FadeIn>
    </div>
  )
}