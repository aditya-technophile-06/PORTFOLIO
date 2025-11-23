"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DispersingSphere() {
  const meshRef = useRef<THREE.Mesh>(null); // The big connecting lines
  const instancesRef = useRef<THREE.InstancedMesh>(null); // The nodes (mini spheres)
  const [scrollProgress, setScrollProgress] = useState(0);

  // Geometry settings
  const radius = 1.8; // Reduced from 2.5
  const detail = 1; // Reduced from 2 to 1 for fewer spheres 

  // Generate Base and Random positions
  const { basePositions, randomPositions, randomRotations } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(radius, detail);
    const posAttribute = geo.attributes.position;
    const count = posAttribute.count;

    const basePositions = new Float32Array(count * 3);
    const randomPositions = new Float32Array(count * 3);
    const randomRotations = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      basePositions[i * 3] = posAttribute.getX(i);
      basePositions[i * 3 + 1] = posAttribute.getY(i);
      basePositions[i * 3 + 2] = posAttribute.getZ(i);

      randomPositions[i * 3] = (Math.random() - 0.5) * 20; // Slightly tighter dispersion
      randomPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      randomPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      randomRotations[i * 3] = Math.random() * Math.PI;
      randomRotations[i * 3 + 1] = Math.random() * Math.PI;
      randomRotations[i * 3 + 2] = Math.random() * Math.PI;
    }

    return { basePositions, randomPositions, randomRotations };
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    const rawFormation = 1 - Math.abs(scrollProgress - 0.5) * 2.2;
    const formation = THREE.MathUtils.smoothstep(rawFormation, 0, 1);

    // Update Main Mesh (Lines)
    if (meshRef.current) {
      const currentPositions = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < basePositions.length / 3; i++) {
        // Interpolate positions
        const x = THREE.MathUtils.lerp(randomPositions[i * 3], basePositions[i * 3], formation);
        const y = THREE.MathUtils.lerp(randomPositions[i * 3 + 1], basePositions[i * 3 + 1], formation);
        const z = THREE.MathUtils.lerp(randomPositions[i * 3 + 2], basePositions[i * 3 + 2], formation);

        currentPositions.setXYZ(i, x, y, z);
      }
      currentPositions.needsUpdate = true;

      // Rotate system
      meshRef.current.rotation.y = time * 0.1;
      
      // Fade lines
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = THREE.MathUtils.smoothstep(formation, 0.5, 0.9) * 0.2; // Only visible when formed
    }

    // Update Instances (Mini Spheres)
    if (instancesRef.current) {
      const dummy = new THREE.Object3D();
      
      // Rotate system to match lines
      instancesRef.current.rotation.y = time * 0.1;

      for (let i = 0; i < basePositions.length / 3; i++) {
        const x = THREE.MathUtils.lerp(randomPositions[i * 3], basePositions[i * 3], formation);
        const y = THREE.MathUtils.lerp(randomPositions[i * 3 + 1], basePositions[i * 3 + 1], formation);
        const z = THREE.MathUtils.lerp(randomPositions[i * 3 + 2], basePositions[i * 3 + 2], formation);

        dummy.position.set(x, y, z);

        // Scale Logic:
        // Dispersed (formation 0) -> Large (Mini Network Sphere)
        // Formed (formation 1) -> Small (Dot)
        const scale = THREE.MathUtils.lerp(0.8, 0.15, formation); 
        dummy.scale.set(scale, scale, scale);

        // Rotation Logic:
        // Dispersed -> Rotate individually
        // Formed -> Align (or keep rotating, doesn't matter much for spheres)
        dummy.rotation.set(
          randomRotations[i * 3] + time,
          randomRotations[i * 3 + 1] + time,
          randomRotations[i * 3 + 2] + time
        );

        dummy.updateMatrix();
        instancesRef.current.setMatrixAt(i, dummy.matrix);
      }
      instancesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* The Connecting Lines (Big Sphere) */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[radius, detail]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0} // Controlled by script
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* The Mini Spheres (Nodes) */}
      <instancedMesh ref={instancesRef} args={[undefined, undefined, basePositions.length / 3]}>
        {/* Low poly sphere for the "mini network" look */}
        <icosahedronGeometry args={[0.2, 0]} /> 
        <meshBasicMaterial
          color="#ffffff"
          wireframe // Wireframe makes them look like mini networks
          transparent
          opacity={0.6}
        />
      </instancedMesh>
    </group>
  );
}
