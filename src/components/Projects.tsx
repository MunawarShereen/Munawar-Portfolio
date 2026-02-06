import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PakCounsel AI",
    subtitle: "Domain-Specific Legal Consultant (FYP)",
    description:
      "Engineered a RAG-based AI consultant using LangChain and FastAPI. Implemented vector semantic search using Pinecone to retrieve verified legal statutes. Features a responsive React frontend with voice integration and multi-lingual support.",
    tags: ["LangChain", "FastAPI", "React", "Pinecone", "RAG"],
    featured: true,
  },
  {
    title: "Movie Recommendation System",
    subtitle: "Content-Based Recommender",
    description:
      "Engineered a content-based recommender using Scikit-Learn on 5,000 movies. Optimized data preprocessing with Pandas and NLTK for semantic analysis. Integrated a React.js frontend with serialized Pickle models for real-time inference.",
    tags: ["Scikit-Learn", "React.js", "Pandas", "NLTK", "ML"],
    featured: false,
  },
  {
    title: "WhatsApp Chat Analyzer",
    subtitle: "Full-Stack Analytics Platform",
    description:
      "Built a full-stack analyzer using FastAPI and React.js for real-time insights via REST APIs. Implemented analytics with Pandas to extract message counts, media, timelines, and word clouds. Features an interactive dashboard with Recharts.",
    tags: ["FastAPI", "React.js", "Pandas", "Recharts"],
    featured: false,
  },
  {
    title: "YouTube-Mind AI",
    subtitle: "Video Q&A Application",
    description:
      "Developed a YouTube Q&A app using LangChain, HuggingFace, and FAISS. Built a React + FastAPI interface for real-time, context-aware Q&A on video content.",
    tags: ["LangChain", "HuggingFace", "FAISS", "React", "FastAPI"],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`group relative ${
                project.featured ? "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center" : ""
              }`}
            >
              {/* Project Content */}
              <div className={project.featured ? "lg:order-2" : ""}>
                {project.featured && (
                  <span className="inline-block text-xs font-semibold text-primary mb-3 tracking-wider uppercase">
                    Featured Project
                  </span>
                )}
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-primary/80 font-medium mb-4">
                  {project.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://github.com/MunawarShereen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Decorative element for featured */}
              {project.featured && (
                <motion.div
                  className="hidden lg:block lg:order-1 relative h-80"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-2xl glass border border-primary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-primary/50" />
                      <div className="w-3 h-3 rounded-full bg-accent/60" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold gradient-text opacity-20">
                        AI
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Divider for non-featured */}
              {!project.featured && index < projects.length - 1 && (
                <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
