import React from "react";
import { Stack } from "@mui/material";
import NavBar from "./NavBar";
const Layout = (props) => {
  return (
    <Stack>
      <NavBar />
      {props.children}
    </Stack>
  );
};

export default Layout;
