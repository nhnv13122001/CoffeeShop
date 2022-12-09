//type:       "npm i mdb-react-ui-kit"
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import background from "../img/ContactPage/backgroudContact.png";
import CartItem from "./CartItem";
import Payment from "./Payment";
import { useCart } from "react-use-cart";
import $ from "jquery";

const CartPage = ({ id }, quantity) => {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  const [paymentModal, setShowPaymentModal] = useState(false);
  const showModal = () => setShowPaymentModal(true);
  const { items, cartTotal } = useCart();
  const handleAddOrder = (order) => {
    console.log(order);
    $.ajax({
      method: "POST",
      url: "http://localhost/Coffeeshop/server/order/order.php",
      data: JSON.stringify(order),
      success(response) {
        const realrespone = JSON.parse(response);
        if (realrespone.result.status === 1) {
          alert(realrespone.result.message);
        } else {
          alert(realrespone.result.message);
        }
      },
    });
  };
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "80vh",
          backgroundSize: "100% 100%",
          display: "flex",
        }}
      >
        {" "}
        {/* <!------Introducer --> */}
        <Row className="my-auto ms-5">
          <p id="p1">Thưởng thức hương vị</p>
          <p id="p2">nguyên chất</p>
          <p id="p3">Sự hài lòng của bạn là niềm động lực của chúng tôi !</p>
        </Row>
      </Container>{" "}
      {/* <!-----End Introducer--> */}
      <Container className="mt-4">
        {" "}
        {/* <!----Body Part--> */}
        <span id="p2">Giỏ hàng</span>
        <Table responsive className="mt-3">
          <thead>
            <tr style={{ verticalAlign: "middle" }}>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  className="border-bottom border-5 border-white"
                  image={item.photo}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
            <tr
              className="border-bottom border-5 border-white"
              style={{ verticalAlign: "middle" }}
            >
              <td></td>
              <td></td>
              <td></td>
              <td className="ms-3 text-center">
                <h5>Tổng cộng:</h5>
              </td>
              <td className="ms-3 text-center" style={{ color: "#7d6e53" }}>
                <h5>{cartTotal.toLocaleString()}</h5>
              </td>
              <td>
                <Button
                  className="w-100"
                  variant="primary"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Thanh toán
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Payment
        addOrder={handleAddOrder}
        show={paymentModal}
        onHide={() => setShowPaymentModal(false)}
      />
    </div>
  );
};
export default CartPage;

//====================================================================
// const CartPage = () => {
//   return (
//     <div>CartPage</div>
//   )
// }

// export default CartPage
