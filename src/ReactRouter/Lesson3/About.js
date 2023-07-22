
import React from 'react'
import { Link } from 'react-router-dom';

function About  (){
  return (
   <>
   <h1 style={{color:'red'}}>This is the About Page</h1>
   <p>
    <Link to="/" >Go to Home Page</Link>
    <Link to='/user/Deepak'>Deepak Profile</Link>
    <Link to='/user/Prince'>Prince Profile</Link>

   </p>
   </>
  )
}
export default About;
