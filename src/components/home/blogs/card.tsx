import { BlogCardProps } from "@/util/types";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BlogCard: React.FC<BlogCardProps> = ({ title, image, description }) => {
  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Stack sx={{ width: "200px" }}>
          <div
            style={{
              position: "relative",
              width: "200px",

              height: "180px",
            }}
          >
            <Image src={image} alt={title} layout="fill" objectFit="fit" />
          </div>
          <Stack
            p={2}
            display={"flex"}
            direction={"column"}
            justifyContent={"space-between"}
            minHeight={"160px"}
          >
            <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
            <Typography sx={{ fontSize: "14px", color: "#d8d8d8" }}>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
