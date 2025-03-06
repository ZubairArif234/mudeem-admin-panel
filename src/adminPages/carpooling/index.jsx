import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CarpoolingTable from "../../components/custom/carpooling/table";
import Loader from "../../components/custom/extra/loader"; // Import the Loader component
import { useGetCarpool } from "../../hook/apis/carpool/useGetAll";
import DataNotFound from "../../components/custom/extra/dataNotFound";

const Carpooling = () => {
  const { carpool, isPending } = useGetCarpool();

  return (
    <MasterLayout>
      <Breadcrumb heading="Carpooling" title="Carpooling" />

      <TableDataLayer
        title={"Ride History"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : carpool?.length > 0 ? (
            <CarpoolingTable rows={carpool} />
          ) : (
            <DataNotFound
            heading={"No Ride History Found"}
            text={"There are no rides available based on your search."}
          />
          )
        }
      />
    </MasterLayout>
  );
};

export default Carpooling;
