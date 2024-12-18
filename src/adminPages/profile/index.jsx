import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import ViewProfileLayer from "../../components/ViewProfileLayer";

const Profile = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb heading="Profile" title="Profile" />

      {/* ViewProfileLayer */}
      <ViewProfileLayer />
    </MasterLayout>
  );
};

export default Profile;
