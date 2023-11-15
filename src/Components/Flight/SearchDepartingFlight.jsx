import { Card, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchDepartingFilter from "./SearchDepartingFilter";
import SearchDepartingCard from "./SearchDepartingCard";
import SelectDepartingFlight from "./SelectDepartingFlight";

const SearchDepartingFlight = () => {
  const [selectFlight, setSelectFlight] = useState(false);
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
      <SearchDepartingFilter />
      <Grid container spacing={2} sx={{ width: { xs: "100%", md: "60%" } }}>
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
