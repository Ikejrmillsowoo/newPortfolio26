import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layout, Terminal, Globe, Cpu } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, TypeScript, Tailwind CSS, HTML5, CSS3",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, Express, REST APIs, PostgreSQL",
  },
  {
    icon: Layout,
    title: "UI/UX",
    description: "Figma, Responsive Design, Accessibility, Animations",
  },
  {
    icon: Terminal,
    title: "DevOps",
    description: "Git, GitHub, CI/CD, Docker basics, Linux",
  },
  {
    icon: Globe,
    title: "Web",
    description: "SEO, Performance, PWA, Web Standards",
  },
  {
    icon: Cpu,
    title: "Other",
    description: "Python, Data Structures, Problem Solving, Agile",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg md:text-xl">02.</span>
            Skills & Tools
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-sm"
            >
              <skill.icon className="text-primary mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
