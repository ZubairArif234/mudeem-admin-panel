import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyRecordTable from "../../../components/custom/sustainibilty/recordTable";
import RewardPointsModalContent from "../../../components/custom/extra/rewardPointsModalContent";
import { useGetRecords } from "../../../hook/apis/waste/useGetRecords";

const SustainibiltyRecord = () => {
  const { records } = useGetRecords();
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
          body={<SustainibiltyRecordTable rows={records} />}
        />

        <div
          className="modal fade "
          id={"sustainibility-points"}
          tabIndex="-1"
          aria-labelledby={"sustainibility-points-label"}
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered `}>
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id={"sustainibility-points-label"}>
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
    </div>
  );
};

export default SustainibiltyRecord;
