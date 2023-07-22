//  this is the Functional based Component

// Hooks at a Glance 
import React, { useEffect, useState } from 'react'
   

function HooksGlance () {
    // declare multiple state variables
    const[age, setAge] = useState(10);
    const [fruit, setFruit]  = useState('banana')
    const [todos,setTodos] = useState([{text:'Learn Hooks'}]); // I only use this becuse see it

    useEffect(()=>{
        document.write(`You clicked  My age ${age} times`);
    },[setAge])
  return (
    <>
    <li>{todos}</li>
    <button onClick={()=>{setTodos({text:'Learn Hooks'})}}>Click Me</button>

    <p>My age {age}</p>
    <button onClick={()=>{setAge(age+1)}}>Click Me</button>
   
    </>
  )

}

export default HooksGlance;
