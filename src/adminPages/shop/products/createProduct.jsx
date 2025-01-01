import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import FormPage from "../../../components/custom/shop/product/formPage";
const CreateProduct = () => {
  return (
    <MasterLayout>
      <Breadcrumb heading="Shop" title="Shop - Products" />
      <FormPage />
    </MasterLayout>
  );
};

export default CreateProduct;
