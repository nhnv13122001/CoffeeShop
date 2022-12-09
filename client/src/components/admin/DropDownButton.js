import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const DropDownButton = ({text, className, startLogo, openStaffModal, openManagerModal}) => {

  return (
    <Dropdown>
      <Dropdown.Toggle className={className} variant="primary" id="dropdown-basic">
        {startLogo}
        {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="" onClick={openStaffModal}>Thêm nhân viên</Dropdown.Item>
        <Dropdown.Item href="" onClick={openManagerModal}>Thêm quản lý</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownButton