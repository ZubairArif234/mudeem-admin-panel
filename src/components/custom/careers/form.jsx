import React, { useState } from "react";
import { useCreateCareer } from "../../../hook/apis/career/useCreateCareer";
import { toast } from "sonner";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    description: "",
    location: "",
    salary: "",
    linkedInUrl: "",
    jobType: "onsite",
  });

  const { createCareer, isLoading, isError, error } = useCreateCareer();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.company || !formData.title || !formData.salary) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await createCareer(formData);

      const modal = new window.bootstrap.Modal(document.getElementById('add-job'));
      modal.hide();

      toast.success("Career created successfully!");

      setFormData({
        company: "",
        title: "",
        description: "",
        location: "",
        salary: "",
        linkedInUrl: "",
        jobType: "onsite",
      });
    } catch (err) {
      toast.error("Failed to create career. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-3">
        <div className="col-12">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            name="title"
            className="form-control form-control-sm"
            placeholder="Enter Job Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            name="company"
            className="form-control form-control-sm"
            placeholder="Enter Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control form-control-sm"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control form-control-sm"
            placeholder="Enter Salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Link</label>
          <input
            type="text"
            name="linkedInUrl"
            className="form-control form-control-sm"
            placeholder="Enter LinkedIn Link"
            value={formData.linkedInUrl}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            style={{ height: "100px" }}
            className="form-control form-control-sm"
            placeholder="Enter Job Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-10 d-flex gap-2 justify-content-end">
          <button
            type="button"
            className="btn btn-danger-600"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-success-600"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Save changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
