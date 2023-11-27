import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import LoyaltyTwoToneIcon from "@mui/icons-material/LoyaltyTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function ProfilePage() {
  const [selectedSection, setSelectedSection] = useState("my-profile");

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const profileItems = [
    "First Name",
    "Gender",
    "Marital Status",
    "Pincode",
    "State",
  ];
  const profileValues = {
    "First Name": "Roshan",
    Gender: "MALE",
    "Marital Status": "Single",
    Pincode: "600092",
    State: "Tamil Nadu",
  };
  const loginCreds = ["Email", "Mobile No", "Password"];
  const loginCredsValues = {
    Email: "roshan@gmail.com",
    "Mobile No": "7010586107",
    Password: "abc@123",
  };
  const profileUrl =
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <DemoPaper
          square={false}
          sx={{ m: "30px", height: "500px", position: "fixed" }}
        >
          <Box sx={{ width: "100%", maxWidth: "360px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Avatar
                src={profileUrl}
                alt="Profile user"
                sx={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "5px",
                }}
                variant="square"
              ></Avatar>
              <Typography variant="h5" fontWeight={"bold"} sx={{ mt: "10px" }}>
                Roshan
              </Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#my-profile"
                  selected={selectedSection === "my-profile"}
                  onClick={() => handleSectionClick("my-profile")}
                >
                  <ListItemIcon>
                    <ManageAccountsTwoToneIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#login-creds"
                  selected={selectedSection === "login-creds"}
                  onClick={() => handleSectionClick("login-creds")}
                >
                  <ListItemIcon>
                    <LockOpenTwoToneIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Login Credentials" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#my-trips"
                  selected={selectedSection === "my-trips"}
                  onClick={() => handleSectionClick("my-trips")}
                >
                  <ListItemIcon>
                    <LoyaltyTwoToneIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="My Trips" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </DemoPaper>
        <Stack
          direction="column"
          spacing={2}
          sx={{ margin: "auto", mt: "30px", position: "relative" }}
        >
          <DemoPaper square={false} id="my-profile">
            <Box sx={{ width: "700px", m: "30px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography align="left" variant="h5">
                  My Profile
                </Typography>
                <Button variant="outlined">Edit</Button>
              </Box>
              <List>
                {profileItems.map((item) => (
                  <>
                    <ListItem>
                      <ListItemText
                        primary={`${item}`}
                        secondary={profileValues[item]}
                        primaryTypographyProps={{
                          style: { fontWeight: "bold" },
                        }}
                      />
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Box>
          </DemoPaper>
          <DemoPaper square={false} id="login-creds">
            <Box sx={{ width: "700px", mb: "30px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ ml: "8px" }} align="left" variant="h5">
                  Login Credentials
                </Typography>
                <Button variant="outlined">Edit</Button>
              </Box>
              <List>
                {loginCreds.map((item) => (
                  <>
                    <ListItem>
                      <ListItemText
                        primary={`${item}`}
                        secondary={loginCredsValues[item]}
                        primaryTypographyProps={{
                          style: { fontWeight: "bold" },
                        }}
                      />
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Box>
          </DemoPaper>
          <DemoPaper square={false} id="my-trips">
            <Box sx={{ width: "700px", mb: "30px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ ml: "8px" }} align="left" variant="h5">
                  My Trips
                </Typography>
              </Box>
              <List>
                {profileItems.map((item) => (
                  <ListItem>
                    <ListItemText primary={item} />
                    <Divider />
                  </ListItem>
                ))}
              </List>
            </Box>
          </DemoPaper>
        </Stack>
      </Box>
    </div>
  );
}

export default ProfilePage;
