import React from "react";
import Modal from "../../extra/modal";
import DeleteModalContent from "../../extra/deleteModalContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import BannerForm from "./form";
import CategoryForm from "./form";

const CategoryTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Category Name</th>
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
            <td>{item?.name}</td>

            <td> {item?.createdAt}</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id="edit-category"
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-category"
                    />
                  }
                  title="Edit Category"
                  body={<CategoryForm />}
                />

                <Modal
                  id="delete-category"
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-category"
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

export default CategoryTable;
