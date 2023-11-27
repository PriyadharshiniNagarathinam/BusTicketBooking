import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

function SearchBox() {
  const toCities = ["Bangalore", "Salem", "Erode"];
  const fromCities = ["Coimbatore", "Chennai", "Madurai"];
  const [searchBoxComp, setSearchBoxComp] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <Box
      sx={{
        borderRadius: 8,
        boxShadow: 3,
        backgroundColor: "#fff",
        p: 3,
        m: "60px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <ButtonGroup
          size="large"
          color="secondary"
          aria-label="button group"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Autocomplete
            disablePortal
            id="from-autocomplete"
            options={fromCities}
            onChange={(event, value) =>
              setSearchBoxComp((prevSearchBox) => ({
                ...prevSearchBox,
                ["from"]: value,
              }))
            }
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <DirectionsBusTwoToneIcon
                      color="primary"
                      style={{ marginRight: "8px" }}
                    />
                  ),
                }}
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="to-autocomplete"
            options={toCities}
            onChange={(event, value) =>
              setSearchBoxComp((prevSearchBox) => ({
                ...prevSearchBox,
                ["to"]: value,
              }))
            }
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <LocationOnTwoToneIcon
                      color="primary"
                      style={{ marginRight: "8px" }}
                    />
                  ),
                }}
              />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(date) => {
                const formattedDate = date.format("YYYY-MM-DD");
                setSearchBoxComp((prevSearchBox) => ({
                  ...prevSearchBox,
                  ["date"]: formattedDate,
                }));
                console.log(formattedDate);
              }}
              sx={{ width: "100%", mb: 2 }}
            />
          </LocalizationProvider>
        </ButtonGroup>
      </Container>
      <Link
        to="/displayBuses"
        state={{ from: searchBoxComp.from, to: searchBoxComp.to }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            width: "150px",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
        >
          <Typography variant="h7">Search</Typography>
        </Button>
      </Link>
    </Box>
  );
}

export default SearchBox;
