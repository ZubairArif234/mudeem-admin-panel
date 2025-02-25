import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import CarpoolingTable from "../../components/custom/carpooling/table";

const Carpooling = () => {
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
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
    {
      id: "453",
      name: "Kathryn Murphy",
      imge: "assets/images/user-list/user-list1.png",
      pickUp: "Dow University (Dental department)",
      destination: "Dow University (Neurospinal department)",
      seat: 4,
      passengers: [
        {
          id: 1,
          name: "Mary Bones",
          image: "assets/images/user-list/user-list1.png",
        },
      ],
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Carpooling" title="Carpooling" />

      <TableDataLayer
        title={"Ride History"}
        body={<CarpoolingTable heading={tableHeadings} rows={tableRows} />}
      />
    </MasterLayout>
  );
};

export default Carpooling;
