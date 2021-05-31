import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


const Iphone = ({sign, model, scrollPosition}) => {

  const group = useRef();
  
  let positionX;
  if(scrollPosition > 180){
    positionX = 180;
  } else {
    positionX = scrollPosition;
  }

  const { nodes } = useGLTF("assets/iphone/Iphone_" + model + ".glb");

  return (
    <group ref={group} dispose={null} rotation={[0, (positionX * sign) * Math.sin(1 / 48), 0]} position={[(positionX * sign) / 2 * Math.abs(Math.sin(1 / 36)) + 2.5 * sign, 0, 0]}>
        <mesh {...nodes.bake}/>
    </group>
  );
}

export default Iphone;