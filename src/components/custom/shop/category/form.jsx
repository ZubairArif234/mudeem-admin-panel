import React from "react";

const CategoryForm = () => {
  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Category Name"
          />
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

export default CategoryForm;
