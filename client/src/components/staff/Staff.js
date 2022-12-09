import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router'
import StaffSidebar from './StaffSidebar'

const Staff = () => {
  return (
    <div className='d-flex flex-row'>
      <StaffSidebar/>
      <Container fluid className='admin-container' style={{ backgroundColor: "#F8FAFB"}}>
        <Outlet/>
      </Container>
    </div>
  )
}

export default Staff