import React from "react";
import AccountSelector from "../components/AccountSelector";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [allUserDetails, setAllUserDetails] = useState([]);
  const getUserDetails = () => {
    axios({
      url: "https://panorbit.in/api/users.json",
      method: "GET",
    })
      .then((response) => {
        setAllUserDetails(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div style={{ height: "120vh", width: "100vw", position: "relative" }}>
      <div
        style={{ width: "100vw", height: "50%", backgroundColor: "#334ebd" }}
      ></div>
      <div
        style={{ width: "100vw", height: "50%", backgroundColor: "white" }}
      ></div>
      <div
        style={{
          width: "36%",
          maxHeight: "100vh",
          position: "absolute",
          display: "flex",
          backgroundColor: "white",
          top: "15%",
          left: "30%",
          borderRadius: "20px",
          boxShadow: "2px 2px 2px 2px #e3dbdb",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#ebe4e45c",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "24px",
              color: "gray",
              marginTop: "1rem",
              fontWeight: "700",
            }}
            gutterBottom
            component="div"
          >
            Select an account
          </Typography>
        </div>
        <div
          style={{ overflow: "auto", overflowX: "hidden", maxHeight: "500px" }}
        >
          <AccountSelector allUserDetails={allUserDetails} />
        </div>
      </div>
    </div>
  );
};

export default Login;
