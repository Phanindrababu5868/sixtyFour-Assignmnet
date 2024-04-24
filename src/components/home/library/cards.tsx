import { Stack } from "@mui/material";
import React from "react";

import { LibraryCardProps } from "@/util/types";
import BaseCard from "./card";

const Data: LibraryCardProps[] = [
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

const LibratyCards = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ maxWidth: "max-content", marginTop: "-20px" }}
      padding={4}
      pt={0}
    >
      {Data.map((each, index) => (
        <BaseCard
          title={each.title}
          date={each.date}
          imgColor={each.imgColor}
          key={index}
        />
      ))}
    </Stack>
  );
};

export default LibratyCards;
