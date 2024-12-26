import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import Modal from "../custom/extra/modal";
import PostModalBody from "../custom/collaborationForums/postModalBody";

const HorizontalCard = () => {
  return (
    <div className="mb-40">
      <h6 className="mb-24">Horizontal Card</h6>
      <div className="row gy-4">
        <div className="col-xl-6">
          <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
            <div className="d-flex flex-shrink-0 w-170-px h-100">
              <img
                src="assets/images/card-component/horizontal-card-img1.png"
                className="h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
            <div className="card-body p-16 flex-grow-1">
              <h5 className="card-title text-lg text-primary-light mb-6">
                This is Card title
              </h5>
              <p className="card-text text-neutral-600 mb-16">
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to="#"
                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
              >
                Read More{" "}
                <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
            <div className="d-flex flex-shrink-0 w-170-px h-100">
              <img
                src="assets/images/card-component/horizontal-card-img2.png"
                className="h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
            <div className="card-body p-16 flex-grow-1">
              <h5 className="card-title text-lg text-primary-light mb-6">
                This is Card title
              </h5>
              <p className="card-text text-neutral-600 mb-16">
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to="#"
                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
              >
                Read More{" "}
                <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row">
            <div className="d-flex flex-shrink-0 w-170-px h-100">
              <img
                src="assets/images/card-component/horizontal-card-img3.png"
                className="h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
            <div className="card-body p-16 flex-grow-1">
              <h5 className="card-title text-lg text-primary-light mb-6">
                This is Card title
              </h5>
              <p className="card-text text-neutral-600 mb-16">
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to="#"
                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
              >
                Read More{" "}
                <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card radius-12 overflow-hidden h-100 d-flex align-items-center flex-nowrap flex-row flex-row-reverse">
            <div className="d-flex flex-shrink-0 w-170-px h-100">
              <img
                src="assets/images/card-component/horizontal-card-img4.png"
                className="h-100 w-100 object-fit-cover"
                alt=""
              />
            </div>
            <div className="card-body p-16 flex-grow-1">
              <h5 className="card-title text-lg text-primary-light mb-6">
                This is Card title
              </h5>
              <p className="card-text text-neutral-600 mb-16">
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to="#"
                className="btn text-primary-600 hover-text-primary p-0 d-inline-flex align-items-center gap-2"
              >
                Read More{" "}
                <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SingleHorizontalCard = ({ data, number }) => {
  return (
    <div className="card radius-12 overflow-hidden h-100 d-block d-lg-flex align-items-center flex-nowrap flex-row">
      <div className="d-block d-lg-flex flex-shrink-0 w-100 w-lg-170-px h-auto h-lg-100">
        <img
          src={data?.postImage}
          className="h-100 w-100 object-fit-cover"
          alt=""
        />
      </div>
      <div className="card-body p-16 flex-grow-1 ">
        <div className="d-flex align-items-center gap-2 mb-3">
          <img
            src="assets/images/user.png"
            alt="image_user"
            className="w-40 h-40 object-fit-cover rounded-circle"
          />
          <h5 className="card-title text-lg text-primary-light mb-6">
            {data?.userName}
          </h5>
        </div>
        <p className="card-text text-neutral-600 mb-16 line-clamp">
          {data?.postText}
        </p>
        <Modal
          id={`read${number}`}
          button={
            <p
              data-bs-toggle="modal"
              data-bs-target={`#read${number}`}
              className="btn text-success-600 hover-text-success p-0 d-inline-flex align-items-center gap-2"
            >
              Read More{" "}
              <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
            </p>
          }
          body={<PostModalBody data={data} />}
          title="Post"
          size="modal-lg"
        />
      </div>
    </div>
  );
};

export default HorizontalCard;
