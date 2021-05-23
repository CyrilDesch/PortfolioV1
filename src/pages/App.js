import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";
import '../styles/App.css'

const App = () => {
  return (
    <>
      <div>
        <Canvas className="canvaContainer" camera={{position: [0, 0, 8]}}>
          <spotLight intensity={0.8} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Iphone sign={-1}/>
            <Iphone sign={1}/>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <div style={{height: `2000px`}}>

      </div>
    </>
  )
}

export default App;