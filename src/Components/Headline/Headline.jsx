import { Link } from "react-router-dom";
import "./Headline.css";
import moment from "moment";

const Headline = (props) => {
  const { blog } = props;
  return (
    <div className="headline carousel-item">
        <img src={blog.coverImage} alt="" className="thumbnail" />
        <div className="content-wrapper">
            <Link to="/" className="tag">{blog.tag}</Link>
            <Link to={`/blog/${blog._id}`} className="title">{blog.title}</Link>
            <p className="description">
            {blog.description}
            </p>
            <div className="author">
                <img src={blog.author.profileImage} alt="" className="avatar" />
                <div className="name-wrapper">
                    <div>By: <span className="name">{blog.author.firstName} {blog.author.lastName}</span></div>
                    <div>{moment(blog.postedAt).format("ll")}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headline;