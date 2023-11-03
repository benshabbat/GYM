import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <Link
          to="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
