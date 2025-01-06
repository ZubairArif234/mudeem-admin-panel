import React from "react";

const Modal = ({ id, button, body, title, size }) => {
  return (
    <div>
      {button}
      <div
        className="modal fade "
        id={id}
        tabIndex="-1"
        aria-labelledby={id + "-label"}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered ${size}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id={id + "-label"}>
                {title}
              </h6>
              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
