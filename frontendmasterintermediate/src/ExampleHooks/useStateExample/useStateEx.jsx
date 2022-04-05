import React, { useEffect, useState } from "react";

const EuseStateEx = () => {
  
  const [myStyle, setmyStyle ] = useState({
    color : "blue",
    backgroundColor : "yellow"
  });

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000)
  
    return () => {
      clearTimeout(timer)
    }
  }) 
  
  
  const changecolor = (color,backgroundColor) =>{
    setmyStyle({...myStyle,color,backgroundColor })
  }
  return (
    <div className="App">
      <div>useStateEx</div>
      <button type="button" style={myStyle}  onClick={()=>changecolor('pink','black')}>Button</button>

      <div>
        <h1>useEffect Example : {time ? time.toLocaleTimeString() : ''}</h1>
      </div>
    </div>
    
  );
};

export default EuseStateEx;
