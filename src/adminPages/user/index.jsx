import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TableDataLayer from "../../components/TableDataLayer";
import UserTable from "../../components/custom/user/table";
import { useGetUsers } from "../../hook/apis/user/useAllUser";
import Loader from "../../components/custom/extra/loader";
import DataNotFound from "../../components/custom/extra/dataNotFound";

const Users = () => {
  const { user, isPending } = useGetUsers();

  return (
    <MasterLayout>
      <Breadcrumb heading="Users" title="Users" />

      <TableDataLayer
        title={"Users"}
        body={
          isPending ? (
            <div
              style={{ minHeight: "59vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Loader loading={isPending} size={150} color="#15803d" />
            </div>
          ) : user?.length > 0 ? (
            <UserTable rows={user} />
          ) : (
            <DataNotFound
              heading={"Users Not Found"}
              text={"There is no users found , based on your search!"}
            />
          )
        }
      />
    </MasterLayout>
  );
};

export default Users;
