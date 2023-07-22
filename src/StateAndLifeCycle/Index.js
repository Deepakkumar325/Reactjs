import React from 'react'

function Index  (props)  {
  return (
    <>
    <p>This Using Props function</p>
    <h1>Hello ,World</h1>
    <h2>It is {props.name}</h2>
    </>
  )
}

export default Index;

// this is the props pass we use 
// if we pass through props 
// we write like this 
// src = {props.img}
// alt = {props.user.name}

// this folder when you want to learn before you put below code in your app.js file so that it will be run

// import Index from '../src/StateAndLifeCycle/Index'
// import Index1 from '../src/StateAndLifeCycle/Index1';
// import Index2 from './StateAndLifeCycle/Index2';
// import Index3 from './StateAndLifeCycle/Index3';

{/* <Index name = "Deepak"/>
<Index1 name="Ayush"/>
<Index2/>
<Index3/>    */}
