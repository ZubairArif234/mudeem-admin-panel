import React from "react";

const Form = () => {
  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Latitude</label>
          <input
            type="text"
            name="latitude"
            className="form-control form-control-sm"
            placeholder="Enter Latitude"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Longitude</label>
          <input
            type="text"
            name="longitude"
            className="form-control"
            placeholder="Enter Longitude"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="Category"
            className="form-control form-control-sm"
            placeholder="Enter Category"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Green Points</label>
          <input
            type="number"
            name="greenPoints"
            className="form-control form-control-sm"
            placeholder="Enter Green Points"
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
        <button type="submit" className="btn btn-success-600">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default Form;
