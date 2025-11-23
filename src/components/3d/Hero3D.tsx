"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth mouse interaction
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.1, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.1);
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Central Abstract Sculpture */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Outer Glass Shell */}
        <Sphere args={[1.5, 64, 64]}>
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0}
            metalness={0.1}
            transmission={0.95} // High transparency
            thickness={2}
            ior={1.5}
            clearcoat={1}
            attenuationColor="#ffffff"
            attenuationDistance={0.5}
          />
        </Sphere>

        {/* Inner Core - Geometric Tech */}
        <Icosahedron args={[0.8, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#4f46e5"
            roughness={0.2}
            metalness={1}
            emissive="#312e81"
            emissiveIntensity={0.2}
            wireframe
          />
        </Icosahedron>

        {/* Orbiting Ring */}
        <group rotation={[Math.PI / 3, 0, 0]}>
          <Torus args={[2.2, 0.05, 16, 100]}>
            <meshStandardMaterial
              color="#8b5cf6"
              roughness={0.1}
              metalness={0.8}
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
            />
          </Torus>
        </group>
        
        {/* Second Orbiting Ring */}
        <group rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <Torus args={[2.8, 0.02, 16, 100]}>
            <meshStandardMaterial
              color="#06b6d4"
              roughness={0.1}
              metalness={0.8}
              emissive="#06b6d4"
              emissiveIntensity={0.5}
            />
          </Torus>
        </group>
      </Float>

      {/* Dynamic Lights */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#4f46e5" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ec4899" />
    </group>
  );
}
