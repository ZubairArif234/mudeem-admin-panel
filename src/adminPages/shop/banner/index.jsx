import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import BannerTable from "../../../components/custom/shop/banner/table";
import BannerForm from "../../../components/custom/shop/banner/form";

const Banner = () => {
  const tableRows = [
    {
      id: "453",
      name: "Watch sale 50% off",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Watch sale 50% off",
      createdAt: "25-Feb-2025",
    },
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
        modalTitle="Add Banner"
        modalId="add-sustainibility-company"
        modalForm={<BannerForm />}
      />
    </MasterLayout>
  );
};

export default Banner;
