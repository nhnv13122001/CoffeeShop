import { createContext, useState, useEffect } from "react";
import $ from "jquery";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [accounts, setAccounts] = useState([]);
  const getAccounts = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost/CoffeeShop/server/crud/accounts.php",
      success(res) {
        setAccounts(JSON.parse(res));
      },
    });
  };
  useEffect(() => {
    getAccounts();
  }, [setAccounts]);
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, accounts, setAccounts, getAccounts }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
