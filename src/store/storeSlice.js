import { createSlice } from '@reduxjs/toolkit';
import { login } from './services/login';
import { getBlogs } from './services/getBlogs';
import { getCategories } from './services/getCategories';
import { getUserBlogs } from './services/getUserBlogs';
import { refresh } from './services/refresh';
import { toast } from 'react-toastify';
import { getTop10 } from './services/getTop10';
import { postBlog } from './services/postBlog';
import { deleteBlog } from './services/deleteBlog';
import { getStockUpdates } from './services/stockUpdates';
import { likeBlog } from './services/likelog';

const initialState = {
    user: null,
    blogs: null,
    categories: null,
    userBlogs: null,
    top10Blogs: null,
    stockUpdates: null,
}

export const showError = (error) => {
    if (error.payload.message.constructor === Array){
        error.payload.message.forEach((error) => {
            toast.error(error);
        })
    }else{
        toast.error(error.payload.message)
    }
}
const addToUserBlogs = (arr, blog) => {
    arr.push(blog);
    arr.reverse();
    return arr;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: {
    [refresh.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    [refresh.rejected]: (state, error) => {
        state.user = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        showError(error);
    },
    [login.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    [login.rejected]: (state, error) => {
        state.user = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        showError(error);
    },
    [getBlogs.fulfilled]: (state, action) => {
        state.blogs = action.payload.blogs;
    },
    [getBlogs.rejected]: (state, error) => {
        state.blogs = null;
        showError(error);
    },
    [getCategories.fulfilled]: (state, action) => {
        state.categories = action.payload.categories;
    },
    [getCategories.rejected]: (state, error) => {
        state.categories = null;
        showError(error);
    },
    [getUserBlogs.fulfilled]: (state, action) => {
        state.userBlogs = action.payload.blogs;
    },
    [getUserBlogs.rejected]: (state, error) => {
        state.userBlogs = null;
        showError(error);
    },
    [getTop10.fulfilled]: (state, action) => {
        state.top10Blogs = action.payload.blogs;
    },
    [getTop10.rejected]: (state, error) => {
        state.top10Blogs = null;
        showError(error);
    },
    [getStockUpdates.fulfilled]: (state, action) => {
        state.stockUpdates = action.payload.blogs;
    },
    [getStockUpdates.rejected]: (state, error) => {
        state.stockUpdates = null;
        showError(error);
    },
    [postBlog.fulfilled]: (state, action) => {
        state.userBlogs = addToUserBlogs(state.userBlogs, action.payload.blog);
        toast.success(action.payload.message);
    },
    [postBlog.rejected]: (state, error) => {
        showError(error);
    },
    [deleteBlog.fulfilled]: (state, action) => {
        state.userBlogs = action.payload.blogs;
        toast.success(action.payload.message);
    },
    [deleteBlog.rejected]: (state, error) => {
        showError(error);
    },
    [likeBlog.fulfilled]: (state, action) => {
        toast.success(action.payload.message);
    },
    [likeBlog.rejected]: (state, error) => {
        showError(error);
    },
  }
});

export default counterSlice.reducer;