import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import UserTable from "../../components/custom/user/table";
import { useGetUsers } from "../../hook/apis/user/useAllUser";

const Users = () => {
  const { user, isPending } = useGetUsers();
  console.log(user);

  const tableRows = [
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
    {
      id: "453",
      name: "Krystal Dorris",
      email: "krystal@gmail.com",
      phone: "0900987665",
      createdAt: "25-Feb-2025",
    },
  ];
  return (
    <MasterLayout>
      <Breadcrumb heading="Users" title="Users" />

      <TableDataLayer title={"Users"} body={<UserTable rows={user} />} />
    </MasterLayout>
  );
};

export default Users;
