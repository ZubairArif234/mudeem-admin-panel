import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const Form = () => {
  const [features, setFeatures] = useState([""]);

  const handleRemoveField = (e, index) => {
    e.preventDefault();
    const updatedFeatures = features.filter((_, i) => i !== index);

    setFeatures(updatedFeatures);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const isFieldFilled = features?.every((item) => item.trim() !== "");
    if (isFieldFilled) {
      setFeatures((prev) => [...prev, ""]);
    }
  };

  const handleChangeField = (e, i) => {
    e.preventDefault();
    const updatedFeatures = [...features];
    updatedFeatures[i] = e.target.value;
    setFeatures(updatedFeatures);
  };
  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Package Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Package Name"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Package Price</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Package Price"
          />
        </div>

        <div className="col-12">
          <label className="form-label d-block">Category</label>

          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              defaultChecked=""
              value={"monthly"}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio1"
            >
              Monthly
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              value={"yearly"}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio3"
            >
              Yearly
            </label>
          </div>
        </div>

        <div className="col-12">
          <label className="form-label">Features</label>
          {features?.map((item, i) => {
            return (
              <div className="d-flex align-items-center gap-2 mb-3">
                <input
                  type="text"
                  name="#0"
                  className="form-control form-control-sm"
                  placeholder="Enter Feature"
                  value={item}
                  onChange={(e) => handleChangeField(e, i)}
                />
                {features?.length > 1 && (
                  <Icon
                    onClick={(e) => handleRemoveField(e, i)}
                    className="text-danger-600 cursor-pointer"
                    icon="material-symbols:cancel-outline-rounded"
                    width="24"
                    height="24"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="col-12">
          <button
            onClick={handleAddField}
            className="btn bg-success-50 text-success-500 w-100"
          >
            Add new feature
          </button>
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
