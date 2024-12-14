import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
import CalendarMainLayer from "../../components/CalendarMainLayer";

const EventCalender = () => {
  return (
    <div>
      <MasterLayout>
        <Breadcrumb heading="Event Calendar" title="Event Calendar" />

        <CalendarMainLayer />
      </MasterLayout>
    </div>
  );
};

export default EventCalender;
