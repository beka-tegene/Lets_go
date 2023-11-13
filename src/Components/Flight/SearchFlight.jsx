import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SearchFilter from "./SearchFilter";
import SearchCard from "./SearchCard";

const SearchFlight = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      gap={4}
      sx={{ padding: { xs: "0.5rem 5%", md: "0.5rem 3%" } }}
    >
      <SearchFilter />
      <Grid container spacing={2} sx={{ width: { xs: "100%", md: "60%" } }}>
        <SearchCard />
        <SearchCard />
        <SearchCard />
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
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </Grid>
    </Stack>
  );
};

export default SearchFlight;
