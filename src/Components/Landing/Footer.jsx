import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Images/logo.png";

const StyledTypo = styled(Typography)({
  fontSize: "13px",
  color: "#000",
  textAlign: "center",
});

const Footer = () => {
  return (
    <Stack alignItems={"center"} gap={1}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{xs:0, sm: 2}}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={2}>
          <StyledTypo
            sx={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            About
          </StyledTypo>
          <StyledTypo
            sx={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Privacy
          </StyledTypo>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <StyledTypo
            sx={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Feedback
          </StyledTypo>
          <StyledTypo
            sx={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Terms and Conditions
          </StyledTypo>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <StyledTypo
            sx={{
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Join user studies
          </StyledTypo>
          <StyledTypo
            sx={{
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Help Center
          </StyledTypo>
        </Stack>
      </Stack>

      <StyledTypo>
        Payments accepted include Paypal, Telle Birr, American Express, Diner's
        Club International, MasterCard, Visa, Visa Electron, CartaSi and Carte
        Bleue.
      </StyledTypo>

      <StyledTypo>
        Let's Go, Inc. is not responsible for content on external Web sites.
      </StyledTypo>

      <StyledTypo>
        &copy;2023 Let's Go, Inc, an Lets Go Group Company. All rights reserved.
      </StyledTypo>

      <Stack>
        <img src={Logo} alt="logo" />
      </Stack>
    </Stack>
  );
};

export default Footer;
