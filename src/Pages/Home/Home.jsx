import { useOutletContext } from "react-router-dom";
import Headline from "../../Components/Headline/Headline";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = (props) => {
  const {blogs} = useOutletContext();
  return (
    <div className="home">
      {blogs && blogs.map((blog, index) => {
        if (blog.featured && !blog.deleted) return <Headline blog={blog} key={index} />
        else return null
      })}
      {blogs && <Posts blogs={blogs} />}
    </div>
  )
}

export default Home;