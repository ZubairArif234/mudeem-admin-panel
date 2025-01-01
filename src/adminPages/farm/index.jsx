import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import FarmTable from "../../components/custom/farm/table";

const Farm = () => {
  const tableRows = [
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Sustainable Farm" title="Sustainable Farm" />

      <TableDataLayer title={"Farm"} body={<FarmTable rows={tableRows} />} />

      <div
        class="modal fade "
        id={"reward-points"}
        tabIndex="-1"
        aria-labelledby={"reward-points-label"}
        aria-hidden="true"
        tabIndex={-1}
      >
        <div class={`modal-dialog modal-dialog-centered `}>
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id={"reward-points-label"}>
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
  );
};

export default Farm;
