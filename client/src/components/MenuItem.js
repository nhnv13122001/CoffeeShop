import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

const MenuItem = ({ id, img, name, price }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/drinks/${id}`);
  };

  return (
    <Card
      style={{ borderRadius: "10pt", cursor: "pointer" }}
      onClick={navigateToDetail}
    >
      <Card.Body className="px-0 pt-0 pb-2">
        <img className="img-bestSeller" src={img} alt="" />
        <h5 className="product-name ms-2 mt-2">{name}</h5>
        <Col className="d-flex">
          <span className="ms-2 product-price">{price.toLocaleString()}</span>
          <Button className="ms-auto me-2 d-flex" variant="outline-primary">
            <div id="shopping-text" className='me-1'>Thêm vào giỏ</div>
            <i className="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>

          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
