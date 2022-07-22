import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
    const navigate=useNavigate();
    const [password,setPassword]=useState('')
            const [email,setEmail]=useState('')
useEffect(()=>{

    const auth=localStorage.getItem('data');
    if(auth){
      navigate('/')
    }


},[])


       async function collectData(){
            let data=await fetch('http://localhost:5000/login',
            {
                method:'POST',
                body: JSON.stringify({email,password}),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            data= await data.json();
            console.log(data,'success')
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
            if(data.email){
                localStorage.setItem('data',JSON.stringify(data.name));
                navigate('/')


            }
            else{
                alert('please Enter the detail above')

            }




            }
        return (
        <div className='signup main'>
                <h1  className='sinput'>Login</h1>
                <input required type='email' placeholder='Enter the Email ' onChange={(e)=>{setEmail(e.target.value)}}  className='sinput'/><br></br>
                <input required type='password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}  className='sinput'/><br></br>
                
                <input type='submit' onClick={()=>{collectData()}} className='sinput btn btn-warning'/><br></br>
            </div>
        )
}

export default Login