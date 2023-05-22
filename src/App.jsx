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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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