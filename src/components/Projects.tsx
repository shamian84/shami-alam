import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import komet from "../asset/Komet.png";
import vehiql from "../asset/img1.png";
import urshop from "../asset/Urshop.png";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Komet Ielts Web Application",
    tags: ["Next.js", "Framer-motion", "Tidly"],
    image: komet, // Replaced with unsplash for demo
    color: "#e74e8a",
    url: "https://www.ieltsexam.in/", // <-- ADD YOUR LINK HERE
    category: "Frontend",
  },
  {
    id: 2,
    num: "02",
    title: "Vehiql Car MarketPlace",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "CLerk", "Gemini AI"],
    image: vehiql,
    color: "#8b5cf6",
    url: "https://vwhql.vercel.app/", // <-- ADD YOUR LINK HERE
    category: "Full Stack",
  },
  {
    id: 3,
    num: "03",
    title: "Cross Cloud Data Replicator",
    tags: ["Python", "Fast API", "AWS", "GCP"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    color: "#06b6d4",
    url: "https://github.com/shamian84/cross-cloud-replicator", // <-- ADD YOUR LINK HERE
    category: "Backend",
  },
  {
    id: 4,
    num: "04",
    title: "UrShop E-commerce Platform",
    tags: ["React.js", "Tailwind", "Node.js", "GSAP"],
    image: urshop,
    color: "#e74e8a",
    url: "https://ur-shop-frontend.vercel.app/", // <-- ADD YOUR LINK HERE
    category: "Full Stack",
  },
];

const categories = ["All", "Frontend", "Full Stack", "Backend"];

const TiltCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(xSpring, [-0.5, 0.5], ["-100%", "200%"]);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ["-100%", "200%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className="group card-glow-wrapper rounded-2xl"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-darkSecondary"
        data-cursor-hover
      >
        {/* Changed this div to an anchor tag linking to project.url */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video overflow-hidden block cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkSecondary via-darkSecondary/20 to-transparent" />

          {/* Glare */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.1) 0%, transparent 60%)",
              x: glareX,
              y: glareY,
            }}
          />

          {/* Number */}
          <div className="absolute top-4 left-4 font-mono text-xs text-gray-500 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {project.num}
          </div>

          {/* Hover overlay with link */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-xl glow-accent-sm">
              <ExternalLink size={20} className="text-white" />
            </div>
          </div>
        </a>

        {/* Card bottom */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            {/* Added a link to the title as well for better UX */}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 className="font-display text-xl font-semibold uppercase group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </a>
            <ArrowRight
              size={16}
              className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 -translate-y-1 transition-all mt-1 flex-shrink-0"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full glass border border-white/5 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
              Featured
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-white/[0.02] p-1.5 rounded-2xl border border-white/[0.05]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[500px]">
          {filteredProjects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
