import React, { useState } from 'react';
import { useProgress } from "@react-three/drei";

const WaitScreen = () => {

  const [hidden, setHidden] = useState(false);
  const [changeOpacity, setChangeOpacity] = useState(false);
  const { progress } = useProgress();

  if(hidden)
    return null

  if(progress === 100 && !hidden)
    setTimeout(() => { setChangeOpacity(true) }, 1000);
    setTimeout(() => { setHidden(true) }, 2000);

  let opacity = 1
  if(changeOpacity)
    opacity = 0
  
  return(
    <div style={{ ...styles.waitScreen, opacity }}>
      <p style={styles.text}>Veuillez patienter</p>
      <div style={styles.inner}>
        <div style={{ ...styles.bar, transform: `scaleX(${progress / 100})` }}></div>
      </div>
    </div>
  );
}

const styles = {
  waitScreen: {
    background: 'linear-gradient(#09080e,#0d0d14)',
    position: "fixed",
    width: '100vw',
    height: '100vh',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 1000ms',
  },
  text: {
    fontSize: '1.5vw',
    marginBottom: '2vw',
  },
  inner: {
    width: '20vw',
    height: '0.5vw',
    background: 'white',
    borderRadius: '5vw',
  },
  bar: {
    height: '0.5vw',
    width: '100%',
    background: '#5b64db',
    borderRadius: '5vw',
    transition: 'transform 200ms',
    transformOrigin: 'left center',
  },
}

export default WaitScreen;
