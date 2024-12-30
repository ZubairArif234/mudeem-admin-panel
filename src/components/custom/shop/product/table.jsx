import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Modal from "../../extra/modal";
import { SingleDefaultTooltipThree } from "../../../child/DefaultTooltipThree";
import DeleteModalContent from "../../extra/deleteModalContent";
import ViewProduct from "./viewProduct";
import ProductForm from "./form";
import { useDeletedProduct } from "../../../../hook/apis/shop/product/useDeleteProduct";
const ProductsTable = ({ isSelectable, rows }) => {
  const { deleteProduct } = useDeletedProduct();

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
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
          <th scope="col">Product Name</th>
          <th scope="col">Brand Name</th>
          <th scope="col">Descripton</th>
          <th scope="col">Availibility</th>

          <th scope="col">Green Points</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, i) => (
          <tr>
            {isSelectable && (
              <td>
                <div className="form-check style-check d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">01</label>
                </div>
              </td>
            )}
            <td>#{item?.id + 1 * 2087}</td>
            <td className="text-capitalize">
              <div className="d-flex gap-1 align-items-center">
                <img src="/assets/images/product.png" width={50} />

                <SingleDefaultTooltipThree
                  title={item?.product}
                  child={item?.product?.slice(0, 25) + "..."}
                />
              </div>
            </td>
            <td className="text-capitalize"> {item?.brand}</td>
            <td className="text-capitalize">
              {item?.description?.slice(0, 25) + "..."}
            </td>

            <td
              className={
                item?.availibility === "In Stock"
                  ? "text-success-500"
                  : "text-danger-500"
              }
            >
              {" "}
              {item?.availibility}
            </td>
            <td> {item?.price} pts</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id="view-product"
                  button={
                    <Icon
                      icon="uil:eye"
                      className="text-primary-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#view-product"
                    />
                  }
                  body={<ViewProduct />}
                  title="View Product"
                  size="modal-lg"
                />

                <Modal
                  id="edit-product"
                  button={
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-product"
                    />
                  }
                  title="Edit Product"
                  body={<ProductForm />}
                  size={"modal-lg"}
                />

                <Modal
                  id="delete-product"
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-product"
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

export default ProductsTable;
