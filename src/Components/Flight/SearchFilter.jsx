import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const SearchFilter = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "20%" } }}>
      <Stack sx={{ display: { xs: "none", md: "flex" } }} gap={2}>
        <Typography fontWeight={500} fontSize={"22px"}>
          Filter by
        </Typography>
        <Stack gap={0.5}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={600}>Stops</Typography>
            <Typography fontWeight={600}>From</Typography>
          </Stack>
          <Stack sx={{ px: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="nonstop (1)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="1 stop (14)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={600}>Airline</Typography>
            <Typography fontWeight={600}>From</Typography>
          </Stack>
          <Stack sx={{ px: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="london (2)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Addis Ababa (14)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="london (2)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Addis Ababa (14)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={600}>Travel and baggage</Typography>
            <Typography fontWeight={600}>From</Typography>
          </Stack>
          <Stack sx={{ px: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="london (2)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Addis Ababa (14)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="london (2)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Addis Ababa (14)"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                  "& .MuiTypography-root": {
                    fontSize: 14,
                  },
                }}
              />
              <Typography>$800</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <Typography fontWeight={600}>
            Departure time in Addis Ababa
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Early Morning</Typography>
                  <Typography fontSize={"11px"}>(12:00am - 4:59am)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Morning</Typography>
                  <Typography fontSize={"11px"}>(5:00am - 11:59am)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Afternoon</Typography>
                  <Typography fontSize={"11px"}>(12:00pm - 5:59pm)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Evening</Typography>
                  <Typography fontSize={"11px"}>(6:00pm - 11:59pm)</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
        <Stack gap={0.5}>
          <Typography fontWeight={600}>Arrival time in London</Typography>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Early Morning</Typography>
                  <Typography fontSize={"11px"}>(12:00am - 4:59am)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Morning</Typography>
                  <Typography fontSize={"11px"}>(5:00am - 11:59am)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Afternoon</Typography>
                  <Typography fontSize={"11px"}>(12:00pm - 5:59pm)</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"13px"}>Evening</Typography>
                  <Typography fontSize={"11px"}>(6:00pm - 11:59pm)</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          backgroundColor: "transparent",
          border: "1px solid #DB3939",
          color: "#DB3939",
          "&:hover": {
            backgroundColor: "#DB393933",
            color: "#DB3939",
          },
        }}
      >
        Sort And Filter
      </Button>
    </Box>
  );
};

export default SearchFilter;
