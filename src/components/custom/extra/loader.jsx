import React from "react";
// import { PuffLoader } from "react-spinners";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
};
const Loader = ({ loading, color = "#FFFFFF" }) => {
  return (
    <PuffLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
