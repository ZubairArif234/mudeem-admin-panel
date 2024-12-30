import React, { useEffect, useState } from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import CategoryTable from "../../../components/custom/shop/category/table";
import CategoryForm from "../../../components/custom/shop/category/form";
import { useCreateCategory } from "../../../hook/apis/shop/category/useCreateCategory";
import { useGetCategory } from "../../../hook/apis/shop/category/useGetCategory";
import DataNotFound from "../../../components/custom/extra/dataNotFound";
import Loader from "../../../components/custom/extra/loader";

const Category = () => {
  const [filters, setFilters] = useState({ search: "" });
  const { categories, isPending } = useGetCategory(filters);

  const handleSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Category" />

      <TableDataLayer
        title={"Category"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : categories?.length > 0 ? (
            <CategoryTable rows={categories} />
          ) : (
            <DataNotFound
              heading={"Categories Not Found"}
              text={"There is no categories found , based on your search!"}
            />
          )
        }
        isCustomHeaderButton
        modalTitle="Add Category"
        modalId="add-category"
        modalForm={<CategoryForm />}
        searchFunction={handleSearch}
      />
    </MasterLayout>
  );
};

export default Category;
