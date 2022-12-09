import React from "react";

const Menu = () => {
  return (
    <div>
      <section id="introducer">
        {" "}
        {/* <!------Introducer--> */}
        <div id="slogan">
          <p id="p1">Thưởng thức hương vị</p>
          <p id="p2">nguyên chất</p>
          <p id="p3">"Tràn đầy năng lượng mỗi ngày cùng thức uống tuyệt vời"</p>
        </div>
        <button type="button" className="btn btn-default get">
          {" "}
          Đặt ngay <i className="fas fa-long-arrow-right" id="arrowGet"></i>
        </button>
      </section>{" "}
      {/* <!-----End Introducer--> */}
      <section id="part">
        {" "}
        {/* <!-------Body--> */}
        <div className="container-fluid">
          {" "}
          {/* <!----Body Part--> */}
          <div className="headline-menu-product">
            {" "}
            {/* <!-----headline-menu-product--> */}
            <p id="p1">Thực đơn</p>
            <div className="btn-group">
              <p>Danh mục:</p>
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  className="btn  dropdown-toggle"
                  aria-expanded="false"
                  id="dropdownMenu1"
                  data-bs-toggle="dropdown"
                >
                  Tất cả
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Coffee
                  </a>
                  <a className="dropdown-item" href="#">
                    Tea
                  </a>
                  <a className="dropdown-item" href="#">
                    Ice Blended
                  </a>
                  <a className="dropdown-item" href="#">
                    Chocolate
                  </a>
                  <a className="dropdown-item" href="#">
                    Fruit Juice
                  </a>
                  <a className="dropdown-item" href="#">
                    Milk Tea
                  </a>
                  <a className="dropdown-item" href="#">
                    Cocktail
                  </a>
                  <a className="dropdown-item" href="#">
                    Shakes
                  </a>
                  <a className="dropdown-item" href="#">
                    Soft Drink
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* <!-----End headline-menu-product--> */}
          </div>
          <div className="row" id="row1">
            {" "}
            {/* <!------Menu Product--> */}
            <div className="col-4" id="col-menu-1">
              <img
                className="img-bestSeller"
                src="assets/image/icecoffee.png"
                alt="blackcoffee"
              />
              <p className="product-name">Iced Milk Coffee</p>
              <div className="product-choice">
                <p className="product-price">15.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-2">
              <img
                className="img-bestSeller"
                src="assets/image/thaitea.png"
                alt="thaitea"
              />
              <p className="product-name">Thai Tea</p>
              <div className="product-choice">
                <p className="product-price">25.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-3">
              <img
                className="img-bestSeller"
                src="assets/image/strawberry.png"
                alt="strawberry"
              />
              <p className="product-name">Strawberry Cocktail</p>
              <div className="product-choice">
                <p className="product-price">39.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row" id="row2">
            <div className="col-4" id="col-menu-1">
              <img
                className="img-bestSeller"
                src="assets/image/americano.png"
                alt="americano"
              />
              <p className="product-name">Americano</p>
              <div className="product-choice">
                <p className="product-price">20.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-2">
              <img
                className="img-bestSeller"
                src="assets/image/capuchino.png"
                alt="capuchino"
              />
              <p className="product-name">Capuchino</p>
              <div className="product-choice">
                <p className="product-price">22.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-3">
              <img
                className="img-bestSeller"
                src="assets/image/latte.png"
                alt="latte"
              />
              <p className="product-name">Latte</p>
              <div className="product-choice">
                <p className="product-price">19.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row" id="row3">
            <div className="col-4" id="col-menu-1">
              <img
                className="img-bestSeller"
                src="assets/image/blackcoffee.png"
                alt="blackcoffee"
              />
              <p className="product-name">Black Coffee</p>
              <div className="product-choice">
                <p className="product-price">15.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-2">
              <img
                className="img-bestSeller"
                src="assets/image/gingerjuice.png"
                alt="thaitea"
              />
              <p className="product-name">Hot ginger juice</p>
              <div className="product-choice">
                <p className="product-price">29.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-3">
              <img
                className="img-bestSeller"
                src="assets/image/chocolate.png"
                alt="strawberry"
              />
              <p className="product-name">Hot chocolate</p>
              <div className="product-choice">
                <p className="product-price">27.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row" id="row4">
            <div className="col-4" id="col-menu-1">
              <img
                className="img-bestSeller"
                src="assets/image/orangejuice.png"
                alt="americano"
              />
              <p className="product-name">Honey Orange Juice</p>
              <div className="product-choice">
                <p className="product-price">35.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-2">
              <img
                className="img-bestSeller"
                src="assets/image/freshtea.png"
                alt="capuchino"
              />
              <p className="product-name">Hot Fresh Tea</p>
              <div className="product-choice">
                <p className="product-price">17.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
            <div className="col-4" id="col-menu-3">
              <img
                className="img-bestSeller"
                src="assets/image/matcha.png"
                alt="latte"
              />
              <p className="product-name">Matcha Ice Blended</p>
              <div className="product-choice">
                <p className="product-price">39.000đ</p>
                <button type="button" className="btn btn-default add">
                  Thêm vào giỏ
                  <i
                    className="fa-solid fa-cart-shopping"
                    id="shopping-cart-icon"
                  ></i>
                </button>
              </div>
            </div>
          </div>{" "}
          {/* <!-------End Menu Product--> */}
        </div>{" "}
        {/* <!-----End Body Part--> */}
      </section>{" "}
      {/* <!------End Body--> */}
      <section id="footer">
        {" "}
        {/* <!------Footer--> */}
        <p id="copyright">Copyright 2022</p>
        <hr className="solid" />
        <ul id="footer-info">
          <li id="info-name">Irosas</li>
          <li id="info-email">
            <i id="envelope" className="fa-regular fa-envelope"></i>
            <p>admin.irosas@gmail.com</p>
          </li>
          <li id="info-phone">
            <i className="fa-solid fa-phone"></i>
            <p>(917) 112-245</p>
          </li>
          <li id="info-address">
            <i className="fa-solid fa-location-dot"></i>
            <p>KTX Khu A - ĐHQG HCM</p>
          </li>
        </ul>
      </section>{" "}
      {/* <!-------End Footer--> */}
    </div>
  );
};

export default Menu;
