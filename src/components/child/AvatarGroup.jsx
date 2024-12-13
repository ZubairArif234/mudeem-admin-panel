import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { SingleDefaultTooltipThree } from "./DefaultTooltipThree";

const AvatarGroup = () => {
  return (
    <div className="col-xxl-6 col-md-6">
      <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
        <div className="card-body p-24">
          <div className="d-flex align-items-center flex-wrap">
            <img
              src="assets/images/avatar/avatar-group1.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative"
            />
            <img
              src="assets/images/avatar/avatar-group2.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group3.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group4.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group5.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group6.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group6.png"
              alt=""
              className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <span className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center">
              +5
            </span>
            <button
              type="button"
              className="w-24-px h-24-px rounded-circle border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-xs d-inline-flex align-items-center justify-content-center"
            >
              <Icon icon="ic:baseline-plus" className="" />
            </button>
          </div>
          <div className="d-flex align-items-center flex-wrap mt-24">
            <img
              src="assets/images/avatar/avatar-group1.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative"
            />
            <img
              src="assets/images/avatar/avatar-group2.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group3.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group4.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group5.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group6.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <img
              src="assets/images/avatar/avatar-group6.png"
              alt=""
              className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px"
            />
            <span className="w-32-px h-32-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center">
              +5
            </span>
            <button
              type="button"
              className="w-32-px h-32-px rounded-circle border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-lg d-inline-flex align-items-center justify-content-center"
            >
              <Icon icon="ic:baseline-plus" className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SingleAvatarGroup = ({ users }) => {
  return (
    <div className="d-flex align-items-center flex-wrap">
      {users?.map((_, i) => (
        <div key={i}>
          <SingleDefaultTooltipThree
            child={
              <img
                src="assets/images/user-list/user-list1.png"
                alt=""
                className="w-24-px h-24-px rounded-circle object-fit-cover position-relative"
              />
            }
            title={"Mary Bones"}
          />
        </div>
      ))}

      {/* <span className="w-24-px h-24-px rounded-circle object-fit-cover position-relative ms--10px border bg-neutral-100 text-secondary-light text-xs d-inline-flex align-items-center justify-content-center">
        +5
      </span> */}
    </div>
  );
};
export default AvatarGroup;
