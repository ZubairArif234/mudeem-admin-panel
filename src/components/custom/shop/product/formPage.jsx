import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateProduct } from "../../../../hook/apis/shop/product/useCreateProduct";
import Loader from "../../extra/loader";
import { useGetCategory } from "../../../../hook/apis/shop/category/useGetCategory";
import { useUpdateProduct } from "../../../../hook/apis/shop/product/useUpdateProduct";
import { useGetProductById } from "../../../../hook/apis/shop/product/useGetproductById";

// Zod schema for size
const SizeSchema = z.object({
  size: z.string().min(1, "Size is required"),
  stock: z.string().min(1, "Stock is required"),
});

// Zod schema for color
const ColorSchema = z.object({
  color: z.string().min(1, "Color is required"),
  stock: z.string().min(1, "Stock is required"),
});

const VariantSchema = z.object({
  name: z.string().min(1, "Variant name is required"),
  name_ar: z.string().min(1, "Variant name in Arabic is required"),
  price: z
    .union([z.string(), z.number()])
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a valid number",
    }), // ✅ Allow both string and number
  sizes: z.array(SizeSchema).min(1, "At least one size is required"),
  colors: z.array(ColorSchema).min(1, "At least one color is required"),
});

// Zod schema for product
const ProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  name_ar: z.string().min(3, "Product name in Arabic must be at least 3 characters"),
  brand: z.string().min(3, "Product brand must be at least 3 characters"),
  brand_ar: z.string().min(3, "Product brand in Arabic must be at least 3 characters"),
  category: z.string().min(3, "Product category is invalid"),
  greenPointsPerUnit: z.string().min(1, "Product green point is invalid"),
  featured: z.boolean(),
  description: z
    .string()
    .min(10, "Product description must be at least 10 characters"),
  description_ar: z
    .string()
    .min(10, "Product description in Arabic must be at least 10 characters"),
  variants: z.array(VariantSchema).min(1, "At least one variant is required"),
});

// Image validation function
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
  const [uploadedImagesFiles, setUploadedImagesFiles] = useState([]);
  const [variants, setVariants] = useState([
    {
      _id: "",
      name: "",
      name_ar: "",
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
  const { updateProduct, updatePending } = useUpdateProduct();
  const { createProduct, isPending } = useCreateProduct();
  const { productDetail } = useGetProductById(state?.data?._id);

  console.log("Product Detail: ", productDetail);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      name_ar: "",
      brand: "",
      brand_ar: "",
      greenPointsPerUnit: "",
      price: "", // ✅ Ensure price has a default value
      category: "Select Category",
      description: "",
      description_ar: "",
      featured: false,
      variants: [
        {
          name: "",
          name_ar: "",
          price: "", // ✅ Ensure price is in defaultValues
          sizes: [{ size: "", stock: "" }],
          colors: [{ color: "", stock: "" }],
        },
      ],
    },
  });

  // Reset form when productDetail changes
  useEffect(() => {
    if (productDetail) {
      reset({
        name: productDetail.name || "",
        name_ar: productDetail.name_ar || "",
        brand: productDetail.brand || "",
        brand_ar: productDetail.brand_ar || "",
        greenPointsPerUnit: String(productDetail.greenPointsPerUnit) || "",
        category: productDetail.category?._id || "Select Category",
        description: productDetail.description || "",
        description_ar: productDetail.description_ar || "",
        featured: productDetail.featured || false,
        variants: productDetail.variants?.map((item) => ({
          _id: item._id,
          name: item.name || "",
          name_ar: item.name_ar || "",
          price: String(item.price),
          sizes: item.sizes?.map((val) => ({
            size: val.size,
            stock: String(val.stock),
          })),
          colors: item.colors?.map((val) => ({
            color: val.color,
            stock: String(val.stock),
          })),
        })) || [
          {
            _id: "",
            name: "",
            name_ar: "",
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
        ],
      });
      setUploadedImages(productDetail.images || []);
      setUploadedImagesFiles(productDetail.images || []);
      setVariants(
        productDetail.variants?.map((item) => ({
          _id: item._id,
          name: item.name || "",
          name_ar: item.name_ar || "",
          price: String(item.price),
          sizes: item.sizes?.map((val) => ({
            size: val.size,
            stock: String(val.stock),
          })),
          colors: item.colors?.map((val) => ({
            color: val.color,
            stock: String(val.stock),
          })),
        })) || [
          {
            _id: "",
            name: "",
            name_ar: "",
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
        ]
      );
    }
  }, [productDetail, reset]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    try {
      const newImages = [];
      const newFiles = [];

      files.forEach((file) => {
        if (imageValidation(file)) {
          newFiles.push(file);
          newImages.push({ src: URL.createObjectURL(file), file: file });
        }
      });

      setUploadedImages((prev) => [...prev, ...newImages]);
      setUploadedImagesFiles((prev) => [...prev, ...newFiles]);
    } catch (err) {
      console.log(err);
    }
    e.target.value = "";
  };

  // const removeImage = (src) => {
  //   setUploadedImages((prev) => prev.filter((image) => image !== src));
  //   URL.revokeObjectURL(src);
  // };

  const handleAddVariants = () => {
    const currentFormVariants = getValues("variants") || [];
    const newVariant = {
      _id: "",
      name: "",
      name_ar: "",
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
    };

    // First update the form value with current form data
    setValue("variants", [...currentFormVariants, newVariant]);

    // Then update the local state with the same data
    setVariants([...currentFormVariants, newVariant]);
  };

  // const handleRemoveVariants = (i) => {
  //   const updatedVariants = variants.filter((_, index) => index !== i);
  //   setVariants(updatedVariants);
  // };

  const [deletedVariants, setDeletedVariants] = useState([]);

  const handleRemoveVariants = (i, variantId) => {
    console.log("Removing variant at index:", i, "with ID:", variantId);

    if (variantId !== "") {
      setDeletedVariants((prev) => [...prev, variantId]);
    }

    // Get current form values first
    const currentFormVariants = getValues("variants");

    // Make a copy and remove the variant at index i
    const updatedVariants = [...currentFormVariants];
    updatedVariants.splice(i, 1);

    // Update both form values and state
    setValue("variants", updatedVariants);
    setVariants(updatedVariants);

    console.log("Variants after removal:", updatedVariants);
  };

  const handleAddSizeAndColour = (type, i) => {
    // Get current form values
    const currentFormVariants = getValues("variants");
    const updatedVariants = [...currentFormVariants];

    if (type === "size") {
      updatedVariants[i].sizes = [
        ...updatedVariants[i].sizes,
        { size: "", stock: "" },
      ];
    } else if (type === "color") {
      updatedVariants[i].colors = [
        ...updatedVariants[i].colors,
        { color: "", stock: "" },
      ];
    }

    // Update both form values and state
    setValue("variants", updatedVariants);
    setVariants(updatedVariants);
  };

  const handleRemoveSizeAndColour = (type, i, indexToRemove) => {
    // Get current form values
    const currentFormVariants = getValues("variants");
    const updatedVariants = [...currentFormVariants];

    if (type === "size") {
      updatedVariants[i].sizes = updatedVariants[i].sizes.filter(
        (_, index) => index !== indexToRemove
      );
    } else if (type === "color") {
      updatedVariants[i].colors = updatedVariants[i].colors.filter(
        (_, index) => index !== indexToRemove
      );
    }

    // Update both form values and state
    setValue("variants", updatedVariants);
    setVariants(updatedVariants);
  };

  const [deletedImages, setDeletedImages] = useState([]);

  const removeImage = (imageSrc) => {
    setUploadedImages((prev) => prev.filter((image) => image !== imageSrc));

    if (typeof imageSrc === "string" && !imageSrc.includes("blob")) {
      // If it's an existing image URL, add to deletedImages
      setDeletedImages((prev) => [...prev, imageSrc]);
    } else {
      // If it's a newly uploaded file, remove it from uploadedImagesFiles
      setUploadedImagesFiles((prev) =>
        prev.filter((file) => URL.createObjectURL(file) !== imageSrc)
      );
    }

    URL.revokeObjectURL(imageSrc);
  };

  // const onSubmit = async (data) => {
  //   console.log("Deleted Variants Before Submission:", deletedVariants);

  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   formData.append("brand", data.brand);
  //   formData.append("category", data.category);
  //   formData.append("description", data.description);
  //   formData.append("price", Number(data.price) || 0);
  //   formData.append("greenPointsPerUnit", data.greenPointsPerUnit);
  //   formData.append("featured", data.featured);
  //   console.log(variants, "all variats", data?.variants, " data variants");

  //   // Prepare updated variants
  //   const updatedVariants = data.variants.map((variant, index) => {
  //     const existingVariantId = productDetail?.variants[index]?._id;
  //     if (existingVariantId) {

  //       return {
  //         _id: existingVariantId,
  //         name: variant.name,
  //         price: Number(variant.price) || 0,
  //         sizes: variant.sizes,
  //         colors: variant.colors,
  //       };
  //     }
  //     return {
  //       name: variant.name,
  //       price: Number(variant.price) || 0,
  //       sizes: variant.sizes,
  //       colors: variant.colors,
  //     };
  //   });

  //   let newVariants = updatedVariants.filter((variant) => !variant._id);
  //   let uptVariants = updatedVariants.filter((variant) => variant._id);

  //   // console.log(uptVariants);

  //   if (uptVariants.length > 0) {
  //     formData.append("updatedVariants", JSON.stringify(uptVariants));
  //   }

  //   if (newVariants.length > 0) {

  //     formData.append("newVariants", JSON.stringify(newVariants));
  //   }

  //   // Only include deletedVariants if it has values
  //   if (deletedVariants.length > 0) {
  //     formData.append("deletedVariants", JSON.stringify(deletedVariants));
  //   }

  //   // **Handle Images: Pass ONLY new uploaded images**
  //   const newImageFiles = uploadedImagesFiles.filter((file) => file instanceof File); // Ensure only File objects

  //   if (newImageFiles.length > 0) {
  //     newImageFiles.forEach((file) => {
  //       formData.append("images", file); // Append each new file
  //     });
  //   }

  //   // **Pass deleted images (Existing URLs only)**
  //   if (deletedImages.length > 0) {
  //     formData.append("deletedImages", JSON.stringify(deletedImages));
  //   }

  //   console.log("Final Payload:", {
  //     updatedVariants,
  //     deletedVariants,
  //     images: newImageFiles.map((file) => file.name), // Debugging only filenames
  //     deletedImages,
  //   });

  //   try {
  //     if (state?.data?.name) {
  //       // Updating existing product
  //       await updateProduct({ payload: formData, id: id });
  //     } else {
  //       // Creating new product
  //       await createProduct(formData);
  //     }

  //     reset();
  //     navigate("/shop-products");
  //   } catch (err) {
  //     console.error("Error updating product:", err);
  //   }
  // };

  const onSubmit = async (data) => {
    console.log("Deleted Variants Before Submission:", deletedVariants);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("name_ar", data.name_ar);
    formData.append("brand", data.brand);
    formData.append("brand_ar", data.brand_ar);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("description_ar", data.description_ar);
    formData.append("price", Number(data.price) || 0);
    formData.append("greenPointsPerUnit", data.greenPointsPerUnit);
    formData.append("featured", data.featured); 
    // Prepare updated variants for Update Product
    const updatedVariants = data.variants.map((variant, index) => {
      const existingVariantId = productDetail?.variants[index]?._id;
      if (existingVariantId) {
        return {
          _id: existingVariantId,
          name: variant.name,
          name_ar: variant.name_ar,
          price: Number(variant.price) || 0,
          sizes: variant.sizes,
          colors: variant.colors,
        };
      }
      return {
        name: variant.name,
        name_ar: variant.name_ar,
        price: Number(variant.price) || 0,
        sizes: variant.sizes,
        colors: variant.colors,
      };
    });

    // Prepare the new and updated variants for Create Product
    let newVariants = updatedVariants.filter((variant) => !variant._id);
    let uptVariants = updatedVariants.filter((variant) => variant._id);

    // For Update Product, send updated and new variants separately
    if (state?.data?.name) {
      if (uptVariants.length > 0) {
        formData.append("updatedVariants", JSON.stringify(uptVariants));
      }

      if (newVariants.length > 0) {
        formData.append("newVariants", JSON.stringify(newVariants));
      }
    } else {
      // For Create Product, send all variants directly
      formData.append("variants", JSON.stringify(updatedVariants));
    }

    // Only include deletedVariants if it has values
    if (deletedVariants.length > 0) {
      formData.append("deletedVariants", JSON.stringify(deletedVariants));
    }

    // **Handle Images: Pass ONLY new uploaded images**
    const newImageFiles = uploadedImagesFiles.filter(
      (file) => file instanceof File
    ); // Ensure only File objects

    if (newImageFiles.length > 0) {
      newImageFiles.forEach((file) => {
        formData.append("images", file); // Append each new file
      });
    }

    // **Pass deleted images (Existing URLs only)**
    if (deletedImages.length > 0) {
      formData.append("deletedImages", JSON.stringify(deletedImages));
    }

    console.log("Final Payload:", {
      updatedVariants,
      deletedVariants,
      images: newImageFiles.map((file) => file.name), // Debugging only filenames
      deletedImages,
    });

    try {
      if (state?.data?.name) {
        // Updating existing product
        await updateProduct({ payload: formData, id: id });
      } else {
        // Creating new product
        await createProduct(formData);
      }
      if (!state?.data?.name) {
        reset();
        navigate("/shop-products");
      }
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  console.log("Deleted Variants:", deletedVariants);

  return (
    <div className="card basic-data-table ">
      <div className="card-header ">
        <h5 className="card-title my-8">{id ? "Update" : "Create"} Product</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            onClick={() => removeImage(image)}
                          >
                            <Icon
                              icon="radix-icons:cross-2"
                              className="text-xl text-danger-600"
                            ></Icon>
                          </button>
                          <img
                            className="w-100 h-100 object-fit-cover"
                            src={image?.src || image}
                            alt="Uploaded Preview"
                          />
                        </div>
                      ))}
                    </div>
                    {uploadedImages?.length < 4 && (
                      <label
                        className="upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                        htmlFor="upload-file-multiple"
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
                </div>
                <div className="col-12 mt-12">
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
                  <input
                    type="text"
                    name="name_ar"
                    dir="rtl"
                    className="form-control form-control-sm mt-8"
                    placeholder="Enter Product Name in Arabic"
                    data-error={errors?.name_ar ? "true" : "false"}
                    {...register("name_ar")}
                  />
                  {errors?.name_ar && (
                    <p className="text-danger-500">
                      {errors?.name_ar?.message}
                    </p>
                  )}
                </div>

                <div className="col-12 mt-12">
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

                  <input
                    type="text"
                    name="brand_ar"
                    dir="rtl"
                    className="form-control form-control-sm mt-8"
                    placeholder="Enter Brand Name in Arabic"
                    data-error={errors?.brand_ar ? "true" : "false"}
                    {...register("brand_ar")}
                  />
                  {errors?.brand_ar && (
                    <p className="text-danger-500">
                      {errors?.brand_ar?.message}
                    </p>
                  )}
                </div>

                <div className="col-lg-6 mt-12">
                  <label className="form-label">Green Points</label>
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

                <div className="col-lg-6 mt-12">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control form-control-sm"
                    placeholder="Select Category"
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

                <div className="col-12 mt-12">
                  <label className="form-label">Description</label>
                  <textarea
                    name="#0"
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
                  <textarea
                    name="#0"
                    style={{ height: "100px" }}
                    dir="rtl"
                    className="form-control form-control-sm mt-8"
                    placeholder="Enter Description in Arabic"
                    data-error={errors?.description_ar ? "true" : "false"}
                    {...register("description_ar")}
                  ></textarea>
                    {errors?.description_ar && (
                    <p className="text-danger-500">
                      {errors?.description_ar?.message}
                    </p>
                  )}
                </div>

                <div className="col-lg-6 mt-12">
                  <div className="form-switch switch-success d-flex align-items-center gap-3 mt-8">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={"switch"}
                      defaultChecked={false}
                      {...register("featured")}
                    />
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor={"switch"}
                    >
                      Feature Product
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/* Variants Section */}
              {variants?.map((elem, i) => (
                <div key={i}>
                  {" "}
                  {/* Ensure unique key based on _id or index */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      Variant {variants?.length > 1 && i + 1}
                    </h6>
                    {variants?.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveVariants(i, elem?._id)} // Pass the index and the variant ID
                      >
                        <Icon
                          icon="radix-icons:minus"
                          className="text-xl text-danger-600"
                        ></Icon>
                      </button>
                    )}
                  </div>
                  <div className="border-top my-8"></div>
                  {/* Variant Name */}
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
                      <label className="form-label">Variant Name in Arabic</label>
                      <input
                        type="text"
                        name="name_ar"
                        dir="rtl"
                        className="form-control form-control-sm"
                        placeholder="Variant Name in Arabic"
                        data-error={
                          errors?.variants && errors?.variants[i]?.name_ar
                            ? "true"
                            : "false"
                        }
                        {...register(`variants[${i}].name_ar`)}
                      />
                      {errors?.variants && (
                        <p className="text-danger-500">
                          {errors?.variants[i]?.name_ar?.message}
                        </p>
                      )}
                    </div>

                    {/* Variant Price */}
                    <div className="col-xl-6">
                      <label className="form-label">Variant Price</label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Enter Variant Price"
                        data-error={
                          errors?.variants && errors?.variants[i]?.price
                            ? "true"
                            : "false"
                        }
                        {...register(`variants[${i}].price`, {
                          valueAsNumber: true,
                        })}
                      />
                      {errors?.variants && (
                        <p className="text-danger-500">
                          {errors?.variants[i]?.price?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Sizes Section */}
                  <div className="row gy-8 mb-8">
                    <div className="col-xl-6 mt-8">
                      {elem?.sizes?.map((size, j) => (
                        <div key={j}>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-md fw-bold mb-0">
                              Size {elem?.sizes?.length > 1 && j + 1}
                            </p>
                            {elem?.sizes?.length - 1 === j &&
                            elem?.sizes?.length > 0 ? (
                              <button
                                type="button"
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
                                type="button"
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
                                placeholder="Enter Stock"
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

                    {/* Colors Section */}
                    <div className="col-xl-6 mt-8">
                      {elem?.colors?.map((color, k) => (
                        <div key={k}>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-md fw-bold mb-0">
                              Color {elem?.colors?.length > 1 && k + 1}
                            </p>
                            {elem?.colors?.length - 1 === k &&
                            elem?.colors?.length > 0 ? (
                              <button
                                type="button"
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
                                type="button"
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
                                placeholder="Enter Color"
                                data-error={
                                  errors?.variants &&
                                  errors?.variants[i] &&
                                  Array.isArray(errors?.variants[i]?.colors) &&
                                  errors?.variants[i]?.colors[k] &&
                                  errors?.variants[i]?.colors[k]?.color
                                    ? "true"
                                    : "false"
                                }
                                {...register(
                                  `variants[${i}].colors[${k}].color`
                                )}
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
                                placeholder="Enter Stock"
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

              {/* Add New Variant Button */}
              <button
                onClick={handleAddVariants}
                type="button"
                className="btn w-100 btn-outline-success-600 radius-8 px-20 py-11"
              >
                Add New Variant
              </button>
            </div>
          </div>

          {/* Form Submit Button */}
          <div className="d-flex justify-content-end my-8">
            <button type="submit" className="btn bg-success-600 text-white">
              {isPending || updatePending ? (
                <Loader loading={isPending || updatePending} />
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
