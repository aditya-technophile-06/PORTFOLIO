"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function BokehParticle({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (mesh.current) {
      // Subtle floating
      mesh.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
      mesh.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15} // Very subtle
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  const particles = useMemo(() => {
    const items = [];
    const colors = ["#4f46e5", "#8b5cf6", "#06b6d4", "#ec4899"];
    
    for (let i = 0; i < 40; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 10 - 10, // Far background
        ] as [number, number, number],
        scale: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, []);

  return (
    <group>
      {particles.map((props, i) => (
        <BokehParticle key={i} {...props} />
      ))}
    </group>
  );
}
