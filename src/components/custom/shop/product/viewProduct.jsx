import React from "react";
import { CarouselWithArrowsOnlyImage } from "../../../child/CarouselWithArrows";

const ViewProduct = () => {
  return (
    <div className="row gy-3">
      <div className="col-6">
        {/* <div className="d-flex justify-content-center"> */}
        <CarouselWithArrowsOnlyImage images={"/assets/images/product.png"} />
        {/* <img src="/assets/images/product.png" width={"100%"} /> */}
        {/* </div> */}
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
      <div className="col-6">
        <p className="text-xxl fw-bold mb-0 ">
          Elegant Black Muslim Abaya with Modern Design
        </p>
        <p className="mb-0">ChAmkpr</p>
        <div className="d-flex gap-2">
          <p className="mb-0 text-sm text-warning-500">4.8 ratings</p>
          <p className="mb-0 text-sm">Reviews (122)</p>
        </div>

        <div className="row align-items-center">
          <div className="col-6">
            <span className=" mb-0 text-lg"> L/M/S</span>
            <p className=" text-sm">Sizes</p>
          </div>
          <div className="col-6">
            <div className="d-flex gap-2 mb-1">
              {["red", "purple", "cyan"]?.map((item) => {
                return (
                  <span
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

        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <div className="border-top my-8"></div>

        <div className="">
          <p className="mb-0 text-sm">Price</p>
          <p className="text-xl fw-bold">$ 400.00</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
