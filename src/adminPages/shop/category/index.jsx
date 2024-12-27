import React, { useEffect, useState } from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import CategoryTable from "../../../components/custom/shop/category/table";
import CategoryForm from "../../../components/custom/shop/category/form";
import { useCreateCategory } from "../../../hook/apis/auth/shop/category/useCreateCategory";
import { useGetCategory } from "../../../hook/apis/auth/shop/category/useGetCategory";
import DataNotFound from "../../../components/custom/extra/dataNotFound";

const Category = () => {
  const [filters, setFilters] = useState({ search: "" });
  const { categories, isPending } = useGetCategory(filters);
  console.log(categories);

  const handleSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };
  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Category" />

      <TableDataLayer
        title={"Category"}
        body={
          categories?.length > 0 ? (
            <CategoryTable rows={categories} />
          ) : (
            <DataNotFound
              heading={"Categories Not Found"}
              text={"There is not categories found , based on your search!"}
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
