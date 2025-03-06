import React, { useState } from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyRecordTable from "../../../components/custom/sustainibilty/recordTable";
import Loader from "../../../components/custom/extra/loader";
import { useGetRecords } from "../../../hook/apis/waste/useGetRecords";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRewardPoints } from "../../../hook/apis/waste/useRewardPoint";
import DataNotFound from "../../../components/custom/extra/dataNotFound";

const RewardSchema = z.object({
  points: z.coerce.number().min(1, "Points should be greater than 0"),
});

const SustainibiltyRecord = () => {
  const { records, isPending } = useGetRecords();
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
      await rewardPoints({ payload: payload, id: formId });
      reset();
      toast.success("Post accepted successfully");
    } catch (err) {
      toast.error(err || "Post acceptance failed");
    }
  };

  const handleRewardModal = (value) => {
    setFormId(value);
  };

  return (
    <MasterLayout>
      <Breadcrumb heading="Invest Sustainability" title="Sustainability - Records" />

      <TableDataLayer
        title={"Records"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : records?.length > 0 ? (
            <SustainibiltyRecordTable rows={records} handleRewardModal={handleRewardModal} />
          ) : (
            <DataNotFound
            heading={"No Records Found"}
            text={"There are no sustainability records available based on your search."}
          />
          )
        }
      />

      {/* Reward Points Modal */}
      <div
        className="modal fade"
        id={"sustainibility-points"}
        tabIndex="-1"
        aria-labelledby={"sustainibility-points-label"}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
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
  );
};

export default SustainibiltyRecord;
