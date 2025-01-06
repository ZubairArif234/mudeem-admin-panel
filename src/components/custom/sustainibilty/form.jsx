import React from "react";

const Form = () => {
  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Company Name"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Owner Name</label>
          <input
            type="text"
            name="#0"
            className="form-control"
            placeholder="Enter Owner Name"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Location"
          />
        </div>
      </div>
      <div className="mt-10 d-flex gap-2 justify-content-end">
        <button
          type="button"
          className="btn btn-danger-600"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-success-600">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default Form;
