import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Base.css";
import Category from "../../Components/Category/Category";

const Base = () => {
  return (
    <>
      <Navbar />
      <div className="base">
        <Outlet />
      </div>
      <Category/>
      <Footer />
    </>
  )
}

export default Base;