import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A full-stack task management app with drag-and-drop functionality, real-time updates, and team collaboration features.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "WeatherNow",
    description:
      "A weather dashboard that displays real-time weather data with beautiful visualizations and 7-day forecasts.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "DevBlog",
    description:
      "A minimalist blogging platform for developers with markdown support, syntax highlighting, and dark mode.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "CryptoTracker",
    description:
      "Real-time cryptocurrency price tracker with interactive charts and portfolio management.",
    tech: ["React", "Chart.js", "CoinGecko API"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg md:text-xl">03.</span>
            Things I've Built
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className={`relative grid md:grid-cols-12 items-center gap-4 ${
                  i % 2 !== 0 ? "md:text-right" : ""
                }`}
              >
                {/* Project image placeholder */}
                <div
                  className={`md:col-span-7 rounded-xl bg-surface border border-border overflow-hidden aspect-video relative group ${
                    i % 2 !== 0 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <Folder className="text-primary/40" size={64} />
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    i % 2 !== 0
                      ? "md:left-0 md:text-left"
                      : "md:right-0 md:text-right"
                  } z-10`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-xl mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-4 ${
                      i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${
                      i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <a href={project.github} className="text-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-center text-xl font-semibold mb-8 text-foreground">
          Other Noteworthy Projects
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + 0.1 * i }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={36} />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
