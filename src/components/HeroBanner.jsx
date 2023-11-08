import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ImgBanner from "../assets/images/banner.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Gym Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Welcome to the our Gym Club :)
      </Typography>
      <Typography fontSize="24px" lineHeight="35px" mb={2}>
        You can looking on our Exercises section
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <img src={ImgBanner} alt="ImgBanner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
