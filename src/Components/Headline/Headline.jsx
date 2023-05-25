import { Link } from "react-router-dom";
import "./Headline.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { likeBlog } from "../../store/services/likelog";

const Headline = (props) => {
  const { blog } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.store);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [liked, setLiked] = useState("");
  const handleLike = () => {
    dispatch(likeBlog(blog._id)).unwrap()
      .then((b) => {
        setLikes(b.likes);
        if (liked === "liked") {
          setLiked("");
        } else {
          setLiked("liked");
        }
      })
      .catch(() => { })
  }
  useEffect(() => {
    if (user) {
      user.likedBlogs.forEach(b => {
        if (b.blog === blog._id) {
          setLiked("liked")
        }
      });
    }
    // eslint-disable-next-line
  }, [user])
  return (
    <div className="headline carousel-item">
      <img src={blog.coverImage} alt="" className="thumbnail" />
      <div className="content-wrapper">
        <div className="like-wrapper">
          <Link to="/" className="tag">{blog.tag}</Link>
          <div>
            <span className="like-count">
              {likes} Likes
            </span>
            <button className={`like ${liked}`} onClick={handleLike}>
              <i className="uil uil-thumbs-up"></i>
            </button>
          </div>
        </div>
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