"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EventIcon from "@mui/icons-material/Event";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DomainIcon from "@mui/icons-material/Domain";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

interface TabsProps {
  name: string;
  icon: React.ReactNode;
}

const tabs: TabsProps[] = [
  {
    name: "Search",
    icon: <SearchIcon />,
  },
  {
    name: "Dashboard",
    icon: <PersonalVideoIcon />,
  },
  {
    name: "Help",
    icon: <HelpOutlineIcon />,
  },
  {
    name: "Events",
    icon: <EventIcon />,
  },
  {
    name: "Domains",
    icon: <DomainIcon />,
  },
  {
    name: "Subscription",
    icon: <MonetizationOnIcon />,
  },
  {
    name: "Songs",
    icon: <HeadsetIcon />,
  },
];

const Sidebar = () => {
  const [expand, setexpand] = useState(false);
  return (
    <Stack
      sx={{
        bgcolor: "white",
        p: 2,
        maxWidth: "max-content",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        boxShadow: "0 2px 1px gray",
      }}
    >
      <Stack spacing={6} alignItems="center">
        <Avatar src="/logo.png" />
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {tabs.map((tab, index) => (
            <Stack direction={"row"} key={index} alignItems={"center"} gap={1}>
              <IconButton
                sx={{ color: "gray" }}
                onClick={() => {
                  setexpand(!expand);
                }}
              >
                {tab.icon}
              </IconButton>
              <Typography display={expand ? "flex" : "none"}>
                {tab.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <IconButton
          sx={{ color: "gray" }}
          onClick={() => {
            setexpand(!expand);
          }}
        >
          <SettingsIcon />
        </IconButton>
        <Typography display={expand ? "flex" : "none"}>Settings</Typography>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
