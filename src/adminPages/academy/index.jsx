import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import Modal from "../../components/custom/extra/modal";
import { Icon } from "@iconify/react/dist/iconify.js";
import SustainibiltyCompanyTable from "../../components/custom/sustainibilty/companyTable";
import AcademyTable from "../../components/custom/academy/table";
import Form from "../../components/custom/academy/form";
import { useGetBooks } from "../../hook/apis/academy/useAllBooks";

const Academy = () => {
  const { books, isPending } = useGetBooks();

 
  return (
    <MasterLayout>
      <Breadcrumb heading="Academy" title="Academy" />
      <TableDataLayer
        title={"Books"}
        body={<AcademyTable rows={books} />}
        isCustomHeaderButton
        modalTitle="Add Book"
        modalId="add-sustainibility-company"
        modalForm={<Form />}
        modalSize="modal-lg"
      />
    </MasterLayout>
  );
};

export default Academy;
