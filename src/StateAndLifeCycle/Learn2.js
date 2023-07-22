import React, { Component } from 'react'

 class Learn2 extends React.Component {
    constructor(){
    super();
    this.state ={

       count:0,
    }
}
// only one time run when component showing screen  first time
// componentDidUpdate(preProps,preState,snapshot){
//     console.log("this is componentDidUpdate",preState)

// }

shouldComponentUpdate(){

    console.log("shouldComponentUpdate",this.state.count);
    // return false  by default
    return true;
    // we also use condition here

}


render(){
    return (
     <>  
     <h1>ComponentDidUpdate</h1>
     <h1>{this.state.count}</h1>
     <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count</button>
    
     </>
  )
  }

 }
 export default Learn2;

// state update ke baad chlta hai render ke baad
// preState me when data update 1 so  it show 0


// shouldComponentUpdate()  it says kya mujhe update krna chahiye or not default it is false
// it mean is not update data show 
// but we return true so it will be update 
// and isme phle shouldComponentUpdate  run hota hai baad me Componentdidupdate 



// note:whatever data that you have access use {this} key  and if modify something use {setstate}

// ternary with style css=> styel{{display!props.name?"black":"none"}}
// same thing using class component

    //   const date  = new Date()
    //   const hours = new date.getHours();
    //   let timeDay;
    //   if(hours<12){
    //       timeDay = "moring";
    //   }
    //   else if(hours>=12 && hours <17)
    //   {
    //       timeDay = "afternoon"
    //   }
    //   else{
    //       timeDay="night"
    //   }