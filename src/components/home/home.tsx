import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Cards from "./library/cards";
import RecentRelease from "./recentReleases/recentRelease";
import Blogs from "./blogs/blogs";

const Home = () => {
  return (
    <Stack direction={"row"} height={"100%"} bgcolor={"fafafa"}>
      <Sidebar />
      <Stack flexGrow={1} overflow={"auto"}>
        <Navbar />
        <Cards />
        <Stack p={2} direction={"row"} justifyContent={"space-between"} gap={4}>
          <Blogs />
          <RecentRelease />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
