import React from "react";
import TableDataLayer from "../../../TableDataLayer";
import OrdersTable from "./table";
import OrderDetailTable from "./orderDetailTable";

const OrderDetail = ({ rows }) => {
  return (
    <div>
      <div className="my-20">
        <div className="d-flex gap-2 align-items-center">
          <img src="/assets/images/user.png" width={40} />
          <div>
            <p className="mb-0">Kathryn Murphy</p>
            <p className="mb-0 text-sm">kathryn@gmail.com</p>
          </div>
        </div>
      </div>
      <OrderDetailTable rows={rows?.splice(0, 4)} />
      <div className="border-top my-20"></div>
      <div className="d-flex justify-content-end">
        <div className="me-40">
          <p className="mb-0 text-sm">Total Price</p>
          <p className="mb-0 text-xl fw-bold">$ 76300</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
