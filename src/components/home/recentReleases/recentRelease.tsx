"use client";

import { RecentReleaseDataProps } from "@/util/types";
import {
  Divider,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Item from "./item";

const countries = ["India", "USA", "Singapure"];

const RecentRelease = () => {
  const [country, setCountry] = useState(countries[0] || "");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <Stack
      sx={{
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.1)",
        bgcolor: "white",
        p: 2,
        py: 3,
        gap: 2,
        maxWidth: "340px",
        alignSelf: "flex-end",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography sx={{ color: "#00CCCC", fontSize: "18px" }}>
          Recent Release
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={country}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              height: "40px",
            }}
          >
            <MenuItem value={countries[0]}>{countries[0]}</MenuItem>
            {countries.slice(1).map((each, index) => (
              <MenuItem value={each} key={index}>
                {each}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Divider sx={{ height: "1px", background: "#b6b6b6", mb: 3, mt: 1 }} />
      <Stack gap={4}>
        {data.map((each, index) =>
          each.country === country ? (
            <Item
              title={each.title}
              date={each.date}
              description={each.description}
              country={each.country}
              key={index}
            />
          ) : null
        )}
      </Stack>
    </Stack>
  );
};

export default RecentRelease;

const data: RecentReleaseDataProps[] = [
  {
    date: "Feburavary 14 , 2024",
    title: "Industrial Production",
    description:
      "Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.",

    country: "India",
  },
  {
    date: "Feburavary 12 , 2024",
    title: "CPI Infulation",
    description:
      "India's eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.6% in Dec 23 to 8.3% in",
    country: "India",
  },
  {
    date: "Feburavary 14 , 2024",
    title: "Industrial Production",
    description:
      "Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.",

    country: "USA",
  },
  {
    date: "Feburavary 12 , 2024",
    title: "CPI Infulation",
    description:
      "USA eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.6% in Dec 23 to 8.3% in",
    country: "USA",
  },
  {
    date: "Feburavary 14 , 2024",
    title: "Industrial Production",
    description:
      "Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.",

    country: "Singapure",
  },
  {
    date: "Feburavary 12 , 2024",
    title: "CPI Infulation",
    description:
      "Singapure eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.6% in Dec 23 to 8.3% in",
    country: "Singapure",
  },
];
