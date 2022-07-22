import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const auth=localStorage.getItem('data')
  const navigate=useNavigate()
  function logout(){
   
  localStorage.clear()
  navigate('/signup')
  }
  return (
    <div className='header d-flex justify-content-center '>
        {auth ? <ul className='right' >
            <li> <Link className='link' to="/">Product</Link></li>
            <li> <Link className='link' to="/addproducts">Add Products</Link></li>
            <li> <Link className='link' to="/updateproducts/:id">Update Product</Link></li>
            <li> <Link className='link' to="/profile">Profile</Link></li>
     
         <li><Link onClick={()=>{logout()}} className='link' to="/signup">Logout</Link></li>
         </ul>   
          :
          <>
          <ul>
          <li><Link className='link' to="/signup">Signup</Link></li>
          <li> <Link className='link' to="/login">login</Link></li>
          </ul>
          </>
            }
          
 
    </div>
  )
}

export default Header;