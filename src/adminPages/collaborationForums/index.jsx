import React from "react";
import DefaultTabs from "../../components/child/DefaultTabs";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
const CollaborateForums = () => {
  const tabList = ["requested", "accepted", "rejected"];

  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Collaboration Forums"
          title="Collaboration Forums"
        />

        <DefaultTabs tabList={tabList} bodyType="card" />
      </MasterLayout>
    </div>
  );
};

export default CollaborateForums;
