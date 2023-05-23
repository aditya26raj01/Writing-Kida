import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/services/login";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, setQuery] = useState(null);
    const handleInput = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(query)).unwrap().then(() => navigate("/", {replace: true}))
        .catch(()=>{})
    }
    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} className="login">
                <h2>Sign In</h2>
                <input type="text" placeholder="username or email" name="login" onChange={handleInput} />
                <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} />
                <button type="Submit" className="btn">Sign In</button>
                <small>Dont have an account? <Link to="/signup">Signup</Link></small>
            </form>
        </div>
    )
}

export default Login;