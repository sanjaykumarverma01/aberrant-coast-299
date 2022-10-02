import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomePageData from "./HomePageData";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomePageData/>
      <Footer />
    </Box>
  );
};

export default Home;
