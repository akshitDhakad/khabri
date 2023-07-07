import React from 'react'
import  "./style.css"
import { Link, useSearchParams } from 'react-router-dom'


function Navbar() {
  const [searchParams , setSearchParams] = useSearchParams()
  console.log(searchParams)
  return (
    <div className='Navbar'>
    <div>
    <div className='container mainNavbar'>
            <div className='item nav-item1'><span className='b'>B</span><span className='b'>B</span><span className='b'>C</span></div>
            <Link className='item nav-ite' to={"/signup"}>Signup</Link>
            <div className='item nav-item3' >
              <Link to={"/"} className='nav-Btn'>Home</Link>
              <button onClick={()=>setSearchParams({filter:"general"})} className='nav-Btn'>General</button>
              <button onClick={()=>setSearchParams({filter:"sports"})} className='nav-Btn'>Sport</button>
              <button onClick={()=>setSearchParams({filter:"entertainment"})} className='nav-Btn'>Reel</button>
              <button onClick={()=>setSearchParams({filter:"Worklife"})} className='nav-Btn'>Worklife</button>
              <button onClick={()=>setSearchParams({filter:"Future"})} className='nav-Btn'>Future</button>
              <button onClick={()=>setSearchParams({filter:"Travel"})} className='nav-Btn'>Travel</button>
            </div> 
        </div>
    </div>
    {/* className='item nav-item2' */}
      <div style={{backgroundColor:'brown'}}>
      <div className='container second-Navbar'>
          <div className='second-Navbar-item1'>NEWS</div>
          <div className='second-Navbar-item2'>
           
            <button onClick={()=>setSearchParams({country:"ua"})} className='nav-Btn'>Warn in Ukarine</button>
            <button onClick={()=>setSearchParams({filter:"health"})} className='nav-Btn'>Health</button>
            <button onClick={()=>setSearchParams({filter:"Climate"})} className='nav-Btn'>Climate</button>
            <button onClick={()=>setSearchParams({filter:"entertainment"})} className='nav-Btn'>Video</button>
            <button onClick={()=>setSearchParams({country:"World"})} className='nav-Btn'>World</button>
            <button onClick={()=>setSearchParams({country:"technology"})} className='nav-Btn'>Technology</button>
            <button onClick={()=>setSearchParams({country:"us"})} className='nav-Btn'>Uk</button>
            <button onClick={()=>setSearchParams({filter:"business"})} className='nav-Btn'>Business</button>
            <button onClick={()=>setSearchParams({filter:"Tech"})} className='nav-Btn'>Tech</button>
            <button onClick={()=>setSearchParams({filter:"Science"})} className='nav-Btn'>Science</button>
          </div>
        </div>
      </div>
       
   

    </div>
  )
}

export default Navbar