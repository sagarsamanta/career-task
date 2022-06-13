import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import { MyContext } from "../components/AuthProvider";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
const Profile = () => {
  const [showList, setShowList] = useState(false);
  const context = useContext(MyContext);
  const {
    name,
    email,
    username,
    phone,
    website,
    profilepicture,
    company,
    address,
  } = context.user;
  const { allUserDetails } = context;
  return (
    <div>
      <div style={{ display: "flex", height: "80%", marginTop: "0rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1em",
          }}
        >
          <Avatar
            style={{ width: 200, height: 200 }}
            src={profilepicture}
            alt="No Image"
          />
          <div style={{ marginTop: "1rem" }}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                fontSize: "21px",
                color: "black",
                marginTop: "1rem",
                fontWeight: "700",
              }}
            >
              {name}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Username&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                e-mail&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Phone&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Website&nbsp;&nbsp;
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{username}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{email}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{phone}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{website}
              </div>
            </div>
          </div>

          <div>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                margin: "1rem 0rem 1rem 0rem",
                fontSize: "21px",
                color: "#877e7e",
                marginTop: "1rem",
                fontWeight: "500",
              }}
            >
              Company
            </Typography>
            <Divider variant="fullwidth" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                name&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                catchPhrase&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                bs&nbsp;&nbsp;
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{company.name}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{company.catchPhrase}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{company.bs}
              </div>
            </div>
          </div>
        </div>

        <Divider
          orientation="vertical"
          variant="middle"
          style={{ marginTop: "4rem" }}
        />

        <div style={{ marginLeft: "1rem" }}>
          <div
            style={{
              fontSize: "21px",
              color: "#877e7e",
              marginTop: "1rem",
              fontWeight: "500",
            }}
          >
            Address&nbsp;&nbsp;:
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-22.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Street&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Suite&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                City&nbsp;&nbsp;
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "#877e7e",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Zipcode&nbsp;&nbsp;
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{address.street}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{address.suite}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{address.city}
              </div>
              <div
                style={{
                  fontSize: "21px",
                  color: "black",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                :&nbsp;&nbsp;{address.zipcode}
              </div>
            </div>
          </div>
          <div style={{ margin: "1.5rem 2rem 1rem 2rem" }}>
            {" "}
            <img
              src="/map1.png"
              style={{ height: "350px", width: "700px", borderRadius: "15px" }}
              alt="Not"
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              Lat &nbsp;: &nbsp;{address.geo.lat} &nbsp;&nbsp;&nbsp; Lng: &nbsp;
              {address.geo.lng}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ position: "fixed", marginRight: "3rem", right: 0, bottom: 0 }}
      >
        <div>
          <div
            style={{
              border: "1px solid blue",
              backgroundColor: "white",
              width: "300px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <div>
              <Button
                startIcon={<ChatBubbleOutlineTwoToneIcon />}
                endIcon={
                  showList ? (
                    <KeyboardArrowUpTwoToneIcon m={1} />
                  ) : (
                    <KeyboardArrowDownTwoToneIcon m={1} />
                  )
                }
                variant="contained"
                style={{
                  borderBottomLeftRadius: "none",
                  borderBottomRightRadius: "none",
                }}
                fullWidth
                onClick={() => setShowList((prev) => !prev)}
                onBlur={() => setShowList(false)}
              >
                <span style={{ marginRight: "130px" }}>Chats</span>
              </Button>
            </div>
            {showList && (
              <div style={{ maxHeight: "500px", overflow: "scroll" }}>
                {allUserDetails?.users?.map((user, index) => (
                  <div style={{display:'flex',justifyContent:'space-between'}} key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "0.5rem",
                        marginTop: "1rem",
                      }}
                    >
                      <Avatar
                        alt="NOT"
                        style={{ marginRight: "0.5rem" }}
                        src={user.profilepicture}
                      />
                      <Typography>{user.name}</Typography>
                    </div>
                    <div style={{marginTop: "1.5rem",marginRight:'1rem'}}>
                      <span
                        style={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          display: "inline-block",
                          backgroundColor: `${index>=5 ? "gray":"green"}`,
                        }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
