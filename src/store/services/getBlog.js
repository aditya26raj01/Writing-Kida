import axios from "axios";
import { toast } from "react-toastify";

export const getBlog = async (id) => {
    try {
        const response = await axios.get(
            process.env.REACT_APP_API_URL + "/user/get-blog/" + id,
                { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        );
        console.log(response.data);
        return response.data.blog;
    } catch (error) {
        console.log(error.response.data);
        toast(error.response.data.message)
    }
}