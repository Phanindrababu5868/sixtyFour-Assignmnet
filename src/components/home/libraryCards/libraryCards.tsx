import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { LibraryCardProps } from "@/util/types";

const data: LibraryCardProps[] = [
  {
    title: "My saved Library 1",
    date: "dd-mm-yyyy",
    imgColor: "skyblue",
  },
  {
    title: "My saved Library 2",
    date: "dd-mm-yyyy",
    imgColor: "blue",
  },
  {
    title: "My saved Library 3",
    date: "dd-mm-yyyy",
    imgColor: "red",
  },
  {
    title: "My saved Library 4",
    date: "dd-mm-yyyy",
    imgColor: "orange",
  },
  {
    title: "My saved Library 5",
    date: "dd-mm-yyyy",
    imgColor: "green",
  },
];

const LibraryCards = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      maxWidth={"max-content"}
      marginTop={"-20px"}
      padding={4}
      pt={0}
    >
      {data.map((each, index) => (
        <SingleCard
          key={index}
          title={each.title}
          date={each.date}
          imgColor={each.imgColor}
        />
      ))}
    </Stack>
  );
};

const SingleCard = (props: LibraryCardProps) => {
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
        <FeaturedPlayListIcon sx={{ color: props.imgColor }} />
        <Typography variant="body1">{props.title}</Typography>
        <Typography variant="body2">{props.date}</Typography>
      </CardContent>
    </Card>
  );
};

export default LibraryCards;
