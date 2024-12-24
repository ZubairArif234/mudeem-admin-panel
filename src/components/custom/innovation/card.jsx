import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Modal from "../extra/modal";

const InnovationDetail = () => {
  return (
    <div>
      <p className="mb-8 text-xl fw-bold">Brand Identity</p>
      <p className="card-text mb-8 text-secondary-light">
        Random Text gateway to the Origin al the Works Platform, &amp; your
        unique block chain gateway identity. Random Text gateway to the Origin
        al the Works Platform, &amp; your unique block chain gateway identity.
        Random Text gateway to the Origin al the Works Platform, &amp; your
        unique block chain gateway identity.
      </p>
      <hr classname="divider "></hr>
      <div className="d-flex flex-wrap gap-3 mt-3">
        {[0, 1, 2, 3]?.map((_, i) => {
          return (
            <span
              key={i}
              className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white"
            >
              Document.png
            </span>
          );
        })}
      </div>
      <div className="mt-10 d-flex gap-2 justify-content-end">
        <button
          type="button"
          class="btn btn-danger-600"
          data-bs-dismiss="modal"
        >
          Reject
        </button>
        <button
          type="button"
          class="btn btn-success-600"
          data-bs-toggle="modal"
          data-bs-target="#innovation-reward-points"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

const InnovationCard = () => {
  return (
    <div>
      <div className="card h-100 radius-12">
        <div className="card-body p-24">
          <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-success text-success-600 mb-16 radius-12">
            <Icon icon="solar:medal-ribbons-star-bold" className="h5 mb-0" />
          </div>
          <h6 className="mb-8">Brand Identity</h6>
          <p className="card-text mb-8 text-secondary-light">
            Random Text gateway to the Origin al the Works Platform, &amp; your
            unique block chain gateway identity.
          </p>
          <Modal
            id="innovation"
            button={
              <p
                data-bs-toggle="modal"
                data-bs-target="#innovation"
                className="btn text-success-600 hover-text-lilac px-0 py-0 mt-16 d-inline-flex align-items-center gap-2"
              >
                View Detail{" "}
                <Icon icon="iconamoon:arrow-right-2" className="text-xl" />
              </p>
            }
            body={<InnovationDetail />}
            title="Innovation Idea"
          />
        </div>
      </div>
    </div>
  );
};

export default InnovationCard;
