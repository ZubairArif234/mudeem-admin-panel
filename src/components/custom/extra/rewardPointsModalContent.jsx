import React from "react";

const RewardPointsModalContent = (modalId) => {
  return (
    <div
      class="modal fade "
      id={modalId}
      // id={"innovation-reward-points"}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      // aria-labelledby={"reward-points-label"}
      aria-hidden="true"
      tabIndex={-1}
    >
      <div class={`modal-dialog modal-dialog-centered `}>
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id={`${modalId}-label`}>
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
  );
};

export default RewardPointsModalContent;
