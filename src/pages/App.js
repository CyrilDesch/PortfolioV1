import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";
import '../styles/App.css';
import * as THREE from 'three';

const textureAndIos = new THREE.TextureLoader().load("assets/iphone/iphoneTextureAndIos.jpg");
textureAndIos.flipY = false;

const textureProfil = new THREE.TextureLoader().load("assets/iphone/iphoneTextureProfil.jpg");
textureProfil.flipY = false;

const App = () => {
  return (
    <>
      <div className="canvaContainer">
        <Canvas camera={{position: [0, 0, 8]}}>
          <spotLight intensity={0.8} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Iphone sign={-1} texture={textureAndIos} />
            <Iphone sign={1} texture={textureProfil} />
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