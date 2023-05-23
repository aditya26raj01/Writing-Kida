import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"
export const getCategories = async () => {
    try {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + "/user/get-categories",
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
        return response.data.categories;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const login = async () => {
    try {
        const response = await axios.post(
            process.env.REACT_APP_API_URL + "/user/login",
            { login: "aditya26", password: "Aditya@26" }
        );
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
    } catch (error) {
        window.location.replace("/login");
        console.log(error.response.data);
    }
}

export const uploadCoverImage = async (e, setUploadStatus, query, setQuery) => {
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
                setQuery({ ...query, coverImage: url });
            });
        }
    );
}

export const postBlog = async (query) => {
    try {
        const response = await axios.post(
            process.env.REACT_APP_API_URL + "/user/post-blog",
            query,
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
    }
}

export const getBlogs = async () => {
    try {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + "/user/get-blogs",
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
        return response.data.blogs;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const getUserBlogs = async () => {
    try {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + "/user/get-user-blogs",
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
        return response.data.blogs;
    } catch (error) {
        console.log(error.response.data);
    }
}