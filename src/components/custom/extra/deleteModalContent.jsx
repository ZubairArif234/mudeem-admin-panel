import React from "react";

const DeleteModalContent = ({ deleteFunction, isLoading }) => {
  return (
    <div>
      <p>Do you want to delete? This action can't be undone!</p>
      <div className="mt-10 d-flex gap-2 justify-content-end">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          onClick={() => deleteFunction()}
          type="button"
          className="btn btn-danger-600"
          data-bs-dismiss="modal"
          disabled={isLoading} // Disable the button if the request is loading
        >
          {isLoading ? "Deleting..." : "Delete"} {/* Show loading text while deleting */}
        </button>
      </div>
    </div>
  );
};

export default DeleteModalContent;
