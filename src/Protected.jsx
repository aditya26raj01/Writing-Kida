import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./store/services/refresh";
import { getUserBlogs } from "./store/services/getUserBlogs";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {
    const { user, userBlogs } = useSelector((state) => state.store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("refreshToken")) {
            dispatch(refresh()).unwrap()
                .then(() => dispatch(getUserBlogs()))
                .catch(() => navigate("/login", { replace: true }))
        } else {
            navigate("/login", { replace: true })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {user && <Outlet context={{ userBlogs, user }} />}
        </>
    )
}

export default Protected;