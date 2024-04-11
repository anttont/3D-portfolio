import React, { Suspense, useEffect, useState } from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF, Grid, Environment } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  
  const computer = useGLTF("./public/laptop/scene.gltf");
  

  return (
    <mesh>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <Environment preset="city" blur={1} />
      
      
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 15 : 25}
        position={[0, -3.8, 0]}
        />
      
    </mesh>
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
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        
        <Grid renderOrder={-1} position={[0, -4, 0]}
         infiniteGrid cellSize={0.6} cellThickness={0.2}
          sectionSize={9.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={90} />
  <Environment  preset="city" blur={10} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;