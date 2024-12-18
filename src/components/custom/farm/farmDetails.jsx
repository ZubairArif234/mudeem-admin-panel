import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../child/CarouselWithArrows";

const FarmDetail = () => {
  return (
    <div className="">
      <div className="row gy-3 align-items-center ">
        <div className="col-6 bg-neutral-300">
          <div className="">
            <CarouselWithArrowsOnlyImage
              images={
                "https://media.istockphoto.com/id/1394781347/photo/hand-holdig-plant-growing-on-green-background-with-sunshine.jpg?s=612x612&w=0&k=20&c=COX7-_QX8cLlL-oFKQYJgG5CEItpIN4JBbtcjPap1cA="
              }
            />
            {/* <img src="/assets/images/product.png" width={"100%"} /> */}
          </div>
        </div>

        <div className="col-6">
          <p className="text-xxl fw-bold ">Molty Farm</p>

          <p className="mb-0">
            <span className="fw-bold me-2">Location : </span> S.A town near city
            airport
          </p>

          <p className="mb-0">
            <span className="fw-bold me-2">Renewable Energy :</span> Biomass
            Energy
          </p>

          <p className="mb-0">
            <span className="fw-bold me-2">Fertilizer Type :</span> Synthetic
            Fertilizer
          </p>

          <p className="mb-0">
            <span className="fw-bold me-2">Desalination Method :</span> Solar
            Desalination
          </p>

          <p className="mb-0">
            <span className="fw-bold me-2">Electric Generator :</span> DC
            Generator
          </p>

          <p className="mb-0">
            <span className="fw-bold me-2">Budget :</span> $ 14000
          </p>
        </div>

        <div className="col-12">
          <div className="border-top my-8"></div>

          <p>Design and Specification</p>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <p>Desired Equipment</p>
          <div className="d-flex gap-2 my-3">
            <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
              In Stock
            </span>
            <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
              Clothing
            </span>
            <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
              Girls
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 d-flex gap-2 justify-content-end">
        <button
          type="button"
          class="btn btn-danger-600"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#reward-points"
          type="button"
          class="btn btn-success-600"
        >
          Reward Points
        </button>
      </div>
    </div>
  );
};

export default FarmDetail;
