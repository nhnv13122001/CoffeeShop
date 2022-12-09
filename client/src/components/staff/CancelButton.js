import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CancelButton = ({href}) => {
  return (
    <Link to={href}>
      <Button className='py-1 px-2 ms-2' variant='danger'>
        <AiOutlineClose/>
      </Button>
    </Link>
  )
}

export default CancelButton