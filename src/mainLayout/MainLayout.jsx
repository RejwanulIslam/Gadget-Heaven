import React from 'react'
import Navbar from '../compoment/Navbar'
import Hading from '../compoment/Hading'
import { Outlet } from 'react-router-dom'
import Fotter from '../compoment/Fotter'

export default function MainLayout() {
  return (
    <div>
        {/* navbar */}
        <Navbar></Navbar>
        {/* hading */}
        <Outlet></Outlet>
        {/* card */}
        {/* fotter */}
        <Fotter></Fotter>
    </div>
  )
}
