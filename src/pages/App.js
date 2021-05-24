import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";
import '../styles/App.css';

const App = () => {
  return (
    <>
      <div className="canvaContainer">
        <Canvas camera={{position: [0, 0, 5]}}>
          <spotLight intensity={0.8} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Iphone sign={-1} model="android_apple" />
            <Iphone sign={1} model="profil" />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <header>
        <div className="headerContainer">
          <img className="icon" src="assets/icon2.png" alt="icon" />
          <div className="menuContainer">
            <a href="#">SECTION 1</a>
            <a href="#">SECTION 2</a>
            <a href="#">SECTION 3</a>
            <a href="#">SECTION 4</a>
          </div>
          <div className="fakedivHeader" />
        </div>
      </header>
      <main style={{height: `2000px`}}>
        <p className="animateText">DEVELOPPEUR<br/>REACT NATIVE</p>
      </main>
    </>
  )
}

export default App;