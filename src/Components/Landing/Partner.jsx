import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../Images/partners (1).gif";
import image1 from "../../Images/partners (1).jpg";
import image2 from "../../Images/partners (1).png";
import image3 from "../../Images/partners (1).svg";
import image4 from "../../Images/partners (2).png";
import image5 from "../../Images/partner.png";
import { useRef } from "react";
import { useEffect } from "react";

const Partner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const scrollRight = () => {
      const scrollAmount = 1;
      container.scrollLeft += scrollAmount;
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    };

    scrollInterval = setInterval(scrollRight, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Box
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Companies Working With Us
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
          Partner's
        </Typography>
      </Stack>
      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        <style>
          {`
            ::-webkit-scrollbar {
                display: none;
            }
          `}
        </style>
        <Stack
          direction={"row"}
          gap={6}
          sx={{
            width: "100%",
            padding: "1rem",
            overflowX: "auto",
            "& > *": { flex: "0 0 225px", minWidth: 225, maxWidth: 225 },
            transform: "translateX(0)",
          }}
          ref={containerRef}
        >
          <img src={image} alt="partner" />
          <img src={image1} alt="partner" />
          <img src={image2} alt="partner" />
          <img src={image3} alt="partner" />
          <img src={image4} alt="partner" />
          <img src={image5} alt="partner" />
        </Stack>
      </div>
    </Box>
  );
};

export default Partner;
