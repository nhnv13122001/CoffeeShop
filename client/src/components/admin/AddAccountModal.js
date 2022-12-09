import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddAccountModal = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
    if (!password) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }
    if (password.length > 32 || password.length < 8) {
      alert("Mật khẩu phải từ 8 - 32 ký tự");
      return;
    }
    const type = props.type;
    const photo =
      type === 1 ? "/images/profile_pic.jpg" : "/images/staff_pic.jpg";

    props.addaccount({ email, name, password, type, photo });

    setEmail("");
    setName("");
    setPassword("");

    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form style={{ backgroundColor: "#DFD3C3" }} onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center"
          >
            {props.type === 2 ? "Thêm nhân viên" : "Thêm quản lý"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="px-4"
            variant="outline-primary"
            onClick={props.onHide}
          >
            Hủy
          </Button>
          <Button className="px-4" variant="primary" type="submit">
            Tạo
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddAccountModal;
