import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const CategoryItem = ({ id, src, text, alt }) => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate(`/menu?category=${id}`);
  };

  return (
    <Card
      style={{ borderRadius: "10pt", cursor: "pointer" }}
      onClick={navigateToMenu}
    >
      <Card.Img variant="top" className="img-bestSeller" src={src} alt={alt} />
      <Card.ImgOverlay className="d-flex">
        <Card.Text
          as="div"
          className="ms-auto me-auto mt-auto"
          style={{ color: "white", textSize: "20px", fontWeight: "600" }}
        >
          <h4>{text}</h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryItem;
