import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LibraryCardProps } from "@/util/types";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { Stack } from "@mui/material";

const BaseCard: React.FC<LibraryCardProps> = ({ title, date, imgColor }) => {
  return (
    <Card
      sx={{
        padding: 2,
        py: 4,
        pr: 6,
        borderRadius: "10px",
        zIndex: 10,
        height: 140,

        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <FeaturedPlayListIcon sx={{ color: `${imgColor}` }} />
          <Typography sx={{ fontSize: 16 }}>{title}</Typography>
          <Typography sx={{ fontSize: 12 }}>{date}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BaseCard;
