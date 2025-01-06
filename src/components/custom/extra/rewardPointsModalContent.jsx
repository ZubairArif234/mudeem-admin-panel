import React from "react";

const RewardPointsModalContent = (modalId) => {
  return (
    <div
      className="modal fade "
      id={modalId}
      // id={"innovation-reward-points"}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      // aria-labelledby={"reward-points-label"}
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered `}>
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id={`${modalId}-label`}>
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
                  Reward & Approve
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPointsModalContent;
