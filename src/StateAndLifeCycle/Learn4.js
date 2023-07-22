import React from 'react'

 class Learn4 extends React.Component{
     
  componentWillUnmount(){
   console.warn("componentWillUnmount called")
  }
render(){

    return (
        <div className='App'>
        <h1>Student Component</h1>
      
        </div>
        
        )
    }
}
export default Learn4;

// rec shortcut

// App.js file 
// class App extends React.Component {
//     constructor()
//     {
//       super();
//       this.state = {
//         show:false, 
  
//       }
//     }
//     render() {
//       return (
//          <div className='App'>
//           {
//             this.state.show ?<Learn4/>:<h1>Child component Removed</h1>
//           }
         
//           {/* <h1>ComponentWillUnmount</h1> */}
//           <button onClick={()=>this.setState({show:this.state.show})}>Toggle Child</button>
//          </div>
//       )
//     }
//   }
//   export default App;

//


// componentWillUnmount when run

// whenever component  remove from the dom then it called
