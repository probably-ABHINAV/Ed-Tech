"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Scene } from './Scene';
import { Float, Environment, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import styles from './3d.module.css';

function FloatingBar({ position, height, color, delay }: { position: [number, number, number], height: number, color: string, delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Bar growth animation
    const scaleY = 1 + Math.sin(t * 2 + delay) * 0.3;
    meshRef.current.scale.y = scaleY;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.4, height, 0.4]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
    </mesh>
  );
}

function GlassPanel({ position, args }: { position: [number, number, number], args: [number, number, number] }) {
  return (
    <RoundedBox position={position} args={args} radius={0.1} smoothness={4}>
      <meshPhysicalMaterial 
        color="#ffffff" 
        transmission={0.6} 
        opacity={0.5} 
        metalness={0.1} 
        roughness={0.1} 
        thickness={0.5} 
        transparent
      />
    </RoundedBox>
  );
}

function DashboardMock() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group rotation={[0.2, -0.2, 0]}>
        {/* Main Base - Glass */}
        <RoundedBox args={[7, 5, 0.2]} radius={0.2} smoothness={4}>
           <meshPhysicalMaterial 
            color="#F1F5F9" 
            metalness={0.1} 
            roughness={0.2} 
          />
        </RoundedBox>

        {/* Sidebar */}
        <RoundedBox position={[-2.5, 0, 0.15]} args={[1.5, 4.6, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#F8FAFC" />
        </RoundedBox>

        {/* Header */}
        <RoundedBox position={[0.8, 1.8, 0.15]} args={[4.8, 0.8, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#FFFFFF" />
        </RoundedBox>

        {/* Charts / Data */}
        <group position={[0.8, -0.5, 0.4]}>
          <FloatingBar position={[-1.5, 1, 0]} height={1.5} color="#38BDF8" delay={0} />
          <FloatingBar position={[-0.5, 1.5, 0]} height={2.2} color="#0EA5E9" delay={1} />
          <FloatingBar position={[0.5, 0.8, 0]} height={1.2} color="#0284C7" delay={2} />
          <FloatingBar position={[1.5, 1.8, 0]} height={2.5} color="#0369A1" delay={3} />
        </group>
        
        {/* Floating Glass Panel Overlay */}
        <GlassPanel position={[0.8, -0.5, 0.8]} args={[4.5, 2.5, 0.1]} />

      </group>
    </Float>
  );
}

export default function Platform3D() {
  return (
    <div className={styles.container}>
      <Scene>
        <Environment preset="city" />
        <DashboardMock />
      </Scene>
    </div>
  );
}
