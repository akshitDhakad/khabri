import React from 'react';
import "./style.css";
import { Link} from 'react-router-dom';


function Navbar() {
// filters sections*********************************************************

  // filters sections*********************************************************
// parameter handle  sections*********************************************************
  

  

  return (
    <div className='Navbar'>
      <div>
        <div className='container mainNavbar'>
          <div className='item nav-item1'><span className='b'>B</span><span className='b'>B</span><span className='b'>C</span></div>
          <Link className='item nav-ite' to={"/signup"}>Signup</Link>
          <div className='item nav-item3' >
            <button className='nav-Btn'> <Link to={"/"} className='nav-Btn'>Home</Link></button>
           
            <button className='nav-Btn'><Link to={"/top-headlines?category=general"}>General</Link></button>
            <button className='nav-Btn'><Link to={"/top-headlines?category=sports"}>Sport</Link></button>
          
            <button className='nav-Btn'><Link to={"/top-headlines?category=health"}>Future</Link></button>
            <button className='nav-Btn'><Link to={"/top-headlines?category=..."}>Travel</Link></button>
            <button className='nav-Btn'>
            <Link to={"/top-headlines?country=in"} id="topheading">
             
                <span className='topheadingspan1'></span>
                <span className='topheadingspan2'></span>
                <span className='topheadingspan3'></span>
                <span className='topheadingspan4'></span>
                Top-Headings
             
          </Link>


            </button>
            
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'brown' }}>
        <div className='container second-Navbar'>
          <div className='second-Navbar-item1'>NEWS</div>
          <div className='second-Navbar-item2'>
            <button  className='nav-Btn'><Link to={"..."}>Ukarine war</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=health"}>Health</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=climate"}>Climate</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=entertainment"}>Video</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=general"}>General</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=technology"}>Technology</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?country=us"}>Us</Link></button>
            <button  className='nav-Btn'><Link to={"/top-headlines?category=business"}>Business</Link></button>
            
            <button  className='nav-Btn'><Link to={"/top-headlines?category=science"}>Science</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
