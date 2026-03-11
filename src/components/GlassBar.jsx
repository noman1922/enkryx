/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial, useFBO } from "@react-three/drei";
import * as THREE from "three";

function GlassMesh() {
  const meshRef = useRef();
  const { viewport } = useThree();
  const buffer = useFBO();

  const [scene] = useMemo(() => [new THREE.Scene()], []);

  useFrame(({ gl, camera }) => {
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      {/* Full-viewport background plane that samples the FBO */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>

      {/* Glass bar — full width of viewport, fixed height */}
      <RoundedBox
        ref={meshRef}
        args={[viewport.width * 1.02, viewport.height * 1.1, 0.08]}
        radius={0.04}
        smoothness={8}
        position={[0, 0, 0]}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          transmission={1}
          roughness={0.05}
          thickness={0.12}
          ior={1.18}
          chromaticAberration={0.04}
          anisotropy={0.03}
          attenuationDistance={0.5}
          attenuationColor="#00b0c8"
          color="#ffffff"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
    </>
  );
}

export default function GlassBar() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 50, near: 0.01, far: 100 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 2, 4]} intensity={1.2} color="#00d0e8" />
      <GlassMesh />
    </Canvas>
  );
}
