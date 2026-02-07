import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg md:text-xl">01.</span>
            About Me
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Isaac, a junior software engineer with a passion for building 
              digital experiences that live on the internet. My journey into web development 
              started when I decided to try customizing a website template — turns out hacking 
              together code taught me a lot about HTML & CSS!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fast-forward to today, I've had the privilege of working on various personal 
              and collaborative projects. My main focus these days is building accessible, 
              inclusive products and digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Tailwind CSS", "Python"].map(
                (tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary text-xs">▹</span>
                    {tech}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl bg-surface border-2 border-glow overflow-hidden relative z-10 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="w-full h-full flex items-center justify-center text-6xl font-black text-gradient">
                  I
                </div>
              </div>
              <div className="absolute top-4 left-4 w-56 h-56 md:w-64 md:h-64 rounded-xl border-2 border-primary/40 z-0 group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
