import React from "react";
import Modal from "../../extra/modal";
import DeleteModalContent from "../../extra/deleteModalContent";
import { Icon } from "@iconify/react/dist/iconify.js";

import CategoryForm from "./form";
import moment from "moment/moment";
import { useDeletedCategory } from "../../../../hook/apis/auth/shop/category/deleteCategory";

const CategoryTable = ({ isSelectable, rows }) => {
  const { deleteCategory, isPending } = useDeletedCategory();

  const handleDelete = async (id) => {
    try {
      // console.log(id, "delete it");

      await deleteCategory(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <table
      className="table bordered-table mb-0"
      id="dataTable"
      data-page-length={10}
    >
      <thead>
        <tr>
          {isSelectable && (
            <th scope="col">
              <div className="form-check style-check d-flex align-items-center">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">S.L</label>
              </div>
            </th>
          )}

          <th scope="col">ID</th>
          <th scope="col">Category Image</th>
          <th scope="col">Category Name</th>
          <th scope="col">Created At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((item, i) => (
          <tr key={i}>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">01</label>
                </div>
              </td>
            )}
            <td>#{item?._id.slice(0, 6) + i}</td>
            <td>
              {" "}
              <img src={item?.image} alt={item?.name} width={80} height={80} />
            </td>
            <td>{item?.name}</td>

            <td> {moment(item?.createdAt).format("DD/MMM/YYYY")}</td>
            <td key={i + 1}>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id={`edit-category-${item._id}`}
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#edit-category-${item._id}`}
                    />
                  }
                  title={"Edit Category" + i}
                  body={<CategoryForm data={item} key={i} />}
                />
                <Modal
                  id={`delete-category-${item._id}`}
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-category-${item._id}`}
                    />
                  }
                  body={
                    <DeleteModalContent
                      deleteFunction={() => handleDelete(item._id)}
                    />
                  }
                  title="Are you sure!"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
