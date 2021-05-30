import React from "react";

const Planet = ({size, position, rotate, className}) => {
  let rotation = 1
  if(rotate)
    rotation = -1
  
  return (
    <div 
      className={className}
      style={{
        width: (size+2) + "vw", 
        height: (size+2) + "vw",
        left: position.x + "vw",
        top: position.y + "vw"
      }}>
      <div className="disque" style={{width: (size+1.5) + "vw", height: (size+1.5) + "vw", transform: "skewX(" + 50*rotation + "deg)"}} />
      <div className="cercle" style={{width: size + "vw", height: size + "vw"}} />
    </div>
  );
}

Planet.defaultProps = {
  rotate: false
};

export default Planet;