import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";

import { SingleAvatarGroup } from "../../child/AvatarGroup";
import { SquarePagination } from "../../PaginationLayer";
import Modal from "../extra/modal";
import Form from "./form";
import DeleteModalContent from "../extra/deleteModalContent";

const SustainibiltyCompanyTable = ({ isSelectable, rows }) => {
  //   useEffect(() => {
  //     const table = $("#dataTable").DataTable({
  //       pageLength: 10,
  //     });
  //     return () => {
  //       table.destroy(true);
  //     };
  //   }, []);
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
          <th scope="col">Company Name</th>
          <th scope="col">Owner Name</th>
          <th scope="col">Location</th>
          <th scope="col">Created At</th>
          <th scope="col">Actions</th>
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
            <td>{item?.company}</td>
            <td> {item?.owner}</td>
            <td>{item?.location}</td>

            <td> {item?.createdAt}</td>
            <td>
              <div className="d-flex gap-2 align-items-center">
                <Modal
                  id="edit-campus-location"
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      // class="btn btn-success-600 d-flex gap-2 align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-campus-location"
                    />
                  }
                  body={<Form />}
                  title="Edit Company"
                />

                {/* <Icon
                icon="mage:trash"
                className="text-danger-500 cursor-pointer"
              /> */}
                <Modal
                  id="delete-sustainibility-company"
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      // class="btn btn-success-600 d-flex gap-2 align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-sustainibility-company"
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

export default SustainibiltyCompanyTable;
