"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Scene } from './Scene';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './3d.module.css';

function FloatingShape({ position, color, type = 'box' }: { position: [number, number, number], color: string, type?: 'box' | 'icosahedron' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    // Gentle rotation
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={1}
      >
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {type === 'torus' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className={styles.container}>
      <Scene>
        <Environment preset="city" />
        <group rotation={[0, -0.2, 0]}>
          <FloatingShape position={[-1.2, 0.5, 0]} color="#E0F2FE" type="torus" />
          <FloatingShape position={[0, 0, 0]} color="#38BDF8" type="icosahedron" /> {/* Central Core */}
          <FloatingShape position={[1.2, -0.5, 0]} color="#BAE6FD" type="torus" />
        </group>
      </Scene>
    </div>
  );
}
