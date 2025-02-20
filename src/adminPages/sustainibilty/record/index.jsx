import React, { useState } from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyRecordTable from "../../../components/custom/sustainibilty/recordTable";
import RewardPointsModalContent from "../../../components/custom/extra/rewardPointsModalContent";
import { useGetRecords } from "../../../hook/apis/waste/useGetRecords";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRewardPoints } from "../../../hook/apis/waste/useRewardPoint";
const RewardSchema = z.object({
  points: z.coerce.number().min(1, "Points should be greater then 0"),
});
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
  const [formId, setFormId] = useState();
  const { rewardPoints } = useRewardPoints();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RewardSchema),
  });

  const handleRewardPost = async (data) => {
    try {
      const payload = {
        status: "accepted",
        greenPoints: data?.points,
      };
      const res = await rewardPoints({ payload: payload, id: formId });
      reset();
      toast.success("Post accepted succssfully");
    } catch (err) {
      toast.success(err || "Post accepted failed");
    }
  };

  const handleRewardModal = (value) => {
    setFormId(value);
  };
  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Invest Sustainiability"
          title="Sustainiability - Records"
        />

        <TableDataLayer
          title={"Records"}
          body={
            <SustainibiltyRecordTable
              rows={records}
              handleRewardModal={handleRewardModal}
            />
          }
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    handleSubmit(handleRewardPost)(e);
                  }}
                >
                  <label>Enter Green Points</label>
                  <input
                    type="number"
                    name="#0"
                    className="form-control form-control-sm"
                    placeholder="Enter Green Points.."
                    data-error={errors?.points ? "true" : "false"}
                    {...register("points")}
                  />
                  {errors?.points && (
                    <p className="text-danger-500">{errors?.points?.message}</p>
                  )}
                  <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
                    <button type="submit" className="btn btn-success-600 ">
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
