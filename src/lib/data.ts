import { Codepen, Database, GitBranch, Shield, Wind } from "lucide-react"

// A list of your skills with icons
export const skills = [
  { name: "React", icon: Codepen },
  { name: "Next.js", icon: Codepen },
  { name: "TypeScript", icon: Shield },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "SQL", icon: Database },
]

// A list of your projects
export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website built with Next.js, Stripe, and Tailwind CSS.",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    image: "https://placehold.co/600x400.png",
    aiHint: "online store",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates using Firebase.",
    tags: ["React", "Firebase", "TypeScript"],
    image: "https://placehold.co/600x400.png",
    aiHint: "to-do list",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects. You're looking at it!",
    tags: ["Next.js", "Tailwind CSS", "GenAI"],
    image: "https://placehold.co/600x400.png",
    aiHint: "developer portfolio",
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Weather App",
    description: "A simple weather application that fetches data from a third-party API.",
    tags: ["React", "API"],
    image: "https://placehold.co/600x400.png",
    aiHint: "weather forecast",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Blogging Platform",
    description: "A content-management system for creating and publishing articles.",
    tags: ["Next.js", "TypeScript", "SQL"],
    image: "https://placehold.co/600x400.png",
    aiHint: "writing blog",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Data Dashboard",
    description: "A data visualization dashboard built with D3.js and React.",
    tags: ["React", "D3.js", "API"],
    image: "https://placehold.co/600x400.png",
    aiHint: "analytics chart",
    github: "https://github.com",
    live: "https://example.com",
  },
]

// Create a set of all unique technologies, including "All"
export const allTech = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))]
