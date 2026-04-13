import React from 'react';

const items = [
  { text: '15+ Projects Built', icon: '✦' },
  { text: 'MERN Stack Developer', icon: '◆' },
  { text: '8+ Freelance Clients', icon: '✦' },
  { text: 'Internship Experienced', icon: '◆' },
  { text: '5 ★ Client Ratings', icon: '✦' },
  { text: 'Based in Mumbai', icon: '◆' },
  { text: 'Open to Opportunities', icon: '✦' },
  { text: 'React · Node · MongoDB', icon: '◆' },
];

const StatsTicker: React.FC = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="py-6 overflow-hidden relative border-y border-white/[0.06]" style={{ background: 'linear-gradient(90deg, transparent, rgba(231,78,138,0.03), transparent)' }}>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #07070a, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #07070a, transparent)' }} />

      {/* Row 1 — left */}
      <div className="flex mb-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {repeated.map((item, i) => (
            <div key={i} className="flex items-center gap-3 mx-6">
              <span className="text-accent text-xs">{item.icon}</span>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right (reverse) */}
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused]" style={{ animationDuration: '35s' }}>
          {repeated.map((item, i) => (
            <div key={i} className="flex items-center gap-3 mx-6">
              <span className="text-neon-purple text-xs">{item.icon}</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsTicker;
