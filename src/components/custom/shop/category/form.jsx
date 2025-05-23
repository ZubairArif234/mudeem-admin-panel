import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCategory } from "../../../../hook/apis/shop/category/useCreateCategory";
import Loader from "../../extra/loader";
import { useUpdateCategory } from "../../../../hook/apis/shop/category/useUpdateCategory";

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

const CategorySchema = z.object({
  name: z.string().min(3, "Invalid Category Name"),
  name_ar: z.string().min(3, "Invalid Category Name in Arabic"),
});

const CategoryForm = ({ data }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState("hai");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
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

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: data?.name || "",
      name_ar: data?.name_ar || "",
    },
  });

  useEffect(() => {
    console.log(data);
    if (data?.name || data?.image || data?.name_ar) {
      setValue("name", data.name);
      setValue("name_ar", data.name_ar);
      setImagePreview(data.image);
      setImageFile(data.image);
    }
  }, [data]);

  const { createCategory, isPending } = useCreateCategory();
  const { updateCategory, updatePending } = useUpdateCategory();

  const handleFormSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("name_ar", values.name_ar);
    if (!imageFile) {
      return;
    } else {
      console.log(imageFile);

      formData.append("image", imageFile);
    }

    try {
      if (data?._id) {
        await updateCategory({ payload: formData, id: data._id });
      } else {
        await createCategory(formData);
      }
      reset();
      setImagePreview(null);
      setImageFile(".");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleClose = () => {
    reset();
    setImagePreview(null);
    setImageFile(".");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (imagePreview === null) {
          setImageFile(null);
        } else {
          handleSubmit(handleFormSubmit)(e);
        }
      }}
    >
      <div className="row gy-3">
        <div className="col-12">
          <label>Upload Banner Image (only PNG , max 5MB)</label>
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
                  id="uploaded-img_ _preview"
                  className="w-100 h-100 object-fit-cover"
                  src={imagePreview}
                  alt="Preview"
                />
              </div>
            ) : (
              !imagePreview && (
                <label
                  className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                  htmlFor={`upload-file-${data?._id}`}
                  data-error={!imageFile ? "true" : "false"}
                >
                  <Icon
                    icon="solar:camera-outline"
                    className="text-xl text-secondary-light"
                  ></Icon>
                  <span className="fw-semibold text-secondary-light">
                    Upload
                  </span>
                </label>
              )
            )}

            <input
              id={`upload-file-${data?._id}`}
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
          <label className="form-label">Category Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Category Name"
            data-error={errors?.name ? "true" : "false"}
            {...register("name")}
          />
          {errors?.name && (
            <p className="text-danger-500">{errors?.name?.message}</p>
          )}
        </div>
        <div className="col-12">
          <label className="form-label">Category Name in Arabic</label>
          <input
            type="text"
            name="name_ar"
            className="form-control form-control-sm"
            placeholder="Enter Category Name in Arabic"
            dir="rtl"
            data-error={errors?.name_ar ? "true" : "false"}
            {...register("name_ar")}
          />
          {errors?.name_ar && (
            <p className="text-danger-500">{errors?.name_ar?.message}</p>
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
              "Save Category"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CategoryForm;
