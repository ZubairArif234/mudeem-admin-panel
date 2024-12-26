import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyRecordTable from "../../../components/custom/sustainibilty/recordTable";
import RewardPointsModalContent from "../../../components/custom/extra/rewardPointsModalContent";

const SustainibiltyRecord = () => {
  const tableRows = [
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
      points: 12,
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
    {
      id: "453",
      userName: "Kathryn Murphy",
      wasteType: "Plastic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      company: "Omega Plus",
      pickup: "25-Mar-23 10:00 PM",
      createdAt: "24-Feb-2023",
    },
  ];
  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Invest Sustainiability"
          title="Sustainiability - Records"
        />

        <TableDataLayer
          title={"Records"}
          body={<SustainibiltyRecordTable rows={tableRows} />}
        />

        <div
          class="modal fade "
          id={"sustainibility-points"}
          tabindex="-1"
          aria-labelledby={"sustainibility-points-label"}
          aria-hidden="true"
          tabIndex={-1}
        >
          <div class={`modal-dialog modal-dialog-centered `}>
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" id={"sustainibility-points-label"}>
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

export default SustainibiltyRecord;
