import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import GreenCampusTable from "../../components/custom/greenCampus/table";
import Form from "../../components/custom/greenCampus/form";
import { useGetLocation } from "../../hook/apis/greencampusMap/useGetLocations";
import Loader from "../../components/custom/extra/loader";
import DataNotFound from "../../components/custom/extra/dataNotFound";

const GreenCampus = () => {
  const { locations, isPending } = useGetLocation({ search: "" });

  return (
    <MasterLayout>
      <Breadcrumb heading="Green Campus Map" title="Green Campus Map" />

      <TableDataLayer
        title={"Location"}
        // body={<GreenCampusTable rows={locations} />}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : locations?.length > 0 ? (
            <GreenCampusTable rows={locations} />
          ) : (
            <DataNotFound
              heading={"Locations Not Found"}
              text={"There is no locations found , based on your search!"}
            />
          )
        }
        modalTitle="Add Location"
        modalId="add-campus-location"
        modalForm={<Form />}
        isCustomHeaderButton
      />
    </MasterLayout>
  );
};

export default GreenCampus;
