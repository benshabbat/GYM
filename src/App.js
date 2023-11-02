import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Box width="400px">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/execise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <div>App</div>
      </Box>
    </BrowserRouter>
  );
};

export default App;
