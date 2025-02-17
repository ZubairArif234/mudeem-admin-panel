import React from "react";
import MasterLayout from "../../../masterLayout/MasterLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import TableDataLayer from "../../../components/TableDataLayer";
import SustainibiltyCompanyTable from "../../../components/custom/sustainibilty/companyTable";
import Form from "../../../components/custom/sustainibilty/form";
import { useGetCompany } from "../../../hook/apis/waste/useGetCompany";
import DataNotFound from "../../../components/custom/extra/dataNotFound";
import Loader from "../../../components/custom/extra/loader";

const SustainibiltyCompany = () => {
  const { companies, isPending } = useGetCompany();
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
          heading="Invest Sustainiability"
          title="Sustainiability - Company"
        />

        <TableDataLayer
          title={"Companies"}
          body={
            isPending ? (
              <div
                style={{ minHeight: "59vh" }}
                className="d-flex justify-content-center align-items-center"
              >
                <Loader loading={isPending} size={150} color="#15803d" />
              </div>
            ) : companies?.length > 0 ? (
              <SustainibiltyCompanyTable
                heading={tableHeadings}
                rows={companies}
              />
            ) : (
              <DataNotFound
                heading={"Company Not Found"}
                text={"There is no Company found, based on your search!"}
              />
            )
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
