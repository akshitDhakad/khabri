import React,{useState} from 'react'
import "./style.css";

function Signup() {
    const[name, setName] =useState("")
    const[email, setEmail] =useState("")
    const[address, setAddress] =useState("")


    const handleClick= (e)=>{
        e.preventDefault();
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            FNAME: `${name}`,
            EMAIL: `${email}`,
            ADDRESS: `${address}`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }




  return (
    <div className='signup'>
        <form onSubmit={handleClick} class="register-form">
            <h6>Subscribe Us</h6>
            <div>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="fullname" placeholder="Full Name" required />
            </div>
            <div>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" placeholder="Email" required />
            </div>
            <div>
                <input value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" id="username" placeholder="Address" required />
            </div>
         
          
            <button type="submit">Register</button>
            
        </form>
    </div>
  )
}

export default Signup