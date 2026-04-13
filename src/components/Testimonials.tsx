import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Best developer I've worked with! Fast, professional, and the product looks incredible. Shami delivered ahead of schedule and the quality was exceptional.",
    name: 'Mr. Sagar',
    role: 'Founder',
    avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png',
    stars: 5,
  },
  {
    quote: "Shami completely transformed our platform. The attention to detail, communication, and technical skill is second to none. Would hire again in a heartbeat.",
    name: 'Mr. Arvind',
    role: '',
    avatar: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg?semt=ais_hybrid&w=740&q=80',
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Big ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">What Clients Say</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Client <span className="gradient-text">Reviews</span>
          </h2>
        </div>

        {/* Large quote block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center max-w-4xl mx-auto"
        >
          <div className="relative inline-block">
            <span className="text-[8rem] md:text-[12rem] leading-none font-display text-accent/15 absolute -top-8 -left-4 select-none">"</span>
            <h3 className="relative z-10 text-2xl md:text-4xl font-display font-medium leading-snug pt-12 text-white/90">
              {testimonials[0].quote}
            </h3>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-12 h-12 rounded-full object-cover border-2 border-accent/30" />
            <div className="text-left">
              <p className="font-semibold text-white text-sm">{testimonials[0].name}</p>
              <p className="text-xs text-gray-400">{testimonials[0].role}</p>
            </div>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-accent text-accent" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Second testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass border border-white/[0.07] rounded-3xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{testimonials[1].quote}"</p>
          <div className="flex items-center gap-3">
            <img src={testimonials[1].avatar} alt={testimonials[1].name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
            <div>
              <p className="font-semibold text-white text-sm">{testimonials[1].name}</p>
              <p className="text-xs text-gray-500">{testimonials[1].role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
