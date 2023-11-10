import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
const SearchExercises = () => {
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
        <TextField/>
        <Button></Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
