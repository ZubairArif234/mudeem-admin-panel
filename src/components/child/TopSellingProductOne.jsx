import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const TopSellingProductOne = () => {
  return (
    <div className="card h-100">
      <div className="card-body p-24">
        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
          <h6 className="mb-2 fw-bold text-lg mb-0">Leaderboard</h6>
          {/* <Link
            to="/user"
            className="text-success-600 hover-text-success d-flex align-items-center gap-1"
          >
            View All
            <Icon icon="solar:alt-arrow-right-linear" className="icon" />
          </Link> */}
        </div>
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone </th>
                <th scope="col">Green Points </th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4]?.map((item) => {
                return (
                  <tr key={item}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="assets/images/user.png"
                          alt=""
                          className="flex-shrink-0 me-12 radius-8 me-12"
                        />
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0 fw-normal">
                            Krystal Dorrus
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <span className="text-sm text-secondary-light fw-normal">
                        krystal@gmail.com
                      </span>
                    </td>
                    <td>0900987665</td>
                    <td className="text-success-500 fw-bold">
                      {98 - item} pts
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductOne;
