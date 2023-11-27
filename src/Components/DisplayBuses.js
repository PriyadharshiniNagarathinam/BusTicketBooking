import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BustripCard from "./BusTripCard";
import SearchBox from "./SearchBox";
import ResponsiveDrawer from "./FilterComp";
import FilterComp from "./FilterComp";
import { Box, Typography } from "@mui/material";

function DisplayBuses() {
  const location = useLocation();
  const [availableBuses, setAvailableBuses] = useState([]);
  const [searchedFor, setSearchedFor] = useState([]);
  const fromCity = location.state.from;
  const toCity = location.state.to;

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/searchBuses")
        .then((res) => res.json())
        .then((data) => {
          setAvailableBuses(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchedFor("");
    if (availableBuses.length > 0 && availableBuses[0][fromCity]) {
      const busesArray = availableBuses[0][fromCity];
      busesArray.map((val) => {
        if (val.destination === toCity) {
          setSearchedFor((prev) => [...prev, val]);
        }
      });
    }
  }, [availableBuses, fromCity, toCity]);

  return (
    <div>
      <Box sx={{
        display: "flex", flexDirection: "row"
      }}>
        <FilterComp />
        {
          searchedFor ? (
            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", mt: "20px" }}>
              {searchedFor && searchedFor.map((val) => (
                <BustripCard
                  //   travels={val.travels}
                  //   type1={val.type1}
                  //   departuretime={val.departuretime}
                  //   arrivaltime={val.arrivaltime}
                  //   price={val.price}
                  travels={val.travels}
                  type1={val.type1}
                  departuretime={val.departuretime}
                  arrivaltime={val.arrivaltime}
                  price={val.price}
                  timetaken={val.timetaken}
                  rating={val.rating}
                />
              ))}
            </Box>
          ) : (
            <Box sx={{ margin: "auto" }}>
              {!searchedFor && (<div style={{ display: "flex", flexDirection: "row" }}><img src="https://www.redbus.in/images/no_bus.png" /><Typography variant="h4">Oops!!No Buses Found</Typography></div>)}
            </Box>
          )
        }
      </Box>
    </div>
  );
}


export default DisplayBuses;
