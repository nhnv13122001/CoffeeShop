import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useDatabase from "../../hooks/useDatabase";

const EditDrinkModal = (props) => {
  const [name, setName] = useState(props.drink.name);
  const [category, setCategory] = useState(props.drink.category);
  const [price, setPrice] = useState(props.drink.price);
  const [photo, setPhoto] = useState(props.drink.photo);
  const [src, setSrc] = useState("");
  const imageFormControl = useRef();
  const { categories } = useDatabase();

  const changeHandler = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setSrc(`/assets/image/${file["name"]}`);
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Vui lòng nhập tên thức uống");
      return;
    }
    if (!category) {
      alert("Vui Long chọn danh mục của thức uống");
      return;
    }
    if (!price) {
      alert("Vui lòng nhập giá của thức uống");
      return;
    }
    if (!photo) {
      alert("Vui lòng thêm hình cho thức uống");
      return;
    }

    props.editDrink({
      ...props.drink,
      name: name,
      category: +category,
      price: +price,
      photo: photo,
      src: src,
    });

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
            Chỉnh sửa thức uống
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
              {/* <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
            <option value="Milk Tea">Milk Tea</option>
            <option value="Ice Blended">Ice Blended</option>
            <option value="SoftDrink">SoftDrink</option> */}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập giá"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Hình ảnh</Form.Label>
            <>
              <img
                alt="fasdsa"
                className="image-form form-control"
                src={photo}
                onClick={openFileDialog}
                style={{ padding: "0" }}
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
            </>
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
            Lưu
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditDrinkModal;
