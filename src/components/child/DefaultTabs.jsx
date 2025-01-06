import React from "react";
import { SingleHorizontalCard } from "./HorizontalCard";

const DefaultTabs = ({ tabList, bodyType, data }) => {
  return (
    <div className="">
      <div className="card p-0 overflow-auto position-relative radius-12 h-100">
        {/* <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
          <h6 className="text-lg mb-0">Default Tabs </h6>
        </div> */}
        <div className="card-body p-24 pt-10 w-100">
          <ul
            className="nav bordered-tab border border-top-0 border-start-0 border-end-0 d-inline-flex nav-pills mb-16 w-100"
            id="pills-tab"
            role="tablist"
          >
            {tabList?.map((item, i) => {
              return (
                <li key={i} className="nav-item" role="presentation">
                  <button
                    className={`nav-link px-16 py-10 ${
                      item === "Requested" && "active"
                    }`}
                    id={item}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${item}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${item}`}
                    aria-selected="true"
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {tabList?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`tab-pane fade show ${
                    item === "Requested" && "active"
                  }`}
                  id={`pills-${item}`}
                  role="tabpanel"
                  aria-labelledby={item}
                  tabIndex={0}
                >
                  <div>
                    {bodyType === "card" ? (
                      <div className="row gy-4">
                        {[0, 1, 2, 3, 4, 5]?.map((_, j) => {
                          return (
                            <div key={j} className=" col-xl-6">
                              <SingleHorizontalCard data={data} number={item} />
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {/* <div
              className="tab-pane fade"
              id="pills-Accepted"
              role="tabpanel"
              aria-labelledby="Accepted"
              tabIndex={0}
            >
              <div>
                <h6 className="text-lg mb-8">Details</h6>
                <p className="text-secondary-light mb-16">
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className="text-secondary-light mb-0">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Rejected"
              role="tabpanel"
              aria-labelledby="Rejected"
              tabIndex={0}
            >
              <div>
                <h6 className="text-lg mb-8">Title</h6>
                <p className="text-secondary-light mb-16">
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className="text-secondary-light mb-0">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id={"reward-points"}
        tabIndex="-1"
        aria-labelledby={"reward-points-label"}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered `}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id={"reward-points-label"}>
                Reward Points
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label>Enter Green Points</label>
                <input
                  type="text"
                  name="#0"
                  className="form-control form-control-sm"
                  placeholder="Enter Green Points.."
                />
                <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
                  <button type="button" className="btn btn-success-600 ">
                    Reward & Approve
                  </button>

                  {/* <button
                    type="button"
                    class="btn btn-danger-600"
                    data-bs-dismiss="modal"
                  >
                    Reject
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTabs;
