import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { fetchData, execisesOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const bodyPartsData = await fetchData(
        url + "/bodyPartsList",
        execisesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercises();
  }, []);

  const searchExercises = (e) => {
    const { value } = e.target;
    setSearch(value?.toLowerCase());
  };
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(url, execisesOptions);
      const searchedExercises = exerciseData?.filter(
        (exercise) =>
          exercise?.name?.toLowerCase?.includes(search) ||
          exercise?.equipment?.toLowerCase?.includes(search) ||
          exercise?.target?.toLowerCase?.includes(search) ||
          exercise?.bodyPart?.toLowerCase?.includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="36px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="52px"
        textAlign="center"
      >
        You can to find our Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={searchExercises}
          sx={{
            input: { border: "none", borderRadius: "4px", fontWeight: "700" },
            width: { lg: "1170px", xs: "350px" },
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",width:"100%",p:"20px"}}>
        <HorizontalScrollBar data={bodyParts}/>

      </Box>
    </Stack>
  );
};

export default SearchExercises;
