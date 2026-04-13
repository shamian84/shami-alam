import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Slowly rotating star field
const AnimatedStars = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 40;
      ref.current.rotation.y -= delta / 55;
    }
  });
  return (
    <group ref={ref}>
      <Stars radius={80} depth={70} count={5000} factor={3.5} saturation={0} fade speed={0.6} />
    </group>
  );
};

// Glowing torus rings
const FloatingRing = ({
  position,
  color,
  scale,
  speed = 1.2,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25 * speed) * 0.5;
      ref.current.rotation.y += 0.002 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.018, 16, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </Float>
  );
};

// Drifting particle dots
const DriftingParticles = ({ count = 80 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#e74e8a'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#06b6d4'),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
};

const Background3D: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }} gl={{ alpha: true, antialias: false }}>
      <React.Suspense fallback={null}>
        <AnimatedStars />
        <DriftingParticles count={100} />
        <FloatingRing position={[-7, 2.5, -6]} color="#e74e8a" scale={3.5} speed={1.0} />
        <FloatingRing position={[6, -3, -9]} color="#8b5cf6" scale={3.0} speed={0.8} />
        <FloatingRing position={[0, 5, -12]} color="#06b6d4" scale={5} speed={0.6} />
        <FloatingRing position={[8, 4, -7]} color="#e74e8a" scale={2} speed={1.4} />
      </React.Suspense>
    </Canvas>
  </div>
);

export default Background3D;
