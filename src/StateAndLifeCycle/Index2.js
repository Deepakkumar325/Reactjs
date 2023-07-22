import React from 'react'

class Index2 extends React.Component  {
    constructor(props)  // At first this run sbse phle
    {
        super(props);
        this.state = {
            name:"deepak"

        }
        console.log("first constructor Run");
    }
  render(){ // second run this 
    console.log("Second render run")
    return(
        <>
        <h1 style={{color:'orange'}}>Adding constructor that assigns the state</h1>
        <h2>It is {this.state.name}</h2>
        </>
    )
  }
  
}
export default Index2;

// here we pass the props 