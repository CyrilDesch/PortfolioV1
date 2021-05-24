import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Iphone = ({sign, texture}) => {

  const group = useRef();
  
  const [scrollPosition, setScrollPosition] = useState(0);
  let positionX;

  if(scrollPosition > 300){
    positionX = 300;
  } else {
    positionX = scrollPosition;
  }

  const { nodes } = useGLTF("assets/iphone/Iphone.glb");

  useEffect(() => {

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
    window.addEventListener('scroll', handleScroll);

    return(() => {
      window.removeEventListener('scroll', handleScroll)
    });
  }, []);

  return (
    <group ref={group} dispose={null} rotation={[0, (positionX * sign) * Math.sin(1 / 48), 0]} position={[(positionX * sign) / 2 * Math.abs(Math.sin(1 / 36)) + 2.5 * sign, 0, 0]}>
        <mesh {...nodes.Cube}>  
          <meshStandardMaterial
            map={texture}
            attach="material"
            roughness={0.3}
            metalness={0}
          />
        </mesh>
    </group>
  );
}

export default Iphone;