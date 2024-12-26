import React from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "../extra/modal";
import { VideoCard } from "../../../adminPages/contentCreator";
import { SingleDefaultTooltipThree } from "../../child/DefaultTooltipThree";
const ContentTable = ({
  isSelectable,

  rows,
}) => {
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
          <th scope="col">User</th>
          <th scope="col">Description</th>

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
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="assets/images/user.png"
                  alt=""
                  className="flex-shrink-0 me-12 radius-8"
                />
                {item?.name}
              </div>
            </td>
            <td>
              {" "}
              <SingleDefaultTooltipThree
                title={item?.description}
                child={item?.description?.slice(0, 70) + "..."}
              />
            </td>

            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id="view-book"
                  button={
                    <Icon
                      icon="uil:eye"
                      className="text-primary-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#view-book"
                    />
                  }
                  body={<VideoCard />}
                  title="Video"
                  // size="modal-lg"
                />

                {/* <Modal
                  id="edit-book"
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-book"
                    />
                  }
                  title="Edit Book"
                  body={<Form />}
                  size={"modal-lg"}
                /> */}

                {/* <Modal
                  id="delete-book"
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-book"
                    />
                  }
                  body={<DeleteModalContent />}
                  title="Are you sure!"
                /> */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContentTable;
