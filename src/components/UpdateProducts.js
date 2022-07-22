import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getSingleUrl } from '../config';


const UpdateProducts = () => {
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
     let result= await fetch("http://localhost:5000/getsingle/"+param.id)
    result= await result.json()
    console.log(result[0].name,'result')
    setName(result[0].name)
    setPrice(result[0].price)
    setCategory(result[0].category)
    setUserid(result[0]._id)
    setCompany(result[0].company)
console.log(param)
  }
  async function updateData(){
    let data=await fetch('http://localhost:5000/update/'+userid,
   { method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({name,price,category,company })
}
    )
    if(data){
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

  }
  return (
    <div className='signup main'>
      <h1  className='sinput'>Update Product</h1>
     
      <input value={name} type='text' placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}   className='sinput'/><br></br>
      {error && !name && <span> <h1>Enter the name</h1></span>}
      <input value={price} type='text' placeholder='Enter the Price' onChange={(e)=>{setPrice(e.target.value)}}   className='sinput'/><br></br>
      {error && !price && <span> <h1>Enter the price</h1></span>}
      <input value={category} type='text' placeholder='Enter the Category' onChange={(e)=>{setCategory(e.target.value)}}   className='sinput'/><br></br>
      {error && !category && <span> <h1>Enter the category</h1></span>}
      <input value={company} type='text' placeholder='Enter the Company' onChange={(e)=>{setCompany(e.target.value)}}   className='sinput'/><br></br>
      {error && !company && <span> <h1>Enter the company</h1></span>}
      <input type='submit' onClick={()=>{updateData()}} className='sinput btn btn-warning'/><br></br>
  </div>
  )
}

export default UpdateProducts