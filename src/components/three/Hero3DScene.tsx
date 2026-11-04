import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Atmospheric floating cybernetic particles with subtle pulse
function ParticleField({ count = 80 }: { count?: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.2 + Math.random() * 3.2;
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#38BDF8"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Interactive Computational Core Geometry with smooth natural response
function ComputationalCore({ 
  pointer,
  isMobile 
}: { 
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}) {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const secondaryRingRef = useRef<THREE.Mesh>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);

  // Rotation accumulator to allow natural continuous spin while tilting toward pointer
  const spinRef = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!outerGroupRef.current) return;

    // Accumulate base continuous rotation
    spinRef.current.y += delta * 0.22;
    spinRef.current.x += delta * 0.1;

    // Natural smooth pointer tilt with easing (lerp)
    const targetTiltX = -pointer.current.y * 0.35;
    const targetTiltY = pointer.current.x * 0.45;
    const targetPosX = pointer.current.x * 0.35;
    const targetPosY = pointer.current.y * 0.35;

    // Outer group follows translation smoothly
    outerGroupRef.current.position.x = THREE.MathUtils.lerp(outerGroupRef.current.position.x, targetPosX, 0.06);
    outerGroupRef.current.position.y = THREE.MathUtils.lerp(outerGroupRef.current.position.y, targetPosY, 0.06);

    // Apply combined continuous rotation + responsive tilt
    outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      outerGroupRef.current.rotation.x,
      spinRef.current.x + targetTiltX,
      0.08
    );
    outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      outerGroupRef.current.rotation.y,
      spinRef.current.y + targetTiltY,
      0.08
    );

    // Counter-rotating inner torus knot for visual depth
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.3;
      innerMeshRef.current.rotation.z += delta * 0.18;
    }

    // Orbital rings rotation
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.35;
      ringRef.current.rotation.x -= delta * 0.12;
    }
    if (secondaryRingRef.current) {
      secondaryRingRef.current.rotation.y += delta * 0.28;
      secondaryRingRef.current.rotation.z -= delta * 0.2;
    }

    // Core pulsing glow
    if (coreRef.current) {
      const pulse = 1.0 + Math.sin(state.clock.elapsedTime * 2.2) * 0.25;
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = pulse * 1.2;
      }
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={outerGroupRef}>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.75, 1]} />
          <meshStandardMaterial
            color="#2563EB"
            wireframe
            transparent
            opacity={0.32}
            roughness={0.25}
            metalness={0.85}
          />
        </mesh>

        {/* Mid Metallic Titanium Torus Knot */}
        <mesh ref={innerMeshRef}>
          <torusKnotGeometry args={[0.9, 0.26, isMobile ? 64 : 100, 16]} />
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.94}
            roughness={0.14}
            emissive="#1E3A8A"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Primary Equatorial Orbital Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.15, 0.018, 16, isMobile ? 60 : 100]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#00F0FF"
            emissiveIntensity={0.85}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Secondary Tilted Orbital Ring */}
        <mesh ref={secondaryRingRef} rotation={[1.1, 0.4, 0]}>
          <torusGeometry args={[2.3, 0.012, 16, isMobile ? 50 : 80]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#A78BFA"
            emissiveIntensity={0.7}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Inner Glowing Core Sphere */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={1.2}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

export const Hero3DScene: React.FC = () => {
  const pointer = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    pointer.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
  };

  const handlePointerLeave = () => {
    // Smoothly return pointer toward center
    pointer.current.x = 0;
    pointer.current.y = 0;
  };

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* 3-Point Studio Cinematic Lighting */}
        <ambientLight intensity={0.45} color="#0B132B" />
        
        {/* Warm key light */}
        <directionalLight position={[6, 8, 5]} intensity={1.7} color="#E0F2FE" />
        
        {/* Rim back light for crisp silhouettes */}
        <pointLight position={[-8, -6, -4]} intensity={1.4} color="#8B5CF6" />
        
        {/* Specular cyan accent light */}
        <pointLight position={[0, 3, 2.5]} intensity={1.6} color="#00F0FF" />

        {/* Dynamic Scene Objects */}
        <ComputationalCore pointer={pointer} isMobile={isMobile} />
        <ParticleField count={isMobile ? 45 : 85} />
      </Canvas>
    </div>
  );
};
