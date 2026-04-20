import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  { name: 'React', category: 'Frontend', logo: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', category: 'Language', logo: '📘', color: '#3178c6' },
  { name: 'Node.js', category: 'Backend', logo: '🟢', color: '#68a063' },
  { name: 'Next.js', category: 'Framework', logo: '▲', color: '#ffffff' },
  { name: 'Flutter', category: 'Mobile', logo: '🦋', color: '#02569b' },
  { name: 'React Native', category: 'Mobile', logo: '📱', color: '#61dafb' },
  { name: 'Firebase', category: 'Backend', logo: '🔥', color: '#ffca28' },
  { name: 'BLoC', category: 'State', logo: '🧱', color: '#ffffff' },
  { name: 'PostgreSQL', category: 'Database', logo: '🐘', color: '#336791' },
  { name: 'MongoDB', category: 'Database', logo: '🍃', color: '#4db33d' },
  { name: 'Tailwind', category: 'Styling', logo: '🪶', color: '#38bdf8' },
  { name: 'Docker', category: 'DevOps', logo: '🐳', color: '#2496ed' },
  { name: 'AWS', category: 'Cloud', logo: '☁️', color: '#ff9900' },
  { name: 'GitHub', category: 'Version Control', logo: '🐙', color: '#ffffff' },
  { name: 'Figma', category: 'Design', logo: '🎨', color: '#f24e1e' },
  { name: 'Redis', category: 'Cache', logo: '🔴', color: '#dc382c' },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Tools & Technologies</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {stack.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: 'backOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center gap-2 p-5 rounded-2xl glass border border-white/[0.06] cursor-pointer card-glow-wrapper overflow-hidden"
              data-cursor-hover
            >
              {/* Subtle color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)` }}
              />

              <div className="text-2xl z-10">{item.logo}</div>
              <div className="text-center z-10">
                <p className="font-semibold text-sm text-white group-hover:text-white transition-colors">{item.name}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
