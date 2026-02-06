import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div ref={ref} className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <ContactItem
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value="munawarshereen456@gmail.com"
              href="mailto:munawarshereen456@gmail.com"
            />
            <ContactItem
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              value="+92-310-2537066"
              href="tel:+923102537066"
            />
            <ContactItem
              icon={<MapPin className="w-5 h-5" />}
              label="Location"
              value="Karachi, Pakistan"
            />

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/MunawarShereen"
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/munawar-shereen-680779302/"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="p-3 rounded-xl glass text-primary group-hover:glow transition-all">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl glass hover:glow hover:text-primary transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
