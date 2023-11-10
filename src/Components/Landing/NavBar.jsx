import React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import logo from "../../Images/logo.png";
import { Close, Menu } from "@mui/icons-material";
const NavBar = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <AppBar
      elevation={0}
      sx={{ background: "#F9F7F7", p: 0.5, position: "sticky" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ImageListItem sx={{ maxWidth: { xs: "70px", md: "90px" } }}>
          <img src={logo} alt="let's go logo" />
        </ImageListItem>
        <Box sx={{ flex: "auto" }} />
        <IconButton
          sx={{
            display: { md: "none" },
            background: "#112D4E",
            color: "#DBE2EF",
            "&:hover": { background: "#DBE2EF", color: "#112D4E" },
          }}
          onClick={toggleDrawer(true)}
        >
          <Menu sx={{ fontSize: "28px" }} />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer(false)}
          elevation={0}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <Stack
              sx={{
                height: "9dvh",
                width: "100%",
                pr: 2.5,
                background: "#F9F7F7",
              }}
              alignItems={"flex-end"}
              justifyContent={"center"}
            >
              <IconButton
                sx={{
                  background: "#112D4E",
                  color: "#DBE2EF",
                  "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <Close />
              </IconButton>
            </Stack>
            <List sx={{ color: "#112D4E" }}>
              <ListItem
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                }}
              >
                <ListItemText primary="Flight" />
              </ListItem>
              <ListItem
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                }}
              >
                <ListItemText primary="Hotel" />
              </ListItem>
              <ListItem
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                }}
              >
                <ListItemText primary="Car" />
              </ListItem>
              <ListItem
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                }}
              >
                <ListItemText primary="Package" />
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{
                    background: "#142261",
                    borderRadius: 2,
                    color: "#FFFFFF",
                    "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                  }}
                >
                  <ListItemText primary="Sign in" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{
                    background: "#142261",
                    borderRadius: 2,
                    color: "#FFFFFF",
                    "&:hover": { background: "#DBE2EF", color: "#112D4E" },
                  }}
                >
                  <ListItemText primary="Sign up" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <List
          sx={{
            display: { xs: "none", md: "flex", p: 0 },
            color: "#112D4E",
            alignItems: "center",
            height: "8dvh",
          }}
        >
          {/* xs, sm, md, lg, xl */}
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#3F72AF" },
            }}
          >
            <ListItemText primary="Flight" />
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#3F72AF" },
            }}
          >
            <ListItemText primary="Hotel" />
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#3F72AF" },
            }}
          >
            <ListItemText primary="Car" />
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#3F72AF" },
            }}
          >
            <ListItemText primary="Package" />
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{
                background: "#142261",
                borderRadius: 1,
                width:90,
                color: "#FFFFFF",
                "&:hover": { background: "#DBE2EF", color: "#112D4E" },
              }}
            >
              <ListItemText primary="Sign in" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{
                background: "#142261",
                borderRadius: 1,
                width:90,
                color: "#FFFFFF",
                "&:hover": { background: "#DBE2EF", color: "#112D4E" },
              }}
            >
              <ListItemText primary="Sign up" />
            </ListItemButton>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
    // 112D4E
    // 3F72AF
    // DBE2EF
  );
};

export default NavBar;
