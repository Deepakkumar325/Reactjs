import React from 'react'
import img from './mapfun/img.png';

function Learn2(){

function handleClick(){
    console.log("I Was Clicked");
}

  return (
     <>
     <img onMouseOver={()=>console.log("Hovered")}  
     src={img} alt=''
     />
     <button onClick={handleClick}>Click Me</button>

     </>
  )
}
export default Learn2;
