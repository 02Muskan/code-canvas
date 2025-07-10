import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="animated-gradient absolute inset-0 z-0"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <h1 className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl">
          Jane Doe
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl lg:text-2xl">
          A passionate Frontend Developer crafting beautiful and functional web experiences. Welcome to my creative canvas.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#projects">
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
