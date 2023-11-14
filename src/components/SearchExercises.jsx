import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
const SearchExercises = () => {
  const [search, setSearch] = useState();
  const searchExercises = (e) => {
    const { value } = e.target;
    setSearch(value.lowerCase());
  };
  const handleSearch = async() =>{
    

  }
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
    </Stack>
  );
};

export default SearchExercises;
