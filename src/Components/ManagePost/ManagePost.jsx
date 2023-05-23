import "./ManagePost.css";
import { useOutletContext } from "react-router-dom";

const ManagePost = () => {
    const { userBlogs } = useOutletContext();
    return (
        <div className="manage-post">
            <h2>Manage Posts</h2>
            {userBlogs && userBlogs.length > 0 ? <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        {/* <th>Edit</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {userBlogs && userBlogs.map((blog, index) => {
                        return <tr key={index}>
                            <td>{blog.title}</td>
                            <td>{blog.tag}</td>
                            {/* <td><button className="edit">Edit</button></td>
                            <td><button className="delete">Delete</button></td> */}
                        </tr>
                    })}
                </tbody>
            </table>
            : <tr className="nothing">No Blogs to Show<br />Try Adding One</tr>}
        </div>
    )
}

export default ManagePost;