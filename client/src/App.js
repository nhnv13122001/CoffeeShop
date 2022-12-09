import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import CustomerFeedbacks from "./components/admin/CustomerFeedback";
import FeedbackDetail from "./components/admin/FeedbackDetail";
import ManageAccountContainer from "./components/admin/ManageAccountContainer";
import ManageCategoryContainer from "./components/admin/ManageCategoryContainer";
import ManageDrinkContainer from "./components/admin/ManageDrinkContainer";
import ProfilePage from "./components/admin/ProfilePage";
import RequireAuth from "./components/admin/RequireAuth";
import Revenue from "./components/admin/Revenue";
import CartPage from "./components/CartPage";
import CategoryPage from "./components/CategoryPage";
import ContactsPage from "./components/ContactsPage";
import DetailsPage from "./components/DetailsPage";
import HistoryPage from "./components/HistoryPage";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import MenuPage from "./components/MenuPage";
import NotFound from "./components/NotFound";
import RegisterPage from "./components/RegisterPage";

import OrderDetail from './components/staff/OrderDetail';
import Staff from './components/staff/Staff';
import StaffPage from './components/staff/StaffPage';
import Unauthorized from './components/Unauthorized';
import React, { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';


function App() {
  const [quantity, setQuantity] = useState(0);
  return (

    <div className='full-height' style={{ backgroundColor: "#F8FAFB" }}>
      <CartProvider>
      <Routes>
        {/* Public Routes */}
      
          <Route exact path='/' element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path="contacts" element={<ContactsPage/>}/>
          <Route path="menu" element={<MenuPage/>}/>
          <Route path="category" element={<CategoryPage/>}/>
          <Route path='cart' element={<CartPage />}/>
          <Route path='drinks/:id' element={<DetailsPage />}/>
          <Route element={<RequireAuth allowedRoles={["3"]}/> }>
            <Route path="/history" element={<HistoryPage/>}/>

          </Route>
          </Route>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protect These Routes */}
        <Route element={<RequireAuth allowedRoles={["1"]} />}>
          <Route exact path="/admin" element={<Admin />}>
            <Route index element={<ManageAccountContainer />} />
            <Route path="drinks" element={<ManageDrinkContainer />} />
            <Route path="categories" element={<ManageCategoryContainer />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="feedbacks" element={<CustomerFeedbacks />} />
            <Route path="feedbacks/:id" element={<FeedbackDetail />} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["2"]} />}>
          <Route exact path="/staff" element={<Staff />}>
            <Route index element={<StaffPage />} />
            <Route path="order/:id" element={<OrderDetail />} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["1", "2", "3"]} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
