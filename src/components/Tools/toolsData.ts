export interface ToolCategory {
  title: string;
  description: string; // Changed from 'skills: string[]'
}

export const toolData: ToolCategory[] = [
  {
    title: "Frontend Development",
    description:
      "I build dynamic and responsive user interfaces primarily with React and TypeScript. For styling, I'm proficient with TailwindCSS, and I bring pages to life with modern animation libraries like GSAP and Framer Motion. My development environment is streamlined using tools like Vite and Next.js for optimal performance and developer experience.",
  },
  {
    title: "Backend & Databases",
    description:
      "On the server-side, I specialize in building high-performance, concurrent systems with Golang and Rust. I have experience designing and consuming both RESTful and GraphQL APIs, often using frameworks like Gin. I'm comfortable managing data with PostgreSQL and leveraging Redis for caching and speed. My workflow consistently incorporates Docker for containerization.",
  },
  {
    title: "Systems & Specialized",
    description:
      "My interest extends to lower-level programming with C for performance-critical tasks and graphics programming using the Vulkan API. I also venture into machine learning with Python and PyTorch. A solid foundation in Git for version control and comfort within the Linux environment, including Bash scripting, underpins all of my development work.",
  },
];