import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Modal from "../../extra/modal";
import { SingleDefaultTooltipThree } from "../../../child/DefaultTooltipThree";
import DeleteModalContent from "../../extra/deleteModalContent";
// import OrderDetail from "./orderDetail";
import ProductsTable from "../product/table";
import OrderDetailTable from "./orderDetailTable";
import OrderDetail from "./orderDetail";
import { useUpdateOrderStatus } from "../../../../hook/apis/auth/shop/order/useUpdateStatus";
// import ViewProduct from "./viewProduct";
// import ProductForm from "./form";

const OrdersTable = ({ isSelectable, rows }) => {
  const { updateOrderStatus } = useUpdateOrderStatus();

  const handleUpdateStatus = async (id) => {
    try {
      await updateOrderStatus(id);
    } catch (err) {
      console.log(err);
    }
  };
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
          <tr>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">01</label>
                </div>
              </td>
            )}
            <td>#{item?.id + 1 * 2087}</td>
            <td className="text-capitalize">
              <div className=" d-flex gap-1 align-items-center">
                <img src="/assets/images/user.png" width={40} />

                {item?.userName}
              </div>
            </td>
            <td> {item?.items}</td>
            <td>{item?.total} pts</td>

            <td>
              <select
                className="form-control form-control-sm"
                // onChange={() => handleUpdateStatus(item.id)}
              >
                <option disabled>Select Status</option>
                <option>Pending</option>
                <option>Delivered</option>
              </select>
            </td>
            <td> {item?.createdAt}</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id="view-product"
                  button={
                    <button
                      type="button"
                      className="btn bg-success-500 text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#view-product"
                    >
                      Order Details
                    </button>
                  }
                  title="Order Detail"
                  body={<OrderDetail rows={rows} />}
                  size="modal-lg"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
