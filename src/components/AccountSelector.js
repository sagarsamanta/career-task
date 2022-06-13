import React, {  useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { MyContext } from "../components/AuthProvider";

const AccountSelector = ({ allUserDetails }) => {
  let navigate = useNavigate();
  const context = useContext(MyContext);
  let location = useLocation();
  return (
    <>
      <List
        style={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          bgcolor: "background.paper",
        }}
      >
        {allUserDetails?.users?.map((user) => (
          <div key={user.id}>
            <ListItem
              button
              style={{ display: "flex", cursor: "pointer" }}
              onClick={(e) => {
                context.signIn(user, allUserDetails, () => {
                  let from = location.state?.from?.pathname || "/profile";
                  navigate(from, { replace: true });
                });
              }}
            >
              <ListItemAvatar>
                <Avatar alt="NOT" src={user.profilepicture} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
            <Divider variant="" component="li" />
          </div>
        ))}
        {Object.keys(allUserDetails).length === 0 && (
          <div>No Response From Api</div>
        )}
      </List>
    </>
  );
};

export default AccountSelector;
