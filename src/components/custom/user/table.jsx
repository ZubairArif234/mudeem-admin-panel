import React from "react";

const UserTable = ({ isSelectable, rows }) => {
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
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.phone}</td>

            <td> {item?.createdAt}</td>
            <td>
              {" "}
              <div className="form-switch switch-success d-flex align-items-center gap-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch1"
                  defaultChecked={true}
                />
                <label
                  className="form-check-label line-height-1 fw-medium text-secondary-light"
                  htmlFor="switch1"
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
