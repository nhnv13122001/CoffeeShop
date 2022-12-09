import React from 'react'
import { TbNotes } from 'react-icons/tb'
import SidebarItem from '../admin/SidebarItem'

const StaffSidebarNav = () => {
  return (
    <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
      <SidebarItem href="" title="Quản lý đơn hàng" icon={<TbNotes style={{ width:"30px", height:"30px" }}/>}/>
    </ul>
  )
}

export default StaffSidebarNav