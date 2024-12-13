import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import GreenCampusTable from "../../components/custom/greenCampus/table";
import { Icon } from "@iconify/react/dist/iconify.js";
import Form from "../../components/custom/greenCampus/form";

const GreenCampus = () => {
  const tableHeadings = [
    "ID",
    "Driver",
    "Pick up",
    "Destination",
    "Seats",
    "Passengers",
  ];
  const tableRows = [
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
    {
      id: "453",
      location: [51.90987, -1.87737],
      category: "Dust bin",
      points: 12,
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Green Campus Map" title="Green Campus Map" />

      <TableDataLayer
        title={"Location"}
        body={<GreenCampusTable heading={tableHeadings} rows={tableRows} />}
        isCustomHeaderButton
      />
    </MasterLayout>
  );
};

export default GreenCampus;
