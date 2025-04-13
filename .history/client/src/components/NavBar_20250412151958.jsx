import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/AIR.png";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white">
      {" "}
      <AppBar position="static" className="!bg-blue-900">
        <Toolbar className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
          <figure>
            <img
              src={Logo}
              alt="ShopSmart with AI-R"
              className="h-14 sm:h-14 md:h-14 w-full object-contain"
            />
          </figure>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-white"
          >
            ShopSmart with AI-R
          </Typography>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Icons and Buttons */}
          <div className="flex items-center gap-2">
            <IconButton size="large" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="inherit"
              className="text-white border-white"
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
