import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Atmospheric floating cybernetic particles
function ParticleField({ count = 120 }: { count?: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.4 + Math.random() * 3.5;
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
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
        size={0.035}
        color="#60A5FA"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Interactive Computational Core Geometry
function ComputationalCore({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!outerGroupRef.current) return;

    // Natural rotation
    outerGroupRef.current.rotation.y += delta * 0.25;
    outerGroupRef.current.rotation.x += delta * 0.12;

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.35;
      innerMeshRef.current.rotation.z += delta * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x -= delta * 0.15;
    }

    // Subtle pointer tracking response
    const targetX = pointer.current.x * 0.45;
    const targetY = pointer.current.y * 0.45;
    outerGroupRef.current.position.x = THREE.MathUtils.lerp(outerGroupRef.current.position.x, targetX, 0.05);
    outerGroupRef.current.position.y = THREE.MathUtils.lerp(outerGroupRef.current.position.y, targetY, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={outerGroupRef}>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.75, 1]} />
          <meshStandardMaterial
            color="#3B82F6"
            wireframe
            transparent
            opacity={0.35}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Mid Glass-Metallic Torus Knot */}
        <mesh ref={innerMeshRef}>
          <torusKnotGeometry args={[0.9, 0.28, 100, 16]} />
          <meshStandardMaterial
            color="#1E293B"
            metalness={0.92}
            roughness={0.15}
            emissive="#1E3A8A"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Equatorial Orbital Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#00F0FF"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Inner Glowing Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.45, 32, 32]} />
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

  const handlePointerMove = (e: React.PointerEvent) => {
    // Normalized coordinates (-1 to 1)
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    pointer.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#E0F2FE" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8B5CF6" />
        <pointLight position={[0, 4, 3]} intensity={1.8} color="#00F0FF" />

        {/* Interactive 3D Objects */}
        <ComputationalCore pointer={pointer} />
        <ParticleField count={90} />
      </Canvas>
    </div>
  );
};
