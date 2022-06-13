import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import "../styles/Logout.css";
import { MyContext } from "./AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
const style = {
  position: "absolute",
  right: "-6%",
  top: "36%",
  transform: "translate(-50%, -50%)",
  width: "229px",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  height: "310px",
  borderRadius: "10px",
  outline: "none",
  p: 4,
};

export default function Logout({ open, setOpen }) {
  let location = useLocation();
  const handleClose = () => setOpen(false);
  const context = React.useContext(MyContext);
  const { name, profilepicture, email } = context.user;
  const { allUserDetails } = context;
  const navigate = useNavigate();
  console.log(context);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={profilepicture}
              alt="No Image"
              style={{ width: 70, height: 66 }}
            />
            <Typography variant="h6" gutterBottom component="div">
              {name}
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
              {email}
            </Typography>
            <Divider style={{ background: "#a39898", width: "80%" }} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {allUserDetails?.users?.slice(0, 2).map((user, index) => {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        margin: "1rem 0rem 1rem 0rem",
                      }}
                      key={index}
                      onClick={(e) => {
                        context.changeAccount(user, () => {
                          setOpen(false);
                          let from =
                            location.state?.from?.pathname || "/profile";
                          navigate(from, { replace: true });
                        });
                      }}
                    >
                      <Avatar
                        src={user?.profilepicture}
                        alt="No Image"
                        style={{ marginRight: "1rem" }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {user?.name}
                      </Typography>
                    </div>
                    <Divider style={{ background: "#a39898", width: "100%" }} />
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                onClick={() => {
                  return context.signOut(() => navigate("/"));
                }}
                fullWidth
                variant="contained"
                style={{
                  borderRadius: "10%",
                  backgroundColor: "#b73333",
                  marginTop: "1rem",
                  
                }}
              >
                Signout
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
