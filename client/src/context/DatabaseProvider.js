import { createContext, useEffect, useState } from "react";
import $ from "jquery";

const DatabaseContext = createContext({});

export const DataBaseProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost/CoffeeShop/server/crud/categories.php",
      success(res) {
        setCategories(JSON.parse(res));
      },
    });
  };

  const getDrinks = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost/CoffeeShop/server/crud/drinks.php",
      success(res) {
        setDrinks(JSON.parse(res));
      },
    });
    categories.map((cate) => (cate.quantity = 0));
    drinks.map((drink) =>
      categories.map((cate) =>
        cate.id === drink.category ? cate.quantity++ : <></>
      )
    );
  };

  useEffect(() => {
    getCategories();
    getDrinks();
  }, [setCategories, setDrinks]);

  const [orders, setOrders] = useState([]);
  const [drinkInOrder, setDrinkInOrder] = useState([]);
  const getOrders = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost/CoffeeShop/server/order/order.php",
      success(res) {
        setOrders(JSON.parse(res));
      },
    });
  };
  const getDrinkInOrder = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost/CoffeeShop/server/order/order.php",
      success(res) {
        setDrinkInOrder(JSON.parse(res));
      },
    });
  };
  useEffect(() => {
    getOrders();
    getDrinkInOrder();
  }, [setOrders, setDrinkInOrder]);

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      userName: "Nguyễn Văn A",
      drink: 1,
      comment: "Cà phê ngon, giao nhanh",
      rating: 5,
    },
    {
      id: 2,
      userName: "Nguyễn Văn B",
      drink: 10,
      comment: "Cà phê đen nhưng làm quá ngọt",
      rating: 4,
    },
    {
      id: 3,
      userName: "Nguyễn Văn C",
      drink: 2,
      comment: "Cà phê ngon, giao nhanh",
      rating: 5,
    },
    {
      id: 4,
      userName: "Nguyễn Văn D",
      drink: 9,
      comment: "Giao hàng quá chậm",
      rating: 2,
    },
    {
      id: 5,
      userName: "Nguyễn Văn E",
      drink: 8,
      comment: "Cà phê ngon, giao nhanh",
      rating: 5,
    },
    {
      id: 6,
      userName: "Nguyễn Văn F",
      drink: 4,
      comment: "Thái độ phục vụ chưa tốt",
      rating: 4,
    },
    {
      id: 7,
      userName: "Nguyễn Văn G",
      drink: 5,
      comment: "Cà phê ngon, giao nhanh",
      rating: 5,
    },
    {
      id: 8,
      userName: "Nguyễn Văn H",
      drink: 6,
      comment: "Trà sữa không thơm",
      rating: 3,
    },
    {
      id: 9,
      userName: "Nguyễn Văn I",
      drink: 12,
      comment: "Đá xay mịn, thơm, vị matcha rất ngon",
      rating: 5,
    },
    {
      id: 10,
      userName: "Nguyễn Văn J",
      drink: 11,
      comment: "Thái độ nhân viên quá tệ",
      rating: 2,
    },
    {
      id: 11,
      userName: "Nguyễn Văn J",
      drink: 11,
      comment: "Thái độ nhân viên quá tệ",
      rating: 2,
    },
  ]);

  useEffect(() => {
    categories.map((cate) => (cate.quantity = 0));
    drinks.map((drink) =>
      categories.map((cate) =>
        cate.id === drink.category ? cate.quantity++ : <></>
      )
    );
  }, [drinks, categories.orders]);

  return (
    <DatabaseContext.Provider
      value={{
        drinks,
        setDrinks,
        categories,
        setCategories,
        orders,
        setOrders,
        feedbacks,
        setFeedbacks,
        getDrinks,
        getCategories,
        getOrders,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;
