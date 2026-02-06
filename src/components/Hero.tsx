import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ThreeScene from "./ThreeScene";
import profileImage from "@/assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      
      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Munawar Shereen"
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 glow"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
            >
              AI Engineer & Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Munawar Shereen</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Final-year Software Engineering student specializing in Full Stack Development, 
              Machine Learning, and AI-driven systems. Building intelligent solutions 
              that bridge technology and real-world impact.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <SocialLink href="https://github.com/MunawarShereen" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/munawar-shereen-680779302/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:munawarshereen456@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  // Check if the link is a mailto link
  const isEmail = href.startsWith("mailto:");

  return (
    <motion.a
      href={href}
      // target="_blank" is removed for email links to prevent the empty tab issue
      target={isEmail ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="p-3 rounded-full glass hover:glow hover:text-primary transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}