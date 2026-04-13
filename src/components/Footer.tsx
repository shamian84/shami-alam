import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const handleCopyEmail = () =>
    navigator.clipboard.writeText("shami.alam@example.com");

  return (
    <footer className="border-t border-white/[0.06] px-6 pt-16 pb-10 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-neon-purple" />
                <div className="absolute inset-[1px] rounded-xl bg-darkSecondary flex items-center justify-center">
                  <span className="font-display font-bold text-sm gradient-text">
                    SA
                  </span>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-white">Shami Alam</p>
                <p className="text-xs text-gray-500 font-mono">
                  Software Developer · Mumbai
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing your vision to every screen. Specialized in crafting
              seamless web and mobile experiences that solve real problems.
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">
                Navigation
              </p>
              {["About", "Services", "Projects", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-white transition-colors mb-2.5"
                >
                  {l}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">
                Services
              </p>
              {["Web Dev", "Backend", "UI Design", "DevOps", "Mobile Apps"].map(
                (l) => (
                  <p key={l} className="text-sm text-gray-500 mb-2.5">
                    {l}
                  </p>
                ),
              )}
            </div>
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">
                Connect
              </p>
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/shamian84",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/shami-alam/",
                },

                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/shami_9.4/",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-2.5"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Shami Alam. All rights reserved.</p>
          <button
            onClick={handleCopyEmail}
            className="hover:text-gray-400 transition-colors font-mono tracking-wide"
            data-cursor-hover
          >
            shamialam4823@example.com
          </button>
          <p className="font-mono">✦ Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
