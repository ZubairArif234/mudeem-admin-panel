import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useCreateSetting } from "../hook/apis/setting/createSetting";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const imageValidation = (file) => {
  const allowedTypes = ["image/png"];
  if (!file) {
    return false;
  }
  const isValidType = allowedTypes.includes(file.type);
  const maxSize = 2 * 1024 * 1024; // 5MB limit
  const isValidSize = file.size <= maxSize;

  return isValidType && isValidSize ? file : null;
};

const SettingSchema = z.object({
  websiteName: z
    .string()
    .min(3, "Website name must be at least 3 characters long"),
  websiteDescription: z
    .string()
    .min(3, "Website description must be at least 3 characters long"),
  carPoolingGreenPoints: z.number().min(1, "Enter car pooling green points"),
  greenMapGreenPoints: z.number().min(1, "Enter green map green points "),
  gptMessageGreenPoints: z.number().min(1, "Enter GPT message green points "),
});

const CompanyLayer = () => {
  const [logoPreview, setLogoPreview] = useState({
    file: null,
    src: "",
    error: "",
  });
  const [faviconPreview, setFaviconPreview] = useState({
    file: null,
    src: "",
    error: "",
  });

  const logoInputRef = useRef(null);
  const faviconInputRef = useRef(null);
  const { createSetting, isPending } = useCreateSetting();

  const handleFileChange = (e, type) => {
    if (e.target.files.length > 0) {
      if (imageValidation(e.target?.files[0])) {
        const src = URL.createObjectURL(e.target.files[0]);
        if (type === "logo") {
          setLogoPreview({
            ...logoPreview,
            file: e.target.files[0],
            src: src,
            error: "",
          });
        } else if (type === "favicon") {
          setFaviconPreview({
            ...faviconPreview,
            file: e.target.files[0],
            src: src,
            error: "",
          });
        }
      }
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SettingSchema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);

    if (!logoPreview?.file) {
      setLogoPreview({ ...logoPreview, error: "Upload logo" });
    }

    if (!faviconPreview?.file) {
      setFaviconPreview({ ...faviconPreview, error: "Upload favicon" });
    }

    const settingData = new FormData();
    settingData.append("websiteName", formData.websiteName);
    settingData.append("websiteDescription", formData.websiteDescription);
    settingData.append("gptMessageGreenPoints", formData.gptMessageGreenPoints);
    settingData.append("greenMapGreenPoints", formData.greenMapGreenPoints);
    settingData.append("carPoolingGreenPoints", formData.carPoolingGreenPoints);
    settingData.append("logo", logoPreview?.file);
    settingData.append("favicon", faviconPreview?.file);

    try {
      let res;
      if (false) {
        // res = await updateBook({ id: data._id, payload: settingData });
      } else {
        res = await createSetting(settingData);
      }

      if (res) {
        setLogoPreview({ file: "", src: "", error: "" });
        setFaviconPreview({ file: "", src: "", error: "" });
        reset();
      }
    } catch (err) {
      console.error("Setting update failed:", err);
    }
  };

  const removeImage = (type) => {
    if (type === "logo") {
      setLogoPreview({
        file: null,
        src: "",
        error: "",
      });
      if (logoInputRef.current) {
        logoInputRef.current.value = "";
      }
    } else {
      setFaviconPreview({
        file: null,
        src: "",
        error: "",
      });
      if (faviconInputRef.current) {
        faviconInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="card h-100 p-0 radius-12 overflow-hidden">
      <div className="card-body p-20 p-lg-40">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <label>Upload Logo</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
                {/* Image preview section */}
                {logoPreview?.src ? (
                  <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                    <button
                      type="button"
                      onClick={() => removeImage("logo")}
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
                      src={logoPreview?.src}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <label
                    className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                    htmlFor="logo-file"
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
                  id="logo-file"
                  type="file"
                  onChange={(e) => handleFileChange(e, "logo")}
                  hidden
                  ref={logoInputRef}
                  accept="image/*" // Optional: restrict to image files
                />
              </div>
              {logoPreview?.error && (
                <p className="text-danger-500">{logoPreview?.error}</p>
              )}
            </div>
            <div className="col-6">
              <label>Upload Favicon</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
                {/* Image preview section */}
                {faviconPreview?.src ? (
                  <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                    <button
                      type="button"
                      onClick={() => removeImage("favicon")}
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
                      src={faviconPreview?.src}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <label
                    className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                    htmlFor="favicon-file"
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
                  id="favicon-file"
                  type="file"
                  onChange={(e) => handleFileChange(e, "favicon")}
                  hidden
                  ref={faviconInputRef}
                  accept="image/*" // Optional: restrict to image files
                />
              </div>
              {faviconPreview?.error && (
                <p className="text-danger-500">{faviconPreview?.error}</p>
              )}
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
                  data-error={errors?.websiteName ? "true" : "false"}
                  {...register("websiteName")}
                />
                {errors?.websiteName && (
                  <p className="text-danger-500">
                    {errors?.websiteName?.message}
                  </p>
                )}
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
                  data-error={errors?.websiteDescription ? "true" : "false"}
                  {...register("websiteDescription")}
                ></textarea>
                {errors?.websiteDescription && (
                  <p className="text-danger-500">
                    {errors?.websiteDescription?.message}
                  </p>
                )}
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
                  data-error={errors?.carPoolingGreenPoints ? "true" : "false"}
                  {...register("carPoolingGreenPoints", {
                    valueAsNumber: true,
                  })}
                />
                {errors?.carPoolingGreenPoints && (
                  <p className="text-danger-500">
                    {errors?.carPoolingGreenPoints?.message}
                  </p>
                )}
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
                  data-error={errors?.greenMapGreenPoints ? "true" : "false"}
                  {...register("greenMapGreenPoints", { valueAsNumber: true })}
                />
                {errors?.greenMapGreenPoints && (
                  <p className="text-danger-500">
                    {errors?.greenMapGreenPoints?.message}
                  </p>
                )}
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
                  data-error={errors?.gptMessageGreenPoints ? "true" : "false"}
                  {...register("gptMessageGreenPoints", {
                    valueAsNumber: true,
                  })}
                />
                {errors?.gptMessageGreenPoints && (
                  <p className="text-danger-500">
                    {errors?.gptMessageGreenPoints?.message}
                  </p>
                )}
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
