import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CarpoolingTable from "../../components/custom/carpooling/table";
import Loader from "../../components/custom/extra/loader"; // Import the Loader component
import { useGetCarpool } from "../../hook/apis/carpool/useGetAll";
import DataNotFound from "../../components/custom/extra/dataNotFound";

const Carpooling = () => {
  const { carpool, isLoading, error } = useGetCarpool();

  console.log("Carpool Data in Component:", carpool); // Debug in console

  return (
    <MasterLayout>
      <Breadcrumb heading="Carpooling" title="Carpooling" />

      <TableDataLayer
        title={"Ride History"}
        body={
          isLoading ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isLoading} size={150} color="#15803d" />
            </div>
          ) : error ? (
            <p>Error fetching data: {error.message}</p>
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