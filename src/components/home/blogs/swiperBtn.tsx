import { IconButton, Stack } from "@mui/material";
import React from "react";

import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

interface ButtonsProps {
  swiper: Swiper | null;
}

const SwiperNavigationButtons = (props: ButtonsProps) => {
  const { swiper } = props;

  return (
    <Stack sx={{ bgcolor: "#eeeeee", display: "flex", flexDirection: "row" }}>
      <IconButton onClick={() => swiper && swiper.slidePrev()}>
        <ArrowCircleLeftIcon />
      </IconButton>

      <IconButton onClick={() => swiper && swiper.slideNext()}>
        <ArrowCircleRightIcon />
      </IconButton>
    </Stack>
  );
};

export default SwiperNavigationButtons;
