import React from "react";
import StatsCounts from "../../components/custom/dashboard/statsCounts";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TopSellingProductOne from "../../components/child/TopSellingProductOne";
import TopCustomersOne from "../../components/child/TopCustomersOne";

const Dashboard = () => {
  return (
    <MasterLayout>
      <Breadcrumb heading="Dashboard" title="Admin" />

      <div className="row gy-3">
        <div className="col-12">
          <StatsCounts />
        </div>
        <div className="col-8">
          <TopSellingProductOne />
        </div>
        <div className="col-4">
          <TopCustomersOne />
        </div>
      </div>
    </MasterLayout>
  );
};

export default Dashboard;
