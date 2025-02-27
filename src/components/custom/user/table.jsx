import moment from "moment";
import React from "react";
import { useUserStatus } from "../../../hook/apis/user/useChangeStatus";

const UserTable = ({ isSelectable, rows }) => {
  const { updateUser } = useUserStatus();
  const handleChangeStatus = async (id) => {
    try {
      await updateUser(id);
    } catch (err) {
      console.log(err);
    }
  };
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
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Created At</th>
          <th scope="col">Activate/Deactivate</th>
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
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.phone}</td>

            <td> {moment(item?.pickupDateTime).format("DD/MMM/YYYY")}</td>
            <td>
              {" "}
              <div className="form-switch switch-success d-flex align-items-center gap-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id={"switch" + i}
                  defaultChecked={item?.isActive}
                  onChange={() => handleChangeStatus(item?._id)}
                />
                <label
                  className="form-check-label line-height-1 fw-medium text-secondary-light"
                  htmlFor={"switch" + i}
                >
                  Activate
                </label>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
