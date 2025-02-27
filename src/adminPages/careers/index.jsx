import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CareeresTable from "../../components/custom/careers/table";
import CareerForm from "../../components/custom/careers/form";
import { useGetCareers } from "../../hook/apis/career/useGetCareers";
import DataNotFound from "../../components/custom/extra/dataNotFound";
import Loader from "../../components/custom/extra/loader";

const Careers = () => {
  const { careers, isPending } = useGetCareers();

  return (
    <MasterLayout>
      <Breadcrumb heading="Careers" title="Careers" />

      <TableDataLayer
        title={"Careers"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : careers?.length > 0 ? (
            <CareeresTable rows={careers} />
          ) : (
            <DataNotFound
              heading={"Job Not Found"}
              text={"There is no jobs found , based on your search!"}
            />
          )
        }
        isCustomHeaderButton
        modalTitle="Add Job"
        modalId="add-job"
        modalForm={<CareerForm />}
      />
    </MasterLayout>
  );
};

export default Careers;
