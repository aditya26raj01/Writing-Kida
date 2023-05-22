import Posts from "../Posts/Posts";
import "./News.css";

const News = () => {
  return (
    <div className="news">
        <h1>Top 10 Of Today</h1>
        <Posts/>
    </div>
  )
}

export default News;