import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
    return (
        <div className="cateogry-wrapper">
            <div className="category">
                <Link to="/" className="cateogry__button">Politics</Link>
                <Link to="/" className="cateogry__button">Stock Market</Link>
                <Link to="/" className="cateogry__button">Technology</Link>
                <Link to="/" className="cateogry__button">Sports</Link>
                <Link to="/" className="cateogry__button">Entertainment</Link>
                <Link to="/" className="cateogry__button">Nature</Link>
            </div>
        </div>
    )
}

export default Category;