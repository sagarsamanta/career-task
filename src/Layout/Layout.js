import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import BodyHeader from "../components/BodyHeader";
import Divider from "@mui/material/Divider";

const Layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "1",
          backgroundColor: "#4c4cc3",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "30px",
          margin: "3rem",
        }}
      >
        <div style={{ marginLeft: "-11rem" }}>
          <NavBar />
        </div>
      </div>
      <div style={{ flex: "4", marginTop: "3rem" }}>
        <BodyHeader />
        <Divider variant="fullwidth" style={{margin:'1rem 0rem 1rem 0rem'}} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
