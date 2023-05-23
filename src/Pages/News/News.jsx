import { useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./News.css";

const News = () => {
  const {blogs} = useOutletContext();
  return (
    <div className="news">
        <h1>Top 10 Of Today</h1>
        {blogs && <Posts blogs={blogs}/>}
    </div>
  )
}

export default News;