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


// when you start to learn  ReactRouter  Please find this page copy below code paste into app.js file
// ----------------------------------

 
// import { BrowserRouter ,Routes,Route} from 'react-router-dom';
// import Home from './ReactRouter/Lesson1/Home';
// import About from './ReactRouter/Lesson1/About';
// import Navbar from './ReactRouter/Lesson1/Navbar';
// import Page404 from './ReactRouter/Lesson1/Page404';
// import User from './ReactRouter/Lesson1/User';
// import Filter from './ReactRouter/Lesson2/Filter';
// import Protected from './ReactRouter/Lesson3/Protected';
// <div className='App'>
// <BrowserRouter>
// <Routes>

//     <Route path='/' exact element={<Home/>}/>
//     <Route path='/Navbar' element={<Navbar/>}/>
//      <Route path='/about' element= {<Protected Component = {About}/>} />  {/* protect the page when user login it open */}
//     <Route path="*" element={<Page404/>}/>
//     <Route path='/user/:name' element = {<User/>}/>
//     <Route path='/filter' element={<Filter/>}/>

// </Routes>
// </BrowserRouter>
// </div>