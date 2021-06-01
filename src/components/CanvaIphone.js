import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";
import Camera from "../components/Camera";

const CanvaIphone = ({ scrollPosition }) => {
  return(
    <>
      <Canvas gl={{ antialias: true}} dpr={devicePixelRatio}>
        <Camera position={[0, 0, 10]}/>
        <spotLight intensity={0.2} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Iphone sign={-1} model="android_apple" scrollPosition={scrollPosition} />
          <Iphone sign={1} model="profil" scrollPosition={scrollPosition} />
          <Environment
            background={false}
            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            path={'assets/env/'}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default CanvaIphone;