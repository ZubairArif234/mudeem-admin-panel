import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";

const BannerForm = () => {
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
    <form>
      <div className="row gy-3">
        <div className="col-12">
          <label>Upload Banner Image</label>
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
                <span className="fw-semibold text-secondary-light">Upload</span>
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

        <div className="col-12">
          <label className="form-label">Banner Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Banner Name"
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

export default BannerForm;
