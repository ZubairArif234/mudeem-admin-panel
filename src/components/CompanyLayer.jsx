import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";

const CompanyLayer = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImagePreview(src);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);
  return (
    <div className="card h-100 p-0 radius-12 overflow-hidden">
      <div className="card-body p-40">
        <form action="#">
          <div className="row">
            <div className="col-6">
              <label>Upload Logo</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
                {/* Image preview section */}
                {imagePreview ? (
                  <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                    <button
                      type="button"
                      onClick={removeImage}
                      className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                      aria-label="Remove uploaded image"
                    >
                      <Icon
                        icon="radix-icons:cross-2"
                        className="text-xl text-danger-600"
                      ></Icon>
                    </button>
                    <img
                      id="uploaded-img__preview"
                      className="w-100 h-100 object-fit-cover"
                      src={imagePreview}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <label
                    className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                    htmlFor="upload-file"
                  >
                    <Icon
                      icon="solar:camera-outline"
                      className="text-xl text-secondary-light"
                    ></Icon>
                    <span className="fw-semibold text-secondary-light">
                      Upload
                    </span>
                  </label>
                )}

                {/* Always render the input, but hide it */}
                <input
                  id="upload-file"
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  ref={fileInputRef}
                  accept="image/*" // Optional: restrict to image files
                />
              </div>
            </div>
            <div className="col-6">
              <label>Upload Favicon</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
                {/* Image preview section */}
                {imagePreview ? (
                  <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                    <button
                      type="button"
                      onClick={removeImage}
                      className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                      aria-label="Remove uploaded image"
                    >
                      <Icon
                        icon="radix-icons:cross-2"
                        className="text-xl text-danger-600"
                      ></Icon>
                    </button>
                    <img
                      id="uploaded-img__preview"
                      className="w-100 h-100 object-fit-cover"
                      src={imagePreview}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <label
                    className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                    htmlFor="upload-file"
                  >
                    <Icon
                      icon="solar:camera-outline"
                      className="text-xl text-secondary-light"
                    ></Icon>
                    <span className="fw-semibold text-secondary-light">
                      Upload
                    </span>
                  </label>
                )}

                {/* Always render the input, but hide it */}
                <input
                  id="upload-file"
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  ref={fileInputRef}
                  accept="image/*" // Optional: restrict to image files
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-20">
                <label
                  htmlFor="name"
                  className="form-label fw-semibold text-primary-light text-sm mb-8"
                >
                  Website Name <span className="text-danger-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-control radius-8"
                  id="name"
                  placeholder="Enter Website Name"
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="mb-20">
                <label
                  htmlFor="address"
                  className="form-label fw-semibold text-primary-light text-sm mb-8"
                >
                  {" "}
                  Wesbite Description <span className="text-danger-600">*</span>
                </label>

                <textarea
                  className="form-control radius-8"
                  id="address"
                  placeholder="Enter Website Description"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-20">
                <label
                  htmlFor="name"
                  className="form-label fw-semibold text-primary-light text-sm mb-8"
                >
                  Carpooling Green Points{" "}
                  <span className="text-danger-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-control radius-8"
                  id="name"
                  placeholder="Enter Carpooling Green Points"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-20">
                <label
                  htmlFor="name"
                  className="form-label fw-semibold text-primary-light text-sm mb-8"
                >
                  Campus Green Points <span className="text-danger-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-control radius-8"
                  id="name"
                  placeholder="Enter Campus Green Points"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-20">
                <label
                  htmlFor="name"
                  className="form-label fw-semibold text-primary-light text-sm mb-8"
                >
                  GPT Green Points per message
                  <span className="text-danger-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-control radius-8"
                  id="name"
                  placeholder="Enter GPT Green Points"
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-end gap-3 mt-24">
              <button
                type="submit"
                className="btn btn-success-500 border border-success-600 text-md px-24 py-12 radius-8"
              >
                Save Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyLayer;
