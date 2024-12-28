import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import AvatarGroup, { SingleAvatarGroup } from "./child/AvatarGroup";
import { SquarePagination } from "./PaginationLayer";
import Modal from "./custom/extra/modal";
import Form from "./custom/greenCampus/form";

const TableDataLayer = ({
  title,
  body,
  isCustomHeaderButton,
  searchFunction,
  modalTitle,
  modalId,
  modalForm,
  modalSize,
}) => {
  // useEffect(() => {
  //   const table = $("#dataTable").DataTable({
  //     pageLength: 10,
  //   });
  //   return () => {
  //     table.destroy(true);
  //   };
  // }, []);

  return (
    <div className="card basic-data-table ">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap">
        <h5 className="card-title mb-0">{title}</h5>
        <div className="d-flex w-auto align-items-center gap-2 mt-3 mt-sm-0">
          <div className="icon-field mb-4">
            <span className="icon top-50 translate-middle-y">
              <Icon icon="mage:search" />
            </span>
            <input
              type="email"
              className="form-control  bg-neutral-50 radius-12"
              placeholder="Search..."
              onChange={(e) => searchFunction(e.target.value)}
            />
          </div>
          {isCustomHeaderButton && (
            <Modal
              id={modalId}
              button={
                <button
                  type="button"
                  class="btn btn-success-600 d-flex gap-2 align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target={`#${modalId}`}
                >
                  <Icon icon="mage:plus" className="icon" />{" "}
                  <span className="d-none d-sm-block">{modalTitle}</span>
                </button>
              }
              body={modalForm}
              title={modalTitle}
              size={modalSize}
            />
          )}
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive" >{body}</div>
        {/* <div className="d-flex justify-content-end">
          <SquarePagination />
        </div> */}
      </div>
    </div>
  );
};

export default TableDataLayer;
