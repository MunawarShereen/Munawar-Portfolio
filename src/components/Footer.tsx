import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Munawar Shereen. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary inline" /> using React & Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
