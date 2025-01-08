import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../child/CarouselWithArrows";
import Modal from "../extra/modal";
import { SingleTooltipTextPopup } from "../../child/TooltipTextPopup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useChangeStatus } from "../../../hook/apis/collaborationForums/useChangeStatus";
import { toast } from "sonner";

const PostModalBody = ({ data, handleAcceptPost, handleRejectedPost }) => {
  return (
    <div>
      <div className="bg-neutral-300">
        <CarouselWithArrowsOnlyImage images={data?.images} />
      </div>
      <div className="d-flex align-items-center gap-2 my-3">
        <img
          src="assets/images/user.png"
          alt="image_user"
          className="w-40 h-40 object-fit-cover rounded-circle"
        />
        <h5 className="card-title text-lg text-primary-light mb-6">
          {data?.user?.name}
        </h5>
      </div>
      <p className="card-text text-neutral-600 mb-16 ">{data?.content}</p>
      {data?.status === "requested" && (
        <div className="mt-10 d-flex gap-2 align-items-center justify-content-end">
          <button
            data-bs-toggle="modal"
            data-bs-target="#reward-points"
            type="button"
            className="btn btn-success-600 "
            onClick={() => handleAcceptPost(data?._id)}
          >
            Approve
          </button>

          <button
            type="button"
            className="btn btn-danger-600"
            data-bs-dismiss="modal"
            onClick={() => handleRejectedPost(data?._id)}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default PostModalBody;
