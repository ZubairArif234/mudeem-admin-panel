import React from "react";
import Modal from "../extra/modal";
import DeleteModalContent from "../extra/deleteModalContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import FarmDetail from "./farmDetails";

const FarmTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Location</th>
          <th scope="col">Renewable Energy</th>
          <th scope="col">Fertilizers</th>
          <th scope="col">Desalination</th>
          <th scope="col">Budget</th>
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
            <td>{item?.location}</td>
            <td>{item?.renewable}</td>
            <td>{item?.fertilizer}</td>
            <td>{item?.desalination}</td>

            <td> {item?.budget}</td>
            <td>
              <div className="d-flex justify-content-center gap-2 align-items-start">
                <Modal
                  id="farm-detail"
                  button={
                    <Icon
                      icon="uil:eye"
                      className="text-primary-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#farm-detail"
                    />
                  }
                  body={<FarmDetail />}
                  title="Farm Detail"
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

export default FarmTable;
