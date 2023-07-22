import React from 'react'
import { Link } from 'react-router-dom';
function Home  (){
  return (
   <>
   <h1>This is the Home Page</h1>
   <Link to="/About" >Go to Aome Page</Link>

   </>
  )
}
export default Home;
// we also add the link in the home inside 