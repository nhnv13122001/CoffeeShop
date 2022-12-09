import React from 'react'
import { Nav } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { FiCoffee } from 'react-icons/fi'
import { TbBooks } from 'react-icons/tb'
import { BsBarChartFill } from 'react-icons/bs'
import { AiOutlineStar} from 'react-icons/ai'
import SidebarItem from './SidebarItem'

const SidebarNav = () => {
  return (
    <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
      <SidebarItem href="" title="Quản lý tài khoản" icon={<MdOutlineAccountCircle style={{ width:"30px", height:"30px" }}/>}/>
      <SidebarItem href="drinks"  title="Quản lý thức uống" icon={<FiCoffee style={{ width:"30px", height:"30px" }}/>}/>
      <SidebarItem href="categories"  title="Quản lý danh mục" icon={<TbBooks style={{ width:"30px", height:"30px" }}/>}/>
      <SidebarItem href="revenue"  title="Thông tin bán hàng" icon={<BsBarChartFill style={{ width:"30px", height:"30px" }}/>}/>
      <SidebarItem href="feedbacks"  title="Feedback của khách hàng" icon={<AiOutlineStar style={{ width:"30px", height:"30px" }}/>}/>
    </ul>
  )
}

export default SidebarNav