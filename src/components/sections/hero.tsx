import Image from "next/image"
import AnimatedButton from "../animated-button"
import { Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="animated-gradient absolute inset-0 z-0"></div>
      <div className="container relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl">
            Muskan Agarwal
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl lg:text-2xl">
            A passionate Frontend Developer crafting beautiful and functional web experiences. Welcome to my creative canvas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="fill-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>View My Work</span>
              </a>
              <AnimatedButton href="/Muskan_Agarwal_Resume.pdf" iconType="download">
                  Download Resume
              </AnimatedButton>
            </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg aspect-square">
            <Image
                src="https://placehold.co/800x800.png"
                alt="Illustrative avatar of Muskan Agarwal"
                fill
                className="object-contain rounded-full"
                data-ai-hint="illustrative developer avatar"
            />
            <div className="absolute right-0 bottom-1/4 flex flex-col items-center gap-4 z-20">
              <a href="https://github.com/02Muskan" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/-muskan-agarwal/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
