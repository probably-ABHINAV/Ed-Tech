"use client";

import { Canvas } from '@react-three/fiber';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Scene({ children, className, ...props }: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]} // Handle high DPI screens
      {...props}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
    </Canvas>
  );
}
