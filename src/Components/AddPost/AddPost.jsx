import { useState } from "react";
import "./AddPost.css";
import { useOutletContext } from "react-router-dom";
import { postBlog } from "../../store/services/postBlog";
import { uploadToFirebase } from "../../store/services/uploadToFirebase";

const AddPost = () => {
	const { categories } = useOutletContext();

	const [query, setQuery] = useState({ featured: false });
	const [uploadStatus, setUploadStatus] = useState(null);
	const handleUpload = (e) => {
		uploadToFirebase("coverImage", e, "blogs", setUploadStatus, query, setQuery);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		postBlog(query);
	}
	const handleInput = (e) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	}
	return (
		<div className="add-post">
			<h2>Create a Post</h2>
			<form onSubmit={handleSubmit}>
				<span>Title</span>
				<input type="text" placeholder="Enter Title" name="title" onChange={handleInput} />
				<span>Description</span>
				<textarea rows="5" placeholder="Enter Description" name="description" onChange={handleInput}></textarea>
				<span>Content</span>
				<textarea rows="20" placeholder="Enter Content" name="content" onChange={handleInput}></textarea>
				<div className="wrapper">
					<span>
						<div>Cover Image</div>
						{
							uploadStatus ?
								<div className={`complete-upload ${uploadStatus === 100 ? "complete" : ""}`}>{uploadStatus === 100 ? "Upload Complete" : `Uploading : ${uploadStatus} %`}</div> :
								<input type="file" accept="image/png, image/jpeg" placeholder="Uplaod Cover Image" className={uploadStatus === 100 ? "complete" : ""} onChange={handleUpload} />
						}
					</span>
					<span>
						<div>Category</div>
						<select name="tag" onChange={handleInput}>
							<option value="">Choose Category</option>
							{categories && categories.map((category, index) => {
								return <option key={index} value={category.name}>{category.name}</option>
							}
							)}
						</select>
					</span>
				</div>
				<div className="checkbox">
					<div>Feature Post?</div>
					<input type="checkbox" name="featured" onChange={(e) => {
						setQuery({ ...query, featured: e.target.checked });
					}} />
				</div>
				<button type="submit">Post Blog</button>
			</form>
		</div>
	)
}

export default AddPost;