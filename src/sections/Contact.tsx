import FadeIn from "@/components/animations/fadeIn";

export default function Contact() {
  return (
    <div className="transition-all min-h-screen font-satoshi pb-24 bg-light-background dark:bg-dark-background px-24 pt-16 flex flex-col">
      <FadeIn>
        <h1 className="text-5xl font-bold text-light-secondary dark:text-dark-secondary">Contact Me!</h1>
      </FadeIn>
    </div>
  )
}