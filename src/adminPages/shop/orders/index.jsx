import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import OrdersTable from "../../../components/custom/shop/orders/table";

const Order = () => {
  const tableRows = [
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      items: 6,
      total: 2300,
      createdAt: "26-Feb-2024",
      status: "pending",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Order" />

      <TableDataLayer
        title={"Orders"}
        body={<OrdersTable rows={tableRows} />}
      />
    </MasterLayout>
  );
};

export default Order;
