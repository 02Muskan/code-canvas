import AnimatedButton from "../animated-button"
import { Github, Linkedin, Mail, Send } from "lucide-react"

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
    </svg>
)


export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="mt-8 flex justify-center">
          <AnimatedButton href="mailto:hello@example.com" icon={<SendIcon />}>
              Say Hello
          </AnimatedButton>
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
