import React from "react";
import TopAppBar from "../admin/TopAppBar";
import OrderTable from "./OrderTable";

const StaffPage = () => {
  return (
    <div>
      <TopAppBar title="Quản lý đơn hàng" />
      <OrderTable />
    </div>
  );
};

export default StaffPage;
