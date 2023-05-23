import "./Navbar.css";
import { Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import { useState } from "react";

const Navbar = (props) => {
  const { user } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.replace("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <a href="/" className="logo">THINK & INK</a>
        <div className="navigation-wrapper">
          <div className="navigation">
            <Link to="/blogs">BLOG</Link>
            <Link to="/news">NEWS</Link>
            <Link to="/contact">CONTACT</Link>
            {!user && <Link to="/login">SIGNIN</Link>}
            <Link to="/about">ABOUT</Link>
          </div>
          {user && <img className="avatar" aria-describedby={id} onClick={handleClick} src={user.profileImage} alt="" />}
          {!user && <i className="uil uil-list-ui-alt ham" aria-describedby={id} onClick={handleClick}></i>}
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
            <Link to="/blogs" onClick={handleClose}>BLOG</Link>
            <Link to="/news" onClick={handleClose}>NEWS</Link>
            <Link to="/contact" onClick={handleClose}>CONTACT</Link>
            {!user && <Link to="/login" onClick={handleClose}>SIGNIN</Link>}
            <Link to="/about" onClick={handleClose}>ABOUT</Link>
          </div>
          {user && <Link to="/dashboard/manage-post" onClick={handleClose}>DASHBOARD</Link>}
          {user && <Link to="/" onClick={handleLogout}>LOGOUT</Link>}
        </div>
      </Popover>
    </div>
  )
}

export default Navbar;