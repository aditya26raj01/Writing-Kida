import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Base.css";
import Category from "../../Components/Category/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../store/services/refresh";
import { getBlogs } from "../../store/services/getBlogs";
import { getUserBlogs } from "../../store/services/getUserBlogs";
import { getCategories } from "../../store/services/getCategories";

const Base = () => {
  const dispatch = useDispatch();
  const { blogs, userBlogs, categories, user } = useSelector((state) => state.store);
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getCategories());
    if (localStorage.getItem("refreshToken")) {
      dispatch(refresh()).then(() => {
        dispatch(getUserBlogs());
      })
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Navbar user={user} />
      <div className="base">
        <Outlet context={{ blogs, userBlogs, categories }} />
      </div>
      {<Category categories={categories} />}
      <Footer />
    </>
  )
}

export default Base;