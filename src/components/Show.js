import React, { useState } from 'react'

const Show = () => {
 

        let auth=localStorage.getItem('data');
        auth=JSON.parse(auth)
   
        console.log(auth.img)

        let imgurl=`http://localhost:5000/uploads/${auth.img}`;
    
  return (
    <div className='area' >

    
<div className="container text-center">
  <div className="row">
    <div className="col">
    <div className='showData'>    <h1>User Detail</h1></div>
    <div className='showData'><h1>Id:{auth._id}</h1></div>
    <div className='showData'><h1>Name:{auth.name}</h1></div>
    <div className='showData'><h1>Email:{auth.email}</h1></div>
    </div>
    <div className="col">
    <img src={imgurl} width="300" height="300" />
    </div>
    
  </div>
</div>


    
    </div>
  )
}

export default Show