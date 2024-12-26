import React from "react";

const ViewBookModalContent = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src="/assets/images/book.png" width={200} />
      </div>
      <p className="text-xxl fw-bold mb-0 text-center">Title of book</p>
      <p className="text-center">Author of book</p>

      <div className="row gy-3">
        <div className="col-4">
          <p className="text-center mb-0 text-xl">130</p>
          <p className="text-center text-sm">Page</p>
        </div>
        <div className="col-4">
          <p className="text-center mb-0 text-xl">English</p>
          <p className="text-center text-sm">Language</p>
        </div>
        <div className="col-4">
          <p className="text-center mb-0 text-xl">2018</p>
          <p className="text-center text-sm">Release</p>
        </div>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <div className="border-top my-8"></div>
      <div className="d-flex justify-content-between">
        <div className="">
          <p className=" mb-0 text-sm">Reward Green points</p>
          <p className=" text-xl text-success-500 fw-bold">120 pts</p>
        </div>
        <div className="">
          <p className="mb-0 text-sm">Pay Green Points</p>
          <p className="text-xl fw-bold"> 400.00 pts</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBookModalContent;
