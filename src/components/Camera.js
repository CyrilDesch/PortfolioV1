import { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';


const Camera = (props) => {
  const cameraRef = useRef();
  const set = useThree(state => state.set)
  const size = useThree(state => state.size)
  
  useLayoutEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height
      cameraRef.current.updateProjectionMatrix()
    }
  }, [size, props]);
  
  useLayoutEffect(() => {
    set({ camera: cameraRef.current })
  }, [set]);
  return <perspectiveCamera ref={cameraRef} {...props} />
}

export default Camera;