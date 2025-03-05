import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.js";
import { Icon } from "@iconify/react/dist/iconify.js";

import { SingleAvatarGroup } from "../../child/AvatarGroup";
import { SquarePagination } from "../../PaginationLayer";

const CarpoolingTable = ({
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
          <th scope="col">Driver</th>
          <th scope="col">Pick up</th>
          <th scope="col">Destination</th>
          <th scope="col">Seats</th>
          {/* <th scope="col">Passengers</th> */}
        </tr>
      </thead>
      <tbody>
        {rows?.map((item, i) => (
          <tr>
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
              <div className="d-flex align-items-center">
                <img
                  src={item?.user?.profilePicture || "/default.png"}
                  alt={item?.user?.name}
                  className="rounded"
                  style={{
                    aspectRatio: "1 / 1",
                    backgroundColor: "#dbdbdb",
                    borderRadius: "10px",
                    height: "60px",
                    width: "60px",
                    objectFit: "contain"
                  }}
                />
                <h6 className="text-md mb-0 fw-medium flex-grow-1 ms-2">
                  {item?.user?.name}
                </h6>
              </div>


            </td>
            <td>{item?.pickupLocation}</td>
            <td>{item?.whereTo}</td>

            <td> {item?.availableSeats}</td>
            {/* <td>
              <SingleAvatarGroup users={[0, 1, 2, 3]} />
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarpoolingTable;
