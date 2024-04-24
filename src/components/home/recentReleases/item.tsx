import { RecentReleaseDataProps } from "@/util/types";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Item: React.FC<RecentReleaseDataProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <Stack gap={2} direction={"row"}>
      <Stack gap={2} alignItems={"center"}>
        <div
          style={{
            height: "12px",
            width: "12px",
            borderRadius: "6px",
            backgroundColor: "#b6b6b6",
          }}
        ></div>
        <div
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: "#b6b6b6",
          }}
        ></div>
      </Stack>
      <Stack p={1} gap={2}>
        <Typography sx={{ fontSize: "16px", color: "#00E5E5" }}>
          {date}
        </Typography>
        <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
        <Typography sx={{ fontSize: "14px", color: "gray" }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Item;
