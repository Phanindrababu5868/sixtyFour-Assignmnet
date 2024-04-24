import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Navbar = () => {
  const currentDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;

  const formattedTime = `${currentDate.getHours()}:${currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <Stack
      sx={{
        pt: 4,
        px: 8,
        pb: 10,
        background: "#160042",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Typography sx={{ fontSize: "18px", color: "white" }}>
            Good Afternoon, Akshay
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "gray" }}>
            You're subscribed to Retail plan
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          {/* date and time*/}
          <Stack direction={"row"} spacing={2}>
            <Stack direction={"row"} spacing={1}>
              <CalendarTodayIcon sx={{ color: "white" }} />
              <Typography sx={{ fontSize: "18px", color: "white" }}>
                Today, {formattedDate}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <AccessTimeIcon sx={{ color: "white" }} />
              <Typography sx={{ fontSize: "18px", color: "white" }}>
                Today, {formattedTime}
              </Typography>
            </Stack>
          </Stack>

          <IconButton>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
