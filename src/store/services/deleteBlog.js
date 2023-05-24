import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const deleteBlog = createAsyncThunk(
    "store/deletBlog",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_API_URL + "/user/delete-blog/" + id,
                { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    })