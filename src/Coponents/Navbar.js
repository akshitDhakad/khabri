import React from 'react'
import  "./style.css"
function Navbar() {
  return (
    <div className='Navbar'>
    <div>
    <div className='container mainNavbar'>
            <div className='item nav-item1'><span className='b'>B</span><span className='b'>B</span><span className='b'>C</span></div>
            <div className='item nav-item2'> Sign in</div>
            <div className='item nav-item3' >
              <div className='nav-Btn'>Home</div>
              <div className='nav-Btn'>News</div>
              <div className='nav-Btn'>Sport</div>
              <div className='nav-Btn'>Reel</div>
              <div className='nav-Btn'>Worklife</div>
              <div className='nav-Btn'>Future</div>
              <div className='nav-Btn'>Travel</div>
            </div>
        </div>
    </div>
     
      <div style={{backgroundColor:'brown'}}>
      <div className='container second-Navbar'>
          <div className='second-Navbar-item1'>NEWS</div>
          <div className='second-Navbar-item2'>
            <div className='nav-Btn'>Home</div>
            <div className='nav-Btn'>Warn in Ukarine</div>
            <div className='nav-Btn'>Coronavirus</div>
            <div className='nav-Btn'>Climate</div>
            <div className='nav-Btn'>Video</div>
            <div className='nav-Btn'>World</div>
            <div className='nav-Btn'>Asia</div>
            <div className='nav-Btn'>Uk</div>
            <div className='nav-Btn'>Business</div>
            <div className='nav-Btn'>Tech</div>
            <div className='nav-Btn'>Science</div>
          </div>
        </div>
      </div>
       
   

    </div>
  )
}

export default Navbar