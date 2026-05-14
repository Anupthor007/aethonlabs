"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface DotGlobeHeroProps {
  rotationSpeed?: number;
  globeRadius?: number;
  className?: string;
  children?: React.ReactNode;
}

const Globe: React.FC<{
  rotationSpeed: number;
  radius: number;
}> = ({ rotationSpeed, radius }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += rotationSpeed;
    groupRef.current.rotation.x += rotationSpeed * 0.28;
    groupRef.current.rotation.z += rotationSpeed * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.14} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius * 0.985, 52, 52]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.08} wireframe />
      </mesh>
    </group>
  );
};

const DotGlobeHero = React.forwardRef<HTMLDivElement, DotGlobeHeroProps>(
  ({
    rotationSpeed = 0.005,
    globeRadius = 1,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative min-h-[100dvh] w-full overflow-x-hidden", className)}
        {...props}
      >
        <div className="relative z-10">{children}</div>

        <div className="pointer-events-none fixed inset-0 z-0">
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={70} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.1} color="#93c5fd" />
            <pointLight position={[-8, -6, 8]} intensity={0.55} color="#f59e0b" />

            <Globe rotationSpeed={rotationSpeed} radius={globeRadius} />
          </Canvas>
        </div>
      </div>
    );
  }
);

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
