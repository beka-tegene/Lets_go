import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../Images/Variant15.jpg";
const AboutUs = () => {
  return (
    <Box
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Stack
          sx={{ width: { xs: 350, md: "40%" } }}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Stack>
            <Typography fontSize={"14px"} color={"#EF9B01"}>
              welcome to Let's Go
            </Typography>
            <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
              Exploring Africa, One Adventure at a Time!
            </Typography>
          </Stack>
          <Typography>
            To meet the pressing needs of the public, and to contribute a
            milestone in the development of our country's financial sector,
            Ge'ez bank has come to existence. It has placed its groundwork
            through the unreserved commitment, hard work, due diligence, strong
            willpower of its organizers. These qualities, as its hallmark, will
            lead the way to feeding the banking sector with fund and reach out
            people with the mind of investment, innovations, and
            entrepreneurship.
          </Typography>
          <Button variant="contained">Discover more</Button>
        </Stack>
        <ImageListItem sx={{ width: 345 }}>
          <img src={heroImage} alt="heroImage" />
        </ImageListItem>
      </Stack>
    </Box>
  );
};

export default AboutUs;
