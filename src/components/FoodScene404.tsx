'use client';

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Environment,
  ContactShadows,
  Torus,
  Cylinder,
  Capsule,
  Center,
  Text3D
} from '@react-three/drei';
import * as THREE from 'three';

// ── The Gourmet Bakery Palette ──
const MAT = {
  dough: '#ECA050',        // Golden baked dough
  icingChoco: '#3A1C0F',   // Deep, rich dark chocolate (darker to stand out from dough)
  icingStraw: '#FD79A8',   // Strawberry pink
  icingVanilla: '#FFFBF0'  // Clean creamy vanilla white
};

const SPRINKLE_COLORS = ['#00a8ff', '#9c88ff', '#fbc531', '#4cd137', '#e84118', '#ffffff'];

// ─────────────────────────────────────────
// The "4" Shaped Solid Frosted Pastry
// ─────────────────────────────────────────
function PuffyFour({ xOffset, icingColor, delay }: { xOffset: number, icingColor: string, delay: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const t = state.clock.elapsedTime;
    let currentY = 0;
    let stretch = 1;
    let squish = 1;
    let rotY = 0;
    let rotZ = 0;
    
    if (t < delay) {
      currentY = 6.0; // Start a bit higher
      rotY = 0;
      rotZ = 0;
    } else {
      const activeT = t - delay;
      
      // Much slower, floatier bounce
      // Using a higher power on the absolute cosine to 'sharpen' the hang time and 'soften' the contact
      const bounceBase = Math.abs(Math.cos(activeT * 1.2));
      const bounceY = 6.0 * Math.exp(-activeT * 0.6) * Math.pow(bounceBase, 1.5);
      
      const floatY = Math.sin(activeT * 1.5) * 0.08;
      const floatMix = Math.min(1, activeT / 3.0); 
      
      currentY = bounceY + (floatY * floatMix);
      
      // Slower, more elegant rotation
      rotY = Math.sin(activeT * 1.1) * 0.25 * Math.exp(-activeT * 0.5);
      rotZ = Math.cos(activeT * 0.9) * 0.15 * Math.exp(-activeT * 0.5);
      
      // Steady state gentle float rotation
      rotY += Math.sin(activeT * 0.8) * 0.04 * floatMix;
      rotZ += Math.sin(activeT * 0.6) * 0.03 * floatMix;
    }
    
    groupRef.current.position.y = currentY - 1.3;
    groupRef.current.scale.set(stretch, squish, stretch);
    groupRef.current.rotation.y = rotY;
    groupRef.current.rotation.z = rotZ;
  });

  // Pre-calculated sprinkle coordinates mapped absolutely to the un-centered Text3D
  // Z=0.58 because height is 0.4 + bevelThickness 0.15 = 0.55
  const sprinkles = useMemo(() => {
    const coords = [
      // Spine
      [1.7, 0.4, 0.58], [1.75, 0.9, 0.58], [1.65, 1.5, 0.58], [1.7, 2.1, 0.58], [1.8, 2.7, 0.58], 
      // Crossbar
      [0.2, 0.9, 0.58], [0.7, 0.85, 0.58], [1.2, 0.95, 0.58], [2.1, 0.85, 0.58],                 
      // Diagonal
      [0.4, 1.4, 0.58], [0.8, 1.9, 0.58], [1.2, 2.4, 0.58],                                      
      // Extras for density
      [0.5, 1.0, 0.58], [1.4, 1.3, 0.58], [1.8, 1.2, 0.58]                                       
    ];
    
    return coords.map(c => ({
      pos: c as [number, number, number],
      rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      color: SPRINKLE_COLORS[Math.floor(Math.random() * SPRINKLE_COLORS.length)]
    }));
  }, []);

  return (
    <group ref={groupRef} position={[xOffset - 1.0, -1.3, 0]}>
      
      {/* A single, solid, beautiful 3D puffy pastry block! */}
      {/* No more flat sandwiched planes. The entire 3D shape is the colored pastry. */}
      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        size={2.8}
        height={0.4}
        position={[0, 0, 0]}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.15}
        bevelSize={0.1}
        bevelSegments={16}
        castShadow
      >
        4
        <meshStandardMaterial color={icingColor} roughness={0.15} metalness={0.08} />
      </Text3D>

      {/* 3D Sprinkles resting accurately on the front puffy face */}
      {sprinkles.map((s, i) => (
        <Cylinder key={i} args={[0.035, 0.035, 0.22, 8]} position={s.pos} rotation={s.rot} castShadow>
          <meshStandardMaterial color={s.color} roughness={0.3} metalness={0.1} />
        </Cylinder>
      ))}

    </group>
  );
}

// ─────────────────────────────────────────
// The "0" Shaped Donut
// ─────────────────────────────────────────
function DonutZero({ xOffset, delay = 0 }: { xOffset: number, delay?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const t = state.clock.elapsedTime;
    let currentY = 0;
    let stretch = 1;
    let squish = 1;
    let rotY = 0;
    let rotX = 0;
    
    if (t < delay) {
      currentY = 6.0;
      rotY = 0;
      rotX = 0;
    } else {
      const activeT = t - delay;
      
      const bounceBase = Math.abs(Math.cos(activeT * 1.2));
      const bounceY = 6.0 * Math.exp(-activeT * 0.6) * Math.pow(bounceBase, 1.5);
      
      const floatY = Math.sin(activeT * 1.5) * 0.08;
      const floatMix = Math.min(1, activeT / 3.0);
      
      currentY = bounceY + (floatY * floatMix);
      
      rotY = Math.sin(activeT * 1.1) * 0.25 * Math.exp(-activeT * 0.5);
      rotX = Math.cos(activeT * 0.9) * 0.15 * Math.exp(-activeT * 0.5);
      
      rotY += Math.sin(activeT * 0.8) * 0.04 * floatMix;
      rotX += Math.sin(activeT * 0.6) * 0.03 * floatMix;
    }
    
    groupRef.current.position.y = currentY;
    groupRef.current.scale.set(stretch, squish, stretch);
    groupRef.current.rotation.y = rotY;
    groupRef.current.rotation.x = rotX;
  });

  const sprinkles = useMemo(() => {
    return Array.from({ length: 110 }).map(() => {
      const u = Math.random() * Math.PI * 2; 
      const v = Math.random() * Math.PI; // front half only
      
      const R = 1.35; 
      const r = 0.51; 
      
      const x = (R + r * Math.cos(v)) * Math.cos(u);
      const y = (R + r * Math.cos(v)) * Math.sin(u);
      const z = r * Math.sin(v);
      
      const nx = Math.cos(v) * Math.cos(u);
      const ny = Math.cos(v) * Math.sin(u);
      const nz = Math.sin(v);
      const normal = new THREE.Vector3(nx, ny, nz);
      
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      const randomRot = new THREE.Quaternion().setFromAxisAngle(normal, Math.random() * Math.PI);
      quaternion.multiply(randomRot);
      const euler = new THREE.Euler().setFromQuaternion(quaternion);

      return {
        pos: [x, y, z] as [number, number, number],
        rot: [euler.x, euler.y, euler.z] as [number, number, number],
        color: SPRINKLE_COLORS[Math.floor(Math.random() * SPRINKLE_COLORS.length)]
      };
    });
  }, []);

  return (
    <group ref={groupRef} position={[xOffset, 0, 0]}>
      
      {/* Baked Donut Dough */}
      <Torus args={[1.35, 0.48, 32, 64]} castShadow>
        <meshStandardMaterial color={MAT.dough} roughness={0.7} metalness={0.05} />
      </Torus>
      
      {/* Strawberry Icing */}
      <Torus args={[1.35, 0.51, 32, 64]} position={[0, 0, 0.03]} castShadow>
        <meshStandardMaterial color={MAT.icingStraw} roughness={0.15} metalness={0.1} />
      </Torus>

      {/* 3D Sprinkles */}
      <group position={[0, 0, 0.03]}>
        {sprinkles.map((s, i) => (
          <Cylinder key={i} args={[0.035, 0.035, 0.22, 8]} position={s.pos} rotation={s.rot} castShadow>
            <meshStandardMaterial color={s.color} roughness={0.3} metalness={0.1} />
          </Cylinder>
        ))}
      </group>
      
    </group>
  );
}

// ─────────────────────────────────────────
// MAIN 3D SCENE
// ─────────────────────────────────────────
function Scene({ initialDelay = 0 }: { initialDelay?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // state.pointer coordinates are normalized from -1 to 1 based on screen size
      const targetTiltY = (state.pointer.x * Math.PI) / 10; // Left-right look
      const targetTiltX = (state.pointer.y * Math.PI) / 14; // Up-down tilt
      
      // Smoothly lerp towards target rotation for that premium buttery feel
      groupRef.current.rotation.y += (targetTiltY - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (targetTiltX - groupRef.current.rotation.x) * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 3, -3]} intensity={0.5} color="#ffe0b0" />
      <pointLight position={[0, 8, 0]} intensity={0.6} color="#fff8f0" />

      {/* Realistic contact shadows (static floor) */}
      <ContactShadows
        position={[0, -3.2, 0]}
        opacity={0.4}
        scale={24}
        blur={2.5}
        far={6}
        color="#3a2510"
      />

      <Environment preset="apartment" />

      {/* THE GOURMET DONUT BOX (Interactive grouping) */}
      <group ref={groupRef}>
        {/* 4 - Chocolate Frosted Puffy Pastry */}
        <PuffyFour  xOffset={-5.5} icingColor={MAT.icingChoco} delay={initialDelay + 0} />
        
        {/* 0 - Strawberry Frosted Donut */}
        <DonutZero  xOffset={0} delay={initialDelay + 0.2} />
        
        {/* 4 - Vanilla Frosted Puffy Pastry */}
        <PuffyFour  xOffset={5.5} icingColor={MAT.icingVanilla} delay={initialDelay + 0.4} />
      </group>
    </>
  );
}

export default function FoodScene404({ initialDelay = 0 }: { initialDelay?: number }) {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows={{ type: THREE.PCFShadowMap }}
        camera={{ position: [0, 0.3, 10.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene initialDelay={initialDelay} />
        </Suspense>
      </Canvas>
    </div>
  );
}
