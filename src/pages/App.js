import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Iphone from "../components/Iphone";
import '../styles/App.css';
import Camera from "../components/Camera";

const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position * window.screen.width / window.innerWidth);
    }
    window.addEventListener('scroll', handleScroll);
    return(() => {
      window.removeEventListener('scroll', handleScroll)
    });
  }, []);

  let opacity;
  if (scrollPosition*scrollPosition*0.00003 > 1)
    opacity = 1
  else
    opacity = scrollPosition*scrollPosition*0.00003

  return (
    <>
      <header>
          <div className="headerContainer">
            <img className="icon" src="assets/icon2.png" alt="icon" />
            <div className="menuContainer">
              <a className="coloredText" href="#">Accueil</a>
              <a href="#">SECTION 2</a>
              <a href="#">SECTION 3</a>
              <a href="#">SECTION 4</a>
            </div>
            <div className="rightContainer">
              <div className="contactContainer">
                <p className="contactText">Me contacter</p>
              </div>
            </div>
          </div>
        </header>      
        <main style={{height: `400vh`}}>
          <div className="canvaContainer">
            <Canvas>
              <Camera position={[0, 0, 10]}/>
              <spotLight intensity={0.8} angle={1} penumbra={1} position={[0, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Iphone sign={-1} model="android_apple" scrollPosition={scrollPosition} />
                <Iphone sign={1} model="profil" scrollPosition={scrollPosition} />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
          <p className="animateText1" style={{opacity: opacity}}>DEVELOPPEUR<br/><p className="coloredText">REACT NATIVE</p></p>
          <p className="animateText2" style={{opacity: opacity/8}}>DEVELOPPEUR<br/><p className="coloredText">REACT NATIVE</p></p>
          <p className="citation">"Toujours avancer, ne rien regretter"</p>
          <span className="bar" />
        </main>
    </>
  )
}

export default App;