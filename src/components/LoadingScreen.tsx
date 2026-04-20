import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mini floating particle for loading screen
const LoadParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.5], x, y }}
    transition={{ duration: 2.2, delay, ease: 'easeOut', repeat: Infinity, repeatDelay: 1.5 }}
    className="absolute w-1.5 h-1.5 rounded-full"
    style={{
      top: '50%',
      left: '50%',
      background: Math.random() > 0.5 ? '#e74e8a' : '#8b5cf6',
      boxShadow: `0 0 8px ${Math.random() > 0.5 ? '#e74e8a' : '#8b5cf6'}`,
    }}
  />
);

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  delay: i * 0.08,
  x: Math.cos((i / 16) * Math.PI * 2) * (80 + Math.random() * 60),
  y: Math.sin((i / 16) * Math.PI * 2) * (80 + Math.random() * 60),
}));

// Individual character animation
const SplitChar = ({ char, index }: { char: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.06, ease: [0.2, 0.65, 0.3, 0.9] }}
    className="inline-block"
  >
    {char === ' ' ? '\u00A0' : char}
  </motion.span>
);

const LoadingScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');
  const name = 'Shami Alam';

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setPhase('done');
          setTimeout(onDone, 900);
          return 100;
        }
        const step = p < 60 ? 2.5 : p < 85 ? 1.2 : 0.6;
        return Math.min(100, p + step);
      });
    }, 28);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#07070a' }}
        >
          {/* Animated background gradient orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(231,78,138,0.2) 0%, transparent 70%)' }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Particle burst */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {PARTICLES.map((p) => (
              <LoadParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
            ))}
          </div>

          {/* Logo icon with spinning ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-10"
          >
            <div
              className="w-24 h-24 rounded-[28px] flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(231,78,138,0.12) 0%, rgba(139,92,246,0.08) 100%)',
                border: '1.5px solid rgba(231,78,138,0.3)',
                boxShadow: '0 0 40px rgba(231,78,138,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)', transform: 'skewX(-15deg)' }}
              />
              <span
                className="font-display font-bold text-3xl relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #fff 30%, #e74e8a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SA
              </span>
            </div>

            {/* Spinning outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-[36px]"
              style={{
                border: '1.5px solid transparent',
                borderTopColor: '#e74e8a',
                borderRightColor: 'rgba(231,78,138,0.3)',
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-[42px]"
              style={{
                border: '1px solid transparent',
                borderTopColor: 'rgba(139,92,246,0.4)',
                borderLeftColor: 'rgba(139,92,246,0.15)',
              }}
            />
          </motion.div>

          {/* Name with split-char animation */}
          <div className="text-center mb-4 overflow-hidden">
            <h1 className="font-display text-3xl font-bold uppercase tracking-[0.25em] text-white">
              {name.split('').map((char, i) => (
                <SplitChar key={i} char={char} index={i} />
              ))}
            </h1>
          </div>

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center gap-2 mb-14 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(231,78,138,0.08)', border: '1px solid rgba(231,78,138,0.2)' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
            />
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
              Software Developer · Mumbai
            </span>
          </motion.div>

          {/* Progress section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-72 space-y-3"
          >
            {/* Progress bar */}
            <div className="h-[2px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #8b5cf6, #e74e8a)',
                  boxShadow: '0 0 12px rgba(231,78,138,0.7)',
                  transition: 'width 0.1s linear',
                }}
              >
                {/* Traveling glow */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
                />
              </motion.div>
            </div>

            <div className="flex items-center justify-between">
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-gray-600 font-mono tracking-wider"
              >
                Initializing portfolio...
              </motion.p>
              <p className="text-xs font-mono font-bold" style={{ color: '#e74e8a' }}>
                {Math.round(progress)}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
