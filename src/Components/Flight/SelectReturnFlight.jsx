import {
  ArrowDropDown,
  Check,
  Close,
  MonetizationOn,
  OpenInNew,
  Power,
  Tv,
  Wifi,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logos from "../../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SelectReturnFlight = (props) => {
  const navigate = useNavigate();
  return (
    <Drawer
      anchor={"left"}
      open={props.state}
      onClose={() => props.toggleDrawer(false)}
      elevation={0}
    >
      <Box sx={{ width: 450 }} role="presentation">
        <Stack direction={"row"} alignItems={"center"} gap={2} sx={{ p: 1 }}>
          <IconButton onClick={() => props.toggleDrawer(false)}>
            <Close />
          </IconButton>
          <Typography>Review fare to Addis Ababa</Typography>
        </Stack>
        <Divider sx={{ mx: 1 }} />
        <Stack sx={{ px: 4, py: 1 }} gap={1}>
          <Typography fontSize={"20px"} fontWeight={500}>
            8:00 - 4:00 (7h 45m nonStop)
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <img src={logos} alt="logos" style={{ width: "25px" }} />
            <Typography fontSize={"14px"} color={"#777777"}>
              Ethiopia Airline
            </Typography>
            <Wifi sx={{ fontSize: "15px" }} />
            <Power sx={{ fontSize: "15px" }} />
            <Tv sx={{ fontSize: "15px" }} />
          </Stack>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "fit-content",
            }}
          >
            Show Detail <ArrowDropDown />
          </Link>
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #777777",
              px: 2,
              py: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Stack>
              <Typography fontSize={"20px"} fontWeight={500}>
                $950
              </Typography>
              <Typography fontSize={"13px"} color={"#777777"}>
                $949.99 roundtrip for 1 traveler
              </Typography>
              <Typography fontSize={"14px"} color={"#777777"}>
                Cabin : Economy
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize={"16px"} fontWeight={500}>
                Bags
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Check sx={{ fontSize: "15px" }} />
                <Typography fontSize={"14px"} color={"#777777"}>
                  Carry-on bags include
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Check sx={{ fontSize: "15px" }} />
                <Typography fontSize={"14px"} color={"#777777"}>
                  2 checked bags include
                </Typography>
              </Stack>
              <Typography fontSize={"12px"} color={"#777777"}>
                * Carry-on bag include for up to 7kg
              </Typography>
              <Typography fontSize={"12px"} color={"#777777"}>
                * Checked bags can weight up to 7kg each
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize={"20px"} fontWeight={500}>
                Flexibility
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Close sx={{ fontSize: "15px" }} />
                <Typography fontSize={"14px"} color={"#777777"}>
                  Cancellation not allowed
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <MonetizationOn sx={{ fontSize: "15px" }} />
                <Typography fontSize={"14px"} color={"#777777"}>
                  Change fee applies
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#142261",
                "&:hover": {
                  backgroundColor: "#14226199",
                  color: "#FFFFFF",
                },
              }}
              onClick={() => navigate("/display-select")}
              type="submit"
            >
              Select
            </Button>
          </Paper>
          <Typography
            fontSize={"14px"}
            color={"#777777"}
            sx={{ display: "inline" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            eos consectetur corrupti reiciendis provident quas quisquam
            dignissimos, ad reprehenderit dolorem impedit vero necessitatibus,
            tempora.
            <Link
              style={{
                display: "inline",
                alignItems: "center",
                gap: 2,
                width: "fit-content",
              }}
            >
              ETHIOPIA AIRLINE <OpenInNew sx={{ fontSize: "15px" }} />
            </Link>
          </Typography>
          <Typography
            fontSize={"14px"}
            color={"#777777"}
            sx={{ display: "inline" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            eos consectetur corrupti reiciendis provident quas quisquam
            dignissimos,
            <Link
              style={{
                display: "inline",
                alignItems: "center",
                gap: 2,
                width: "fit-content",
              }}
            >
              ETHIOPIA AIRLINE <OpenInNew sx={{ fontSize: "15px" }} />
            </Link>
            ad reprehenderit dolorem impedit vero necessitatibus, tempora.
          </Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SelectReturnFlight;
