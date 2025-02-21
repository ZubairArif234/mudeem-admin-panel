import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CareeresTable from "../../components/custom/careers/table";
import CareerForm from "../../components/custom/careers/form";
import { useGetCareers } from "../../hook/apis/career/useGetCareers"; 

const Careers = () => {
  const { careers, isLoading, error } = useGetCareers();

  console.log("Careers data:", careers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching careers data</div>;
  }

  return (
    <MasterLayout>
      <Breadcrumb heading="Careers" title="Careers" />

      <TableDataLayer
        title={"Careers"}
        body={<CareeresTable rows={careers} />}
        isCustomHeaderButton
        modalTitle="Add Job"
        modalId="add-job"
        modalForm={<CareerForm />}
      />
    </MasterLayout>
  );
};

export default Careers;
