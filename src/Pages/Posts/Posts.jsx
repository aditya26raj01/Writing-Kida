import Post from '../../Components/Post/Post';
import "./Posts.css";

const Posts = (props) => {
	const { blogs } = props;
	return (
		<>
			{blogs && blogs.length !== 0 ? <div className="posts">
				{blogs.map((blog, index) => {
					if(props.stocks && blog.deleted){
						return <Post blog={blog} key={index} />
					}if(props.allBlogs && !blog.deleted){
						return <Post blog={blog} key={index} />
					}if(props.top10 && !blog.deleted){
						return <Post blog={blog} key={index} />
					}if (!blog.featured && !blog.deleted) {
						return <Post blog={blog} key={index} />
					}
					else return null
				})}
			</div> :
				<div className="nothing">No Blogs to Show</div>}
		</>
	)
}

export default Posts;