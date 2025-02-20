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

  const tableRows = [
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
    {
      id: "453",
      bookName: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      description:
        "In Harry Potter and the Deathly Hallows, J.K. Rowling marks the culmination of Harry’s journey to vanquish Voldemort. As the Minister for Magic dies and the Death Eaters take control of the Ministry, Harry, Ron, and Hermione betake themselves on a mission to destroy Voldemort’s Horcruxes. Their journey is fraught with dangers, including the malevolent Death Eater mage, Dolohov, and a cursed locket that causes palpable rifts between our cherished trio.",
      language: "English",
      price: "400.00",
      points: "150",
    },
  ];
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
