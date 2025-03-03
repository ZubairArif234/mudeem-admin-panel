import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBanner } from "../../../../hook/apis/shop/banner/useCreateBanner";
import { useUpdateBanner } from "../../../../hook/apis/shop/banner/useUpdatebanner";
import Loader from "../../extra/loader";

const imageValidation = (file) => {
  const allowedTypes = ["image/png"];
  if (!file) {
    return false;
  }
  const isValidType = allowedTypes.includes(file.type);
  const maxSize = 5 * 1024 * 1024; // 5MB limit
  const isValidSize = file.size <= maxSize;

  return isValidType && isValidSize ? file : null;
};

const BannerSchema = z.object({
  name: z.string().min(3, "Invalid Banner Name"),
});

const BannerForm = ({ data }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState("hai");
  const fileInputRef = useRef(null);

  const { createBanner, isPending } = useCreateBanner();
  const { updateBanner, updatePending } = useUpdateBanner();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BannerSchema),
    defaultValues: {
      name: data?.name || "",
    },
  });

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      if (imageValidation(e.target.files[0])) {
        const src = URL.createObjectURL(e.target.files[0]);
        setImagePreview(src);
        setImageFile(e.target.files[0]);
      }
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (data?._id) {
        await updateBanner({ payload: formData, id: data._id });
      } else {
        await createBanner(formData);
      }
      reset();
      setImagePreview(null);
      setImageFile(null);
    } catch (err) {
      console.error("Banner failed:", err);
    }
  };

  const handleClose = () => {
    reset();
    setImagePreview(null);
    setImageFile("hai");
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  useEffect(() => {
    if (data?.name || data?.image) {
      setValue("name", data.name);

      setImagePreview(data.image);
      setImageFile(data.image);
    }
  }, [data]);
  console.log(imagePreview);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="row gy-3">
        <div className="col-12">
          <label>Upload Banner Image</label>
          <div className="upload-image-wrapper d-flex align-items-center gap-3">
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
                data-error={!imageFile ? "true" : "false"}
              >
                <Icon
                  icon="solar:camera-outline"
                  className="text-xl text-secondary-light"
                ></Icon>
                <span className="fw-semibold text-secondary-light">Upload</span>
              </label>
            )}
            <input
              id="upload-file"
              type="file"
              onChange={handleFileChange}
              hidden
              ref={fileInputRef}
              accept="image/*"
            />
          </div>
          {!imageFile && (
            <p className="text-danger-500">
              Invalid image file (only PNG, max 5MB)
            </p>
          )}
        </div>

        <div className="col-12">
          <label className="form-label">Banner Name</label>
          <input
            type="text"
            name="name"
            className="form-control form-control-sm"
            placeholder="Enter Banner Name"
            data-error={errors?.name ? "true" : "false"}
            {...register("name")}
          />
          {errors?.name && (
            <p className="text-danger-500">{errors?.name?.message}</p>
          )}
        </div>

        <div className="mt-10 d-flex gap-2 justify-content-end">
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-danger-600"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-success-600"
            data-bs-dismiss={data && "modal"}
          >
            {isPending || updatePending ? (
              <Loader loading={isPending || updatePending} />
            ) : (
              "Save Banner"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BannerForm;
