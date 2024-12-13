import React from "react";

const DeleteModalContent = () => {
  return (
    <div>
      <p>Do you want to delete ? This action can't be undone!</p>
      <div className="mt-10 d-flex gap-2 justify-content-end">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-danger-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModalContent;
