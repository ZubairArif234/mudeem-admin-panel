import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import CategoryTable from "../../../components/custom/shop/category/table";
import CategoryForm from "../../../components/custom/shop/category/form";

const Category = () => {
  const tableRows = [
    {
      id: "453",
      name: "Clothing",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Toys",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Blankets & Curtains",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Shoes",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Grocery",
      createdAt: "25-Feb-2025",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Category" />

      <TableDataLayer
        title={"Category"}
        body={<CategoryTable rows={tableRows} />}
        isCustomHeaderButton
        modalTitle="Add Category"
        modalId="add-sustainibility-company"
        modalForm={<CategoryForm />}
      />
    </MasterLayout>
  );
};

export default Category;
