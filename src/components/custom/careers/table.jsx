import React from "react";
import Modal from "../extra/modal";
import DeleteModalContent from "../extra/deleteModalContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SingleDefaultTooltipThree } from "../../child/DefaultTooltipThree";
import { Link } from "react-router-dom";
import CareerForm from "./form";

const CareeresTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Company</th>
          <th scope="col">Job Title</th>
          <th scope="col">Description</th>
          <th scope="col">Location</th>
          <th scope="col">Salary</th>
          <th scope="col">Link</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, i) => (
          <tr key={item._id}>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">{i + 1}</label>
                </div>
              </td>
            )}
            <td>#{item._id}</td>
            <td>{item.company}</td>
            <td>{item.title}</td>
            <td>
              <SingleDefaultTooltipThree
                title={item.description}
                child={item.description?.slice(0, 25) + "..."}
              />
            </td>
            <td>{item.location}</td>
            <td>{item.salary}</td>
            <td>
              <Link to={item.linkedInUrl} className="text-success-500" target="_blank">
                {item.linkedInUrl}
              </Link>
            </td>
            <td>
              <div className="d-flex justify-content-center gap-2 align-items-start">
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
                  title="Edit Job"
                  body={<CareerForm careerData={item} />}
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

export default CareeresTable;
