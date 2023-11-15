import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import logos from "../../Images/logo.png";
const SearchReturnCard = (props) => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          cursor: "pointer",
          "&:active": {
            transform: "scale(.998)",
          },
        }}
        onClick={() => props.setSelectFlightHandler()}
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
          <Typography fontSize={"11px"}>London (LHR)- Addis(ADD)</Typography>
          <Typography fontSize={"12px"}>2h 33m in cairo (CAI)</Typography>
          <Typography fontSize={"11px"}>Roundtrip per traveler</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={1}
        >
          <img src={logos} alt="logos" style={{ width: "30px" }} />
          <Typography fontSize={"12px"}>Egyptair</Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export default SearchReturnCard;
