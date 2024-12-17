import React from "react";

const OrderDetailTable = ({ isSelectable, rows }) => {
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
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
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
                <img src="/assets/images/product.png" width={40} />

                {item?.userName}
              </div>
            </td>
            <td> {item?.items}</td>
            <td>$ {item?.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderDetailTable;
