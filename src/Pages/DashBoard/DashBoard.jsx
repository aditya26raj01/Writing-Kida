import { Outlet, NavLink, useOutletContext } from "react-router-dom";
import "./DashBoard.css";
import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";

const DashBoard = () => {
  const { categories, userBlogs } = useOutletContext();
  const addActive = ({ isActive }) => {
    return isActive ? "active" : "";
  }
  const [open, setOpen] = useState(false);
  return (
    <div className="dashboard">
      <div className="navigation">
        <NavLink to="/dashboard/add-post" className={addActive}><i className="uil uil-pen"></i> Add Post</NavLink>
        <NavLink to="/dashboard/manage-post" className={addActive}><i className="uil uil-postcard"></i> Manage Post</NavLink>
        {/* <Link to="/"><i className="uil uil-user-plus"></i> Add User</Link> */}
        {/* <Link to="/manage-user"><i className="uil uil-users-alt"></i> Manage User</Link> */}
        {/* <Link to="/"><i className="uil uil-edit"></i> Add Category</Link> */}
        {/* <Link to="/"><i className="uil uil-list-ul"></i> Manage Category</Link> */}
      </div>
      <div className="outlet">
        <Outlet context={{ categories, userBlogs }} />
      </div>
      <div className="das-ham" onClick={() => setOpen(true)}>
        <i class="uil uil-bars"></i>
      </div>
      <SwipeableDrawer
      PaperProps={{
        sx:{ backgroundColor:"#ff000000", boxShadow:"none" }
      }}
        anchor="left"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <div className="drawer">
          <NavLink to="/dashboard/add-post" className={addActive}><i className="uil uil-pen"></i> Add Post</NavLink>
          <NavLink to="/dashboard/manage-post" className={addActive}><i className="uil uil-postcard"></i> Manage Post</NavLink>
          {/* <Link to="/"><i className="uil uil-user-plus"></i> Add User</Link> */}
          {/* <Link to="/manage-user"><i className="uil uil-users-alt"></i> Manage User</Link> */}
          {/* <Link to="/"><i className="uil uil-edit"></i> Add Category</Link> */}
          {/* <Link to="/"><i className="uil uil-list-ul"></i> Manage Category</Link> */}
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default DashBoard;