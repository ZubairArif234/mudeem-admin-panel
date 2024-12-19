import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import useReactApexChart from "../../../hook/useReactApexChart";

const StatsCounts = () => {
  let { createChart } = useReactApexChart();
  return (
    <div className="row gy-4">
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                  <Icon icon="mingcute:user-follow-fill" className="icon" />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Users
                  </span>
                  <h6 className="fw-semibold">15,000</h6>
                </div>
              </div>
              <div
                id="new-user-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Users</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon icon="material-symbols:package-2" className="icon" />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Products
                  </span>
                  <h6 className="fw-semibold">800</h6>
                </div>
              </div>
              <div
                id="active-user-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Shop</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon icon="material-symbols:book-2" className="icon" />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Books
                  </span>
                  <h6 className="fw-semibold">5000</h6>
                </div>
              </div>
              <div
                id="total-sales-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Academy</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon
                    icon="material-symbols:directions-car"
                    className="icon"
                  />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Rides
                  </span>
                  <h6 className="fw-semibold">25</h6>
                </div>
              </div>
              <div
                id="conversion-user-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Carpooling</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon
                    icon="material-symbols:list-alt-check-rounded"
                    className="icon"
                  />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Forums
                  </span>
                  <h6 className="fw-semibold">250</h6>
                </div>
              </div>
              <div
                id="leads-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Collaboration Forums</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon
                    icon="material-symbols:video-library-rounded"
                    className="icon"
                  />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Videos
                  </span>
                  <h6 className="fw-semibold">700</h6>
                </div>
              </div>
              <div
                id="total-profit-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Content Creator</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                  <Icon
                    icon="material-symbols:award-star-outline-rounded"
                    className="icon"
                  />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Innovation
                  </span>
                  <h6 className="fw-semibold">15,000</h6>
                </div>
              </div>
              <div
                id="new-user-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Innovtion</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6">
        <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
          <div className="card-body p-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
              <div className="d-flex align-items-center gap-2">
                <span className="mb-0 w-48-px h-48-px bg-success-500 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6">
                  <Icon
                    icon="material-symbols:calendar-add-on"
                    className="icon"
                  />
                </span>
                <div>
                  <span className="mb-2 fw-medium text-secondary-light text-sm">
                    Total Events
                  </span>
                  <h6 className="fw-semibold">800</h6>
                </div>
              </div>
              <div
                id="active-user-chart"
                className="remove-tooltip-title rounded-tooltip-value"
              >
                {/* Pass the color value here */}
                {createChart("#51D483")}
              </div>
            </div>
            <p className="text-sm mb-0">Event Calender</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounts;
