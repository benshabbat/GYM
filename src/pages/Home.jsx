import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('')
  return (
    <Box>
      <HeroBanner setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
