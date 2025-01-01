import React from "react";
import Modal from "../../extra/modal";
import DeleteModalContent from "../../extra/deleteModalContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import BannerForm from "./form";

const BannerTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Name</th>
          <th scope="col">Banner</th>
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
            <td>#{item?.id + 1 * 2087}</td>
            <td>{item?.name}</td>
            <td>
              {" "}
              <img src="/assets/images/product.png" width={100} />
            </td>

            <td> {item?.createdAt}</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id="edit-product"
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-product"
                    />
                  }
                  title="Edit Banner"
                  body={<BannerForm />}
                />

                <Modal
                  id="delete-product"
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-product"
                    />
                  }
                  body={<DeleteModalContent />}
                  title="Are you sure!"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BannerTable;
