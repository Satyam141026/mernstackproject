import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
const[name,setName]=useState('');
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [error,setError]=useState(false)
const navigate=useNavigate();
useEffect(()=>{
  const auth=localStorage.getItem('data');
  if(auth){
    navigate('/')
  }

},[])
/* 
}
 */
async function collectData(){
  console.log(name,password,email)
  if(!name || !password || !email){
    setError(true)
  }
  if(name && password && email){
    fetch('http://localhost:5000/post', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({name,password,email}),
      headers: {
        'Content-Type': 'application/json',
      }
     
    })
    .then(response => response.json())
    .then(data => {
      
     
      console.log('Success:', data);
      localStorage.setItem('data',JSON.stringify(data));
      navigate('/')
   
  
    })
    .catch((error) => {
      Swal.fire({
        title: error,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    });
        

  }



}
  return (
    <div className='signup main'>
          <h1  className='sinput'>Signup</h1>
          <input required type='text' placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}   className='sinput'/><br></br>
         {error && !name && <span> <h1>Enter the name</h1></span>}
          <input required type='password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}  className='sinput'/><br></br>
          {error && !password && <span> <h1>Enter the password</h1></span>}
          <input required type='email' placeholder='Enter the Email ' onChange={(e)=>{setEmail(e.target.value)}}  className='sinput'/><br></br>
          {error && !email && <span> <h1>Enter the Email</h1></span>}
          <input type='submit' onClick={()=>{collectData()}} className='sinput btn btn-warning'/><br></br>
    </div>

 
  )
}

export default Signup