import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import CompanyLayer from "../../components/CompanyLayer";

const Settings = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb heading="Settings" title="Settings" />

      {/* CompanyLayer */}
      <CompanyLayer />
    </MasterLayout>
  );
};

export default Settings;