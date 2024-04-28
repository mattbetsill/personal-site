
// components/ModelViewer.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('Models/GLman.glb', true); // Ensure your .glb file is in the public folder
  const ref = useRef();

  // Animation loop
  useFrame(() => {
    ref.current.rotation.y += 0.01; // Adjust rotation speed if necessary
  });

  return <primitive object={gltf.scene} ref={ref} scale={30} />;
}


export default function ModelOne() {

  return (
    <Canvas style={{ height: "100vh", width: "50vw" }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} />
      <directionalLight position={[-8, 20, 8]} intensity={1} />
      <group position={[0, -2, 0]}>
        <Model />
      </group>
    </Canvas>
  );
}



