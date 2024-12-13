import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import AvatarGroup, { SingleAvatarGroup } from "./child/AvatarGroup";
import { SquarePagination } from "./PaginationLayer";
import Modal from "./custom/extra/modal";
import Form from "./custom/greenCampus/form";

const TableDataLayer = ({ title, body, isCustomHeaderButton }) => {
  // useEffect(() => {
  //   const table = $("#dataTable").DataTable({
  //     pageLength: 10,
  //   });
  //   return () => {
  //     table.destroy(true);
  //   };
  // }, []);

  return (
    <div className="card basic-data-table">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{title}</h5>
        <div className="d-flex gap-2">
          <div className="icon-field mb-4">
            <span className="icon top-50 translate-middle-y">
              <Icon icon="mage:search" />
            </span>
            <input
              type="email"
              className="form-control  bg-neutral-50 radius-12"
              placeholder="Search..."
            />
          </div>
          {isCustomHeaderButton && (
            <Modal
              id="add-campus-location"
              button={
                <button
                  type="button"
                  class="btn btn-success-600 d-flex gap-2 align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add-campus-location"
                >
                  <Icon icon="mage:plus" /> Add
                </button>
              }
              body={<Form />}
              title="Add Location"
            />
          )}
        </div>
      </div>
      <div className="card-body">
        {body}
        <div className="d-flex justify-content-end">
          <SquarePagination />
        </div>
      </div>
    </div>
  );
};

export default TableDataLayer;
