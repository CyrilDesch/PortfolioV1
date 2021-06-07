import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from '@react-spring/three';


const Iphone = ({sign, model, scrollPosition}) => {

  const group = useRef();
  
  let positionX;
  if(scrollPosition > 180){
    positionX = 180;
  } else {
    positionX = scrollPosition;
  }

  const { nodes } = useGLTF("assets/iphone/Iphone_" + model + ".glb");
  const { position, rotation } = useSpring({
    position: [(positionX * sign) / 2 * Math.abs(Math.sin(1 / 36)) + 2.5 * sign, 0, 0],
    rotation: [0, (positionX * sign) * Math.sin(1 / 48), 0]
  });

  return (
    <group ref={group} dispose={null}>
      <a.mesh {...nodes.bake} style={{backgroundColor: 'red'}} rotation={rotation} position={position}/>
    </group>
  );
}

export default Iphone;