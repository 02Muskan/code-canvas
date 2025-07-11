import React from 'react';

const ReactLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextJsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M48 0C21.49 0 0 21.49 0 48C0 74.51 21.49 96 48 96C74.51 96 96 74.51 96 48C96 21.49 74.51 0 48 0ZM69.54 75.44L44.27 49.34V75.44H34.11V20.56H44.27V45.74L67.43 20.56H78.47L51.05 47.92L80.59 75.44H69.54Z" fill="black"/>
  </svg>
);

const TailwindCssLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.54516 11.2319C9.54516 10.1557 10.3705 9.33032 11.4467 9.33032C12.5229 9.33032 13.3482 10.1557 13.3482 11.2319C13.3482 12.3081 12.5229 13.1334 11.4467 13.1334C10.3705 13.1334 9.54516 12.3081 9.54516 11.2319Z" fill="#38BDF8"/>
    <path d="M18.6518 11.2319C18.6518 10.1557 19.4771 9.33032 20.5533 9.33032C21.6295 9.33032 22.4548 10.1557 22.4548 11.2319C22.4548 12.3081 21.6295 13.1334 20.5533 13.1334C19.4771 13.1334 18.6518 12.3081 18.6518 11.2319Z" fill="#38BDF8"/>
    <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM14.2483 22.6697C11.5163 22.6697 9.27415 20.4275 9.27415 17.6956C9.27415 16.0351 10.1337 14.5416 11.4467 13.682C12.7258 14.6734 14.5884 15.3621 16.5492 15.3621C18.4758 15.3621 20.3042 14.7075 21.5833 13.7505C22.8624 14.6099 23.6877 16.0351 23.6877 17.6956C23.7219 20.4275 21.4801 22.6697 18.7481 22.6697C17.7562 22.6697 16.8282 22.4646 16.0028 22.0594C15.1775 22.4646 14.2495 22.6697 14.2483 22.6697Z" fill="#38BDF8"/>
  </svg>
);

const TypeScriptLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H48V48H0V0Z" fill="#007ACC"/>
    <path d="M25.332 25.0721V48H48V25.0721H25.332Z" fill="white"/>
    <path d="M25.332 25.0721H48V48H25.332V25.0721Z" stroke="#007ACC" strokeWidth="0.1"/>
    <path d="M28.464 30.684H33.3V35.424H35.808V30.684H40.644V28.356H28.464V30.684ZM31.428 42.6H37.836V44.82H28.464V42.492L34.188 36.3H31.644L28.464 39.156V40.236H34.452V38.124L31.428 42.6Z" fill="#007ACC"/>
    <path d="M11.284 3.42401V22.252H21.556V19.468H14.116V13.564H20.788V10.78H14.116V5.98001H21.628V3.42401H11.284Z" fill="white"/>
  </svg>
);

const GitLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8718 10.5977C22.6621 10.378 22.3991 10.2117 22.103 10.1132L13.887 7.11299L10.8872 15.3283C10.7887 15.6244 10.6224 15.8874 10.4027 16.0971L12.5649 18.2592C12.8258 18.0628 13.1378 17.9351 13.4735 17.9011C14.4716 17.7923 15.344 18.5739 15.344 19.5255C15.344 20.4771 14.4716 21.2587 13.4735 21.1499C12.4754 21.041 11.6601 20.1832 11.6601 19.2316C11.6601 18.8959 11.7877 18.5839 11.9842 18.323L9.90291 16.2417C9.64201 16.4382 9.33003 16.5658 9.00194 16.5998L9.00194 9.47452C9.00194 9.14643 8.87428 8.83445 8.65463 8.57355L4.42645 4.34537C4.00454 3.92345 3.32896 3.92345 2.90704 4.34537L1.12822 6.12419C0.706304 6.54611 0.706304 7.22169 1.12822 7.64361L8.35639 14.8718C8.57604 15.0914 8.83902 15.2577 9.13511 15.3562L12.1353 23.5716C12.2338 23.8677 12.3999 24.1305 12.6198 24.3402L12.6196 24.3404C13.0415 24.7623 13.7171 24.7623 14.139 24.3404L22.8718 15.6076C23.2937 15.1857 23.2937 14.5101 22.8718 14.0882L14.0883 5.30472C13.6664 4.8828 12.9908 4.8828 12.5689 5.30472L10.7901 7.08354C10.3681 7.50546 10.3681 8.18104 10.7901 8.60296L17.7408 15.5536C18.1627 15.9755 18.8383 15.9755 19.2602 15.5536L22.8718 11.942C23.0815 11.7323 23.1995 11.4582 23.1923 11.1738C23.1852 10.8893 23.0536 10.6225 22.8441 10.4258L22.8718 10.5977Z" fill="#F05033"/>
    <path d="M9.00194 16.5998C8.00385 16.7086 7.18856 15.8508 7.18856 14.9C7.18856 13.9484 8.00385 13.0905 9.00194 13.1994C10.0001 13.3082 10.8153 14.166 10.8153 15.1176C10.8153 16.0692 10.0001 16.8508 9.00194 16.5998Z" fill="#F05033"/>
  </svg>
);

const VercelLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="#000" viewBox="0 0 256 222"><path d="m128 0 128 221.705H0z"/></svg>
);

const NodeJsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.773 13.142l-2.022-1.167L5.006 14.84V9.16l4.745-2.74L14.496 9.16v5.68l-2.723-1.698zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7.902 14.938l-2.47-1.426v-2.85l2.47-1.425 2.47 1.425v2.85l-2.47 1.426zm-3.805-2.196l-2.099-1.211-2.099 1.211V13.53l2.099 1.211 2.099-1.211v1.212zm-8.195 0l-2.47-1.426v-2.85l2.47-1.425 2.47 1.425v2.85l-2.47 1.426z" fill="#339933"/>
  </svg>
);

const ZustandLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62 106C86.303 106 106 86.303 106 62C106 37.697 86.303 18 62 18C37.697 18 18 37.697 18 62C18 86.303 37.697 106 62 106Z" fill="#FFA6C2"/>
    <path d="M62 124C95.137 124 122 97.137 122 64C122 30.863 95.137 4 62 4C28.863 4 2 30.863 2 64C2 97.137 28.863 124 62 124ZM62 118C91.941 118 116 93.941 116 64C116 34.059 91.941 10 62 10C32.059 10 8 34.059 8 64C8 93.941 32.059 118 62 118Z" fill="#333333"/>
  </svg>
);


export const developmentSkills = [
  { name: "React", logo: ReactLogo },
  { name: "Next.js", logo: NextJsLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
  { name: "Tailwind CSS", logo: TailwindCssLogo },
  { name: "Node.js", logo: NodeJsLogo },
  { name: "Zustand", logo: ZustandLogo },
];

export const deploymentSkills = [
  { name: "Vercel", logo: VercelLogo },
  { name: "Git", logo: GitLogo },
];

// A list of your projects
export const projects = [
  {
    title: "SkeletonSymphony",
    description: "An interactive playground to design and preview custom skeleton loaders with a real-time drag-and-drop interface.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js"],
    image: "/SkeletonSymphony.png",
    aiHint: "web component",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "CodeSync",
    description: "A real-time code collaboration platform featuring shared editing, syntax highlighting, and live updates.",
    tags: ["React.js", "Socket.io", "Express.js", "Docker"],
    image: "/CodeSync.png",
    aiHint: "code editor",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "LearnEd",
    description: "A user-friendly e-learning platform providing digital access to a wide range of courses and educational resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/LearnEd.png",
    aiHint: "online learning",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "Quick Laugh Chrome Extension",
    description: "A lightweight Chrome extension that generates a new joke with every click, using NLP and external APIs.",
    tags: ["JavaScript", "Chrome API", "NLP"],
    image: "/QuickLaugh.png",
    aiHint: "browser extension",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "Desi Dials",
    description: "A clean and modern e-commerce frontend for a watch store, built with a focus on user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/DesiDials.png",
    aiHint: "watch store",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "Check List",
    description: "A dynamic and intuitive task management application for organizing daily to-do items and tracking progress.",
    tags: ["React.js", "JavaScript"],
    image: "/CheckList.png",
    aiHint: "to-do list",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "Travel Vibes",
    description: "An engaging and responsive travel agency landing page built to showcase beautiful destinations.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/TravelVibes.png",
    aiHint: "travel website",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
  {
    title: "Password Generator Tool",
    description: "A secure and easy-to-use tool for creating strong, random passwords with customizable options.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/PasswordGenerator.png",
    aiHint: "security tool",
    github: "https://github.com/02Muskan",
    live: "https://example.com",
  },
]
