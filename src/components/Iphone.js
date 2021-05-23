import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const texture = new THREE.TextureLoader().load("assets/iphone/iphoneTexture.jpg");
texture.flipY = false;

const Iphone = ({value, pos}) => {
  const group = useRef();

  if(value > 84){
    value = 84
  }
  if(value < -84){
    value = -84
  }

  if(group.current){
    group.current.rotation.y = value * Math.sin(1 / 26.9)
    group.current.position.x = value / 2 * Math.abs(Math.sin(1 / 10)) + pos
  }

  const { nodes } = useGLTF("assets/iphone/Iphone.glb");

  return (
    <group ref={group} dispose={null} position={[pos,0,0]}>
      <group scale={[1, 1, 1]}>
        <mesh {...nodes.Cube} >  
          <meshStandardMaterial
            map={texture}
            attach="material"
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Iphone;