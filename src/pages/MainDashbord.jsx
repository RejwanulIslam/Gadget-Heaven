import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function MainDashbord() {
  return (
    <div>
        <button className='btn btn-warning'><NavLink to="/maindashbord/favorite">FaVorite</NavLink> </button>
        <Outlet></Outlet>
    </div>
  )
}
