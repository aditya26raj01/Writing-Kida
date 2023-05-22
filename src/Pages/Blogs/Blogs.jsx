import Posts from "../Posts/Posts";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
        <form className="search-box">
            <div>
                <i className="uil uil-search"></i>
                <input type="text" placeholder="Search Blogs Here"/>
            </div>
            <button type="submit">Search</button>
        </form>
        <Posts/>
    </div>
  )
}

export default Blogs;