import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img src="/Images/ADANI.jpeg" alt="" className="thumbnail" />
      <Link to="/" className="tag">Politics</Link>
      <Link to="/" className="title">Adani Group stocks hit lower circuits</Link>
      <p className="description">
        Adani Group stocks tanked on Friday to hit lower circuits once again. The group companies’ shares came under pressure since Hindenburg Research alleged the conglomerate of fraud and stock manipulation.
      </p>
      <div className="author">
        <img src="/Images/Gaiety.jpeg" alt="" className="avatar" />
        <div className="name-wrapper">
          <div>By: <span className="name">Gaiety Bhabhya</span></div>
          <div>Jan 25, 2023</div>
        </div>
      </div>
    </div>
  )
}

export default Post;