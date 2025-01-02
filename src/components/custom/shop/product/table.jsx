import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Modal from "../../extra/modal";
import { SingleDefaultTooltipThree } from "../../../child/DefaultTooltipThree";
import DeleteModalContent from "../../extra/deleteModalContent";
import ViewProduct from "./viewProduct";
import ProductForm from "./form";
import { Link } from "react-router-dom";
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
            <td className="text-capitalize">
              <div className="d-flex gap-1 align-items-center">
                <img src={item?.images[0]} width={50} />
                {item?.featured && (
                  <Icon
                    className="text-warning-500"
                    icon="material-symbols:crown-rounded"
                    width="24"
                    height="24"
                  />
                )}
                {item?.name?.length > 24 ? (
                  <SingleDefaultTooltipThree
                    title={item?.name}
                    child={item?.name?.slice(0, 25) + "..."}
                  />
                ) : (
                  item?.name
                )}
              </div>
            </td>
            <td className="text-capitalize"> {item?.brand}</td>
            <td className="text-capitalize">
              {item?.description?.slice(0, 25) + "..."}
            </td>

            <td
              className={item?.stock ? "text-success-500" : "text-danger-500"}
            >
              {" "}
              {item?.stock ? "In Stock" : "Out of Stock"}
            </td>
            <td> {item?.greenPointsPerUnit} pts</td>
            <td>
              <div className="d-flex gap-2 align-items-start">
                <Modal
                  id={`view-product-${item._id}`}
                  button={
                    <Icon
                      icon="uil:eye"
                      className="text-primary-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#view-product-${item._id}`}
                    />
                  }
                  body={<ViewProduct data={item} key={i} />}
                  title="View Product"
                  size="modal-lg"
                />

                {/* <Modal
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
                /> */}
                <Link
                  to={`/create-products/${item._id}`}
                  state={{ data: item }}
                >
                  <button>
                    <Icon
                      icon="mage:edit"
                      className="text-success-500 cursor-pointer"
                      type="button"
                    />
                  </button>
                </Link>

                <Modal
                  id={`delete-product-${item._id}`}
                  button={
                    <Icon
                      icon="mage:trash"
                      className="text-danger-500 cursor-pointer"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-product-${item._id}`}
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
