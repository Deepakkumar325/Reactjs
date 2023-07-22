import React from 'react'

 class Learn3 extends React.Component {
    constructor( ){
    super( );
    this.state = {
        count:0,
    }
    // This binding id=s necessary to this work in the callback fun
    this.handleClick = this.handleClick.bind(this);
}
     
    handleClick(){
        // this.setState({count:1})
        this.setState(prevState=>({
             count:prevState.count+1    
        }))
    }

 render(){
  return (
     <>  
     <p>Count Increase Using class Component</p>
     <h1>{this.state.count}</h1>
     <button onClick={this.handleClick}>Change</button>
     </>
  )}
  

  }
 export default Learn3;