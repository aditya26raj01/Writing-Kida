import Post from '../../Components/Post/Post';
import "./Posts.css";

const Posts = (props) => {
	const { blogs } = props;
	return (
		<>
			{blogs && blogs.length !== 0 ? <div className="posts">
				{blogs.map((blog, index) => {
					if (!blog.featured && !blog.deleted) return <Post blog={blog} key={index} />
					else return null
				})}
			</div> :
				<div className="nothing">No Blogs to Show<br />Try Adding One</div>}
		</>
	)
}

export default Posts;