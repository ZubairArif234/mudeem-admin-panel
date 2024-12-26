import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyCompanyTable from "../../../components/custom/sustainibilty/companyTable";
import Form from "../../../components/custom/sustainibilty/form";

const SustainibiltyCompany = () => {
  const tableHeadings = [
    "ID",
    "Company Name",
    "Owner's Name",
    "Location",
    "Created At",
  ];
  const tableRows = [
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
    {
      id: "453",
      location: "Omega plus , near city mall opp, marry salon",
      company: "Omega plus",
      owner: "Mr.Robert known",
      createdAt: "24-feb-2023",
    },
  ];
  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Invest Sustainibility"
          title="Sustainibility - Company"
        />

        <TableDataLayer
          title={"Companies"}
          body={
            <SustainibiltyCompanyTable
              heading={tableHeadings}
              rows={tableRows}
            />
          }
          isCustomHeaderButton
          modalTitle="Add Company"
          modalId="add-sustainibility-company"
          modalForm={<Form />}
        />
      </MasterLayout>
    </div>
  );
};

export default SustainibiltyCompany;
