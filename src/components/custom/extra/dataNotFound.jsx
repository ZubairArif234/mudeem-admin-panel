import React from "react";

const DataNotFound = ({ heading, text }) => {
  return (
    <div className="  d-flex justify-content-center align-items-center h-100">
      <div
        style={{ minHeight: "58vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <p className="mb-0 text-xxl fw-bold text-center">{heading}</p>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default DataNotFound;
