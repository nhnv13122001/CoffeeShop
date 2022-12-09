import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import PrimaryButton from "./../PrimaryButton";
import $ from "jquery";

const ProfilePage = (props) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(auth?.user?.email || "");
  const [name, setName] = useState(auth?.user?.name || "");
  const [phone, setPhone] = useState(auth?.user?.phone || "");
  const [address, setAddress] = useState(auth?.user?.address || "");
  const [photo, setPhoto] = useState(auth?.user?.photo || null);
  const [src, setSrc] = useState("");
  const [id, setId] = useState(auth?.user?.id || null);
  const imageFormControl = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    if (!name) {
      alert("Vui lòng nhập tên");
      return;
    }
  };

  const changeHandler = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setSrc(`/images/${file["name"]}`);
    const reader = new FileReader();
    const limit = 1024 * 1024 * 2;
    if (file["size"] > limit) {
      alert("Vui lòng chọn file có kích thước nhỏ hơn");
    }
    reader.onloadend = (file) => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const openFileDialog = (e) => {
    e.preventDefault();
    imageFormControl.current.click();
  };

  return (
    <div
      className="full-height"
      style={{
        backgroundImage: `url(/images/profile.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="profile-title ms-auto me-auto d-flex">
        Thông tin cá nhân
      </div>
      <Container style={{ marginTop: "100px" }}>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Row className="justify-content-center">
                <img
                  className="profile-pic"
                  src={photo ? photo : "images/profile_pic.jpg"}
                  onClick={openFileDialog}
                  alt=""
                />
                <PrimaryButton
                  style={{
                    width: "350px",
                    marginTop: "20px",
                    padding: "10px 15px",
                  }}
                  text="Chỉnh sửa ảnh đại diện"
                  onClick={openFileDialog}
                />
                <Form
                  className="image-form form-control"
                  style={{ display: "none" }}
                >
                  <input
                    ref={imageFormControl}
                    type="file"
                    className="image-form--input"
                    onChange={changeHandler}
                  />
                </Form>
              </Row>
            </Col>
            <Col>
              <Row className="justify-content-center">
                <Card className="h-100 profile-card">
                  <Card.Body>
                    <Row className="gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4 className="mb-3">Thông tin cá nhân</h4>
                      </div>
                      <Form.Group className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Form.Label htmlFor="fullName">Họ và tên</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          id="fullName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Form.Label htmlFor="eMail">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          id="eMail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Form.Label htmlFor="phone">Số điện thoại</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4 style={{ marginTop: "20px" }}>Địa chỉ</h4>
                      </div>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="address"
                        placeholder="Nhập địa chỉ"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Row>
                    <Row className="gutters" style={{ marginTop: "20px" }}>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="d-flex">
                          <Button
                            variant="secondary"
                            className="ms-auto me-2"
                            onClick={() => {
                              navigate(-1);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button variant="primary" type="submit">
                            Update
                          </Button>
                        </div>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ProfilePage;
