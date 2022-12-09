import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CheckButton = ({href}) => {
  return (
    <Link to={href}>
      <Button className='py-1 px-2' variant='success'>
        <AiOutlineCheck/>
      </Button>
    </Link>
  )
}

export default CheckButton