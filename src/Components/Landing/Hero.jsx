import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  ImageListItem,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import image from "../../Images/Variant15.png";
import {
  FlightLand,
  FlightTakeoff,
  GroupAdd,
  LocationOn,
  SyncAlt,
} from "@mui/icons-material";
import Destination from "../../Images/destination.png";
import Country from "../../Images/country.png";
import { useNavigate } from "react-router-dom";
import airports from "../active_airports.json";
import Autosuggest from "react-autosuggest";

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : airports.filter(
        (airport) =>
          (airport.iata && airport.iata.toLowerCase().includes(inputValue)) ||
          (airport.name && airport.name.toLowerCase().includes(inputValue))
      );
};

const getSuggestionValue = (suggestion) =>
  `${suggestion.name} (${suggestion.iata})`;

const renderSuggestion = (suggestion) => (
  <div>{`${suggestion.name} (${suggestion.iata})`}</div>
);

const Hero = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (inputType, _, { suggestion }) => {
    const suggestionText = `${suggestion.name} (${suggestion.iata})`;
    if (inputType === "from") {
      setFromValue(suggestionText);
    } else if (inputType === "to") {
      setToValue(suggestionText);
    }
  };

  const inputToProps = {
    placeholder: "To",
    value: toValue,
    onChange: (_, { newValue }) => {
      setToValue(newValue);
    },
    type: "text",
    style: {
      backgroundColor: "transparent",
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: "16px",
    },
  };
  const inputFromProps = {
    placeholder: "From",
    value: fromValue,
    onChange: (_, { newValue }) => {
      setFromValue(newValue);
    },
    type: "text",
    style: {
      backgroundColor: "transparent",
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: "16px",
    },
    autoFocus: true,
  };
  const theme = {
    container: {
      position: "relative",
      width: "100%",
    },
    suggestionsContainerOpen: {
      position: "absolute",
      top: "25px",
      zIndex: 1,
      left: 0,
      right: 0,
      maxHeight: "200px",
      overflowY: "auto",
    },
    suggestion: {
      display: "block",
      padding: "10px",
      borderBottom: "1px solid #e0e0e0",
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#000",
    },
    suggestionHighlighted: {
      backgroundColor: "#f0f0f0",
      color: "#0f0f0f",
    },
  };
  const swapFromToValues = () => {
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };
  const [tripForm, setTripForm] = useState(true);
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        backgroundColor: "#FFFFFF",
        position: "relative",
        height: { xs: "84dvh", md: "67dvh" },
        width: "100%",
      }}
    >
      <ImageListItem
        sx={{
          transition: "opacity 0.5s ease-in-out",
          position: "absolute",
          width: "100%",
          top: 0,
        }}
      >
        <img
          src={image}
          alt="hero"
          style={{ maxHeight: "45dvh", minHeight: "45dvh", width: "100%" }}
        />
      </ImageListItem>
      <Box
        sx={{
          position: "sticky",
          left: { xs: "0", md: "10%" },
          top: { xs: "20dvh", md: "45dvh" },
          p: { xs: "0 6%", md: "0 3%" },
        }}
      >
        <Paper
          component={"form"}
          sx={{
            background: "#FFFFFF90",
            backdropFilter: "blur(20px)",
            minWidth: { xs: 350, md: 850, lg: 800 },
            maxWidth: { xs: 350, md: 850, lg: 800 },
          }}
        >
          <Stack direction={"row"} sx={{ width: "100%" }}>
            <Button
              sx={{
                flex: 1,
                background: "#112D4E",
                color: "#FFFFFF",
                borderRadius: 0,
              }}
            >
              Flight
            </Button>
            <Button
              sx={{
                flex: 1,
                color: "#FFFFFF",
                background: "#112D4E",
                borderRadius: 0,
              }}
            >
              Cars
            </Button>
            <Button
              sx={{
                flex: 1,
                color: "#FFFFFF",
                background: "#112D4E",
                borderRadius: 0,
              }}
            >
              Hotel
            </Button>
            <Button
              sx={{
                flex: 1,
                color: "#FFFFFF",
                background: "#112D4E",
                borderRadius: 0,
              }}
            >
              Tours
            </Button>
            <Button
              sx={{
                flex: 1,
                color: "#FFFFFF",
                background: "#112D4E",
                borderRadius: 0,
              }}
            >
              Package
            </Button>
          </Stack>
          <Stack>
            <RadioGroup
              name="controlled-radio-buttons-group"
              row
              value={tripForm}
              sx={{ pt: 2, pl: 4 }}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="Round Trip"
                onClick={() => setTripForm(true)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="One Way"
                onClick={() => setTripForm(false)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              {/* <FormControlLabel
                control={<Radio />}
                label="Multi City"
                value={"1"}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              /> */}
            </RadioGroup>
          </Stack>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ p: 2 }}
          >
            <Grid item xs={12} md={5.5}>
              <FormControl variant="standard" fullWidth>
                <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  From
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  sx={{ backgroundColor: "white", padding: ".5rem 0" }}
                >
                  <InputAdornment position="start">
                    <LocationOn sx={{ color: "#32667C" }} />
                  </InputAdornment>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    onSuggestionSelected={(_, data) =>
                      onSuggestionSelected("from", _, data)
                    }
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputFromProps}
                    theme={theme}
                  />
                </Stack>
              </FormControl>
            </Grid>
            <IconButton
              onClick={swapFromToValues}
              sx={{
                display: { xs: "none", md: "block" },
                mt: 4,
                color: "#32667C",
              }}
            >
              <SyncAlt />
            </IconButton>
            <Grid item xs={12} md={5.5}>
              <FormControl variant="standard" fullWidth>
                <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  To
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  sx={{ backgroundColor: "white", padding: ".5rem 0" }}
                >
                  <InputAdornment position="start">
                    <LocationOn sx={{ color: "#32667C" }} />
                  </InputAdornment>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    onSuggestionSelected={(_, data) =>
                      onSuggestionSelected("to", _, data)
                    }
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputToProps}
                    theme={theme}
                  />
                </Stack>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={tripForm ? 3 : 4}>
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
            {tripForm && (
              <Grid item xs={12} md={3}>
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
            )}
            <Grid item xs={12} md={tripForm ? 3 : 4}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="passengers">Passengers</InputLabel>
                <Input
                  id="passengers"
                  aria-label="pp"
                  startAdornment={
                    <InputAdornment position="end">
                      <GroupAdd sx={{ color: "#32667C" }} />
                    </InputAdornment>
                  }
                  type="text"
                  sx={{
                    backgroundColor: "white",
                    padding: "0 .5rem",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={tripForm ? 3 : 4}>
              <InputLabel htmlFor="demo-simple-select">Travel Class</InputLabel>
              <FormControl fullWidth size="small">
                <Select
                  id="demo-simple-select"
                  sx={{
                    backgroundColor: "white",
                    padding: "0 .5rem",
                    borderRadius: 0,
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            sx={{ p: 2 }}
          >
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E9B824",
                  "&:hover": {
                    backgroundColor: "#E9B82499",
                    color: "#FFFFFF",
                  },
                }}
                type="submit"
                onClick={() => navigate("/departing")}
              >
                Find Flight
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          right: { md: 0 },
          top: { md: "2dvh" },
          p: { xs: "0 6%", md: "0 3%" },
        }}
      >
        <Box
          sx={{
            minWidth: 350,
            maxWidth: 350,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Typography fontSize={"26px"} fontWeight={600} color={"#F9F7F7"}>
            Exploring Africa, One Adventure at a Time with Let's Go{" "}
          </Typography>
          <Typography fontSize={"14px"} fontWeight={600} color={"#F9F7F7"}>
            Our Friendly and knowledgeable staff is here to help you every step
            of the way
          </Typography>
        </Box>
        <Box
          sx={{
            minWidth: 350,
            maxWidth: 350,
            p: 2,
            display: "flex",
            gap: 2,
          }}
        >
          <Paper
            sx={{
              flex: "0.5",
              background: "#FFFFFFbb",
              color: "#112D4E",
              p: 1,
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <ImageListItem
              sx={{
                background: "#112D4E80",
                maxWidth: "50px",
                maxHeight: "50px",
                minWidth: "50px",
                minHeight: "50px",
                borderRadius: "50%",
              }}
            >
              <img
                src={Destination}
                alt="let's go logo"
                style={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderRadius: "50%",
                }}
              />
            </ImageListItem>
            <Stack>
              <Typography fontSize={"24px"} fontWeight={600}>
                469+
              </Typography>
              <Typography fontSize={"13px"}>Destination</Typography>
            </Stack>
          </Paper>
          <Paper
            sx={{
              flex: "0.5",
              background: "#FFFFFFbb",
              color: "#112D4E",
              p: 1,
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <ImageListItem
              sx={{
                background: "#112D4E80",
                maxWidth: "50px",
                maxHeight: "50px",
                minWidth: "50px",
                minHeight: "50px",
                borderRadius: "50%",
              }}
            >
              <img
                src={Country}
                alt="let's go logo"
                style={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderRadius: "50%",
                }}
              />
            </ImageListItem>
            <Stack>
              <Typography fontSize={"24px"} fontWeight={600}>
                295
              </Typography>
              <Typography fontSize={"13px"}>Country</Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Stack>
  );
};

export default Hero;
