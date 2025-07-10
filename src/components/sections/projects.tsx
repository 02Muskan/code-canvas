"use client"

import { useState } from "react"
import Image from "next/image"
import { projects, allTech } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold">Creations Vista</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A selection of my work.
          </p>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-2">
          {allTech.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <CardHeader>
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.github && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
