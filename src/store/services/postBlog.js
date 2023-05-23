import axios from "axios";
import { toast } from "react-toastify";

export const postBlog = async (query) => {
    try {
        const response = await axios.post(
            process.env.REACT_APP_API_URL + "/user/post-blog",
            query,
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
        toast.success(response.data.message);
    } catch (error) {
        console.log(error.response.data);
        toast(error.response.data.message)
    }
}