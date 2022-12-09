import React from "react";
import background from "../img/ContactPage/backgroudContact.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import useDatabase from "../hooks/useDatabase";
import CategoryItem from "./CategoryItem";

const CategoryPage = () => {
  const { categories } = useDatabase();

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
        <Row className="my-auto ms-5">
          <p id="p1">Đầy đủ các danh mục</p>
          <p id="p2">cho bạn lựa chọn</p>
          <p id="p3">
            Mỗi một loại thức uống sẽ cho bạn những trải nghiệm mới mẻ khác
            nhau.
          </p>
          <Col>
            <Link to="category-section" spy={true} smooth={true} duration={200}>
              <Button className="btn-default get">
                Xem ngay{" "}
                <i className="fas fa-long-arrow-down" id="arrowGet"></i>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 mb-5">
        <p id="p4">Danh mục thức uống</p>
        <Row className="mt-3 justify-content-around" name="category-section">
          {categories.map((category) => (
            <Col
              xs={5}
              md={5}
              lg={4}
              xl={3}
              className="m-2 m-sm-1"
              key={category.id}
            >
              <CategoryItem
                id={category.id}
                src={category.photo}
                text={category.name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
