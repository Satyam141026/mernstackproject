import React from 'react'
import { Navigate ,Outlet } from 'react-router-dom'

const Protected = () => {
    const auth=localStorage.getItem('data')
  return auth?<Outlet/>:<Navigate to="/signup"/>
}

export default Protected