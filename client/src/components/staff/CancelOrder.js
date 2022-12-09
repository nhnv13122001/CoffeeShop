import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CancelOrder = (props) => {
  const [reply, setReply] = useState("")

  const handleCancelOrder = (e) =>{
    e.preventDefault()

    props.handleCancelOrder()
  }

  return (
    <Modal
    {...props}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Form id='modal-form' style={{ backgroundColor:"#DFD3C3" }} onSubmit={handleCancelOrder}>

    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
        Hủy đơn hàng
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Lý do</Form.Label>
        <Form.Control as="textarea" rows={5} value={reply} onChange={(e)=>{setReply(e.target.value)}}/>
      </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Trở về</Button>
      <Button className="px-4" variant='primary' type="submit" form='modal-form'>Hủy đơn</Button>
    </Modal.Footer>
    </Form>
  </Modal>
  )
}

export default CancelOrder