import React from 'react';

const HtmlLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
);
 const CssLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <img src="/images/icons8-css-48.png" alt="Git Logo" width={48} height={48} />
 );
 const JSLogo = (props: React.SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path fill="#f7df1e" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"/></svg>
 );
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
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
);

const TailwindCssLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    color="#38BDF8"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551
      c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24
      c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872
      c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604z
      M12,24c-5.589,0-9.348,2.44-11.276,7.319c-0.2,0.505,0.417,0.92,0.816,0.551
      c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246
      c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551
      c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24z"
    />
  </svg>
);

const TypeScriptLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <img src="/images/icons8-typescript-48.png" alt="Git Logo" width={48} height={48} />
);

const GitLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <img src="/images/icons8-git-logo-50.png" alt="Git Logo" width={48} height={48} />
);

const VercelLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="#000" viewBox="0 0 256 222"><path d="m128 0 128 221.705H0z"/></svg>
);

const NodeJsLogo = (props: React.SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"/><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"/></svg>
);

const ZustandLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62 106C86.303 106 106 86.303 106 62C106 37.697 86.303 18 62 18C37.697 18 18 37.697 18 62C18 86.303 37.697 106 62 106Z" fill="#FFA6C2"/>
    <path d="M62 124C95.137 124 122 97.137 122 64C122 30.863 95.137 4 62 4C28.863 4 2 30.863 2 64C2 97.137 28.863 124 62 124ZM62 118C91.941 118 116 93.941 116 64C116 34.059 91.941 10 62 10C32.059 10 8 34.059 8 64C8 93.941 32.059 118 62 118Z" fill="#333333"/>
  </svg>
);


export const developmentSkills = [
  { name: "Html", logo:HtmlLogo },
  { name: "CSS", logo:CssLogo },
  { name: "Javascript", logo: JSLogo },
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

export const projects = [
  {
    title: "SkeletonSymphony",
    description: "An interactive playground to design and preview custom skeleton loaders with a real-time drag-and-drop interface.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js"],
    image: "/images/skelton.png",
    aiHint: "web component",
    github: "https://github.com/02Muskan",
    live: "skeleton-symphony.vercel.app",
  },
  {
    title: "CodeSync",
    description: "A real-time code collaboration platform featuring shared editing, syntax highlighting, and live updates.",
    tags: ["React.js", "Socket.io", "Express.js", "Docker"],
    image: "/images/code.png",
    aiHint: "code editor",
    github: "https://github.com/02Muskan",
    live: "https://code-sync-eight-tau.vercel.app/",
  },
  {
    title: "CodeCanvas(Portfolio)",
    description: "A real-time code collaboration platform featuring shared editing, syntax highlighting, and live updates.",
    tags: ["React.js", "Socket.io", "Express.js", "Docker"],
    image: "/images/portfolio.png",
    aiHint: "code editor",
    github: "https://github.com/02Muskan",
    live: "hhttps://muskanagarwal.vercel.app/",
  },
  {
    title: "LearnEd",
    description: "A user-friendly e-learning platform providing digital access to a wide range of courses and educational resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/learned.png",
    aiHint: "online learning",
    github: "https://github.com/02Muskan",
    live: "02muskan.github.io/LearnEd/",
  },
  {
    title: "Quick Laugh Chrome Extension",
    description: "A lightweight Chrome extension that generates a new joke with every click, using NLP and external APIs.",
    tags: ["JavaScript", "Chrome API", "NLP"],
    image: "/images/extension.png",
    aiHint: "browser extension",
    github: "https://github.com/02Muskan",
   
  },
  {
    title: "Desi Dials",
    description: "A clean and modern e-commerce frontend for a watch store, built with a focus on user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/watchit.png",
    aiHint: "watch store",
    github: "https://github.com/02Muskan",
    live: "02muskan.github.io/WatchIT/",
  },
  {
    title: "Check List",
    description: "A dynamic and intuitive task management application for organizing daily to-do items and tracking progress.",
    tags: ["React.js", "JavaScript"],
    image: "/images/todo.png",
    aiHint: "to-do list",
    github: "https://github.com/02Muskan",
    live: "react-worklist.vercel.app/",
  },
  {
    title: "Travel Vibes",
    description: "An engaging and responsive travel agency landing page built to showcase beautiful destinations.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/images/kerala.png",
    aiHint: "travel website",
    github: "https://github.com/02Muskan",
    live: "https://02muskan.github.io/Travel-Vibes--Landing-Page/",
  },
  {
    title: "Password Generator Tool",
    description: "A secure and easy-to-use tool for creating strong, random passwords with customizable options.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/password.png",
    aiHint: "security tool",
    github: "https://github.com/02Muskan",
    live: "https://02muskan.github.io/Password-Generator/",
  },
]
