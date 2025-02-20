import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import DeleteModalContent from "../extra/deleteModalContent";
import Modal from "../extra/modal";
import { SingleDefaultTooltipThree } from "../../child/DefaultTooltipThree";
import ViewBookModalContent from "./viewBookModalContent";
import Form from "./form";
import { useDeleteBook } from "../../../hook/apis/academy/useDeletedBook"; // Import your custom hook

const AcademyTable = ({ isSelectable, rows }) => {
  const [selectedBook, setSelectedBook] = useState();
  const { deleteBook, isLoading } = useDeleteBook(); // Get delete function from the hook

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
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((item, i) => (
          <tr key={item?._id}>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">01</label>
                </div>
              </td>
            )}
            <td>#{item?._id.slice(0, 6) + i}</td>
            <td>
              <div className="d-flex gap-1 align-items-center">
                <img
                  src={item?.thumbnail || "/assets/images/book.png"}
                  width={50}
                />
                <Icon
                  className="text-warning-500"
                  icon="material-symbols:crown-rounded"
                  width="24"
                  height="24"
                />
                {item?.title?.length > 15 ? (
                  <SingleDefaultTooltipThree
                    title={item?.title}
                    child={item?.title?.slice(0, 15) + "..."}
                  />
                ) : (
                  item?.title
                )}
              </div>
            </td>
            <td> {item?.author}</td>
            <td>{item?.description?.slice(0, 25) + "..."}</td>
            <td> {item?.language}</td>
            <td>{item?.price} pts</td>

            <td>
              <div className="d-flex gap-2 align-items-start">
                <Icon
                  onClick={() => setSelectedBook(item)}
                  icon="uil:eye"
                  className="text-primary-500 cursor-pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#view-book"
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
                  body={<Form data={selectedBook} />}
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
                  body={
                    <DeleteModalContent
                      deleteFunction={() => deleteBook(item._id)} // Ensure deleteBook is a function here
                      isLoading={isLoading} // Pass the loading state to disable the button during deletion
                    />
                  }
                  title="Are you sure!"
                />

              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <div
        className="modal fade"
        id={"view-book"}
        tabIndex="-1"
        aria-labelledby={`view-book-label`}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered modal-lg`}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id={`view-book-label`}>
                View book
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ViewBookModalContent data={selectedBook} />
            </div>
          </div>
        </div>
      </div>
    </table>
  );
};

export default AcademyTable;
