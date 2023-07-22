// we apply protect Router in the pages 

import React from 'react'
 import { Link } from 'react-router-dom';

function Navbar () {
  return (
     <>
     <center>
      <h1>This is the Navbar </h1>
      <p>I am Navbar Here Are The Router Link</p>
      <Link to="/" >Go to Home Page</Link><br></br>
      <Link to="/about" >Go to About Page</Link>


      </center>
     </>
  )
}
export default Navbar;

// why we use anchor tag insted of Reactrouter why use
// beacuse when we use anchor tag  click the link  reload the page bhavous as html css page but we use reac
// roucter it not reload the page