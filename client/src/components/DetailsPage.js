import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import useDatabase from "../hooks/useDatabase";
import background from "../img/ContactPage/backgroudContact.png";
import RatingStar from './admin/RatingStar';
import { useCart } from 'react-use-cart';

const DetailsPage = ({id}) => {
  const params = useParams()
  const {drinks} = useDatabase()
  const [drink, setDrink] = useState({})
  const [quantity, setQuantity] = useState(1)

  const { items, addItem } = useCart();
  useEffect(()=>{
    console.log(items);
  },[])
  function increment() {
    setQuantity(function (prevQuantity) {
      return (prevQuantity += 1);
    });
  }
  function decrement() {
    setQuantity(function (prevQuantity) {
      if (prevQuantity > 0) {
        return (prevQuantity -= 1); 
      } else {
        return (prevQuantity = 0);
      }
    });
  }
  

  useEffect(()=>{
    drinks.map((d)=>d.id==params.id?setDrink(d):<></>)
  }, [drinks, params.id])


  return (
    <div className='mb-5 ms-3 me-3'>
        <Container fluid> {/* <!------Introducer--> */}
            <Row>
              <Col sm={4}><img src={drink.photo} style={{ width: "100%" }} alt="" /></Col>
              <Col className='ms-3 my-auto'>
                <Row className='d-flex'>
                  <h3>{drink.name}</h3>
                  <h5>{drink.price && drink.price.toLocaleString()}đ</h5>
                  <Col className='d-flex align-items-center'>
                    <AiOutlineMinusCircle className='ms-3' onClick={decrement} style={{ width: "32px", height: "32px", cursor: "pointer" }}/>
                    <Form.Control min={1} className='ms-3 text-center' type='number' value={quantity} onChange={(e)=>setQuantity(e.target.value)} style={{ width: "100px", backgroundColor:"#DFD3C3"}}/>
                    <AiOutlinePlusCircle className='ms-3 me-auto' onClick={increment} style={{ width: "32px", height: "32px", cursor: "pointer" }}/>
                  </Col>
                  <p className='mt-3'>Ghi chú</p> 
                  <Form.Control as="textarea" className='w-75' rows={7}/>
                  <Button className='w-75 mt-4' variant="primary" onClick={() => {addItem(drink, quantity)}} ><h5>Thêm vào giỏ hàng</h5></Button>
                </Row>
              </Col>
            </Row>  
            <Row>
              <h3>Thông tin sản phẩm</h3>
              <p>{drink.description}</p>
            </Row>
            <h3>Đánh giá của người dùng khác</h3>
            <Container fluid className='p-3' style={{ backgroundColor: "#D9D9D9" }}>
              <Row className='m-3 p-2' style={{ backgroundColor: "white" }}>
                <Col className="d-flex align-items-center">
                  <img src="/images/profile_pic.jpg" alt="userprofile" className='user-nav me-2'/>
                  <h5 className='my-0 ms-2 p-0'>Lộc Minh Hiếu</h5>
                </Col>
                <RatingStar className="mt-2 mb-2" onRating={()=><></>} rating={5} disabled/>
                <span>Cà phê ngon, giúp tỉnh táo rất nhanh. Sản phẩm chất lượng, lần tới sẽ ủng hộ tiếp.</span>
              </Row>

              <Row className='m-3' style={{ backgroundColor: "white" }}>
                <Col className="d-flex align-items-center">
                  <img src="/images/profile_pic.jpg" alt="userprofile" className='user-nav me-2'/>
                  <h5 className='my-0 ms-2 p-0'>Lộc Minh Hiếu</h5>
                </Col>
                <RatingStar className="mt-2 mb-2" onRating={()=><></>} rating={4} disabled/>
                <span>Cà phê ngon, giúp tỉnh táo rất nhanh. Sản phẩm chất lượng, lần tới sẽ ủng hộ tiếp.</span>
              </Row>

              <Button variant="secondary">Xem thêm feedback khác</Button>
            </Container>
            
        </Container> {/* <!-----End Introducer--> */}
    </div>
  )
}

export default DetailsPage