import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import InnovationCard from "../../components/custom/innovation/card";

const Innovation = () => {
  //   const tableHeadings = [
  //     "ID",
  //     "Driver",
  //     "Pick up",
  //     "Destination",
  //     "Seats",
  //     "Passengers",
  //   ];
  //   const tableRows = [
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //     {
  //       id: "453",
  //       location: [51.90987, -1.87737],
  //       category: "Dust bin",
  //       points: 12,
  //     },
  //   ];
  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Sustainability Innovation"
          title="Sustainability Innovation"
        />
        <div className="row gy-4">
          {[0, 1, 2, 3, 4, 5]?.map((item) => {
            return (
              <div className="col-xxl-4 col-sm-6">
                <InnovationCard />
              </div>
            );
          })}
        </div>
        <div
          class="modal fade "
          id={"innovation-reward-points"}
          tabindex="-1"
          aria-labelledby={"reward-points-label"}
          aria-hidden="true"
          tabIndex={-1}
        >
          <div class={`modal-dialog modal-dialog-centered `}>
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id={"innovation-reward-points-label"}>
                  Reward Points
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <label>Enter Green Points</label>
                  <input
                    type="text"
                    name="#0"
                    className="form-control form-control-sm"
                    placeholder="Enter Green Points.."
                  />
                  <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
                    <button type="button" class="btn btn-success-600 ">
                      Reward Points
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </div>
  );
};

export default Innovation;
