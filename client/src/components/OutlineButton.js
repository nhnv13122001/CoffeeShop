import React from 'react'
import { Button } from 'react-bootstrap'

const OutlineButton = ({text, onClick, className}) => {
  return (
    <Button className={className} variant='outline-primary' onClick={onClick}>{text}</Button>
  )
}

export default OutlineButton