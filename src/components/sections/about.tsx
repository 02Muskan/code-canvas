import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/lib/data"

const aboutMeText = "From my first 'Hello World' to architecting complex, responsive web applications, my journey in frontend development has been one of perpetual learning and passion. I thrive on turning intricate problems into elegant, user-friendly interfaces. My expertise lies in the React ecosystem, but I'm always eager to explore new technologies to find the best tool for the job. When I'm not coding, you can find me exploring hiking trails or experimenting with new recipes."

export default function About() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-3 space-y-8">
          <h2 className="font-headline text-4xl font-bold">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              {aboutMeText}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>My Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 rounded-md bg-secondary p-2">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
