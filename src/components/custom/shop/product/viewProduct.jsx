import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../../child/CarouselWithArrows";

const ViewProduct = ({ data }) => {
  return (
    <div className="row gy-3">
      <div className="col-lg-6">
        {/* <div className="d-flex justify-content-center"> */}
        <CarouselWithArrowsOnlyImage images={data?.images} />
        {/* <img src="/assets/images/product.png" width={"100%"} /> */}
        {/* </div> */}
        <div className="d-flex gap-2 my-3">
          <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
            {data?.stock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
            Clothing
          </span>
          {data?.featured && (
            <span className="badge text-sm fw-semibold text-warning-600 bg-warning-100 px-20 py-9 radius-4 text-white">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="col-lg-6">
        <p className="text-xxl fw-bold mb-0 ">{data?.name}</p>
        <p className="mb-0">{data?.brand}</p>
        <div className="d-flex gap-2">
          <p className="mb-0 text-sm text-warning-500">
            {data?.rating?.stars} ratings
          </p>
          <p className="mb-0 text-sm">Reviews ({data?.rating?.total})</p>
        </div>

        <div className="row align-items-center">
          <div className="col-6">
            <span className=" mb-0 text-lg"> L/M/S</span>
            <p className=" text-sm">Sizes</p>
          </div>
          <div className="col-6">
            <div className="d-flex gap-2 mb-1">
              {["red", "purple", "cyan"]?.map((item, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      backgroundColor: item,
                      height: "25px",
                      width: "25px",
                      borderRadius: "5px",
                    }}
                  ></span>
                );
              })}
            </div>
            <p className=" text-sm mt-1">Colours</p>
          </div>
          {/* <div className="col-6">
            <p className=" mb-0 text-xl">English</p>
            <p className=" text-sm">Ratings</p>
          </div>
          <div className="col-6">
            <p className=" mb-0 text-xl">2018</p>
            <p className="text-sm">Reviews</p>
          </div> */}
        </div>

        <p className="text-sm">{data?.description}</p>

        <div className="border-top my-8"></div>

        <div className="">
          <p className="mb-0 text-sm">Green Points</p>
          <p className="text-xl fw-bold">{data?.greenPointsPerUnit} pts</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
