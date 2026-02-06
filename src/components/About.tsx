import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div ref={ref} className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Crafting Intelligent Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year Software Engineering student at{" "}
              <span className="text-foreground font-medium">FAST NUCES Karachi</span>,
              passionate about building end-to-end web applications and AI-driven systems 
              that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across{" "}
              <span className="text-primary">React.js</span>,{" "}
              <span className="text-primary">FastAPI</span>, and modern{" "}
              <span className="text-primary">ML/LLM frameworks</span>. I have hands-on 
              experience with RAG-based architectures and data-driven solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently based in <span className="text-foreground">Karachi, Pakistan</span>, 
              I'm always eager to collaborate on innovative projects that push 
              the boundaries of what's possible with technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            <StatItem number="4+" label="Years of Learning" />
            <StatItem number="5+" label="Projects Completed" />
            <StatItem number="1" label="Internship" />
            <StatItem number="2026" label="Graduation Year" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 rounded-2xl glass">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
