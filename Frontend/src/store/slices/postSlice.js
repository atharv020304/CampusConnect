

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = "http://localhost:2000/api/v1";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
        message: null,
        singlePost: {},
        comments: {}, // Store comments by post ID
    },
    reducers: {
        requestForDeletePost(state) {
            state.loading = true;
            state.error = null;
        },
        successForDeletePost(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForDeletePost(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        requestForAllPosts(state) {
            state.loading = true;
            state.error = null;
        },
        successForAllPosts(state, action) {
            state.loading = false;
            state.posts = action.payload;
            state.error = null;
        },
        failureForAllPosts(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForComments(state, action) {
            state.loading = true;
            state.error = null;
            // Reset comments for the post being fetched
            state.comments[action.payload] = [];
        },
        successForComments(state, action) {
            state.loading = false;
            state.comments[action.payload.postId] = action.payload.comments; // Store comments by post ID
            state.error = null;
        },
        failureForComments(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForCreatePost(state) {
            state.loading = true;
            state.error = null;
        },
        successForCreatePost(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForCreatePost(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForPostComment(state) {
            state.loading = true;
            state.error = null;
        },
        successForPostComment(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForPostComment(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        requestForUpdatePost(state) {
            state.loading = true;
            state.error = null;
        },
        successForUpdatePost(state, action) {
            state.loading = false;
            state.message = action.payload;
            state.error = null;
        },
        failureForUpdatePost(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearAllPostErrors(state) {
            state.error = null;
            state.message = null;
        },
        resetPostSlice(state) {
            state.error = null;
            state.loading = false;
            state.posts = [];
            state.message = null;
            state.singlePost = {};
            state.comments = {}; // Reset comments state
        },
    },
});

// Async Thunks

export const updatePost = (postId, postData) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForUpdatePost());
        const response = await axios.put(`${BACKEND_URL}/postcontent/update/${postId}`, postData, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(postSlice.actions.successForUpdatePost(response.data.message));
        dispatch(fetchPosts()); // Refresh posts after updating
    } catch (error) {
        dispatch(postSlice.actions.failureForUpdatePost(error.response?.data?.message || "Failed to update post"));
    }
};


export const deletePost = (postId) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForDeletePost());
        const response = await axios.delete(`${BACKEND_URL}/postcontent/delete/${postId}`, { withCredentials: true });
        dispatch(postSlice.actions.successForDeletePost(response.data.message));
        dispatch(fetchPosts()); // Refresh posts after deletion
    } catch (error) {
        dispatch(postSlice.actions.failureForDeletePost(error.response?.data?.message || "Failed to delete post"));
    }
};

// Fetch all posts
export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForAllPosts());
        const response = await axios.get(`${BACKEND_URL}/postcontent/getallposts`, { withCredentials: true });
        dispatch(postSlice.actions.successForAllPosts(response.data.posts));
        dispatch(postSlice.actions.clearAllPostErrors());
    } catch (error) {
        dispatch(postSlice.actions.failureForAllPosts(error.response?.data?.message || "Failed to fetch posts"));
    }
};

// Fetch comments for a specific post
export const fetchComments = (postId) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForComments(postId));
        const response = await axios.get(`${BACKEND_URL}/comment/getall/${postId}`, { withCredentials: true });
        console.log(response.data);
        dispatch(postSlice.actions.successForComments({ postId, comments: response.data.comments }));
    } catch (error) {
        dispatch(postSlice.actions.failureForComments(error.response?.data?.message || "Failed to fetch comments"));
    }
};

// Create a new post
export const createPost = (postData) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForCreatePost());

        if (!postData.content || postData.content.trim() === "") {
            dispatch(postSlice.actions.failureForCreatePost("Post content is required"));
            return;
        }

        const { content, image } = postData;

        const response = await axios.post(`${BACKEND_URL}/postcontent/post`, { content, image }, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });

        dispatch(postSlice.actions.successForCreatePost(response.data.message));
        dispatch(postSlice.actions.clearAllPostErrors());
    } catch (error) {
        dispatch(postSlice.actions.failureForCreatePost(error.response?.data?.message || "Failed to create post"));
    }
};

// Post a comment
export const postComment = (postId, data) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForPostComment());
        const response = await axios.post(`${BACKEND_URL}/comment/post/${postId}`, data, { withCredentials: true });
        dispatch(postSlice.actions.successForPostComment(response.data.message));
        dispatch(postSlice.actions.clearAllPostErrors());
    } catch (error) {
        dispatch(postSlice.actions.failureForPostComment(error.response?.data?.message || "Failed to post comment"));
    }
};

// Clear all errors
export const clearAllPostErrors = () => (dispatch) => {
    dispatch(postSlice.actions.clearAllPostErrors());
};

// Reset the post slice state
export const resetPostSlice = () => (dispatch) => {
    dispatch(postSlice.actions.resetPostSlice());
};

export default postSlice.reducer;







