import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [query, setQuery] = useState(null);
    const handleInput = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + "/user/login",
                query
            );
            console.log(response.data);
            if (response.data.status) toast.success(response.data.message);
            else toast.error(response.data.message);
        } catch (error) {
            console.log(error);
            if (error.response.data.message.constructor === Array) {
                error.response.data.message.forEach((error) => {
                    toast.error(error);
                })
            } else {
                toast.error(error.response.data.message);
            }
        }
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