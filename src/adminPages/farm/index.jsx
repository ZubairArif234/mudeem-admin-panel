import React, { useState } from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import FarmTable from "../../components/custom/farm/table";
import { useGetFarm } from "../../hook/apis/sustainableFarm/useGetFarm";

const Farm = () => {
  const tableRows = [
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      location: "S.A town near city airport",
      renewable: "Biomass Energy",
      fertilizer: "Synthetic Fertilizer",
      desalination: "Solar Desalination",
      budget: "14000",
      createdAt: "25-Feb-2025",
    },
  ];
  const [filter, setFilter] = useState({
    page: 0,
    limit: 9,
  });
  const { farm, isPending } = useGetFarm(filter);
  console.log(farm);

  return (
    <MasterLayout>
      <Breadcrumb heading="Sustainable Farm" title="Sustainable Farm" />

      <TableDataLayer title={"Farm"} body={<FarmTable rows={farm} />} />
    </MasterLayout>
  );
};

export default Farm;
