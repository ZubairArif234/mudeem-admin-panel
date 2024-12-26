import React from "react";
import TableDataLayer from "../../../TableDataLayer";
import OrdersTable from "./table";
import OrderDetailTable from "./orderDetailTable";

const OrderDetail = ({ rows }) => {
  return (
    <div>
      <div className="my-20">
        <div className="w-50">
          <div className="d-flex gap-2 align-items-center">
            <img src="/assets/images/user.png" width={40} />
            <div>
              <p className="mb-0">Kathryn Murphy</p>
              <p className="mb-0 text-sm">kathryn@gmail.com</p>
            </div>
          </div>
          <p className="mb-0">Contact: 876677</p>
          <p className="mb-0">
            Shipping: Akshya Nagar 1st Block, Rammurthy nagar, Bangalore-560016
          </p>
          <p className="mb-0">Order Placed Date: 24-dec2024</p>
        </div>
      </div>
      <div className="table-responsive">
        <OrderDetailTable rows={rows?.splice(0, 4)} />
      </div>
      <div className="border-top my-20"></div>
      <div className="d-flex justify-content-end">
        <div className="me-40">
          <p className="mb-0 text-sm">Total Green Points</p>
          <p className="mb-0 text-xl fw-bold">76300 pts</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
