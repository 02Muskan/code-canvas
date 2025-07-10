import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
