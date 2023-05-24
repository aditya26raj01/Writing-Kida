import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Base from "./Pages/Base/Base";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import News from "./Pages/News/News";
import ContactUs from "./Pages/ContactUs/ContactUs";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Pages/Signup/Signup";
import DashBoard from "./Pages/DashBoard/DashBoard";
import AddPost from "./Components/AddPost/AddPost";
import ManagePost from "./Components/ManagePost/ManagePost";
import { useSelector } from "react-redux";
import Blog from "./Pages/Blog/Blog";
import Protected from "./Protected";
import Profile from "./Pages/Profile/Profile";
import StockUpdates from "./Pages/StockUpdates/StockUpdates";

const App = () => {
  const { user } = useSelector((state) => state.store);
  return (
    <Router>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/stock-updates" element={<StockUpdates />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />

          <Route element={<Protected/>}>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route element={<DashBoard/>}>
              <Route path="/dashboard/manage-post" element={<ManagePost />} />
              <Route path="/dashboard/add-post" element={<AddPost />} />
            </Route>
          </Route>
          
        </Route>
        {!user && <Route path="/login" element={<Login />} />}
        {!user && <Route path="/signup" element={<Signup />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Slide}
        theme="light"
      />
    </Router>
  )
}

export default App;