import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import img from "../img/login_bg.jpg";
import $ from "jquery";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    if (!password) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }
    if (password.length > 32 || password.length < 8) {
      alert("Mật khẩu phải từ 8 - 32 ký tự");
      return;
    }

    if (confirmPassword !== password) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(res) {
        if (res === "Success") {
          navigate(-1);
        } else {
          alert(res);
        }
      },
    });
  };

  return (
    <div
      style={{
        background: `url(${img}) no-repeat center center/cover`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        className="px-5"
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          border: "1px solid #fff",
          borderRadius: "10pt",
          backgroundColor: "#DFD3C3",
        }}
      >
        <Row>
          <h2
            className="text-center mt-3"
            style={{
              fontFamily: "Work Sans",
              color: "#7d6e83",
              fontWeight: "600",
            }}
          >
            CoffeeShop COFFEE
          </h2>
          <h3
            className="text-center mt-2"
            style={{
              fontFamily: "Work Sans",
              color: "#7d6e83",
              fontWeight: "600",
            }}
          >
            Đăng ký
          </h3>
          <Form
            className="mt-5"
            method="post"
            action="http://localhost/CoffeeShop/server/auth/register.php"
            onSubmit={onSubmit}
          >
            <Form.Label>Email</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button style={{ width: "100%" }} className="mt-3" type="submit">
              Đăng ký
            </Button>
          </Form>
          <p className="mr-2  ms-auto me-auto mt-5 text-center">
            Đã có tài khoản?
            <Link to="/login" className="text-dark m-2">
              Đăng nhập
            </Link>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
