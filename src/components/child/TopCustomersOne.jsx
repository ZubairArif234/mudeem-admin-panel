import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
// import { Link } from "react-router-dom";

const TopCustomersOne = () => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
          <h6 className="mb-2 fw-bold text-lg mb-0">Recent Notification</h6>
          {/* <Link
            to="#"
            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
          >
            View All
            <Icon icon="solar:alt-arrow-right-linear" className="icon" />
          </Link> */}
        </div>
        <div className="mt-32">
          {[0, 1, 2, 3, 4, 5, 6]?.map((item) => {
            return (
              <div
                key={item}
                className="  d-flex align-items-start gap-2 mb-3 justify-content-between"
              >
                <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                  <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                    <Icon
                      icon="bitcoin-icons:verify-outline"
                      className="icon text-xxl"
                    />
                  </span>
                  <div>
                    <h6 className="text-md fw-semibold mb-4">Congratulation</h6>
                    <p className="mb-0 text-sm text-secondary-light text-w-120-px">
                      Your profile has been...
                    </p>
                  </div>
                </div>
                <span className="text-xxs text-secondary-light flex-shrink-0">
                  23 Mins ago
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCustomersOne;
