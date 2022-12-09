import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import img from "../img/login_bg.jpg";
import $ from "jquery";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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

    const form = $(e.target);

    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(res) {
        if (res !== "Failed") {
          const abc = JSON.parse(res);
          setAuth({ user: abc[0] });
        } else {
          alert("Tài khoản hoặc mật khẩu không đúng");
        }
      },
    });
  };

  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  });

  return (
    <div
      style={{
        background: `url(${img}) center center/cover`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        className="px-5 col-11 col-md-5"
        style={{
          // width: "40%",
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
            CoffeeShop
          </h2>
          <h4
            className="text-center"
            style={{
              fontFamily: "Work Sans",
              color: "#7d6e83",
              fontStyle: "italic",
            }}
          >
            Glad to see you here
          </h4>
          <h3
            className="text-center"
            style={{
              fontFamily: "Work Sans",
              color: "#7d6e83",
              fontWeight: "600",
            }}
          >
            Đăng nhập
          </h3>
          <MdOutlineAccountCircle
            className="ms-auto me-auto"
            style={{ width: "200px", height: "200px" }}
          />
          <Form
            className="mt-3"
            method="post"
            action="http://localhost/CoffeeShop/server/auth/login.php"
            onSubmit={onSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
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
            <p className="font-weight-normal text-end">
              <Link
                to="/forgot_password"
                className="text-dark m-2"
                style={{ textDecoration: "none" }}
              >
                Quên mật khẩu?
              </Link>
            </p>
            <Button style={{ width: "100%" }} type="submit">
              Đăng nhập
            </Button>
          </Form>

          <p className="font-weight-normal ms-auto me-auto mt-5 text-center">
            Bạn chưa có tài khoản?
            <Link to="/register" className="text-dark m-2">
              Đăng ký ngay
            </Link>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
