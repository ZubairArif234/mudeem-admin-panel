import React, { useEffect, useState } from "react";
import { CarouselWithArrowsOnlyImage } from "../../../child/CarouselWithArrows";
import { useGetProductById } from "../../../../hook/apis/shop/product/useGetproductById";

const ViewProduct = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("requested");
  // const { productDetail } = useGetProductById(data?._id);
  const productId = data?._id || null;
  const { productDetail } = useGetProductById(productId);
  console.log("Product ID passed:", data?._id);

  // const [productDetail, setProductDetail] = useState([]);
  // useEffect(() => {
  //   if (data?._id) {
  // setProductDetail(productDetail);
  //   }
  // }, [data?._id]);

  useEffect(() => {
    if (productDetail?.variants?.length > 0) {
      setSelectedTab(productDetail.variants[0]?._id);
    }
  }, [productDetail]);
  

  return (
    <div className="row gy-3">
      <div className="col-lg-6">
        {productDetail?.images?.length > 1 ? (
          <CarouselWithArrowsOnlyImage images={data?.images} />
        ) : (
          <img
            src={productDetail?.images[0]}
            alt=""
            className="product-detail-image"
          />
        )}

        <div className="d-flex gap-2 my-3">
          <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
            {productDetail?.stock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white">
            Clothing
          </span>
          {productDetail?.featured && (
            <span className="badge text-sm fw-semibold text-warning-600 bg-warning-100 px-20 py-9 radius-4 text-white">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="col-lg-6 ">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <p className="text-xxl fw-bold mb-0 ">{productDetail?.name}</p>
            <p className="mb-0">{productDetail?.brand}</p>
            <div className="d-flex gap-2">
              <p className="mb-0 text-sm text-warning-500">
                {data?.rating?.stars} ratings
              </p>
              <p className="mb-0 text-sm">Reviews ({data?.rating?.total})</p>
            </div>

            <div>
              <ul
                className="nav bordered-tab border border-top-0 border-start-0 border-end-0 d-inline-flex nav-pills mb-16 w-100"
                id="pills-tab"
                role="tablist"
              >
                {productDetail?.variants?.map((item, i) => (
                  <li key={i} className="nav-item" role="presentation">
                    <button
                      onClick={() => {
                        // setFilter((prev) => ({ ...prev, page: 0 }));
                        setSelectedTab(item?._id);
                      }}
                      className={`nav-link px-16 py-10 text-capitalize ${
                        selectedTab === item?._id && "active"
                      }`}
                      id={selectedTab}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${selectedTab}`}
                      type="button"
                      role="tab"
                      aria-controls={`pills-${selectedTab}`}
                      aria-selected="true"
                    >
                      {item?.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {productDetail?.variants?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`tab-pane fade show ${
                        selectedTab === item?._id && "active"
                      }`}
                      id={`pills-${item}`}
                      role="tabpanel"
                      aria-labelledby={item}
                      tabIndex={0}
                    >
                      <div>
                        <div className="row align-items-center">
                          <div className="col-6">
                            <span className=" mb-0 text-lg text-capitalize">
                              {item?.sizes?.length > 0 &&
                                item?.sizes
                                  ?.map((value) => value?.size[0])
                                  ?.join("/")}
                            </span>
                            <p className=" text-sm">
                              {item?.sizes?.length > 1 ? "Sizes" : "Size"}{" "}
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="d-flex gap-2 mb-1">
                              {item?.colors?.length > 0 &&
                                item?.colors?.map((item, i) => {
                                  return (
                                    <span
                                      key={i}
                                      style={{
                                        backgroundColor: item?.color,
                                        height: "25px",
                                        width: "25px",
                                        borderRadius: "5px",
                                      }}
                                    ></span>
                                  );
                                })}
                            </div>
                            <p className=" text-sm mt-1">
                              {item?.colors?.length > 1 ? "Colours" : "Colour"}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-sm">{productDetail?.description}</p>
          </div>

          <div className="">
            <div className="border-top my-8"></div>
            <p className="mb-0 text-sm">Green Points</p>
            <p className="text-xl fw-bold">
              {productDetail?.greenPointsPerUnit} pts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
