"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function FloatingCube() {
  const meshRef = useRef(null);

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div
      className="absolute inset-0 -z-10"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingCube />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
