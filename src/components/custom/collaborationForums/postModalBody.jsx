import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../child/CarouselWithArrows";

const PostModalBody = ({ data, handleAcceptPost, handleRejectedPost }) => {
  return (
    <div>
      <div className="bg-neutral-300">
        {data?.images?.length > 1 ? (
          <CarouselWithArrowsOnlyImage
            images={data?.images}
            imageClass={"post-detail-image"}
          />
        ) : (
          <img src={data?.images[0]} alt="" className="post-detail-image" />
        )}
      </div>
      <div className="d-flex align-items-center gap-2 my-3">
        <img
          src={data?.user?.profilePicture || "/default.png"}
          alt={data?.user?.name}
          className="rounded-circle"
          style={{
            aspectRatio: "1 / 1",
            backgroundColor: "#dbdbdb",
            borderRadius: "50%",
            height: "60px",
            width: "60px",
            objectFit: "cover"
          }}
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
