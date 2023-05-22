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
          <Link to="/">Online Support</Link>
          <Link to="/">Phn Numbers</Link>
          <Link to="/">Emails</Link>
          <Link to="/">Sports</Link>
          <Link to="/">Sports</Link>
        </div>
        <div className="row">
          <h4>Permalinks</h4>
          <Link to="/">Home</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">News</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Sign In</Link>
        </div>
      </div>
      <div className="copyright">
        Copyright ©2023 THINK & INK
      </div>
    </div>
  )
}

export default Footer;