import React, { Component } from 'react'

function Lift1  (props)  {
  return (
    <>
    <h2>User Name: {props.name
    }</h2>
    <button>Click Me</button>

     </>
  )
}

// Lifting State Up
// 1- Make a child Component
// 2- how to pass props to a child Component
// 3- send data child to parent
export default Lift1;


// App.js
// <div className='App'>
//         <h1>Lifting State Up</h1>
//         <Lift1 name={data} />
//       </div>