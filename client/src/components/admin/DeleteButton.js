import React from 'react'
import { Button } from 'react-bootstrap'
import {RiDeleteBinLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DeleteButton = ({href, openDeleteModal}) => {
  return (
      <Button onClick={openDeleteModal} className='py-1 px-2 ms-2' variant='secondary'>
        <RiDeleteBinLine/>
      </Button>
  
  )
}

export default DeleteButton