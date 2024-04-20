import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      fullscreen
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 20,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
        }}
      >
        Loading: {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
