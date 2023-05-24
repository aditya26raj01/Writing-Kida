import { Link } from "react-router-dom";
import "./Post.css";
import moment from "moment";

const Post = (props) => {
  const { blog } = props;
  return (
    <div className="post">
      <img src={blog.coverImage} alt="" className="thumbnail" />
      <Link to="/" className="tag">{blog.tag}</Link>
      <Link to={`/blog/${blog._id}`} className="title">{blog.title}</Link>
      <div className="description">
        {blog.description}
      </div>
      <div className="author">
        <img src={blog.author.profileImage} alt="" className="avatar" />
        <div className="name-wrapper">
          <div>By: <span className="name">{blog.author.firstName} {blog.author.lastName}</span></div>
          <div>{moment(blog.postedAt).format("ll")}</div>
        </div>
      </div>
    </div>
  )
}

export default Post;