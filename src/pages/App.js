import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";

const App = () => {

  const [scrollPosition, setScrollPosition] = useState([0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
    window.addEventListener('scroll', handleScroll);
    // Remove listener when component unmounts
    return(() => window.removeEventListener('scroll', handleScroll));
  }, []);

  return (
    <>
      <div style={{display: `flex`, flexWrap: `wrap`}}>
        <Canvas camera={{position: [0, 0, 8]}} style={{height: `400px`, width: `100%`}}>
          <spotLight intensity={0.8} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Iphone value={-scrollPosition} pos={-2.5} />
            <Iphone value={scrollPosition} pos={2.5}  />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <div style={{height: `800px`}}>

      </div>
    </>
  )
}

export default App;