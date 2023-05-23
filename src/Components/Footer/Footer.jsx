import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <Link to="https://youtube.com"><i className="uil uil-youtube"></i></Link>
        <Link to="https://facebook.com"><i className="uil uil-facebook"></i></Link>
        <Link to="https://instagram.com"><i className="uil uil-instagram-alt"></i></Link>
        <Link to="https://linkedin.com"><i className="uil uil-linkedin"></i></Link>
        <Link to="https://twitter.com"><i className="uil uil-twitter"></i></Link>
      </div>
      <div className="links">
        <div className="row">
          <h4>Cateogries</h4>
          <Link to="/">Politics</Link>
          <Link to="/">Stock Market</Link>
          <Link to="/">Technology</Link>
          <Link to="/">Sports</Link>
          <Link to="/">Entertainment</Link>
          <Link to="/">Nature</Link>
        </div>
        <div className="row">
          <h4>Support</h4>
          <Link to="/contact">Online Support</Link>
          <Link to="/contact">Phn Numbers</Link>
          <Link to="/contact">Emails</Link>
          <Link to="/contact">Sports</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="row">
          <h4>Permalinks</h4>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 think & ink
      </div>
    </div>
  )
}

export default Footer;