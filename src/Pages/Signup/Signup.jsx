import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../store/services/signup";
import { uploadToFirebase } from "../../store/services/uploadToFirebase";

const Signup = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleInput = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signup(query)).then(() => {
            document.getElementById("signup").reset();
        })
    }
    const handleUpload = (e) => {
        uploadToFirebase("profileImage", e, "profile", setUploadStatus, query, setQuery);
    }
    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} id="signup" className="login">
                <h2>Create an Account</h2>
                <input type="text" placeholder="First Name" name="firstName" onChange={handleInput} />
                <input type="text" placeholder="Last Name" name="lastName" onChange={handleInput} />
                <input type="text" placeholder="Username" name="userName" onChange={handleInput} />
                <input type="text" placeholder="Location" name="location" onChange={handleInput} />
                <input type="email" placeholder="Email" name="email" onChange={handleInput} />
                <input type="text" maxLength={10} placeholder="Phone" name="phone" onChange={handleInput} />
                <input type="password" placeholder="Create Password" name="password" onChange={handleInput} />
                <input type="password" placeholder="Confirm Password" name="repassword" onChange={handleInput} />
                {
                    uploadStatus?
                    <div className={`complete-upload ${uploadStatus===100&&"complete"}`}>{uploadStatus===100?"Upload Complete":`Uploading : ${uploadStatus} %`}</div>:
                    <input type="file" id="avatar" className={uploadStatus===100&&"complete"} onChange={handleUpload} />
                }
                <button type="Submit" className="btn">Sign Up</button>
                <small>Already have an account? <Link to="/login">Signup</Link></small>
            </form>
        </div>
    )
}

export default Signup;