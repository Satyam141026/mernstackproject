import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const Signup = () => {
const[name,setName]=useState('');
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [error,setError]=useState(false)
const navigate=useNavigate();
const [up,setUp]=useState("")

const handleChange=async(e)=>{

console.log("changed",e[0]);
setUp(e[0])
}

useEffect(()=>{
  const auth=localStorage.getItem('data');
  if(auth){
    navigate('/')
  }

},[])
/* 
}
 */
async function collectData(e){
  e.preventDefault();

  let data=new FormData()
  data.append("file",up)
   data.append("name",name)
  data.append("currunt-password",password)
  data.append("email",email) 
  console.log(data)

  console.log(name,password,email)
  if(!name || !password || !email){
    setError(true)
  }
  
  if(name && password && email){
/*     fetch('http://localhost:5000/post', {
      method: 'POST',data 
     
    })
    .then(response => response.json()) */
 await axios({ method: "POST",
  /*  url: 'https://ancient-oasis-43602.herokuapp.com/api/upload', headers:{ */
   url: 'http://localhost:5000/post'
  
   ,data})
    .then(data => {
      
     
      console.log('Success: of the sign up', data);
      localStorage.setItem('data',JSON.stringify(data.data.result));
      localStorage.setItem('token',JSON.stringify(data.data.auth));
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
      <form onSubmit={(e)=>{collectData(e)}}>
            <h1  className='sinput'>Signup</h1>
            <input required type='text' name="name" placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}   className='sinput'/><br></br>
            {error && !name && <span> <h1>Enter the name</h1></span>}
            <input required type='password' name='currunt-password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}  className='sinput'/><br></br>
            {error && !password && <span> <h1>Enter the password</h1></span>}
            <input required type='email' name='email' placeholder='Enter the Email ' onChange={(e)=>{setEmail(e.target.value)}}  className='sinput'/><br></br>
            {error && !email && <span> <h1>Enter the Email</h1></span>}
            <input required type='file' name='file' placeholder='upload the files ' onChange={(e)=>{handleChange(e.target.files) }}  className='sinput'/><br></br>
            <input type='submit' className='sinput btn btn-warning'/><br></br>

      </form>
        
    </div>

 
  )
}

export default Signup