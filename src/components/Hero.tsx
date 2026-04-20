import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Code2,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const roles = [
  { line1: "FULL STACK", line2: "DEVELOPER" },
  { line1: "SAAS", line2: "BUILDER" },
  { line1: "MOBILE APP", line2: "CREATOR" },
];

// ── 3D Hero Mesh ─────────────────────────────────────────────────────────────
const HeroMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(t * 0.4) * 0.3 + state.mouse.y * 0.3;
      meshRef.current.rotation.y =
        Math.cos(t * 0.35) * 0.3 + state.mouse.x * 0.3;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = meshRef.current?.rotation.x ?? 0;
      wireRef.current.rotation.y = meshRef.current?.rotation.y ?? 0;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.3;
      innerRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
      {/* Core solid */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#10001a"
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
      {/* Outer wireframe */}
      <mesh ref={wireRef} scale={1.02}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial
          color="#e74e8a"
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Inner glowing core */}
      <mesh ref={innerRef} scale={0.5}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

// ── Animated Text ─────────────────────────────────────────────────────────────
const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <span className={className} aria-label={text}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 80, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.55,
          delay: i * 0.045,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

// ── Magnetic button ───────────────────────────────────────────────────────────
const MagneticBtn = ({ children, className, href, ...props }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      data-cursor-hover
      {...props}
    >
      {children}
    </motion.a>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((p) => (p + 1) % roles.length),
      3600,
    );
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Projects Built", value: "15+" },
    { label: "Freelance", value: "8+" },
    { label: "Client Rating", value: "5 ★" },
    { label: "Stack", value: "Full Stack" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/5 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(231,78,138,0.15)" }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.07, 0.14, 0.07] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.18)" }}
      />

      {/* Available for work badge */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-2.5 mb-10 px-5 py-2.5 rounded-full glass border border-white/10 text-xs text-gray-400 tracking-widest uppercase font-medium"
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-green-400 shrink-0"
        />
        <MapPin size={11} className="text-accent shrink-0" />
        Mumbai, India — Open to Opportunities
      </motion.div>

      {/* Main heading */}
      <div className="max-w-7xl mx-auto w-full text-center">
        <div
          className="relative overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={index} className="flex flex-col items-center">
              {/* Top word */}
              <div className="font-display text-[clamp(3rem,10vw,9rem)] font-bold leading-none tracking-tighter text-white overflow-hidden pb-2">
                <AnimatedText text={roles[index].line1} />
              </div>

              {/* Middle row: 3D + second word */}
              <div className="flex items-center justify-center gap-4 md:gap-8 mt-2">
                {/* 3D pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                  }}
                  className="hidden md:block w-36 h-20 lg:w-56 lg:h-28 rounded-full overflow-hidden border border-accent/30 shrink-0 relative"
                  style={{
                    background:
                      "radial-gradient(circle at center, #1a001a, #070707)",
                  }}
                  data-cursor-hover
                >
                  {!isMobile && (
                    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
                      <ambientLight intensity={0.2} />
                      <pointLight
                        position={[10, 10, 10]}
                        intensity={2.5}
                        color="#e74e8a"
                      />
                      <pointLight
                        position={[-10, -8, -5]}
                        intensity={0.8}
                        color="#8b5cf6"
                      />
                      <pointLight
                        position={[0, -10, 5]}
                        intensity={0.5}
                        color="#06b6d4"
                      />
                      <HeroMesh />
                    </Canvas>
                  )}
                  {/* Glass rim */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ boxShadow: "inset 0 0 20px rgba(231,78,138,0.1)" }}
                  />
                </motion.div>

                {/* Second word */}
                <div className="font-display text-[clamp(3rem,10vw,9rem)] font-bold leading-none tracking-tighter overflow-hidden pb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="shimmer-text"
                  >
                    <AnimatedText text={roles[index].line2} />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-labels */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mt-6 flex-wrap"
        >
          {["MongoDB", "Express.js", "React.js", "Node.js", "Next.js"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="tech-chip"
              >
                {tech}
              </motion.span>
            ),
          )}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Software developer from Mumbai — building{" "}
          <span className="text-white font-medium">
            Building Scalable Software & Intelligent Systems
          </span>{" "}
          & Intelligent Systems{" "}
          <span className="text-white font-medium">
            to Solve Real-World Problems{" "}
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticBtn href="#contact" className="btn-primary gap-2">
            <Sparkles size={15} />
            Let's Build Together
            <ArrowRight size={15} />
          </MagneticBtn>
          <MagneticBtn href="#projects" className="btn-secondary gap-2">
            <Code2 size={15} />
            View Projects
          </MagneticBtn>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/shamian84" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shami-alam/" },
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/shami_9.4/" }
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors px-3 py-1.5 rounded-full glass border border-white/[0.06]"
              data-cursor-hover
            >
              <Icon size={13} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex items-center justify-center gap-6 md:gap-14 flex-wrap"
        >
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="text-center group"
            >
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text-pink group-hover:scale-110 transition-transform">
                {value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 origin-top"
          style={{
            background: "linear-gradient(to bottom, #e74e8a, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
