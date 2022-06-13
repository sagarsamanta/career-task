import { Avatar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "./AuthProvider";
import Logout from "./Logout";
const BodyHeader = () => {
  const context = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const { name, profilepicture } = context.user;
  const location = useLocation();
  let pageTitle = location.pathname.split("/")[1];
  pageTitle = pageTitle.charAt(0).toLocaleUpperCase() + pageTitle.slice(1);
  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "21px",
            color: "black",
            marginTop: "1rem",
            fontWeight: "500",
          }}
        >
          {pageTitle}
        </div>
        <div
          onClick={handleModalOpen}
          style={{ display: "flex", cursor: "pointer", marginRight: "1rem" }}
        >
          <Avatar
            src={profilepicture}
            alt="No Image"
            style={{ marginRight: "1rem" }}
          />
          <Typography variant="h6">{name}</Typography>
        </div>
      </div>
      <Logout open={open} setOpen={setOpen} />
    </div>
  );
};

export default BodyHeader;
