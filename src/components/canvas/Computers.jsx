import React, { Suspense, useEffect, useState } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";

import { OrbitControls, Preload, useTexture, Reflector, Text, useGLTF, MeshReflectorMaterial} from "@react-three/drei";

import CanvasLoader from "../Loader";

const VideoText = ({ isMobile, ...props }) => {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: './VideoText/Portfolio.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text position={isMobile ? [0, 0.15, 0] : [-0.7, 0.45, 0]} scale={isMobile ? 0.3 : 1} font="./VideoText/Inter-Bold.woff" letterSpacing={-0.06} {...props}>
      Anttoni
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop/scene.gltf");
  
  return (
    <mesh>
      <pointLight intensity={3.5} position={isMobile ? [-0.2, 1, 1] : [2, 3, 2]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [-0.3, 0.009, 1.4] : [1.5, 0.009, 1]}
        rotation={[0, -1, 0]}
      />
    </mesh>
  );
};

const Ground = () => {
  const [floor, normal] = useTexture(['./VideoText/SurfaceImperfections003_1K_var1.jpg', './VideoText/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector  blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={3.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#808080" metalness={0.01} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}

const Intro = () => {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.pointer.x * 0.1, 3 + state.pointer.y * 0.1, 14), 0.1)
    state.camera.lookAt(0, 0, -3)
  })
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1090px)");

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
      camera={{fov: 10}}
      gl={{ preserveDrawingBuffer: true}}
       >
      <Suspense fallback={<CanvasLoader />}>
      
      <fog attach="fog" args={["#131314", 15, 20]} />
      <group position={[0, 0, 0]}>
          {/*<Computers rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} isMobile={isMobile} />*/}
          <VideoText isMobile={isMobile} />
          <Ground />
        </group>
        <ambientLight intensity={0.3} />
        
      <Intro />
        
        </Suspense >
      <Preload all />
      
    </Canvas>
    
  );
};

export default ComputersCanvas;