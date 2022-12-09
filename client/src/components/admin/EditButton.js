import React from 'react'
import { Button } from 'react-bootstrap'
import { RiPencilLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const EditButton = ({href, openEditModal}) => {
  return (
      <Button className='py-1 px-2' onClick={openEditModal} variant='dark'>
        <RiPencilLine/>
      </Button>
  )
}

export default EditButton