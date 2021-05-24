import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Iphone = ({sign, model}) => {

  const group = useRef();
  
  const [scrollPosition, setScrollPosition] = useState(0);
  let positionX;

  if(scrollPosition > 300){
    positionX = 300;
  } else {
    positionX = scrollPosition;
  }

  const { nodes } = useGLTF("assets/iphone/Iphone_" + model + ".glb");

  useEffect(() => {

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position * Math.floor(window.screen.width/window.innerWidth));
    }
    window.addEventListener('scroll', handleScroll);

    return(() => {
      window.removeEventListener('scroll', handleScroll)
    });
  }, []);

  return (
    <group ref={group} dispose={null} rotation={[0, (positionX * sign) * Math.sin(1 / 48), 0]} position={[(positionX * sign) / 2 * Math.abs(Math.sin(1 / 36)) + 2.5 * sign, 0, 0]}>
        <mesh {...nodes.bake} />
    </group>
  );
}

export default Iphone;