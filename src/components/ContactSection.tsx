import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Ikejrmillsowoo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/isaac-mills-owoo/", label: "LinkedIn" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:ikejrmillsowoo@gmail.com", label: "Email" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>
          <a
            href="mailto:ikejrmillsowoo@gmail.com"
            className="inline-block px-10 py-4 border-2 border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-colors glow-sm hover:glow-md"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Isaac Mills-Owoo 2026
        </p>
      </div>
    </footer>
  );
};

export { ContactSection, Footer };
