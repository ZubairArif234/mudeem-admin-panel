import React, { useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../../../hook/apis/auth/useMe";

const PreLoader = () => {
  const navigate = useNavigate();
  const { me } = useGetMe();
  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    if (me?.user?._id) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, [me?.user?._id]);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="preloader-container d-flex justify-content-center align-items-center "
    >
      <GridLoader
        color={"#45b369"}
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default PreLoader;
