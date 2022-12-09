import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const DeleteModal = (props) => {

  const onSubmit = (e)=>{
    e.preventDefault()

    props.deleteAccount(props.account.id)

    props.onHide()
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
          Xóa tài khoản
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Bạn có chắc chắn muốn xóa tài khoản này?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Hủy</Button>
        <Button className="px-4" variant='primary' type="submit">Xóa</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DeleteModal