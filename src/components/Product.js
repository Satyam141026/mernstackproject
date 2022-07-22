import React, { useEffect, useState } from 'react'
import { productGetUrl } from '../config';
import {Link} from 'react-router-dom'
const Product = () => {
  let [data,setData]=useState([])



  useEffect(()=>{
productList();
  },[])
  async function deleteData(id){
    //console.log('id',id)
    let data= await fetch(`http://localhost:5000/productlist/${id}`,
    {
      method:'DELETE'
    })
    console.log(data)
    if(data){
      productList();
    }
    else{
      console.log("data is not deleted");
    }



  }
  async function productList(){
     let result= await fetch(productGetUrl)
     result= await result.json()
     setData(result)

     
  }
  async function searchData(e){
    
    let key=e.target.value
    
    if(key){
      let result= await fetch(`http://localhost:5000/search/${key}`)
    result= await result.json() 
    console.log(result,'result')
      setData(result)
    }
    else{
      productList();
    }



  }
  return (
    <div className='signup main'>
            <h1  className='sinput'>Product List</h1>
       <input className='search' type='text' placeholder='Enter the name' onChange={(e)=>{searchData(e)}} /><br></br>
      <table className="table" >
      <thead>
        <tr>
        <th>UserId</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Company</th>
        <th>Action</th>
        </tr>
        
      </thead>
      <tbody>
      {data.length>0 && data.map((cv,index,arr)=>{
     return(
      <tr  key={index}>
      <td>{cv._id}</td>
      <td>{cv.name}</td>
      <td>{cv.company}</td>
      <td>{cv.category}</td>
      <td>{cv.price}</td>
      <td>
        <button onClick={()=>{deleteData(cv._id)}}>Delete</button>
        <Link className='link' to={`/updateproducts/${cv._id}`}>Update</Link>
      </td>
 
      </tr>
     )
         
      })
      }
          </tbody>
    </table>
      </div>

  )
}

export default Product;