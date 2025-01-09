import React, { useState } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import FarmTable from "../../components/custom/farm/table";
import { useGetFarm } from "../../hook/apis/sustainableFarm/useGetFarm";

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
  const [filter, setFilter] = useState({
    page: 0,
    limit: 9,
  });
  const { farm, isPending } = useGetFarm(filter);

  return (
    <MasterLayout>
      <Breadcrumb heading="Sustainable Farm" title="Sustainable Farm" />

      <TableDataLayer title={"Farm"} body={<FarmTable rows={tableRows} />} />

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
