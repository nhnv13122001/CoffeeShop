import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div className='d-flex flex-row'>
      <Sidebar/>
      <Container fluid className='admin-container' style={{ backgroundColor: "#F8FAFB"}}>
        <Outlet/>
      </Container>
    </div>
  )
}

export default Admin