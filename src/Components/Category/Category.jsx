import { Link } from "react-router-dom";
import "./Category.css";

const Category = (props) => {
    const { categories } = props;
    return (
        <>
            {categories && categories.length !== 0 ? <div className="cateogry-wrapper">
                <div className="category">
                    {categories && categories.map((category, index) => {
                        return <Link to="/" key={index}>{category.name}</Link>
                    })}
                </div>
            </div> : ""}
        </>
    )
}

export default Category;