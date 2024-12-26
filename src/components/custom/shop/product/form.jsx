import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const ProductForm = () => {
  const [colourName, setColourName] = useState("");
  const [colours, setColours] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      src: URL.createObjectURL(file),
      file,
    }));
    setUploadedImages((prev) => [...prev, ...newImages]);
    e.target.value = "";
  };

  const removeImage = (src) => {
    setUploadedImages((prev) => prev.filter((image) => image.src !== src));
    URL.revokeObjectURL(src);
  };

  const removeColour = (e, index) => {
    e.preventDefault();
    const updatedColour = colours.filter((_, i) => i !== index);

    setColours(updatedColour);
  };

  return (
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label>Upload Images</label>
          <div className="upload-image-wrapper d-flex align-items-center gap-3 flex-wrap">
            <div className="uploaded-imgs-container d-flex gap-3 flex-wrap">
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  className="position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50"
                >
                  <button
                    type="button"
                    className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                    onClick={() => removeImage(image.src)}
                  >
                    <Icon
                      icon="radix-icons:cross-2"
                      className="text-xl text-danger-600"
                    ></Icon>
                  </button>
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={image.src}
                    alt="Uploaded Preview"
                  />
                </div>
              ))}
            </div>

            <label
              className="upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
              htmlFor="upload-file-multiple"
            >
              <Icon
                icon="solar:camera-outline"
                className="text-xl text-secondary-light"
              ></Icon>
              <span className="fw-semibold text-secondary-light">Upload</span>
              <input
                id="upload-file-multiple"
                type="file"
                hidden
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="col-12">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Product Name"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Brand Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Brand Name"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Decsription</label>
          {/* <textarea> */}
          <textarea
            name="#0"
            // rows={10}
            style={{ height: "100px" }}
            className="form-control form-control-sm"
            placeholder="Enter Description"
          ></textarea>
        </div>

        <div className="col-lg-6">
          <label className="form-label d-block">Sizes</label>
          {/* <textarea> */}
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              defaultChecked=""
              value={"large"}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio1"
            >
              L
            </label>

            <input
              type="checkbox"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              value={"medium"}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio2"
            >
              M
            </label>

            <input
              type="checkbox"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              value={"small"}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio3"
            >
              S
            </label>
          </div>
        </div>

        <div className="col-lg-6">
          <label className="form-label d-block">Availibility</label>
          {/* <textarea> */}
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
              In stock
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
              Out of stock
            </label>
          </div>
        </div>

        <div className="col-lg-6">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Quantity"
          />
        </div>

        <div className="col-lg-6">
          <label className="form-label">Colours</label>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="color"
              name="#0"
              className="form-control form-control-sm w-10"
              placeholder="Enter Shop Name"
              onChange={(e) => {
                setColourName(e.target.value);
              }}
            />
            <button
              disabled={colourName ? false : true}
              onClick={() => {
                setColours((prev) => [...prev, colourName]);
                setColourName("");
              }}
              className="btn bg-success-500 text-white"
            >
              <Icon
                icon="material-symbols:check-rounded"
                width="24"
                height="24"
              />
            </button>
          </div>
          <div className="d-flex gap-2 mt-3">
            {colours?.map((item, i) => {
              return (
                <span
                  style={{
                    backgroundColor: item,
                    height: "25px",
                    width: "25px",
                    borderRadius: "5px",
                  }}
                  className="btn btn-success-600 position-relative px-20 py-8 text-sm line-height-1 d-flex align-items-center"
                >
                  <span
                    onClick={(e) => removeColour(e, i)}
                    className="position-absolute top-0 start-100 translate-middle  rounded-pill bg-success-600 border border-white"
                  >
                    <Icon
                      icon="material-symbols:cancel-outline-rounded"
                      width="20"
                      height="20"
                    />
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="col-lg-6">
          <label className="form-label">Category</label>

          <select className="form-control form-control-sm">
            <option disabled>Select Category</option>
            <option>Clothings</option>
            <option>Electronics</option>
            <option>Soap</option>
            <option>Watches</option>
          </select>
        </div>

        <div className="col-lg-6">
          <label className="form-label">Shop</label>
          {/* <textarea> */}
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Shop Name"
          />
        </div>

        <div className="col-lg-6">
          <label className="form-label">Green Points</label>
          {/* <textarea> */}
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Green Points"
          />
        </div>
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
    </form>
  );
};

export default ProductForm;
