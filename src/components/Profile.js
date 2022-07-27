
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getSingleUrl } from '../config';
const Profile = () => {
  const[name,setName]=useState('');
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')
  const [userid,setUserid]=useState('')
  const [company,setCompany]=useState('')
  const [error,setError]=useState(false)
  const param=useParams()


  useEffect(()=>{
    collectData();
    
      },[])
     async  function collectData(){
        console.log(name,price,category,userid,company)
         let result= await fetch("http://localhost:5000/getsingle/"+param.id,
         {
          headers:{
            authentication:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
    
         }
         
         )
        result= await result.json()
        console.log('result of the profile',result)
        console.log(result[0].name,'result')
        setName(result[0].name)
        setPrice(result[0].price)
        setCategory(result[0].category)
        setUserid(result[0]._id)
        setCompany(result[0].company)
    console.log(param)
      }
  return (
    <div className='signup main'>
      <h1  className='sinput'>Profile</h1>
      <input value={name} type='text' placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}   className='sinput'/><br></br>
   
      <input value={price} type='text' placeholder='Enter the Price' onChange={(e)=>{setPrice(e.target.value)}}   className='sinput'/><br></br>
 
      <input value={category} type='text' placeholder='Enter the Category' onChange={(e)=>{setCategory(e.target.value)}}   className='sinput'/><br></br>
     
      <input value={company} type='text' placeholder='Enter the Company' onChange={(e)=>{setCompany(e.target.value)}}   className='sinput'/><br></br>
   
      </div>
  )
}

export default Profile