import React, {useEffect, useState} from 'react'
import { Badge, Button, Form, Modal } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useCart } from 'react-use-cart';
import useDatabase from "../hooks/useDatabase";
import $ from 'jquery';

const Payment = (props) => {
  const {auth} = useAuth()
  const [name_customer, setNameCustomer] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState('0');
  const location = useLocation;
  const abc = (e) => {
    e.preventDefault();
    props.addOrder({ name_customer, phone_number, address });
    console.log({ name_customer, phone_number, address });
    setNameCustomer("");
    setPhoneNumber("");
    setAddress("");
    setTotal("0")
    props.onHide();
  };
  const { 
      items,
      cartTotal,
      totalUniqueItems,
  } = useCart();
  const { orders, setOrders, getOrders } = useDatabase();
  useEffect(() => {
    getOrders();
  }, []);
  

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={abc}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center" style={{ color: "#7d6e83", fontStyle: "italic", fontSize: "30px" }}>
          Thanh toán
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
        auth?.user ? 
      
        (<div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span>Giỏ hàng của bạn</span>
            <Badge bg="secondary" className="rounded-pill">{totalUniqueItems}</Badge>
          </h4>
          <ul class="list-group mb-3">
              {items.map((item) => {
                return (
                  <li class="list-group-item d-flex justify-content-between lh-sm" style={{ backgroundColor: "#DFD3C3" }}>
                    <div>
                      <h6 class="my-0">{item.name} x {item.quantity}</h6>
                      <small class="text-muted"></small>
                    </div>
                    <span class="text-muted">{(item.price * item.quantity).toLocaleString()}</span>
                  </li>
                )
              })}
            <div id="TIPS">
              <li class="list-group-item d-flex justify-content-between" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Phí giao hàng</h6>
                </div>
                <span>
                  + 15.000
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between" style={{ backgroundColor: "#DFD3C3" }}>
                <span>Tổng cộng (VND)</span>
                <h5 style={{ color: "#7D6E83" }} onLoad={(e) => setTotal(e.target.value)}><strong>{(cartTotal + 15000).toLocaleString()}</strong></h5>
              </li>
            </div>
          </ul>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Thông tin nhận hàng</h4>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="name" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" id="name" required onChange={(e) => setNameCustomer(e.target.value)}/>
                <div class="invalid-feedback">
                  Vui lòng nhập họ và tên.
                </div>
              </div>
  
              <div class="col-sm-6">
                <label for="phonenumber" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="phonenumber" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                <div class="invalid-feedback">
                  Vui lòng nhập số điện thoại
                </div>
              </div>
  
              <div class="col-12">
                <label for="address" class="form-label">Địa chỉ</label>
                <input type="text" class="form-control" id="address" required onChange={(e) => setAddress(e.target.value)}/>
                <div class="invalid-feedback">
                  Vui lòng nhập địa chỉ nhận hàng.
                </div>
              </div>
            </div>
  
            <hr class="my-4"/>
  
  
            <h4 class="mb-3">Thông tin thanh toán</h4>
  
            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="credit">Thẻ tín dụng</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="debit">Thẻ ghi nợ</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>
  
            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">Tên trên thẻ</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small>
                <div class="invalid-feedback">
                  Vui lòng nhập tên trên thẻ
                </div>
              </div>
  
              <div class="col-md-6">
                <label for="cc-number" class="form-label">Số thẻ tín dụng</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập số thẻ tín dụng
                </div>
              </div>
  
              <div class="col-md-6">
                <label for="cc-expiration" class="form-label">Ngày hết hạn</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập ngày hết hạn
                </div>
              </div>
              <div class="col-md-6">
                <label for="cc-cvv" class="form-label">CVC/CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập mã bảo mật
                </div>
              </div>
            </div>
        </div>
      </div>) :
      (<div className='text-center'>
        <h3>Vui lòng đăng nhập để thanh toán</h3>
        <Link to="/login" state={{ from: location }} replace><Button>Đăng nhập</Button></Link>
      </div>)

      }
      
      </Modal.Body>
      {
        auth?.user ?
        <Modal.Footer>
        <Button variant="primary" type="submit" className="w-100">Thanh toán</Button>
      </Modal.Footer> : <></>
      }
      
      </Form>
    </Modal>
  )
}

export default Payment