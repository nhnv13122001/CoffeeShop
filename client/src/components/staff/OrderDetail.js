import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import useDatabase from '../../hooks/useDatabase'
import TopAppBar from '../admin/TopAppBar'
import CancelOrder from './CancelOrder'

const OrderDetail = () => {
  const [showModal, setShowModal] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState({})
  const [drinkInOrder, setDrinkInOrder] = useState({})
  const [status, setStatus] = useState("")
  const {orders, setOrders} = useDatabase()

  useEffect(()=>{
    if(params && params.id){
      orders.map((ord)=> ord.id == params.id ? 
        setOrder(ord)
      : {})
    }

  }, [orders, params])  

  useEffect(()=>{
    setStatus(order.status)
  }, [order.status])

  const onSubmit = (e)=>{
    e.preventDefault()

    order.status = status 

    console.log(order)

    setOrders(
      orders.map((ord)=>ord.id == params.id ?
        order : ord
      ) 
    )

    navigate(-1)
  }

  const openModal = () =>{
    setShowModal(true)
  }

  const handleCancelOrder = () =>{
    order.status = "Đã hủy"

    setOrders(
      orders.map(ord=>
        ord.id == params.id ?
        order : ord
      ) 
    )

    navigate(-1)
  }

  const handleFinishOrder = () =>{
    order.status = "Đã giao"

    setOrders(
      orders.map(ord=>
        ord.id === params.id ?
        order : ord
      ) 
    )

    navigate(-1)
  }

  return (
    <div style={{ height:"100vh" }}>
      <TopAppBar title="Chi tiết đơn hàng"/>
      <Container fluid className="mt-3 px-4 d-flex align-items-center w-100 h-75" >
        <Row>
              <h4> Đơn hàng #{order.id}</h4>
              <p>
                <b className='me-2'>Người đặt:</b> {order.name_customer}
              </p>
              <p>
                <b className='me-2'>Địa chỉ:</b> {order.address}
              </p>
              <p>
                  <b className='me-2'>Số điện thoại:</b> {order.phone}
              </p>
              <p style={{ color: order.status === "Chờ xác nhận" ? 'orange' : order.status === "Đã giao" ? 'green' : order.status === "Đã hủy" ? 'red' : ''  }}>
                  <b style={{ color: "black" }} className='me-2'>Tình trạng giao hàng:</b> {order.status}
              </p>
              <p><b>Chi tiết thức uống: </b></p>
                <Table>
                      <thead>
                      <tr >
                        <th>Tên món</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th>Ghi chú</th>
                      </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td>Cafe</td>
                        <td >1</td>
                        <td>15.000</td>
                        <td>15.000</td>
                        <td>Ít đường</td>
                      </tr>
                      <tr>
                        <td>Trà</td>
                        <td>1</td>
                        <td>20.000</td>
                        <td>20.000</td>
                        <td>Ít đường</td>
                      </tr>
                      <tr>
                        <td>Cafe-sữa</td>
                        <td>1</td>
                        <td>25.000</td>
                        <td>25.000</td>
                        <td>Ít đường</td>
                      </tr>
                      <tr style={{ border: "0 solid transparent" }}>
                        <td></td>
                        <td></td>
                        <td><h5>Tổng cộng:</h5></td>
                        <td style={{ color: "#7d6e53" }}><h5>60 000đ</h5></td>
                        <td></td>
                    </tr>
                    </tbody>
                  </Table>
      <Form id="order-form" onSubmit={onSubmit}>
        <Row  style={{ visibility: (order.status !== "Đã hủy" && order.status !== "Đã giao") ? 'visible' : 'hidden' }}>
          <Col className='d-inline-flex' style={{ alignItems:"center" }}>
            Tình trạng đơn hàng: 
            <Form.Group controlId="formStatus">
              <Form.Select aria-label="Default select example" className='ms-4' value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Đang pha chế">Đang pha chế</option>
                <option value="Đang giao hàng">Đang giao hàng</option>
                <option value="Đã giao">Đã giao</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div>
          {
            order?.status === "Chờ xác nhận"
              ? (<Col className='float-end'>
                  <Button className="me-2" variant='outline-primary' onClick={()=>navigate(-1)}>Trở về</Button>
                  <Button className="me-2" variant='secondary' onClick={openModal}>Hủy đơn</Button>
                  <Button type="submit" variant='primary'>Xác nhận</Button>
                </Col>)
              : order?.status === "Đang giao hàng"
                ? (
                  <Col className='float-end'>
                    <Button className="me-2" variant='outline-primary' onClick={()=>navigate(-1)}>Trở về</Button>
                    <Button className="me-2" variant='secondary'>In hóa đơn</Button>
                    <Button variant='primary' onClick={handleFinishOrder}>Hoàn tất đơn hàng</Button>
                  </Col>
                )
                : order?.status === "Đang pha chế"
                  ? (
                    <Col className='float-end'>
                      <Button className="me-2" variant='outline-primary' onClick={()=>navigate(-1)}>Trở về</Button>
                      <Button type="submit" variant='primary'>Cập nhật</Button>
                    </Col>
                  )
                  : (<Col className='float-end'>
                      <Button className="me-2" variant='outline-primary' onClick={()=>navigate(-1)}>Trở về</Button>
                    </Col>)
          }
        </div>
      </Form>

      </Row>

      </Container>
      <CancelOrder handleCancelOrder={handleCancelOrder} show={showModal} onHide={()=>setShowModal(false)}/>

    </div>
  )
}

export default OrderDetail