import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const DetailButton = ({href}) => {
  return (
    <Link to={href}>
      <Button className='py-1 px-2' variant='dark'>
        <AiOutlineEye/>
      </Button>
    </Link>
    
  )
}

export default DetailButton