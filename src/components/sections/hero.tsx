import { Eye } from "lucide-react"
import Image from "next/image"
import AnimatedButton from "../animated-button"

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="animated-gradient absolute inset-0 z-0"></div>
      <div className="container relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl">
            Jane Doe
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl lg:text-2xl">
            A passionate Frontend Developer crafting beautiful and functional web experiences. Welcome to my creative canvas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AnimatedButton href="#projects" iconType="eye">
                View My Work
            </AnimatedButton>
            <AnimatedButton href="/resume.pdf" iconType="download" download>
                Download Resume
            </AnimatedButton>
            </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg aspect-square">
            <Image
                src="https://placehold.co/800x800.png"
                alt="Illustrative avatar of Jane Doe"
                fill
                className="object-contain rounded-full"
                data-ai-hint="illustrative developer avatar"
            />
        </div>
      </div>
    </section>
  )
}
