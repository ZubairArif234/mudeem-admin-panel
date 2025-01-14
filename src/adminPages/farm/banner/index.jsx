import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import BannerTable from "../../../components/custom/farm/banner/table";
import BannerForm from "../../../components/custom/farm/banner/form";
import Loader from "../../../components/custom/extra/loader";
import DataNotFound from "../../../components/custom/extra/dataNotFound";
import { useGetBanner } from "../../../hook/apis/sustainableFarm/banner/useGetBanner";

const FarmBanner = () => {
  const { banners, isPending } = useGetBanner();

  return (
    <MasterLayout>
      <Breadcrumb heading="Banner" title="Sustainable Farm - Banner" />

      <TableDataLayer
        title={"Banners"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : banners?.banners?.length > 0 ? (
            <BannerTable rows={banners?.banners} />
          ) : (
            <DataNotFound
              heading={"Banners Not Found"}
              text={"There is no banners found , based on your search!"}
            />
          )
        }
        isCustomHeaderButton
        modalTitle="Add Banner"
        modalId="add-sustainibility-company"
        modalForm={<BannerForm />}
      />
    </MasterLayout>
  );
};

export default FarmBanner;
