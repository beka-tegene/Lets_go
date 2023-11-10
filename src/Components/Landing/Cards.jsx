import {
  Box,
  Button,
  Grid,
  ImageListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import card from "../../Images/card.png";

const Cards = () => {
  return (
    <Box sx={{ px: { xs: "5%", md: "3%" }, p:2 }}>
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              background: "linear-gradient(200deg, #142261 0%, #142261bf 100%)",
              height: "30dvh",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: 3, md: 5 },
              }}
            >
              <Stack gap={1}>
                <Typography
                  fontSize={"26px"}
                  fontWeight={600}
                  color={"#F9F7F7"}
                >
                  Become a Milespacer
                </Typography>
                <Typography fontSize={"13px"} color={"#F9F7F7"}>
                  Our loyalty program is free to join and rewards you with mile
                  when you fly
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  background: "#E9B824",
                  color: "#FFFFFF",
                  "&:hover": { background: "#E9B82490", color: "#112D4E" },
                }}
              >
                Register
              </Button>
            </Box>
            <ImageListItem
              sx={{
                maxWidth: "40%",
                minWidth: "40%",
                height: "30dvh",
              }}
            >
              <img
                src={card}
                alt="let's go logo"
                style={{
                  height: "30dvh",
                }}
              />
            </ImageListItem>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              background: "linear-gradient(200deg, #2727 0%, #2727bf 100%)",
              height: "30dvh",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: 3, md: 5 },
              }}
            >
              <Stack gap={1}>
                <Typography
                  fontSize={"26px"}
                  fontWeight={600}
                  color={"#F9F7F7"}
                >
                  Become a Milespacer
                </Typography>
                <Typography fontSize={"13px"} color={"#F9F7F7"}>
                  Our loyalty program is free to join and rewards you with mile
                  when you fly
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  background: "#E9B824",
                  color: "#FFFFFF",
                  "&:hover": { background: "#E9B82490", color: "#112D4E" },
                }}
              >
                Register
              </Button>
            </Box>
            <ImageListItem
              sx={{
                maxWidth: "40%",
                minWidth: "40%",
                height: "30dvh",
              }}
            >
              <img
                src={card}
                alt="let's go logo"
                style={{
                  height: "30dvh",
                }}
              />
            </ImageListItem>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
