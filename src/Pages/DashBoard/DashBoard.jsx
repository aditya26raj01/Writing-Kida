import { useEffect } from "react";
import "./DashBoard.css";
import { NavLink, Outlet, useNavigate, useOutletContext } from 'react-router-dom'

const DashBoard = () => {
  const { userBlogs, user } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    if(!user.roles.includes("BLOGGER")){
      navigate("/", {replace: true});
    }
    // eslint-disable-next-line
  }, [])
  
  const addActiveAA = ({isActive})=>{
    return isActive?"aa aa-active":"aa";
  }
  const addActiveBB = ({isActive})=>{
    return isActive?"bb bb-active":"bb";
  }
  return (
    <>
      <div className="dashboard-tabs">
        <NavLink className={addActiveAA} to="/dashboard/manage-post">Manage Post</NavLink>
        <NavLink className={addActiveBB} to="/dashboard/add-post">Add Post</NavLink>
      </div>
      <Outlet context={{ userBlogs, user }} />
    </>
  )
}

export default DashBoard