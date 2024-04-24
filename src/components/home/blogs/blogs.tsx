"use client";

import { BlogCardProps } from "@/util/types";
import React, { useState, useRef } from "react";
import BlogCard from "./card";
import { Button, Divider, Stack, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyles.css";

import { Navigation, Pagination } from "swiper/modules";

import SwiperNavigationButtons from "./swiperBtn";

const Blogs = () => {
  const swiperInstance = useRef<any>(null);

  const [itemsToShow, setItemsToShow] = useState(4);

  const handleViewMore = () => {
    setItemsToShow(itemsToShow + 2);
  };

  return (
    <div style={{ width: "60%", padding: "24px", gap: "18px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography fontSize={"24px"}>Market News</Typography>
        <SwiperNavigationButtons swiper={swiperInstance.current} />
      </div>
      <Divider sx={{ height: "1px", backgroundColor: "#dcdcdc", mb: 4 }} />
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper swiper-pagination-black"
        style={{ height: "430px" }}
        onSwiper={(swiper) => {
          swiperInstance.current = swiper;
        }}
      >
        <div>
          {data.slice(0, itemsToShow).map(
            (
              each,
              index // Only render up to `itemsToShow`
            ) => (
              <SwiperSlide key={index}>
                <Stack direction={"row"} height={"380px"}>
                  <BlogCard
                    title={each.title}
                    image={each.image}
                    description={each.description}
                  />
                </Stack>
              </SwiperSlide>
            )
          )}
        </div>
      </Swiper>
      <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          sx={{
            maxWidth: "max-content",
            color: "white",
            fontSize: "12px",
            textTransform: "none",
            backgroundColor: "#333333",
            ":hover": {
              bgcolor: "#333333",
            },
          }}
          onClick={handleViewMore} // Call handleViewMore when the button is clicked
        >
          View More
        </Button>
      </Stack>
    </div>
  );
};

export default Blogs;

const data: BlogCardProps[] = [
  {
    title: "State of Market",
    description:
      "The market capitalisation of Indian stocks crossed US$4.5 trillion in January",
    image: "/state_of_market.jpeg",
  },
  {
    title: "The Central Capex Surge",
    description:
      "The few years have seen a very substantial step up in capital",
    image: "/capex.png",
  },
  {
    title: "Direct Taxes and Business Cycle",
    description:
      "The share of direct taxes in total tax collections of the Central government is",
    image: "/taxes.png",
  },
  {
    title: "Banking monitor",
    description:
      "Credit growth has remained broadly stable in recent weeks at just",
    image: "/banking.jpeg",
  },
  {
    title: "State of Market 2",
    description:
      "The market capitalisation of Indian stocks crossed US$4.5 trillion in January",
    image: "/state_of_market.jpeg",
  },
  {
    title: "The Central Capex Surge 2",
    description:
      "The few years have seen a very substantial step up in capital",
    image: "/capex.png",
  },
  {
    title: "Direct Taxes and Business Cycle 2",
    description:
      "The share of direct taxes in total tax collections of the Central government is",
    image: "/taxes.png",
  },
  {
    title: "Banking monitor 2",
    description:
      "Credit growth has remained broadly stable in recent weeks at just",
    image: "/banking.jpeg",
  },
  {
    title: "State of Market 3",
    description:
      "The market capitalisation of Indian stocks crossed US$4.5 trillion in January",
    image: "/state_of_market.jpeg",
  },
  {
    title: "The Central Capex Surge 3",
    description:
      "The few years have seen a very substantial step up in capital",
    image: "/capex.png",
  },
  {
    title: "Direct Taxes and Business Cycle 3",
    description:
      "The share of direct taxes in total tax collections of the Central government is",
    image: "/taxes.png",
  },
  {
    title: "Banking monitor 3",
    description:
      "Credit growth has remained broadly stable in recent weeks at just",
    image: "/banking.jpeg",
  },
];
