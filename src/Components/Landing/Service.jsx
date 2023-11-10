import { ImageListItem, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import service from "../../Images/service (1).jpg";
import service1 from "../../Images/service (1).png";
import service2 from "../../Images/service (2).png";
import service3 from "../../Images/service (3).png";
import service4 from "../../Images/service (4).png";
const Service = () => {
  return (
    <Stack sx={{ px: { xs: "5%", md: "3%" }, p: 2 }} gap={3}>
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Let's Go Services
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#112D4E"}>
          Services
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        sx={{ justifyContent: { xs: "center", md: "none" } }}
      >
        <Paper
          sx={{
            width: 270,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
          elevation={0}
        >
          <ImageListItem
            sx={{
              maxWidth: "80px",
              minWidth: "80px",
              maxHeight: "80px",
              minHeight: "80px",
              borderRadius: "50%",
            }}
          >
            <img
              src={service4}
              alt="service"
              style={{
                maxWidth: "75px",
                minWidth: "75px",
                maxHeight: "75px",
                minHeight: "75px",
                borderRadius: "50%",
              }}
            />
          </ImageListItem>
          <Stack gap={1}>
            <Typography fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis,
            </Typography>
            <Typography fontSize={"11px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              repudiandae vero minus repellat fugit. Sunt labore debitis vel
              consequuntur? Reiciendis
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: 270,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
          elevation={0}
        >
          <ImageListItem
            sx={{
              maxWidth: "80px",
              minWidth: "80px",
              maxHeight: "80px",
              minHeight: "80px",
              borderRadius: "50%",
            }}
          >
            <img
              src={service3}
              alt="service"
              style={{
                maxWidth: "75px",
                minWidth: "75px",
                maxHeight: "75px",
                minHeight: "75px",
                borderRadius: "50%",
              }}
            />
          </ImageListItem>
          <Stack gap={1}>
            <Typography fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis,
            </Typography>
            <Typography fontSize={"11px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              repudiandae vero minus repellat fugit. Sunt labore debitis vel
              consequuntur? Reiciendis
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: 270,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
          elevation={0}
        >
          <ImageListItem
            sx={{
              maxWidth: "80px",
              minWidth: "80px",
              maxHeight: "80px",
              minHeight: "80px",
              borderRadius: "50%",
            }}
          >
            <img
              src={service1}
              alt="service"
              style={{
                maxWidth: "75px",
                minWidth: "75px",
                maxHeight: "75px",
                minHeight: "75px",
                borderRadius: "50%",
              }}
            />
          </ImageListItem>
          <Stack gap={1}>
            <Typography fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis,
            </Typography>
            <Typography fontSize={"11px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              repudiandae vero minus repellat fugit. Sunt labore debitis vel
              consequuntur? Reiciendis
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: 270,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
          elevation={0}
        >
          <ImageListItem
            sx={{
              maxWidth: "80px",
              minWidth: "80px",
              maxHeight: "80px",
              minHeight: "80px",
              borderRadius: "50%",
            }}
          >
            <img
              src={service2}
              alt="service"
              style={{
                maxWidth: "75px",
                minWidth: "75px",
                maxHeight: "75px",
                minHeight: "75px",
                borderRadius: "50%",
              }}
            />
          </ImageListItem>
          <Stack gap={1}>
            <Typography fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis,
            </Typography>
            <Typography fontSize={"11px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              repudiandae vero minus repellat fugit. Sunt labore debitis vel
              consequuntur? Reiciendis
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: 270,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
          elevation={0}
        >
          <ImageListItem
            sx={{
              maxWidth: "80px",
              minWidth: "80px",
              maxHeight: "80px",
              minHeight: "80px",
              borderRadius: "50%",
            }}
          >
            <img
              src={service}
              alt="service"
              style={{
                maxWidth: "75px",
                minWidth: "75px",
                maxHeight: "75px",
                minHeight: "75px",
                borderRadius: "50%",
              }}
            />
          </ImageListItem>
          <Stack gap={1}>
            <Typography fontSize={"14px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis,
            </Typography>
            <Typography fontSize={"11px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              repudiandae vero minus repellat fugit. Sunt labore debitis vel
              consequuntur? Reiciendis
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Service;
