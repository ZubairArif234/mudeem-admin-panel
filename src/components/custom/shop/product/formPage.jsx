import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateProduct } from "../../../../hook/apis/shop/product/useCreateProduct";
import Loader from "../../extra/loader";
import { useGetCategory } from "../../../../hook/apis/shop/category/useGetCategory";
const SizeSchema = z.object({
  size: z.string().min(1, "Size is required"),
  stock: z.string().min(1, "Stock is required"),
});

const ColorSchema = z.object({
  color: z.string().min(1, "Color is required"),
  stock: z.string().min(1, "Stock is required"),
});

// Zod schema for the variants
const VariantSchema = z.object({
  name: z.string().min(1, "Variant name is required"),
  price: z.string().min(1, "Variant price is required"), // You can change this to number if price is numeric
  sizes: z.array(SizeSchema).min(1, "At least one size is required"),
  colors: z.array(ColorSchema).min(1, "At least one color is required"),
});

const ProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  brand: z.string().min(3, "Product brand must be at least 3 characters"),
  category: z.string().min(3, "Product category is invalid"),
  greenPointsPerUnit: z.string().min(1, "Product green point is invalid"),
  description: z
    .string()
    .min(10, "Product description must be at least 10 characters"),
  variants: z.array(VariantSchema).min(1, "At least one variant is required"),
});

const imageValidation = (file) => {
  if (!file) {
    return false;
  }
  const maxSize = 5 * 1024 * 1024; // 5MB limit
  const isValidSize = file.size <= maxSize;

  return isValidSize ? file : null;
};

const FormPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedImagesFiles, setUploadedImagesFiles] = useState([""]);
  const [variants, setVariants] = useState([
    {
      name: "",
      price: "",
      sizes: [
        {
          size: "",
          stock: "",
        },
      ],
      colors: [
        {
          color: "",
          stock: "",
        },
      ],
    },
  ]);
  const { categories } = useGetCategory();

  const { createProduct, isPending } = useCreateProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: state?.data?.name || "",
      brand: state?.data?.brand || "",
      greenPointsPerUnit: state?.data?.greenPointsPerUnit || "",
      category: state?.data?.category || "Select Category",
      description: state?.data?.description || "",
      variants,
    },
  });

  const handleFileChange = (e) => {
    if (uploadedImagesFiles.length < 2) {
      setUploadedImagesFiles([]);
    }
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => {
      if (imageValidation(file)) {
        setUploadedImagesFiles((prev) => [...prev, file]);

        return {
          src: URL.createObjectURL(file),
          file,
        };
      }
    });
    setUploadedImages((prev) => [...prev, ...newImages]);
    e.target.value = "";
  };

  const removeImage = (src) => {
    setUploadedImages((prev) => prev.filter((image) => image.src !== src));
    URL.revokeObjectURL(src);
  };

  const handleAddVariants = () => {
    setVariants((prev) => [
      ...prev,
      {
        name: "",
        price: "",
        sizes: [
          {
            size: "",
            stock: "",
          },
        ],
        colors: [
          {
            color: "",
            stock: "",
          },
        ],
      },
    ]);
  };

  const handleRemoveVariants = (i) => {
    const updatedVariants = variants.filter((_, index) => index !== i);

    setVariants(updatedVariants);
  };

  const handleAddSizeAndColour = (type, i) => {
    const updatedVariants = [...variants];
    if (type === "size") {
      updatedVariants[i].sizes = [
        ...updatedVariants[i].sizes,
        { size: "", stock: "" },
      ];
      setVariants(updatedVariants);
    } else if (type === "color") {
      updatedVariants[i].colors = [
        ...updatedVariants[i].colors,
        { color: "", stock: "" },
      ];
      setVariants(updatedVariants);
    }
  };

  const handleRemoveSizeAndColour = (type, i, indexToRemove) => {
    const updatedVariants = [...variants];

    if (type === "size") {
      updatedVariants[i].sizes = updatedVariants[i].sizes.filter(
        (_, index) => index !== indexToRemove
      );
      setVariants(updatedVariants);
    } else if (type === "color") {
      updatedVariants[i].colors = updatedVariants[i].colors.filter(
        (_, index) => index !== indexToRemove
      );
      setVariants(updatedVariants);
    }
  };

  //   const handleVariantsFieldValues = (e, type, variantsIndex, subTypeIndex) => {
  //     const updatedVariants = [...variants];
  //     if (type === "variant") {
  //       updatedVariants[variantsIndex][e.target.name] = e.target.value;
  //       setVariants(updatedVariants);
  //     } else {
  //       updatedVariants[variantsIndex][type][subTypeIndex][e.target.name] =
  //         e.target.value;
  //       console.log(updatedVariants);
  //     }
  //   };

  const onSubmit = async (data) => {
    const formData = new FormData();
    // uploadedImagesFiles.forEach((file) => {
    //   formData.append("images[]", file);
    // });
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category", "6764067422a914142b3ae5d3");
    formData.append("description", data.description);
    formData.append("price", 123);
    formData.append("greenPointsPerUnit", data.greenPointsPerUnit);
    formData.append("variants", JSON.stringify(data.variants));
    if (uploadedImages?.length < 1) {
      setUploadedImagesFiles([]);
    } else {
      try {
        await createProduct(formData);
        setUploadedImages([]);
        setUploadedImagesFiles([""]);
        console.log("Form Submitted", data, uploadedImages);
        reset();
        setVariants([
          {
            name: "",
            price: "",
            sizes: [
              {
                size: "",
                stock: "",
              },
            ],
            colors: [
              {
                color: "",
                stock: "",
              },
            ],
          },
        ]);
        navigate("/shop-products");
      } catch (err) {
        console.error("Product creation failed:", err);
      }
    }
  };

  return (
    <div className="card basic-data-table ">
      <div className="card-header ">
        <h5 className="card-title my-8">{id ? "Update" : "Create"} Product</h5>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <div className="row gy-8">
            <div className="col-xl-6">
              <div className="row">
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
                    {uploadedImages?.length < 4 && (
                      <label
                        className="upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                        htmlFor="upload-file-multiple"
                        data-error={
                          uploadedImagesFiles?.length < 1 ? "true" : "false"
                        }
                      >
                        <Icon
                          icon="solar:camera-outline"
                          className="text-xl text-secondary-light"
                        ></Icon>
                        <span className="fw-semibold text-secondary-light">
                          Upload
                        </span>
                        <input
                          id="upload-file-multiple"
                          type="file"
                          hidden
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                  </div>
                  {uploadedImagesFiles?.length < 1 && (
                    <p className="text-danger-500">
                      Invalid image file ( max 5MB)
                    </p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-sm"
                    placeholder="Enter Product Name"
                    data-error={errors?.name ? "true" : "false"}
                    {...register("name")}
                  />
                  {errors?.name && (
                    <p className="text-danger-500">{errors?.name?.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Brand Name</label>
                  <input
                    type="text"
                    name="brand"
                    className="form-control form-control-sm"
                    placeholder="Enter Brand Name"
                    data-error={errors?.brand ? "true" : "false"}
                    {...register("brand")}
                  />
                  {errors?.brand && (
                    <p className="text-danger-500">{errors?.brand?.message}</p>
                  )}
                </div>

                <div className="col-lg-6">
                  <label className="form-label">Green Points</label>
                  {/* <textarea> */}
                  <input
                    type="number"
                    name="#0"
                    className="form-control form-control-sm"
                    placeholder="Enter Green Points"
                    data-error={errors?.greenPointsPerUnit ? "true" : "false"}
                    {...register("greenPointsPerUnit")}
                  />
                  {errors?.greenPointsPerUnit && (
                    <p className="text-danger-500">
                      {errors?.greenPointsPerUnit?.message}
                    </p>
                  )}
                </div>

                <div className="col-lg-6">
                  <label className="form-label">Category</label>

                  <select
                    className="form-control form-control-sm"
                    placeholder="Select Category"
                    // data-error={errors?.category ? "true" : "false"}
                    {...register("category")}
                  >
                    <option value={"Select Category"} disabled>
                      Select Category
                    </option>
                    {categories?.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item?._id}
                          className="text-capitalize"
                        >
                          {item?.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors?.category && (
                    <p className="text-danger-500">
                      {errors?.category?.message}
                    </p>
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
                    <p className="text-danger-500">
                      {errors?.description?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/* variants */}
              {variants?.map((elem, i) => (
                <div key={i}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      Variant {variants?.length > 1 && i + 1}
                    </h6>
                    {variants?.length > 1 && (
                      <button onClick={() => handleRemoveVariants(i)}>
                        <Icon
                          icon="radix-icons:minus"
                          className="text-xl text-danger-600"
                        ></Icon>
                      </button>
                    )}
                  </div>
                  <div className="border-top my-8"></div>

                  <div className="row gy-8 mb-8">
                    <div className="col-xl-6">
                      <label className="form-label">Variant Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-sm"
                        placeholder="Enter Variant Name"
                        data-error={
                          errors?.variants && errors?.variants[i]?.name
                            ? "true"
                            : "false"
                        }
                        {...register(`variants[${i}].name`)}
                      />
                      {errors?.variants && (
                        <p className="text-danger-500">
                          {errors?.variants[i]?.name?.message}
                        </p>
                      )}
                    </div>

                    <div className="col-xl-6">
                      <label className="form-label">Variant Price</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control form-control-sm"
                        placeholder="Enter Variant Price"
                        data-error={
                          errors?.variants && errors?.variants[i]?.price
                            ? "true"
                            : "false"
                        }
                        {...register(`variants[${i}].price`)}
                        // value={elem?.price}
                        // onChange={(e) =>
                        //   handleVariantsFieldValues(e, "variant", i)
                        // }
                      />
                      {errors?.variants && (
                        <p className="text-danger-500">
                          {errors?.variants[i]?.price?.message}
                        </p>
                      )}
                    </div>
                    {/* sizes */}
                    <div className="col-xl-6 mt-8">
                      {elem?.sizes?.map((size, j) => (
                        <div key={j}>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-md fw-bold mb-0">
                              Size {elem?.sizes?.length > 1 && j + 1}
                            </p>
                            {elem?.sizes?.length - 1 == j &&
                            elem?.sizes?.length > 0 ? (
                              <button
                                onClick={() =>
                                  handleAddSizeAndColour("size", i)
                                }
                              >
                                <Icon
                                  icon="radix-icons:plus"
                                  className="text-xl text-success-600"
                                ></Icon>
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleRemoveSizeAndColour("size", i, j)
                                }
                              >
                                <Icon
                                  icon="radix-icons:minus"
                                  className="text-xl text-danger-600"
                                ></Icon>
                              </button>
                            )}
                          </div>
                          <div className="border-top my-8"></div>

                          <div className="row gy-8 mb-8">
                            <div className="col-lg-5">
                              <label className="form-label d-block">Size</label>
                              {/* <textarea> */}
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic radio toggle button group"
                              >
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name={`size${j + "," + i}`}
                                  id={`btnradio1${j + 1 + i}`}
                                  defaultChecked=""
                                  value={"large"}
                                  {...register(
                                    `variants[${i}].sizes[${j}].size`
                                  )}
                                />
                                <label
                                  className="btn btn-outline-success-600 px-10 py-8 radius-8"
                                  htmlFor={`btnradio1${j + 1 + i}`}
                                >
                                  L
                                </label>

                                <input
                                  type="radio"
                                  className="btn-check"
                                  name={`size${j + "," + i}`}
                                  id={`btnradio2${j - 2 + i}`}
                                  value={"medium"}
                                  {...register(
                                    `variants[${i}].sizes[${j}].size`
                                  )}
                                />
                                <label
                                  className="btn btn-outline-success-600 px-10 py-8 radius-8"
                                  htmlFor={`btnradio2${j - 2 + i}`}
                                >
                                  M
                                </label>

                                <input
                                  type="radio"
                                  className="btn-check"
                                  name={`size${j + "," + i}`}
                                  id={`btnradio3${j + 3 + i}`}
                                  value={"small"}
                                  {...register(
                                    `variants[${i}].sizes[${j}].size`
                                  )}
                                />
                                <label
                                  className="btn btn-outline-success-600 px-10 py-8 radius-8"
                                  htmlFor={`btnradio3${j + 3 + i}`}
                                >
                                  S
                                </label>
                              </div>
                              {errors?.variants &&
                                errors?.variants[i] &&
                                Array.isArray(errors?.variants[i]?.sizes) &&
                                errors?.variants[i]?.sizes[j] && (
                                  <p className="text-danger-500">
                                    {
                                      errors?.variants[i]?.sizes[j]?.size
                                        ?.message
                                    }
                                  </p>
                                )}
                            </div>

                            <div className="col-lg-7">
                              <label className="form-label">
                                Stock Quantity
                              </label>
                              <input
                                type="number"
                                name="stock"
                                className="form-control form-control-sm"
                                placeholder="Enter Stock "
                                data-error={
                                  errors?.variants &&
                                  errors?.variants[i] &&
                                  Array.isArray(errors?.variants[i]?.sizes) &&
                                  errors?.variants[i]?.sizes[j] &&
                                  errors?.variants[i]?.sizes[j]?.stock
                                    ? "true"
                                    : "false"
                                }
                                {...register(
                                  `variants[${i}].sizes[${j}].stock`
                                )}
                                // value={size?.stock}
                                // {...register(
                                //   `variants[${i}].sizes[${j}].stock`
                                // )}
                                // onChange={(e) =>
                                //   handleVariantsFieldValues(e, "sizes", i, j)
                                // }
                              />
                              {errors?.variants &&
                                errors?.variants[i] &&
                                Array.isArray(errors?.variants[i]?.sizes) &&
                                errors?.variants[i]?.sizes[j] && (
                                  <p className="text-danger-500">
                                    {
                                      errors?.variants[i]?.sizes[j]?.stock
                                        ?.message
                                    }
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* colors */}
                    <div className="col-xl-6 mt-8">
                      {elem?.colors?.map((color, k) => (
                        <div key={k}>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-md fw-bold mb-0">
                              Color {elem?.colors?.length > 1 && k + 1}
                            </p>
                            {elem?.colors?.length - 1 == k &&
                            elem?.colors?.length > 0 ? (
                              <button
                                onClick={() =>
                                  handleAddSizeAndColour("color", i)
                                }
                              >
                                <Icon
                                  icon="radix-icons:plus"
                                  className="text-xl text-success-600"
                                ></Icon>
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleRemoveSizeAndColour("color", i, k)
                                }
                              >
                                <Icon
                                  icon="radix-icons:minus"
                                  className="text-xl text-danger-600"
                                ></Icon>
                              </button>
                            )}
                          </div>
                          <div className="border-top my-8"></div>

                          <div className="row gy-8 mb-8">
                            <div className="col-lg-5">
                              <label className="form-label">Color</label>
                              <input
                                type="color"
                                name="color"
                                className="form-control form-control-sm w-10"
                                placeholder="Enter Shop Name"
                                data-error={
                                  errors?.variants &&
                                  errors?.variants[i] &&
                                  Array.isArray(errors?.variants[i]?.colors) &&
                                  errors?.variants[i]?.colors[k] &&
                                  errors?.variants[i]?.colors[k]?.stock
                                    ? "true"
                                    : "false"
                                }
                                {...register(
                                  `variants[${i}].colors[${k}].color`
                                )}
                                // value={color?.color}
                                // onChange={(e) =>
                                //   handleVariantsFieldValues(e, "sizes", i, k)
                                // }
                              />
                              {errors?.variants &&
                                errors?.variants[i] &&
                                Array.isArray(errors?.variants[i]?.colors) &&
                                errors?.variants[i]?.colors[k] && (
                                  <p className="text-danger-500">
                                    {
                                      errors?.variants[i]?.colors[k]?.color
                                        ?.message
                                    }
                                  </p>
                                )}
                            </div>

                            <div className="col-lg-7">
                              <label className="form-label">
                                Stock Quantity
                              </label>
                              <input
                                type="number"
                                name="stock"
                                className="form-control form-control-sm"
                                placeholder="Enter Stock "
                                data-error={
                                  errors?.variants &&
                                  errors?.variants[i] &&
                                  Array.isArray(errors?.variants[i]?.colors) &&
                                  errors?.variants[i]?.colors[k] &&
                                  errors?.variants[i]?.colors[k]?.stock
                                    ? "true"
                                    : "false"
                                }
                                {...register(
                                  `variants[${i}].colors[${k}].stock`
                                )}
                                // value={color?.stock}
                                // onChange={(e) =>
                                //   handleVariantsFieldValues(e, "colors", i, k)
                                // }
                              />
                              {errors?.variants &&
                                errors?.variants[i] &&
                                Array.isArray(errors?.variants[i]?.colors) &&
                                errors?.variants[i]?.colors[k] && (
                                  <p className="text-danger-500">
                                    {
                                      errors?.variants[i]?.colors[k]?.stock
                                        ?.message
                                    }
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* add new variants */}
              <button
                onClick={handleAddVariants}
                type="button"
                className="btn w-100 btn-outline-success-600 radius-8 px-20 py-11"
              >
                Add New Variant
              </button>
            </div>
          </div>

          {/* form button */}
          <div className="d-flex justify-content-end my-8">
            <button type="submit" className="btn bg-success-600 text-white">
              {isPending ? (
                <Loader loading={isPending} />
              ) : id ? (
                "Update Product"
              ) : (
                "Create Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
