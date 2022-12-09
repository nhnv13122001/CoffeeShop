import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import background from "../img/ContactPage/backgroudContact.png";
import DetailButton from './admin/DetailButton';
import OrderHistoryItem from './OrderHistoryItem';

const HistoryPage = () => {
  return (
    <div className='mb-5'>
        <Container fluid 
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: "80vh",
          backgroundSize:"100% 100%",
          display: "flex"
        }}> {/* <!------Introducer--> */}
            <Row className='my-auto ms-5'>
            <p id="p1">Lời cảm ơn từ IROSAS</p>
            <p id="p2">Chân thành cảm ơn quý khách</p>
            <p id="p3">IROSAS xin chúc quý khách một ngày tốt lành nhất.</p>
            </Row>  
            
        </Container> {/* <!-----End Introducer--> */}

        <Container className="mt-4" > {/* <!-------Body--> */}
          <p
            id="p4"
          >
            Lịch sử mua hàng
          </p>
      <Table responsive="lg" className='mt-3'>
        <thead>
          <tr style={{ verticalAlign:"middle" }}>
            <th>#</th>
            <th>Số lượng sản phẩm</th>
            <th>Trạng thái</th>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <OrderHistoryItem/>
          <OrderHistoryItem/>
        </tbody>
      </Table>
  </Container>
    </div>
  )
}

export default HistoryPage