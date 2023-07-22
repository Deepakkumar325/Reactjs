import React ,{useState}from 'react'

class Index3 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"Ayush Singh",
            
            
        }
     }
     componentDidMount(){
        console.log("This is componentDidMount")
     }
     
     
     
     render(){
      console.log("Render Run")
  return (
    <>
    <h1> Life Cycle Method ComponentDidMount </h1>
    <h2>It Is state :- {this.state.name}</h2>
     
    <button onClick={()=>this.setState({name : "Deepak Kumar"})}>Clicked</button>
    </>
  )
}
}
export default Index3;

//  In This we will learn life cycle Method
// when data render it run 
// most common use case for componentdidmount is to 
// do thing  like  api call when you need to get from some kind of external sources 
// maybe thic component is actually

// rec shortcut
