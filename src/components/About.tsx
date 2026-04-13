import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code2, Rocket } from "lucide-react";
import my_video from "../asset/my_video.mp4";

const timeline = [
  {
    title: "Web Developer",
    company: "The Works (Mumbai)",
    years: "Feb 2026 – Present",
    current: true,
    description:
      "Building scalable web application for clients using modern technologies.",
    icon: Code2,
  },
  {
    title: "Freelance Web Developer",
    company: "Self — Multiple Clients",
    years: "Aug 2025 – Present",
    current: true,
    description:
      "Built 8+ client projects including e-commerce stores, portfolio sites, and SaaS dashboards.",
    icon: Rocket,
  },
  {
    title: "MERN Stack Intern",
    company: "Social Seller Technologies (Raipur)",
    years: "Sept 2024 – Dec 2024",
    current: false,
    description:
      "Worked on full-stack React + Node.js applications. Integrated REST APIs, MongoDB, and deployed on cloud infra.",
    icon: Briefcase,
  },
];

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Python",
  "REST APIs",
  "Git",
  "Tailwind CSS",
  "Next.js",
  "Flutter",
  "React Native"
];

const stats = [
  { label: "Freelance Projects", value: "8+" },
  { label: "Satisfied Clients", value: "8+" },
  { label: "Stack", value: "Full Stack" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-3 text-center">Who I Am</p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16 leading-tight"
        >
          Building Real Things,{" "}
          <span className="gradient-text-pink">Learning Every Day</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-darkSecondary" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, rgba(231,78,138,0.2), transparent 60%), radial-gradient(circle at 70% 80%, rgba(139,92,246,0.15), transparent 60%)",
                }}
              />
              <video
                src={my_video}
                autoPlay
                loop
                muted
                playsInline
                /* Removed mix-blend-luminosity and increased opacity to 100 (optional) */
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent" />

              {/* Fresher badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-6 glass border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="text-2xl font-display font-bold gradient-text-pink">
                  2025
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Full Stack Ready
                </div>
              </motion.div>

              {/* Available badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-6 glass border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400 inline-block"
                  />
                  <span className="text-xs text-gray-300 uppercase tracking-wider">
                    Available to Hire
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-accent/20 animate-rotate-slow" />
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-neon-purple/20 animate-rotate-slow"
              style={{ animationDirection: "reverse" }}
            />
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                I'm <span className="gradient-text-pink">Shami Alam</span>,
                <br />a Software Developer who{" "}
                <span className="text-gray-400 italic text-3xl md:text-4xl">
                  ships real products & Scalable System.
                </span>
              </h3>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I'm a passionate full-stack developer from Mumbai with
                internship experience and multiple freelance projects under my
                belt. I love turning ideas into working products — fast, clean,
                and scalable.
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: "spring" }}
                    className="tech-chip"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 mb-8 flex-wrap">
                {stats.map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-accent pl-4">
                    <div className="text-2xl font-display font-bold text-white">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl glass border border-white/[0.06] p-6 space-y-0"
            >
              <p className="section-label mb-5">Experience</p>
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative flex gap-5 pb-6 last:pb-0 group"
                  >
                    {/* Timeline line */}
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[13px] top-7 bottom-0 w-px bg-white/10" />
                    )}

                    {/* Dot */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${
                          item.current
                            ? "border-accent bg-accent/10"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        <Icon
                          size={12}
                          className={
                            item.current ? "text-accent" : "text-gray-500"
                          }
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h4 className="font-semibold text-white text-sm">
                          {item.title}
                        </h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            item.current
                              ? "bg-accent/10 text-accent border border-accent/20"
                              : "glass text-gray-400 border border-white/5"
                          }`}
                        >
                          {item.current ? "● Now" : item.years}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1.5">
                        <Calendar size={10} />
                        {item.company} · {item.years}
                      </p>
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
