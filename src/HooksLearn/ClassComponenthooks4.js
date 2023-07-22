import React from 'react'
// this is the class Component and  use as a hooks 

class ClassComponenthooks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0  // this.state.count + 1 as work 
        };
    }
  render(){
  return (
    <>
    <p>You Clicked {this.state.count} time</p>

    <button onClick={()=>{this.setState({ count:this.state.count + 1})}}>Click me</button>
    </>
  )
}
}

export default ClassComponenthooks;