import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { developmentSkills, deploymentSkills } from "@/lib/data.tsx"

export default function About() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="grid gap-12">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-bold text-center">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80 max-w-3xl mx-auto text-center">
            <p>
              🚀 Frontend Developer with 2+ years of building fast ⚡, clean 🧼, and beautiful 🎨 web apps using React, Next.js, and Tailwind CSS. I turn 🎯 Figma designs into pixel-perfect UIs and love crafting components that are both reusable ♻️ and delightful ✨.
            </p>
            <p>
              🏢 Currently at Miles Education, shaping a powerful CRM from the ground up — building dynamic UIs 💻, integrating real-time APIs 🔄, and making dashboards 📊 that actually work (and look great doing it 😎).
            </p>
            <p>
              🧰 Stack: React ⚛️, Next.js 🚦, TypeScript 🟦, Tailwind 💅, Zustand 🧠, Node.js 🌐 <br/>
              ⚡️ Superpowers: Clean code ✍️, snappy UI 🎯, smooth API integration 🔌, and design that just feels right 🎯
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
              <CardTitle className="font-headline text-2xl text-center">Build & Deployment</CardTitle>
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
