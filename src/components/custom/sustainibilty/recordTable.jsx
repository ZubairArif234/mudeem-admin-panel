import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";

import { SingleAvatarGroup } from "../../child/AvatarGroup";
import { SquarePagination } from "../../PaginationLayer";
import Modal from "../extra/modal";
import Form from "./form";
import DeleteModalContent from "../extra/deleteModalContent";
import { SingleDefaultTooltipThree } from "../../child/DefaultTooltipThree";

const SustainibiltyRecordTable = ({ isSelectable, rows }) => {
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
          <th scope="col">User Name</th>
          <th scope="col">Waste type</th>
          <th scope="col">Description</th>
          <th scope="col">Company</th>
          <th scope="col">Pickup Date & time</th>
          <th scope="col">Green Points</th>
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
            <td className="fw-bold">{item?.userName}</td>
            <td> {item?.wasteType}</td>
            <td>
              <SingleDefaultTooltipThree
                title={item?.description}
                child={item?.description?.slice(0, 25)}
              />
            </td>

            <td> {item?.company}</td>
            <td> {item?.pickup}</td>
            <td>
              {item?.points ? (
                <p className="text-success-500 mb-0">{`${item.points} points`}</p>
              ) : (
                <div className="">
                  <button
                    className=" btn text-white bg-success-500 cursor-pointer"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#sustainibility-points"
                  >
                    Reward Points
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SustainibiltyRecordTable;
