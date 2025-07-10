import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { developmentSkills, deploymentSkills } from "@/lib/data.tsx"

const aboutMeText = "From my first 'Hello World' to architecting complex, responsive web applications, my journey in frontend development has been one of perpetual learning and passion. I thrive on turning intricate problems into elegant, user-friendly interfaces. My expertise lies in the React ecosystem, but I'm always eager to explore new technologies to find the best tool for the job. When I'm not coding, you can find me exploring hiking trails or experimenting with new recipes."

export default function About() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="grid gap-12">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-bold text-center">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80 max-w-3xl mx-auto text-center">
            <p>
              {aboutMeText}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6">
                {developmentSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-center w-24">
                    <skill.logo className="h-12 w-12" />
                    <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Deployment & More</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6">
                {deploymentSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-center w-24">
                    <skill.logo className="h-12 w-12" />
                    <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
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
