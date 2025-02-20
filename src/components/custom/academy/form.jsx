import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateBook } from "../../../hook/apis/academy/useCreateBook";

const BookSchema = z.object({
  name: z.string().min(3, "Books name must be at least 3 characters"),
  author: z.string().min(3, "Author name must be at least 3 characters"),
  pages: z.number("No of pages is invalid"),
  language: z.string().min(3, "Language is invalid"),
  year: z.string().min(1, "Release date is invalid"),
  type: z.string().min(1, "Type is invalid"),
  greenPoints: z.number("Green points is invalid"),
  price: z.number("Price is invalid"),
  isPremium: z.string().min(1, "Required"),
  description: z
    .string()
    .min(10, "Book description must be at least 10 characters"),
});

const fileValidation = (file) => {
  if (!file) {
    return false;
  }
  const maxSize = 2 * 1024 * 1024; // 5MB limit
  const isValidSize = file.size <= maxSize;

  return isValidSize ? file : null;
};
const Form = () => {
  const { createBook, isPending } = useCreateBook();
  const [imagePreview, setImagePreview] = useState({
    file: null,
    src: "",
    error: "",
  });
  const [pdfPreview, setPdfPreview] = useState({
    file: null,
    src: "",
    error: "",
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (e, type) => {
    if (e.target.files.length) {
      if (fileValidation(e.target?.files[0])) {
        const src = URL.createObjectURL(e.target.files[0]);
        if (type === "image") {
          setImagePreview({
            ...imagePreview,
            file: e.target.files[0],
            src: src,
            error: "",
          });
        } else {
          setPdfPreview({
            ...pdfPreview,
            file: e.target.files[0],
            src: src,
            error: "",
          });
        }
      }
    }
  };

  const removeImage = (type) => {
    if (type === "image") {
      setImagePreview({
        file: null,
        src: "",
        error: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      setPdfPreview({
        file: null,
        src: "",
        error: "",
      });
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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BookSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (!imagePreview?.file) {
      setImagePreview({ ...imagePreview, error: "Upload image" });
    }
    if (!pdfPreview?.file) {
      setPdfPreview({ ...pdfPreview, error: "Upload PDF" });
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", data.name);
    formData.append("year", new Date(data.year).getFullYear());
    formData.append("author", data.author);
    formData.append("pages", data.pages);
    formData.append("language", data.language);
    formData.append("isPremium", data.category === "free" ? false : true);
    formData.append("description", data.description);
    formData.append("price", data?.price); // static price or use dynamic from data
    formData.append("greenPoints", data.greenPoints);
    formData.append("type", data.type);
    formData.append("cover", imagePreview?.file);
    formData.append("book", pdfPreview?.file);

    // Append images to FormData

    try {
      let res;
      // Send the data to createProduct API
      if (false) {
        console.log("jkjkj");

        // await updateProduct({ payload: formData, id: id });
      } else {
        res = await createBook(formData);
      }

      if (res) {
        setImagePreview({
          file: "",
          src: "",
          error: "",
        });
        setPdfPreview({
          file: "",
          src: "",
          error: "",
        });

        reset(); // Reset form fields
      }

      // Reset the form and clear states after successful submission
      // Navigate to the product page after successful submission
      // navigate("/shop-products");
    } catch (err) {
      // Handle errors
      console.error("Book creation failed:", err);
    }
  };
  console.log(pdfPreview, imagePreview);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row gy-3">
        <div className="col-lg-6">
          <label>Upload Book Cover</label>
          <div className="upload-image-wrapper d-flex align-items-center gap-3">
            {/* Image preview section */}
            {imagePreview?.file ? (
              <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                <button
                  type="button"
                  onClick={() => removeImage("image")}
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
                  src={imagePreview?.src}
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
              onChange={(e) => handleFileChange(e, "image")}
              hidden
              ref={fileInputRef}
              accept="image/*" // Optional: restrict to image files
            />
          </div>
          {imagePreview?.error && (
            <p className="text-danger-500">{imagePreview?.error}</p>
          )}
        </div>
        <div className="col-lg-6">
          <label>Upload Book PDF</label>
          <div className="upload-image-wrapper  d-flex align-items-center gap-3">
            {/* Image preview section */}
            {pdfPreview?.file ? (
              <div className=" position-relative   w-auto ps-6 pe-6 pt-2 pb-2 d-flex  overflow-hidden border-dashed bg-neutral-50">
                {pdfPreview?.src && (
                  <p className="mb-0">{pdfPreview?.file?.name}</p>
                )}
                <button
                  type="button"
                  onClick={() => removeImage("pdf")}
                  className="uploaded-img__remove top-0 end-0 z-1 text-2xxl line-height-1 ms-20 mt-4 d-flex"
                  aria-label="Remove uploaded image"
                >
                  <Icon
                    icon="radix-icons:cross-2"
                    className="text-xl text-danger-600"
                  ></Icon>
                </button>
              </div>
            ) : (
              <label
                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                htmlFor="upload-pdf"
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
              id="upload-pdf"
              accept="doc/*" // Optional: restrict to image files
              type="file"
              onChange={(e) => handleFileChange(e, "file")}
              hidden
              ref={fileInputRef}
            />
          </div>
          {pdfPreview?.error && (
            <p className="text-danger-500">{pdfPreview?.error}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Book Name"
            data-error={errors?.name ? "true" : "false"}
            {...register("name")}
          />
          {errors?.name && (
            <p className="text-danger-500">{errors?.name?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Author Name"
            data-error={errors?.author ? "true" : "false"}
            {...register("author")}
          />
          {errors?.author && (
            <p className="text-danger-500">{errors?.author?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label d-block">Type</label>

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
              value={"new"}
              {...register(`type`)}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio1"
            >
              New
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              value={"popular"}
              {...register(`type`)}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="btnradio3"
            >
              Popular
            </label>
          </div>
          {errors?.type && (
            <p className="text-danger-500">{errors?.type?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">No of pages</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter No of pages"
            data-error={errors?.pages ? "true" : "false"}
            {...register("pages", { valueAsNumber: true })}
          />
          {errors?.pages && (
            <p className="text-danger-500">{errors?.pages?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Language</label>
          <input
            type="text"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Language"
            data-error={errors?.language ? "true" : "false"}
            {...register("language")}
          />
          {errors?.language && (
            <p className="text-danger-500">{errors?.language?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Release Date</label>
          <input
            type="date"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Relase date"
            data-error={errors?.year ? "true" : "false"}
            {...register("year")}
          />
          {errors?.year && (
            <p className="text-danger-500">{errors?.year?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Green Points</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Green Points"
            data-error={errors?.greenPoints ? "true" : "false"}
            {...register("greenPoints", { valueAsNumber: true })}
          />
          {errors?.greenPoints && (
            <p className="text-danger-500">{errors?.greenPoints?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label d-block">Category</label>

          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="isPremium"
              id="premium"
              defaultChecked=""
              value={"premium"}
              {...register(`isPremium`)}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="premium"
            >
              Premium
            </label>

            <input
              type="radio"
              className="btn-check"
              name="isPremium"
              id="free"
              value={"free"}
              {...register(`isPremium`)}
            />
            <label
              className="btn btn-outline-success-600 px-20 py-11 radius-8"
              htmlFor="free"
            >
              Free
            </label>
          </div>
          {errors?.isPremium && (
            <p className="text-danger-500">{errors?.isPremium?.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="#0"
            className="form-control form-control-sm"
            placeholder="Enter Price"
            data-error={errors?.price ? "true" : "false"}
            {...register("price", { valueAsNumber: true })}
          />
          {errors?.price && (
            <p className="text-danger-500">{errors?.price?.message}</p>
          )}
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
            data-error={errors?.description ? "true" : "false"}
            {...register("description")}
          ></textarea>
          {errors?.description && (
            <p className="text-danger-500">{errors?.description?.message}</p>
          )}
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
