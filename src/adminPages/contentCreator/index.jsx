import React, { useRef, useState } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";

const VideoCard = () => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlay) {
      videoRef.current.pause(); // Pause the video
    } else {
      videoRef.current.play(); // Play the video
    }
    setIsPlay(!isPlay); // Toggle the state
  };
  return (
    <div className="card bg-success-500 h-100 radius-12 p-0 overflow-hidden position-relative">
      <div className="card-body p-0 gradient-overlay bottom-0 start-0">
        <video
          ref={videoRef}
          src="assets/images/card/contentVideo.mp4"
          alt=""
          width={"100%"}
          height={550}
          className="object-fit-cover"
          //   className="w-100 h-100"
          //   controls
        />

        <div
          style={{ left: "42%" }}
          className="position-absolute  bottom-50 cursor-pointer radius-10 bg-success-500  z-2 "
        >
          {isPlay ? (
            <Icon
              onClick={togglePlayPause}
              icon="material-symbols:pause-rounded"
              className="text-white"
              width="54"
              height="54"
            />
          ) : (
            <Icon
              onClick={togglePlayPause}
              icon="material-symbols:play-arrow-rounded"
              className="text-white"
              width="54"
              height="54"
            />
          )}
        </div>
        <div className="position-absolute  start-0 bottom-0 z-1 d-flex align-items-end">
          <div className="  p-24">
            <div className="d-flex gap-2 align-items-center">
              <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                <img src="assets/images/user.png" alt="" />
              </span>
              <h5
                className="card-title text-white 
            text-lg mb-6"
              >
                Kathryn Murphy
              </h5>
            </div>
            <p className="card-text text-white ">
              We quickly learn to fear and thus automatically avo id potentially
              stressful situations of all kinds, including the most common of
              all
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#content-reward-points"
              className="btn bg-success-500 text-white"
            >
              Reward Points
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentCreator = () => {
  return (
    <MasterLayout>
      <Breadcrumb heading="Content Creator" title="Content Creator" />
      <div className="row gy-4">
        {[0, 1, 2, 3, 4]?.map((_, i) => (
          <div className="col-xxl-4 col-sm-6" key={i}>
            <VideoCard />
          </div>
        ))}
      </div>

      <div
        class="modal fade "
        id={"content-reward-points"}
        tabindex="-1"
        aria-labelledby={"content-points-label"}
        aria-hidden="true"
        tabIndex={-1}
      >
        <div class={`modal-dialog modal-dialog-centered `}>
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id={"content-reward-points-label"}>
                Reward Points
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <label>Enter Green Points</label>
                <input
                  type="text"
                  name="#0"
                  className="form-control form-control-sm"
                  placeholder="Enter Green Points.."
                />
                <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
                  <button type="button" class="btn btn-success-600 ">
                    Reward & Approve
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContentCreator;
