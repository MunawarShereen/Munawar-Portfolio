import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "C"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "TailwindCSS", "HTML", "CSS", "Streamlit"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "Scikit-learn", "Model Optimization"],
  },
  {
    title: "AI & RAG",
    skills: ["LangChain", "RAG", "Pinecone", "FAISS", "Prompt Engineering"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Technical Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
