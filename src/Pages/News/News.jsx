import { useOutletContext } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./News.css";

const News = () => {
  const {top10Blogs} = useOutletContext();
  return (
    <div className="news">
        <h1>Top 10 Of Today</h1>
        {top10Blogs && <Posts top10={true} blogs={top10Blogs}/>}
    </div>
  )
}

export default News;