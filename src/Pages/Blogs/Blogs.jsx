import { useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./Blogs.css";

const Blogs = () => {
  const {blogs} = useOutletContext();
  return (
    <div className="blogs">
        {/* <form className="search-box">
            <div>
                <i className="uil uil-search"></i>
                <input type="text" placeholder="Search Blogs Here"/>
            </div>
            <button type="submit">Search</button>
        </form> */}
        {blogs && <Posts allBlogs={true} blogs={blogs}/>}
    </div>
  )
}

export default Blogs;