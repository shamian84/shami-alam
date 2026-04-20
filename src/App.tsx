import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navigation from './components/Navigation';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WhatsAppWidget from './components/WhatsAppWidget';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

const StatsTicker = lazy(() => import('./components/StatsTicker'));
const TechStack = lazy(() => import('./components/TechStack'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// ── Custom trailing cursor ──────────────────────────────────────────────────
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const circle = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px), (pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [data-cursor-hover]')) {
        circleRef.current?.classList.add('hovered');
      } else {
        circleRef.current?.classList.remove('hovered');
      }
    };
    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.1;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.1;
      if (circleRef.current) {
        circleRef.current.style.left = circle.current.x + 'px';
        circleRef.current.style.top = circle.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-circle" ref={circleRef} />
    </>
  );
};

// ── App ─────────────────────────────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      {!loading && (
        <div className="bg-background text-white min-h-screen font-sans relative mesh-bg noise">
          <CustomCursor />
          {!loading && !window.matchMedia('(max-width: 640px)').matches && <Background3D />}

          {/* Subtle grid overlay */}
          <div className="fixed inset-0 grid-overlay pointer-events-none z-0 opacity-60" />

          <div className="relative z-10">
            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-accent via-neon-purple to-neon-blue origin-left"
              style={{ scaleX }}
            />
            
            <Navigation />
            <main>
              <Hero />
              <Projects />
              <Suspense fallback={null}>
                <StatsTicker />
                <TechStack />
                <About />
                <Services />
                <Process />
                <Testimonials />
                <FAQ />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>

          {/* Floating widgets */}
          <WhatsAppWidget />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
