import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CarpoolingTable from "../../components/custom/carpooling/table";
import { useGetCarpool } from "../../hook/apis/carpool/useGetAll";

const Carpooling = () => {
  const { carpool, isPending } = useGetCarpool();
  console.log("carpool",carpool);

  return (
    <MasterLayout>
      <Breadcrumb heading="Carpooling" title="Carpooling" />

      <TableDataLayer
        title={"Ride History"}
        body={<CarpoolingTable rows={carpool} />}
      />
    </MasterLayout>
  );
};

export default Carpooling;
