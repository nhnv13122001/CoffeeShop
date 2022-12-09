import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import RatingStar from './admin/RatingStar'

const FeedbackModal = (props) => {
  const [rating, setRating] = useState(1)
  const [comment, setComment] = useState("")

  const onSubmit = (e) =>{
    e.preventDefault()

    
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form style={{ backgroundColor:"#DFD3C3" }} onSubmit={onSubmit}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
          Đánh giá đơn hàng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Điểm đánh giá - {rating} sao</Form.Label>
          <RatingStar onRating={(idx)=>setRating(idx)} rating={rating}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Đánh giá</Form.Label>
          <Form.Control required as="textarea" rows={5} value={comment} onChange={(e)=>setComment(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Hủy</Button>
        <Button className="px-4" variant='primary' type="submit">Đánh giá</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default FeedbackModal