import {
  FlightLand,
  FlightTakeoff,
  LocationOn,
  SyncAlt,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Nav = () => {
  return (
    <AppBar
      elevation={0}
      sx={{ background: "#F9F7F7", p: 0.5, position: "sticky" }}
    >
      <Divider sx={{ m: 1 }} />
      <Toolbar>
        <Paper
          component={"form"}
          sx={{ width: { xs: "100%", md: "70%" }, backgroundColor: "#F9F7F7" }}
          elevation={0}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={2}
          >
            <Typography>roundtrip</Typography>
            <Typography>1 traveler</Typography>
            <Typography>Economy</Typography>
            <Typography>Any Airline</Typography>
          </Stack>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ p: 2 }}
          >
            <Grid item xs={6} md={2.7}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="From">From</InputLabel>
                <Input
                  id="From"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOn sx={{ color: "#32667C" }} />
                    </InputAdornment>
                  }
                  type="text"
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </FormControl>
            </Grid>
            <SyncAlt
              sx={{
                display: { xs: "none", md: "block" },
                mt: 4,
                color: "#32667C",
              }}
            />
            <Grid item xs={6} md={2.7}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="To">To</InputLabel>
                <Input
                  id="To"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOn sx={{ color: "#32667C" }} />
                    </InputAdornment>
                  }
                  type="text"
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="departing">Departing</InputLabel>
                <Input
                  id="departing"
                  startAdornment={
                    <InputAdornment position="start">
                      <FlightTakeoff sx={{ color: "#32667C" }} />
                    </InputAdornment>
                  }
                  type="date"
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="returning">Returning</InputLabel>
                <Input
                  id="returning"
                  startAdornment={
                    <InputAdornment position="start">
                      <FlightLand sx={{ color: "#32667C" }} />
                    </InputAdornment>
                  }
                  type="date"
                  sx={{
                    backgroundColor: "white",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#E9B824",
                  "&:hover": {
                    backgroundColor: "#E9B82499",
                    color: "#FFFFFF",
                  },
                }}
                type="submit"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
