import { useEffect, useState } from "react";
import "./Blog.css";
import moment from "moment";
import { getBlog } from "../../store/services/getBlog";
import { useParams } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        getBlog(id).then((response) => {
            setBlog(response);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className="blog">
            {blog && <>
                <div className="title">
                    {blog.title}
                </div>
                <div className="author">
                    <img src={blog.author.profileImage} alt="" className="avatar" />
                    <div className="name-wrapper">
                        <div>By: <span className="name">{blog.author.firstName} {blog.author.lastName}</span></div>
                        <div>{moment(blog.postedAt).format("ll")}</div>
                    </div>
                </div>
                <img src={blog.coverImage} alt="" className="thumbnail" />
                <div className="content">
                    {blog.content}
                </div>
            </>}
        </div>
    )
}

export default Blog;