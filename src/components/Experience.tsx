import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Development Intern",
    company: "Elevvo Tech",
    location: "Remote",
    period: "Sep 2025 – Oct 2025",
    description: [
      "Built a Job Tracker App using React.js, Context API, and TailwindCSS",
      "Created a collapsible sidebar with smooth animations and responsive layouts",
      "Developed a validated contact form with real-time input handling",
    ],
  },
];

const education = [
  {
    title: "BS (Software Engineering)",
    institution: "FAST NUCES, Karachi",
    period: "2022 – 2026",
    certification: "Certificate: React Development 2023",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div ref={ref} className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Experience & Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xl font-semibold mb-8"
            >
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </motion.h3>

            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-0 timeline-line h-full" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8"
                >
                  <div className="absolute left-0 top-2 timeline-dot" />
                  
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xl font-semibold mb-8"
            >
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </motion.h3>

            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-0 timeline-line h-full" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8"
                >
                  <div className="absolute left-0 top-2 timeline-dot" />
                  
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{edu.title}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  
                  {edu.certification && (
                    <p className="text-sm text-muted-foreground glass inline-block px-3 py-1 rounded-full">
                      {edu.certification}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
