import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import { login } from './services/login';
import { getBlogs } from './services/getBlogs';
import { getCategories } from './services/getCategories';
import { getUserBlogs } from './services/getUserBlogs';
import { refresh } from './services/refresh';
import { toast } from 'react-toastify';

const initialState = {
    user: null,
    blogs: null,
    categories: null,
    userBlogs: null,
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
  }
});

export default counterSlice.reducer;