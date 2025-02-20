import React from "react";

const ViewBookModalContent = ({ data }) => {
  console.log(data, "data hai andar");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={data?.thumbnail || "/assets/images/book.png"} width={200} alt="Book Thumbnail" />
      </div>

      <p className="text-xxl fw-bold mb-0 text-center">{data?.title}</p>
      <p className="text-center">{data?.author}</p>

      <div className="row gy-3">
        <div className="col-4">
          <p className="text-center mb-0 text-xl">{data?.pages}</p>
          <p className="text-center text-sm">Pages</p>
        </div>
        <div className="col-4">
          <p className="text-center mb-0 text-xl">{data?.language}</p>
          <p className="text-center text-sm">Language</p>
        </div>
        <div className="col-4">
          <p className="text-center mb-0 text-xl">{data?.year}</p>
          <p className="text-center text-sm">Release</p>
        </div>
      </div>

      <p>{data?.description}</p>

      <div className="border-top my-8"></div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="mb-0 text-sm">Reward Green points</p>
          <p className="text-xl text-success-500 fw-bold">{data?.greenPoints} pts</p>
        </div>
        <div>
          <p className="mb-0 text-sm">Pay Green Points</p>
          <p className="text-xl fw-bold">{data?.price} pts</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBookModalContent;

