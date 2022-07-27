
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { productUrl } from '../config';
const Addproducts = () => {
  const[name,setName]=useState('');
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')
  const [userid,setUserid]=useState('')
  const [company,setCompany]=useState('')
  const [error,setError]=useState(false)
  
  async function collectData(){
    console.log(name,price,category,userid,company)
    if(!name || !price || !category || !userid || !company){
      setError(true)
    }
    if(name && price && category && userid && company){
      let data=await fetch(productUrl,
        { method:'POST',
        body:JSON.stringify({name,price,category,userid,company}),
        headers:{
          'Content-Type':'application/json',
          authentication:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        });
        data=await data.json();
        Swal.fire(
          'Good job!',
          'You add the  product',
          'success'
        )
        console.log(data)
       

    }
  }
  
    return (
      <div className='signup main'>
      <h1  className='sinput'>Add Product</h1>
      <input required type='text' placeholder='Enter the name' onChange={(e)=>{setName(e.target.value)}}   className='sinput'/><br></br>
      {error && !name && <span> <h1>Enter the name</h1></span>}
      <input required type='text' placeholder='Enter the Price' onChange={(e)=>{setPrice(e.target.value)}}   className='sinput'/><br></br>
      {error && !price && <span> <h1>Enter the price</h1></span>}
      <input required type='text' placeholder='Enter the Category' onChange={(e)=>{setCategory(e.target.value)}}   className='sinput'/><br></br>
      {error && !category && <span> <h1>Enter the category</h1></span>}
      <input required type='text' placeholder='Enter the UserId' onChange={(e)=>{setUserid(e.target.value)}}   className='sinput'/><br></br>
      {error && !userid && <span> <h1>Enter the userid</h1></span>}
      <input required type='text' placeholder='Enter the Company' onChange={(e)=>{setCompany(e.target.value)}}   className='sinput'/><br></br>
      {error && !company && <span> <h1>Enter the company</h1></span>}
      <input type='submit' onClick={()=>{collectData()}} className='sinput btn btn-warning'/><br></br>
  </div>
  
    )
}

export default Addproducts