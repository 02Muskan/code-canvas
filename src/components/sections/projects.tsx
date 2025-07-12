"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from 'react'
import Image from "next/image"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from '@/lib/utils'

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="group w-full h-72 [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={cn(
          "relative h-full w-full rounded-lg shadow-xl transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            data-ai-hint={project.aiHint}
          />
          <div className="absolute inset-0 rounded-lg flex flex-col justify-end p-6 ">
            <h3 className="font-headline text-2xl font-bold dark:text-[#cbbaed] text-purple-600 ">{project.title}</h3>
            <p className="dark:text-white/80 text-purple-700 font-semibold flex items-center gap-2 mt-2">
              View Details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-secondary text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center p-6 space-y-4">
              <h3 className="font-headline text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
              <div className="flex justify-center gap-2 pt-4">
                {project.github && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary">
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </Button>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold">Featured Work</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A selection of my frontend work. Click or hover on a card to see details.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
