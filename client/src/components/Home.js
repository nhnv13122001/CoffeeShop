import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import MyNav from "./MyNav";
const Home = () => {
  return (
    <>
      <MyNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
