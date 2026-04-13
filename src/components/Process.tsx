import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, MessageSquare, Layers, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: MessageSquare,
    title: 'Discovery & Scope',
    desc: 'Deep dive into your requirements, architecture planning, and feature mapping to ensure perfect alignment.',
    color: '#e74e8a',
  },
  {
    id: '02',
    icon: Layers,
    title: 'Build & Iterate',
    desc: 'Developing scalable backend infrastructure alongside beautiful, responsive frontends. Weekly syncs included.',
    color: '#8b5cf6',
  },
  {
    id: '03',
    icon: Rocket,
    title: 'Deploy & Scale',
    desc: 'Production-ready cloud deployment, performance auditing, and ongoing maintenance for seamless scaling.',
    color: '#06b6d4',
  },
];

const ProcessCard = ({ step, index }: { step: any; index: number }) => {
  const Icon = step.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sr = useSpring(x, { stiffness: 400, damping: 40 });
  const sy = useSpring(y, { stiffness: 400, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
      className="relative group h-full"
      onMouseMove={handleMouseMove}
    >
      <div className="glass border border-white/[0.08] rounded-3xl p-8 h-full flex flex-col relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 bg-[#0a0a0f]/80">
        
        {/* Glow effect tracking mouse */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${sr}px ${sy}px, ${step.color}15, transparent 80%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
            >
              <Icon size={24} style={{ color: step.color }} />
            </div>
            <span className="font-display text-5xl font-bold text-white/[0.03] group-hover:text-white/10 transition-colors duration-500">
              {step.id}
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
              style={{ backgroundImage: `linear-gradient(to right, #fff, ${step.color})` }}>
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm flex-1">{step.desc}</p>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0"
          style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
};

const Process: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/20 blur-[150px] pointer-events-none opacity-30 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Workflow</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              How I <span className="gradient-text">Build Software</span>
            </h2>
          </div>
          <p className="text-gray-400 md:text-right max-w-sm text-sm">
            A battle-tested methodology designed for speed, scale, and transparency from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 relative">
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-px bg-white/5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full origin-left bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            />
          </div>

          {steps.map((step, i) => (
            <ProcessCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* Dynamic CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] p-[1px] group"
        >
          {/* Shimmering border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e74e8a] via-[#8b5cf6] to-[#06b6d4] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0a0a0f] border border-white/5">
            {/* Inner radiant glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e74e8a]/10 via-transparent to-[#06b6d4]/10 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Ready to Execute?</h3>
              <p className="text-gray-400 text-lg">Let's turn your concept into a scalable reality.</p>
            </div>
            
            <a 
              href="https://tidycal.com/shamialam4823/meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 btn-primary flex-shrink-0 flex items-center gap-3 px-8 py-4 text-base group"
            >
              Book a Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
