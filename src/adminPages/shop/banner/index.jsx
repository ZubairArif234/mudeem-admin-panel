import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import BannerTable from "../../../components/custom/shop/banner/table";

const Banner = () => {
  const tableRows = [
    {
      id: "453",
      name: "Watch sale 50% off",
      createdAt: "25-Feb-2025",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Banner" title="Shop - Banner" />

      <TableDataLayer
        title={"Products"}
        body={<BannerTable rows={tableRows} />}
        isCustomHeaderButton
        modalTitle="Add Product"
        modalId="add-sustainibility-company"
        // modalForm={<ProductForm />}
        modalSize="modal-lg"
      />
    </MasterLayout>
  );
};

export default Banner;
