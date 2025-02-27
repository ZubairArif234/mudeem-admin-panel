import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useCreateSetting } from "../hook/apis/setting/createSetting";
import { useUpdateSetting } from "../hook/apis/setting/updateSetting";
import { useGetSettings } from "../hook/apis/setting/getSettings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the validation schema using Zod
const SettingSchema = z.object({
  websiteName: z.string().min(1, "Website name is required"),
  websiteDescription: z.string().min(1, "Website description is required"),
  carPoolingGreenPoints: z.number().min(0, "Green points must be a positive number"),
  greenMapGreenPoints: z.number().min(0, "Green points must be a positive number"),
  gptMessageGreenPoints: z.number().min(0, "Green points must be a positive number"),
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
  const { createSetting } = useCreateSetting();
  const { updateSetting } = useUpdateSetting();
  const { settings, isLoading, isError, error } = useGetSettings();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SettingSchema),
  });


  useEffect(() => {
    if (settings) {
      setValue("websiteName", settings.websiteName);
      setValue("websiteDescription", settings.websiteDescription);
      setValue("carPoolingGreenPoints", settings.carPoolingGreenPoints);
      setValue("greenMapGreenPoints", settings.greenMapGreenPoints);
      setValue("gptMessageGreenPoints", settings.gptMessageGreenPoints);

      if (settings.logo) {
        setLogoPreview({
          ...logoPreview,
          src: settings.logo,
          file: settings.logo,
        });
      }

      if (settings.favIcon) {
        setFaviconPreview({
          ...faviconPreview,
          src: settings.favIcon,
          file: settings.favIcon,
        });
      }
    }
  }, [settings, setValue]);

  const handleFileChange = (e, type) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        if (type === "logo") {
          setLogoPreview({ ...logoPreview, error: "File size must be less than 2MB" });
        } else if (type === "favicon") {
          setFaviconPreview({ ...faviconPreview, error: "File size must be less than 2MB" });
        }
        return;
      }

      const src = URL.createObjectURL(file);
      if (type === "logo") {
        setLogoPreview({
          ...logoPreview,
          file: file,
          src: src,
          error: "",
        });
      } else if (type === "favicon") {
        setFaviconPreview({
          ...faviconPreview,
          file: file,
          src: src,
          error: "",
        });
      }
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

  const onSubmit = async (formData) => {
    if (!logoPreview?.file) {
      setLogoPreview({ ...logoPreview, error: "Upload logo" });
      return;
    }
  
    if (!faviconPreview?.file) {
      setFaviconPreview({ ...faviconPreview, error: "Upload favicon" });
      return;
    }
  
    const settingData = new FormData();
    settingData.append("websiteName", formData.websiteName);
    settingData.append("websiteDescription", formData.websiteDescription);
    settingData.append("carPoolingGreenPoints", formData.carPoolingGreenPoints);
    settingData.append("greenMapGreenPoints", formData.greenMapGreenPoints);
    settingData.append("gptMessageGreenPoints", formData.gptMessageGreenPoints);
  
    if (logoPreview.file) {
      settingData.append("logo", logoPreview.file);
    }
  
    // Append favicon file
    // if (faviconPreview.file) {
    //   settingData.append("favicon", faviconPreview.file);
    // }
    if (faviconPreview.file) {
      settingData.append("favicon", faviconPreview.src);
    }
    
  
    // Debug: Log FormData content
    for (let [key, value] of settingData.entries()) {
      console.log(key, value);
    }
  
    try {
      let res;
      if (settings?._id) {
        res = await updateSetting(settingData, "form");
      } else {
        res = await createSetting(settingData);
      }
  
      if (res) {
        setLogoPreview({ file: null, src: "", error: "" });
        setFaviconPreview({ file: null, src: "", error: "" });
        reset();
      }
    } catch (err) {
      console.error("Setting update failed:", err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card h-100 p-0 radius-12 overflow-hidden">
      <div className="card-body p-20 p-lg-40">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* Logo Upload Section */}
            <div className="col-6">
              <label>Upload Logo</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
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
                <input
                  id="logo-file"
                  type="file"
                  onChange={(e) => handleFileChange(e, "logo")}
                  hidden
                  ref={logoInputRef}
                  accept="image/*"
                />
              </div>
              {logoPreview?.error && (
                <p className="text-danger-500">{logoPreview?.error}</p>
              )}
            </div>

            {/* Favicon Upload Section */}
            <div className="col-6">
              <label>Upload Favicon</label>
              <div className="upload-image-wrapper d-flex align-items-center gap-3">
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
                <input
                  id="favicon-file"
                  type="file"
                  onChange={(e) => handleFileChange(e, "favicon")}
                  hidden
                  ref={faviconInputRef}
                  accept="image/*"
                />
              </div>
              {faviconPreview?.error && (
                <p className="text-danger-500">{faviconPreview?.error}</p>
              )}
            </div>

            {/* Website Name Field */}
            <div className="col-12 mt-24">
              <label>Website Name</label>
              <input
                type="text"
                className="form-control"
                {...register("websiteName")}
              />
              {errors.websiteName && (
                <p className="text-danger-500">{errors.websiteName.message}</p>
              )}
            </div>

            {/* Website Description Field */}
            <div className="col-12 mt-24">
              <label>Website Description</label>
              <textarea
                className="form-control"
                {...register("websiteDescription")}
              />
              {errors.websiteDescription && (
                <p className="text-danger-500">{errors.websiteDescription.message}</p>
              )}
            </div>

            {/* Green Points Fields */}
            <div className="col-6 mt-24">
              <label>Car Pooling Green Points</label>
              <input
                type="number"
                className="form-control"
                {...register("carPoolingGreenPoints", { valueAsNumber: true })}
              />
              {errors.carPoolingGreenPoints && (
                <p className="text-danger-500">{errors.carPoolingGreenPoints.message}</p>
              )}
            </div>

            <div className="col-6 mt-24">
              <label>Green Map Green Points</label>
              <input
                type="number"
                className="form-control"
                {...register("greenMapGreenPoints", { valueAsNumber: true })}
              />
              {errors.greenMapGreenPoints && (
                <p className="text-danger-500">{errors.greenMapGreenPoints.message}</p>
              )}
            </div>

            <div className="col-6 mt-24">
              <label>GPT Message Green Points</label>
              <input
                type="number"
                className="form-control"
                {...register("gptMessageGreenPoints", { valueAsNumber: true })}
              />
              {errors.gptMessageGreenPoints && (
                <p className="text-danger-500">{errors.gptMessageGreenPoints.message}</p>
              )}
            </div>

            {/* Submit Button */}
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