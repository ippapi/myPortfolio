"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from 'react';

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/myPortfolio/ethereum-logo.glb");
  const modelRef = useRef(null);

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 1;
        }
    });


  return (
    <mesh ref={modelRef}>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />  
      <primitive
        object={gltf.scene}
      />
    </mesh>
  );
};

const ModelViewer = () => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <Model />
    </Canvas>
  );
};


export default ModelViewer;
