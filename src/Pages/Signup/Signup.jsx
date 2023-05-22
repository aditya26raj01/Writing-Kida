import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
    const [query, setQuery] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);
    const handleInput = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + "/user/signup",
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
    const handleUpload = (e) => {
        const imageRef = ref(storage, `profile/${e.target.files[0].name}`);
        const uploadTask = uploadBytesResumable(imageRef, e.target.files[0]);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setUploadStatus(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setQuery({ ...query, profileImage: url });
                });
            }
        );
    }
    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit} className="login">
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