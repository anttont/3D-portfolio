import React, { Suspense, useEffect, useState } from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF, Grid, Environment, MeshReflectorMaterial } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./public/laptop/scene.gltf");
  
  return (
    <group>
      
      
      {/* Add a reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial 
          depthWrite={true} 
          reflectivity={0.3}
          metalness={0.5}
          roughness={0.4}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
        />
      </mesh>

      <primitive
        object={computer.scene}
        scale={isMobile ? 15 : 25}
        position={[0, -3.8, 0]}
        castShadow // Enable shadow casting for the model
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [16, 0, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

        
  <Environment preset="forest" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;