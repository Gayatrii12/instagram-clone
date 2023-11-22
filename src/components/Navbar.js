import React from 'react'
import "../styles/Navbar.css"
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png"
        alt="Instagram Logo"
      />
      <div className="navbar__buttons">
        <button className="nav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="nav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="nav__button">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>
        <button className="nav__button">
          <MovieOutlinedIcon />
          <span>Reels</span>
        </button>
        <button className="nav__button">
          <SendOutlinedIcon />
          <span>Messages</span>
        </button>
        <button className="nav__button">
          <FavoriteBorderOutlinedIcon />
          <span>Notifications</span>
        </button>
        <button className="nav__button">
          <AddBoxOutlinedIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="nav__more">
        <button className="nav__button">
          <MenuOutlinedIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar
