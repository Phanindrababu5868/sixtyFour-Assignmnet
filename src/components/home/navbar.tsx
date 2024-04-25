"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute (60 seconds * 1000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);

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

  const formattedDate = `${currentTime.getDate()} ${
    months[currentTime.getMonth()]
  }`;

  const formattedTime = `${currentTime.getHours()}:${currentTime
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
            Youre subscribed to Retail plan
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
                {formattedTime}
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
