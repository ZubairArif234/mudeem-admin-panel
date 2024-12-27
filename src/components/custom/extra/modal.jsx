import React from "react";

const Modal = ({ id, button, body, title, size }) => {
  return (
    <div>
      {button}
      <div
        class="modal fade "
        id={id}
        tabindex="-1"
        aria-labelledby={id + "-label"}
        aria-hidden="true"
        tabIndex={-1}
      >
        <div class={`modal-dialog modal-dialog-centered ${size}`}>
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id={id + "-label"}>
                {title}
              </h6>
              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div class="modal-body">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
