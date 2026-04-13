import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all">
      {/* Glass bar */}
      <div className="mx-4 mt-4 rounded-2xl glass border border-white/[0.08] shadow-2xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-neon-purple" />
              <div className="absolute inset-[1px] rounded-xl bg-darkSecondary flex items-center justify-center">
                <span className="font-display font-bold text-sm gradient-text">
                  SA
                </span>
              </div>
            </div>
            <span className="hidden sm:block text-sm text-gray-400 font-mono tracking-wider">
              shami.dev
            </span>
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex items-center bg-white/[0.03] rounded-full px-2 py-1 gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://tidycal.com/shamialam4823/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5 tracking-widest"
            >
              Book a Call
            </a>
            <button
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mx-4 mt-2 rounded-2xl glass border border-white/[0.08] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl font-display uppercase tracking-wider text-gray-300 hover:text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="https://tidycal.com/shamialam4823/meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-4 text-sm justify-center"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
