import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'

const AddButton = ({text, className, style, showDropdown, onClick}) => {
  return (
    <Button variant="primary" onClick={onClick} className={className} style={style}>
      <AiOutlinePlus className='me-2'/>{text}
      {showDropdown? <RiArrowDropDownLine className='ms-2'/>: null}
    </Button>
  )
}

export default AddButton