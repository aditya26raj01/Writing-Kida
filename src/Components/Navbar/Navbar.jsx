import "./Navbar.css";
import { Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <a href="/" className="logo">WRITING KIDA</a>
        <div className="navigation-wrapper">
          <div className="navigation">
            <Link to="/blogs">BLOG</Link>
            <Link to="/news">NEWS</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">SIGNIN</Link>
            <Link to="/about">ABOUT</Link>
          </div>
          <img className="avatar" aria-describedby={id} onClick={handleClick} src="/Images/Gaiety.jpeg" alt="" />
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="popover">
          <div className="desktop">
            <Link to="/blogs">BLOG</Link>
            <Link to="/news">NEWS</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">SIGNIN</Link>
            <Link to="/about">ABOUT</Link>
          </div>
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/">LOGOUT</Link>
        </div>
      </Popover>
    </div>
  )
}

export default Navbar;