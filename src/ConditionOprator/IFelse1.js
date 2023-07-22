 // with class Component
 
// import React from "react";

//  class IFelse1 extends React.Component {
//         constructor(props){
//         super(props);
        
//         this.state={
//             Login : false,
//         }
//         this.handleLogout  = this.handleLogIn.bind(this);
//         this.handleLogIn = this.handleLogout.bind(this);
         
//     }

//    handleLogout(){
//     this.state.setState({Login:true});
//    }
//    handleLogIn(){
//     this.state.setState({Login:false});
//    }




//   render() {
//     const Login = this.state.Login;
//     let button;
//     if(Login){
//          button = <LogoutButton onClick={this.handleLogIn}/>
//     }
//          else{
//             button = <LoginButton onClick={this.handleLogout}/>
//          }

    
//     return (
//      <><Greeting Login={Login}/>
//      {button}</>
     
      
//     )
//   }
//   }

// export default IFelse1