import React, { useState } from "react";
import OrderDetail from "./orderDetail";
import { useUpdateOrderStatus } from "../../../../hook/apis/shop/order/useUpdateStatus";
import moment from "moment";

const OrdersTable = ({ isSelectable, rows }) => {
  const [selectedOrder, setSelectedOrder] = useState();
  const { updateOrderStatus } = useUpdateOrderStatus();

  const handleUpdateStatus = async (id, value) => {
    try {
      await updateOrderStatus({ orderId: id, status: value });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(rows, "order milain hai  kia ?");

  return (
    <table
      className="table bordered-table mb-0"
      id="dataTable"
      data-page-length={10}
    >
      <thead>
        <tr>
          {isSelectable && (
            <th scope="col">
              <div className="form-check style-check d-flex align-items-center">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">S.L</label>
              </div>
            </th>
          )}

          <th scope="col">ID</th>
          <th scope="col">User Name</th>
          <th scope="col">No Of Items</th>
          <th scope="col">Green Points</th>
          <th scope="col">Status</th>
          <th scope="col">Created At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, i) => (
          <tr key={i}>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">01</label>
                </div>
              </td>
            )}
            <td>#{item?._id.slice(0, 6) + i}</td>
            <td className="text-capitalize">
              <div className=" d-flex gap-1 align-items-center">
              <img
                  src={item?.user?.profilePicture || "/default.png"}
                  alt={item?.user?.name}
                  className="rounded"
                  style={{
                    aspectRatio: "1 / 1",
                    backgroundColor: "#dbdbdb",
                    borderRadius: "10px",
                    height: "60px",
                    width: "60px",
                    objectFit: "contain"
                  }}
                />

                {item?.user?.name}
              </div>
            </td>
            <td> {item?.items?.length}</td>
            <td>{item?.totalGreenPoints} pts</td>

            <td>
              <select
                defaultValue={item?.status || "pending"}
                className="text-capitalize form-control form-control-sm"
                onChange={(e) => handleUpdateStatus(item?._id, e.target.value)}
              >
                <option disabled>Select Status</option>
                <option value={"pending"}>Pending</option>
                <option value={"confirmed"} className="text-capitalize">
                  Confirmed
                </option>
                <option value={"shipped"} className="text-capitalize">
                  Shipped
                </option>
                <option value={"delivered"} className="text-capitalize">
                  Delivered
                </option>
              </select>
            </td>
            <td> {moment(item?.createdAt).format("DD/MMM/YYYY")}</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <button
                  onClick={() => setSelectedOrder(item)}
                  type="button"
                  className="btn bg-success-500 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#view-product"
                >
                  Order Details
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <div
        className="modal fade "
        id={"view-product"}
        tabIndex="-1"
        aria-labelledby={`view-product-label`}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered modal-lg`}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id={`view-product-label`}>
                Order Details
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <OrderDetail rows={selectedOrder} />
            </div>
          </div>
        </div>
      </div>
    </table>
  );
};

export default OrdersTable;
