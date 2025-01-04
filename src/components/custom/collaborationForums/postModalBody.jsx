import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../child/CarouselWithArrows";
import Modal from "../extra/modal";
import { SingleTooltipTextPopup } from "../../child/TooltipTextPopup";
import { Icon } from "@iconify/react/dist/iconify.js";

const PostModalBody = ({ data }) => {
  return (
    <div>
      <div className="bg-neutral-300">
        <CarouselWithArrowsOnlyImage
          images={[
            "https://media.istockphoto.com/id/1394781347/photo/hand-holdig-plant-growing-on-green-background-with-sunshine.jpg?s=612x612&w=0&k=20&c=COX7-_QX8cLlL-oFKQYJgG5CEItpIN4JBbtcjPap1cA=",
            "https://media.istockphoto.com/id/1394781347/photo/hand-holdig-plant-growing-on-green-background-with-sunshine.jpg?s=612x612&w=0&k=20&c=COX7-_QX8cLlL-oFKQYJgG5CEItpIN4JBbtcjPap1cA=",
          ]}
        />
      </div>
      <div className="d-flex align-items-center gap-2 my-3">
        <img
          src="assets/images/user.png"
          alt="image_user"
          className="w-40 h-40 object-fit-cover rounded-circle"
        />
        <h5 className="card-title text-lg text-primary-light mb-6">
          {data?.userName}
        </h5>
      </div>
      <p className="card-text text-neutral-600 mb-16 ">{data?.postText}</p>
      <div className="mt-10 d-flex gap-2 align-items-center justify-content-end">
        <button
          data-bs-toggle="modal"
          data-bs-target="#reward-points"
          type="button"
          class="btn btn-success-600 "
        >
          Approve
        </button>

        <button
          type="button"
          class="btn btn-danger-600"
          data-bs-dismiss="modal"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default PostModalBody;
