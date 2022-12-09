import React from 'react'
import { Link } from 'react-router-dom'
import StaffSidebarNav from './StaffSidebarNav'

const StaffSidebar = () => {
  return (
    <div className='d-flex flex-column flex-shrink-0 fixed-bar p-2' style={{ backgroundColor: "#DFD3C3" }}>
      <Link style={{ textDecoration:"none" }} to="/"><h2 className='ms-4' style={{ color: "#7D6E83" }}>Irosas</h2></Link>
      <StaffSidebarNav/>
    </div>
  )
}

export default StaffSidebar