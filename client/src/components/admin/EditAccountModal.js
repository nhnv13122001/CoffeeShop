import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const EditAccountModal = (props) => {
  const [email, setEmail] = useState(props.account.email)
  const [name, setName] = useState(props.account.name)
  const [phone, setPhone] = useState(props.account.phone)
  const [address, setAddress] = useState(props.account.address)

  const onSubmit = (e)=>{
    e.preventDefault()

    if(!email){
      alert("Vui lòng nhập email")
      return
    }
    if(!name){
      alert("Vui lòng nhập tên")
      return
    }
    if(!phone){
      alert("Vui lòng nhập số điện thoại")
      return
    }
    if(!address)
    {
      alert("Vui lòng nhập địa chỉ")
      return
    }
    console.log({...props.account, email: email, name: name, phone: phone, address: address})
    props.editAccount({...props.account, email: email, name: name, phone: phone, address: address})


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
          Chỉnh sửa tài khoản
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập tên" value={name} onChange={(e)=>setName(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="tel" placeholder="Nhập số điện thoại" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Nhập địa chỉ" value={address} onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Hủy</Button>
        <Button className="px-4" variant='primary' type="submit">Lưu</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditAccountModal