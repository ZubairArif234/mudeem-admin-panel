import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CareeresTable from "../../components/custom/careers/table";
import CareerForm from "../../components/custom/careers/form";

const Careers = () => {
  const tableRows = [
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
    {
      id: "453",
      jobTitle: "Sr.Project Manager",
      companyName: "DotClick",
      description:
        "2+ year of experience, capable to speak and understand english.",
      noVacancies: 2,
      salary: "4000 ",
      link: "www.linkedin.com",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Careers" title="Careers" />

      <TableDataLayer
        title={"Careers"}
        body={<CareeresTable rows={tableRows} />}
        isCustomHeaderButton
        modalTitle="Add Job"
        modalId="add-job"
        modalForm={<CareerForm />}
      />
    </MasterLayout>
  );
};

export default Careers;
