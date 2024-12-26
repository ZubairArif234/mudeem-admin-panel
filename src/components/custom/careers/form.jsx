import React from "react";

const CareerForm = () => {
  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Job Title"
          />
        </div>

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
          <label className="form-label">Location</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Location"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Salary"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Link</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Linkedin Link"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Description</label>

          <textarea
            style={{ height: "100px" }}
            className="form-control form-control-sm"
            placeholder="Enter Job Description"
          ></textarea>
        </div>

        <div className="mt-10 d-flex gap-2 justify-content-end">
          <button
            type="button"
            class="btn btn-danger-600"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-success-600">
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
