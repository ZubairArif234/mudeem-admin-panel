import React, { useEffect, useRef, useState } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";
import TableDataLayer from "../../components/TableDataLayer";
import ContentTable from "../../components/custom/contentCreator/table";
import { useGetAllReels } from "../../hook/apis/contentCreator/useGetAllReels";
export const VideoCard = ({ data }) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="card bg-success-500 h-100 radius-12 p-0 overflow-hidden position-relative">
      <div className="card-body p-0 gradient-overlay bottom-0 start-0">
        <video
          src={data?.url || "assets/images/card/contentVideo.mp4"}
          alt=""
          width={"100%"}
          height={550}
          className="object-fit-cover"
          //   className="w-100 h-100"
          controls
        />

        <div
          style={{ top: hide ? 0 : "-300px", width: "100%" }}
          className="position-absolute bg-success-100   z-1"
        >
          <div className="  p-24">
            <div className="d-flex gap-2 align-items-center">
              <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                <img src="assets/images/user.png" alt="" />
              </span>
              <p
                className="card-title  
            text-lg mb-6"
              >
                {data?.user?.name}
              </p>
            </div>
            <p className="card-text   ">{data?.description}</p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#content-reward-points"
              className="btn bg-success-500 text-white"
            >
              Reward Points
            </button>
          </div>
        </div>
        <div
          style={{ top: 0, right: 0 }}
          className="position-absolute  z-2 d-flex  align-items-end"
        >
          <div className=" d-flex bg-success-100   ">
            {hide ? (
              <Icon
                onClick={() => setHide(!hide)}
                icon="material-symbols:keyboard-arrow-up-rounded"
                className="icon cursor-pointer"
                width={30}
              />
            ) : (
              <Icon
                onClick={() => setHide(!hide)}
                icon="material-symbols:keyboard-arrow-down-rounded"
                className="icon cursor-pointer "
                width={30}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentCreator = () => {
  const { reels } = useGetAllReels();
  console.log(reels);
  const tableHeadings = [
    "ID",
    "Driver",
    "Pick up",
    "Destination",
    "Seats",
    "Passengers",
  ];
  const tableRows = [
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Content Creator" title="Content Creator" />
      {/* <div className="row gy-4">
        {[0, 1, 2, 3, 4]?.map((_, i) => (
          <div className="col-xxl-4 col-sm-6" key={i}>
            <VideoCard />
          </div>
        ))}
      </div> */}
      <TableDataLayer
        title={"Videos"}
        body={<ContentTable heading={tableHeadings} rows={reels?.reel} />}
      />

      <div
        className="modal fade "
        id={"content-reward-points"}
        tabIndex="-1"
        aria-labelledby={"content-points-label"}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered `}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id={"content-reward-points-label"}>
                Reward Points
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label>Enter Green Points</label>
                <input
                  type="text"
                  name="#0"
                  className="form-control form-control-sm"
                  placeholder="Enter Green Points.."
                />
                <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
                  <button type="button" className="btn btn-success-600 ">
                    Reward Points
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
