import { Link } from "react-router-dom";
import "./Post.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { likeBlog } from "../../store/services/likelog";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Post = (props) => {
  const dispatch = useDispatch();
  const { blog } = props;
  const { user } = useSelector((state) => state.store);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [liked, setLiked] = useState("");
  const handleLike = () => {
    if(!user){
      toast.error("Login to Continue"); 
      return;
    }
    if(liked === "liked"){
      setLikes(likes-1);
      setLiked("");
    }else{
      setLiked("liked");
      setLikes(likes+1);
    }
    dispatch(likeBlog(blog._id)).unwrap()
    .then((b) => {
      setLikes(b.likes);
    })
    .catch(()=>{})
  }
  useEffect(() => {
    if(user){
      user.likedBlogs.forEach(b => {
        if(b.blog === blog._id){
          setLiked("liked")
        }
      });
    }
    // eslint-disable-next-line
  }, [user])
  
  return (
    <div className="post">
      <img src={blog.coverImage} alt="" className="thumbnail" />
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