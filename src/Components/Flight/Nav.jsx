import {
  Add,
  ArrowDropDown,
  FlightLand,
  FlightTakeoff,
  LocationOn,
  Remove,
  SyncAlt,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [selectedOption, setSelectedOption] = useState("roundtrip");
  const [showTravelerInfo, setShowTravelerInfo] = useState(false);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [classAnchorEl, setClassAnchorEl] = useState(null);
  const [selectedClass, setSelectedClass] = useState("First Class");

  const handleClassClick = (event) => {
    setClassAnchorEl(event.currentTarget);
  };

  const handleClassClose = () => {
    setClassAnchorEl(null);
  };

  const handleClassSelect = (travelClass) => {
    setSelectedClass(travelClass);
    handleClassClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  const handleTravelerClick = (event) => {
    setAnchorEl1(event.currentTarget);
    setShowTravelerInfo(true);
  };

  const handleNumAdultsChange = (increment) => {
    setNumAdults((prevNum) => Math.max(1, prevNum + increment));
  };

  const handleNumChildrenChange = (event) => {
    const newNumChildren = event.target.value;
    setNumChildren(newNumChildren);
    setChildAges(Array.from({ length: newNumChildren }, () => ""));
  };

  const handleChildAgeChange = (index, value) => {
    const updatedChildAges = [...childAges];
    updatedChildAges[index] = value;
    setChildAges(updatedChildAges);
  };

  const getLinkText = () => {
    switch (selectedClass) {
      case "economy":
        return "Economy";
      case "business":
        return "Business";
      case "firstClass":
        return "First Class";
      default:
        return "First Class";
    }
  };

  const totalTravelers = numAdults + numChildren;
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
            <div>
              <Button
                aria-controls="flight-options-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {selectedOption === "roundtrip" ? "Round Trip" : "One Way"}{" "}
                <ArrowDropDown />
              </Button>
              <Menu
                id="flight-options-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleOptionSelect("roundtrip")}>
                  Round Trip
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect("oneway")}>
                  One Way
                </MenuItem>
              </Menu>
            </div>
            <Box>
              <Button onClick={handleTravelerClick}>
                {totalTravelers}{" "}
                {totalTravelers === 1 ? "Traveler" : "Travelers"}{" "}
                <ArrowDropDown />
              </Button>
              {showTravelerInfo && (
                <Menu
                  id="traveler-menu"
                  anchorEl={anchorEl1}
                  open={showTravelerInfo}
                  onClose={() => {
                    handleClose();
                    setShowTravelerInfo(false);
                  }}
                >
                  <MenuItem
                    sx={{
                      width: 250,
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "default",
                      "&:hover": { background: "none" },
                      gap: 2,
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel>Adults</InputLabel>
                      <Select
                        value={numAdults}
                        label={"Adults"}
                        onChange={() => {}}
                        displayEmpty
                        size="small"
                      >
                        {[...Array(10).keys()].map((num) => (
                          <MenuItem key={num} value={num + 1}>
                            {num + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box>
                      <IconButton onClick={() => handleNumAdultsChange(1)}>
                        <Add />
                      </IconButton>
                      <IconButton
                        onClick={() => handleNumAdultsChange(-1)}
                        disabled={numAdults === 1}
                      >
                        <Remove />
                      </IconButton>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <FormControl fullWidth>
                      <InputLabel>Children</InputLabel>
                      <Select
                        value={numChildren}
                        label={"Children"}
                        onChange={handleNumChildrenChange}
                        displayEmpty
                        size="small"
                      >
                        {[...Array(8).keys()].map((num) => (
                          <MenuItem key={num} value={num}>
                            {num}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </MenuItem>
                  {Array.from({ length: numChildren }).map((_, index) => (
                    <MenuItem key={index}>
                      <FormControl fullWidth>
                        <InputLabel>{`Child ${index + 1} Age`}</InputLabel>
                        <Select
                          value={childAges[index]}
                          label={`Child ${index + 1} Age`}
                          onChange={(event) =>
                            handleChildAgeChange(index, event.target.value)
                          }
                          displayEmpty
                          size="small"
                        >
                          {[...Array(17).keys()].map((age) => (
                            <MenuItem key={age} value={age + 1}>
                              {age + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
            <Box>
              <Button
                aria-controls="class-options-menu"
                aria-haspopup="true"
                onClick={handleClassClick}
              >
                {getLinkText()} <ArrowDropDown />
              </Button>
              <Menu
                id="class-options-menu"
                anchorEl={classAnchorEl}
                open={Boolean(classAnchorEl)}
                onClose={handleClassClose}
              >
                <MenuItem onClick={() => handleClassSelect("firstClass")}>
                  First Class
                </MenuItem>
                <MenuItem onClick={() => handleClassSelect("business")}>
                  Business
                </MenuItem>
                <MenuItem onClick={() => handleClassSelect("economy")}>
                  Economy
                </MenuItem>
              </Menu>
            </Box>
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
