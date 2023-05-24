import "./ManagePost.css";
import moment from "moment";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../../store/services/deleteBlog";

const ManagePost = () => {
	const { userBlogs } = useOutletContext();
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteBlog(id));
	}
	return (
		<div className="container">
			<h2>Manage Post</h2>
			{userBlogs && userBlogs.length > 0 ?
				<table className="manage-post-table">
					<thead>
						<tr>
							<th className="b">Sl no.</th>
							<th>Title</th>
							<th>Category</th>
							<th className="b">Posted At</th>
							<th className="a">Delete</th>
						</tr>
					</thead>
					<tbody>
						{userBlogs.map((blog, index) => {
							return <tr key={index}>
								<td className="b">{index + 1}</td>
								<td className="white-space">{blog.title}</td>
								<td>{blog.tag}</td>
								<td className="b">{moment(blog.postedAt).format("ll")}</td>
								<td className="a"><Button variant="contained" color="error" onClick={() => handleDelete(blog._id)} >Delete</Button></td>
							</tr>
						})}
					</tbody>
				</table>
				: <div className="nothing">No Blogs To Show</div>
			}
			{userBlogs && userBlogs.length > 0 ?
				userBlogs.map((blog, index) => {
					return <table className="manage-post-mobile" key={index}>
						<tbody>
							<tr>
								<th>Sl no.</th>
								<td className="b">{index + 1}</td>
							</tr>
							<tr>
								<th>Title</th>
								<td>{blog.title}</td>
							</tr>
							<tr>
								<th>Category</th>
								<td>{blog.tag}</td>
							</tr>
							<tr>
								<th>Posted At</th>
								<td className="b">{moment(blog.postedAt).format("ll")}</td>
							</tr>
							<tr>
								<th></th>
								<td>
									<Button variant="contained" color="error" className="btn" onClick={() => handleDelete(blog._id)} >Delete</Button>
								</td>
							</tr>
						</tbody>
					</table>
				}) :
				<div className="nothing-mob">No Blogs To Show</div>
			}
		</div>
	)
}

export default ManagePost;