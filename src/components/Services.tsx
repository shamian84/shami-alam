import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    tagline: "Code That Converts",
    desc: "High-performance React & Next.js applications from landing pages to complex SaaS platforms.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600",
    color: "#e74e8a",
  },
  {
    id: "02",
    title: "API & Backend",
    tagline: "Robust & Scalable Logic",
    desc: "Rock-solid RESTful and GraphQL APIs built with Node.js, PostgreSQL and Redis at scale.",
    tools: ["Node.js", "GraphQL", "PostgreSQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    color: "#8b5cf6",
  },
  {
    id: "03",
    title: "UI / UX Design",
    tagline: "Interfaces That Delight",
    desc: "Pixel-perfect design systems and Figma prototypes that users genuinely love to interact with.",
    tools: ["Figma", "Framer", "Prototyping", "Wireframing"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    color: "#06b6d4",
  },
  {
    id: "04",
    title: "DevOps & Deployment",
    tagline: "Ship Fast, Stay Stable",
    desc: "CI/CD pipelines, Docker containerization, and AWS/Vercel deployments with zero-downtime releases.",
    tools: ["Docker", "AWS", "GitHub Actions", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600",
    color: "#f59e0b",
  },
  {
    id: "05",
    title: "Mobile Development",
    tagline: "Native Feel, Cross-Platform",
    desc: "High-performance mobile applications built with Flutter and React Native for iOS and Android.",
    tools: ["React Native", "Flutter", "iOS", "Android"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
    color: "#10b981",
  },
  {
    id: "06",
    title: "AI & Automation",
    tagline: "Smart Business Solutions",
    desc: "Integrating powerful AI models and automating workflows to increase business efficiency and cut costs.",
    tools: ["OpenAI", "Custom LLMs", "n8n", "Zapier"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    color: "#ef4444",
  },
  {
    id: "07",
    title: "Third-Party Integrations",
    tagline: "Connecting Your Ecosystem",
    desc: "Seamlessly integrate WhatsApp APIs, Razorpay payment gateways, and other crucial SaaS platforms into your product.",
    tools: ["WhatsApp API", "Razorpay", "Stripe", "Twilio"],
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600",
    color: "#f97316",
  },
  {
    id: "08",
    title: "3D Animation & WebGL",
    tagline: "Immersive Experiences",
    desc: "Interactive and stunning 3D web experiences using modern libraries to captivate your audience.",
    tools: ["Three.js", "React Three Fiber", "Spline", "WebGL"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    color: "#ec4899",
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  // Smooth Mouse Tracking Setup
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half the width (288px/2 = 144) and height (176px/2 = 88) to center the image on cursor
      cursorX.set(e.clientX - 144);
      cursorY.set(e.clientY - 88);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section
      id="services"
      className="py-28 px-6 relative bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Marquee header */}
        <div className="overflow-hidden mb-20 pb-10 border-b border-white/[0.06]">
          <div
            className="flex whitespace-nowrap animate-marquee"
            style={{ animationDuration: "20s" }}
          >
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="flex items-center gap-6 mx-8">
                <span className="font-display text-3xl md:text-5xl font-bold text-white/10 uppercase tracking-widest">
                  SERVICES
                </span>
                <span className="text-purple-500 text-2xl">✦</span>
                <span className="font-display text-3xl md:text-5xl font-bold text-white/5 uppercase tracking-widest italic">
                  what I offer
                </span>
                <span className="text-cyan-500 text-2xl">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services list */}
        <div
          className="divide-y divide-white/[0.06]"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/[0.02]"
              onMouseEnter={() => setActive(i)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 relative z-10 px-4">
                {/* Number */}
                <span className="font-mono text-sm text-gray-500 w-16 flex-shrink-0 transition-colors group-hover:text-white">
                  {service.id}
                </span>

                {/* Title */}
                <motion.h3
                  className="flex-1 font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase transition-colors duration-300"
                  style={{
                    color:
                      active === i ? service.color : "rgba(255,255,255,0.7)",
                  }}
                >
                  {service.title}
                </motion.h3>

                {/* Tagline – desktop only */}
                <p className="hidden md:block text-gray-400 text-lg max-w-xs group-hover:text-gray-200 transition-colors font-light">
                  {service.tagline}
                </p>

                {/* Arrow */}
                <div className="ml-0 md:ml-12 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black text-white/50">
                  <ArrowRight
                    size={20}
                    className="group-hover:-rotate-45 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Desc & Tools – expands on hover */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 md:ml-16 mt-4 overflow-hidden"
                  >
                    <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
                      {service.desc}
                    </p>

                    {/* New Feature: Tech Stack Pills */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-gray-300"
                          style={{ borderColor: `${service.color}40` }}
                        >
                          {tool}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Global Hover Image (Tracks Mouse) */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
            className="fixed top-0 left-0 w-72 h-44 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none z-50 border border-white/20 backdrop-blur-sm hidden lg:block"
          >
            <img
              src={services[active].image}
              alt={services[active].title}
              className="w-full h-full object-cover"
            />
            {/* Color Overlay Overlay */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{ backgroundColor: services[active].color }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
