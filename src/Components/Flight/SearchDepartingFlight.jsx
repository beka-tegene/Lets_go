import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchDepartingFilter from "./SearchDepartingFilter";
import SearchDepartingCard from "./SearchDepartingCard";
import SelectDepartingFlight from "./SelectDepartingFlight";
import { Close } from "@mui/icons-material";

const SearchDepartingFlight = () => {
  const [selectFlight, setSelectFlight] = useState(false);
  const [selectFilterData, setSelectFilterData] = useState([]);
  const SelectFilterData = (item) => {
    item.checked !== false
      ? setSelectFilterData((prevData) => {
          return !prevData.includes(item.name)
            ? [...prevData, item.name]
            : prevData;
        })
      : setSelectFilterData((prevData) => {
          const newData = [...prevData];
          const indexToRemove = newData.indexOf(item.name);
          if (indexToRemove !== -1) {
            newData.splice(indexToRemove, 1);
          }
          return newData;
        });
  };
  const closeHandler = (index) => {
    setSelectFilterData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };
  const setSelectFlightHandler = () => {
    setSelectFlight(true);
  };
  const selectFlightHandler = () => {
    setSelectFlight(false);
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      gap={4}
      sx={{ padding: { xs: "0.5rem 5%", md: "0.5rem 3%" } }}
    >
      <SearchDepartingFilter
        SelectFilterData={(item) => SelectFilterData(item)}
      />
      <Grid container spacing={2} sx={{ width: { xs: "100%", md: "60%" } }}>
        <Stack sx={{ pt: 3 }} gap={2} direction={"row"} flexWrap={"wrap"}>
          {selectFilterData.map((item, index) => (
            <Button
              variant="contained"
              sx={{
                background: "transparent",
                border: "1px solid #142261",
                color: "#142261",
                cursor: "default",
                "&:hover": {
                  background: "transparent",
                  color: "#142261",
                },
              }}
              size="small"
              key={index}
            >
              {item}{" "}
              <Close
                onClick={() => closeHandler(index)}
                sx={{ cursor: "pointer" }}
              />
            </Button>
          ))}
        </Stack>
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <Grid item xs={12}>
          <Card
            sx={{
              background: "#112D4E",
              color: "#FFFFFF",
              width: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontSize={"16px"}>2:00pm - 4:00am</Typography>
              <Typography fontSize={"12px"}>11h 5m (1 stop)</Typography>
              <Typography fontSize={"18px"} fontWeight={600}>
                $750
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontSize={"12px"}>
                London (LHR)- Addis(ADD)
              </Typography>
              <Typography fontSize={"12px"}>2h 33m in cairo (CAI)</Typography>
              <Typography fontSize={"12px"}>Roundtrip per traveler</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              gap={1}
            >
              <Typography fontSize={"12px"}>Egyptair</Typography>
            </Stack>
          </Card>
        </Grid>
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
        <SearchDepartingCard
          setSelectFlightHandler={() => setSelectFlightHandler()}
        />
      </Grid>
      {selectFlight && (
        <SelectDepartingFlight
          toggleDrawer={selectFlightHandler}
          state={selectFlight}
        />
      )}
    </Stack>
  );
};

export default SearchDepartingFlight;
