import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import DeleteModalContent from "../extra/deleteModalContent";
import Modal from "../extra/modal";
import { SingleDefaultTooltipThree } from "../../child/DefaultTooltipThree";
import ViewBookModalContent from "./viewBookModalContent";
import Form from "./form";

const AcademyTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Book Name</th>
          <th scope="col">Author Name</th>
          <th scope="col">Descripton</th>
          <th scope="col">Language</th>
          <th scope="col">Green Points</th>
          {/* <th scope="col">Points</th> */}
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
              <div className="d-flex gap-1 align-items-center">
                <img src="/assets/images/book.png" width={50} />
                <Icon
                  className="text-warning-500"
                  icon="material-symbols:crown-rounded"
                  width="24"
                  height="24"
                />
                <SingleDefaultTooltipThree
                  title={item?.bookName}
                  child={item?.bookName?.slice(0, 25) + "..."}
                />
              </div>
            </td>
            <td> {item?.author}</td>
            <td>{item?.description?.slice(0, 25) + "..."}</td>

            <td> {item?.language}</td>
            <td>{item?.price} pts</td>

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
                  body={<ViewBookModalContent />}
                  title="View book"
                  size="modal-lg"
                />

                <Modal
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
                />

                <Modal
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
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AcademyTable;
