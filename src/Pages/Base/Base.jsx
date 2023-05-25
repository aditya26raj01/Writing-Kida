import "./Base.css";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Category from "../../Components/Category/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../store/services/getBlogs";
import { getCategories } from "../../store/services/getCategories";
import { getTop10 } from "../../store/services/getTop10";
import { getStockUpdates } from "../../store/services/stockUpdates";
import { refresh } from "../../store/services/refresh";

const Base = () => {
	const dispatch = useDispatch();
	const { blogs, categories, user, top10Blogs, stockUpdates } = useSelector((state) => state.store);
	useEffect(() => {
		dispatch(getBlogs());
		dispatch(getCategories());
		dispatch(getTop10());
		dispatch(getStockUpdates());
		if(localStorage.getItem("refreshToken")){
			dispatch(refresh());
		}
		// eslint-disable-next-line
	}, [])
	return (
		<>
			<Navbar user={user} />
			<div className="base">
				<Outlet context={{ blogs, categories, top10Blogs, stockUpdates, user }} />
			</div>
			{<Category categories={categories} />}
			<Footer />
		</>
	)
}

export default Base;