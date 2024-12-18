

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const BACKEND_URL = "http://localhost:2000/api/v1";

// const postSlice = createSlice({
//     name: "posts",
//     initialState: {
//         posts: [],
//         loading: false,
//         error: null,
//         message: null,
//         singlePost: {},
//         comments: {}, 
//     },
//     reducers: {
//         requestForDeletePost(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForDeletePost(state, action) {
//             state.loading = false;
//             state.message = action.payload;
//             state.error = null;
//         },
//         failureForDeletePost(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },

//         requestForAllPosts(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForAllPosts(state, action) {
//             state.loading = false;
//             state.posts = action.payload;
//             state.error = null;
//         },
//         failureForAllPosts(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForComments(state, action) {
//             state.loading = true;
//             state.error = null;
//             state.comments[action.payload] = [];
//         },
//         successForComments(state, action) {
//             state.loading = false;
//             state.comments[action.payload.postId] = action.payload.comments; 
//             state.error = null;
//         },
//         failureForComments(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForCreatePost(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForCreatePost(state, action) {
//             state.loading = false;
//             state.message = action.payload;
//             state.error = null;
//         },
//         failureForCreatePost(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForPostComment(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForPostComment(state, action) {
//             state.loading = false;
//             state.message = action.payload;
//             state.error = null;
//         },
//         failureForPostComment(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         requestForUpdatePost(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         successForUpdatePost(state, action) {
//             state.loading = false;
//             state.message = action.payload;
//             state.error = null;
//         },
//         failureForUpdatePost(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         clearAllPostErrors(state) {
//             state.error = null;
//             state.message = null;
//         },
//         resetPostSlice(state) {
//             state.error = null;
//             state.loading = false;
//             state.posts = [];
//             state.message = null;
//             state.singlePost = {};
//             state.comments = {}; 
//         },
//     },
// });


// export const updatePost = (postId, postData) => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForUpdatePost());
//         const response = await axios.put(`${BACKEND_URL}/postcontent/update/${postId}`, postData, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });
//         dispatch(postSlice.actions.successForUpdatePost(response.data.message));
//         dispatch(fetchPosts()); 
//     } catch (error) {
//         dispatch(postSlice.actions.failureForUpdatePost(error.response?.data?.message || "Failed to update post"));
//     }
// };


// export const deletePost = (postId) => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForDeletePost());
//         const response = await axios.delete(`${BACKEND_URL}/postcontent/delete/${postId}`, { withCredentials: true });
//         dispatch(postSlice.actions.successForDeletePost(response.data.message));
//         dispatch(fetchPosts()); 
//     } catch (error) {
//         dispatch(postSlice.actions.failureForDeletePost(error.response?.data?.message || "Failed to delete post"));
//     }
// };


// export const fetchPosts = () => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForAllPosts());
//         const response = await axios.get(`${BACKEND_URL}/postcontent/getallposts`, { withCredentials: true });
//         dispatch(postSlice.actions.successForAllPosts(response.data.posts));
//         dispatch(postSlice.actions.clearAllPostErrors());
//     } catch (error) {
//         dispatch(postSlice.actions.failureForAllPosts(error.response?.data?.message || "Failed to fetch posts"));
//     }
// };


// export const fetchComments = (postId) => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForComments(postId));
//         const response = await axios.get(`${BACKEND_URL}/comment/getall/${postId}`, { withCredentials: true });
//         console.log(response.data);
//         dispatch(postSlice.actions.successForComments({ postId, comments: response.data.comments }));
//     } catch (error) {
//         dispatch(postSlice.actions.failureForComments(error.response?.data?.message || "Failed to fetch comments"));
//     }
// };


// export const createPost = (postData) => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForCreatePost());

//         if (!postData.content || postData.content.trim() === "") {
//             dispatch(postSlice.actions.failureForCreatePost("Post content is required"));
//             return;
//         }

//         const { content, image } = postData;

//         const response = await axios.post(`${BACKEND_URL}/postcontent/post`, { content, image }, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });

//         dispatch(postSlice.actions.successForCreatePost(response.data.message));
//         dispatch(postSlice.actions.clearAllPostErrors());
//     } catch (error) {
//         dispatch(postSlice.actions.failureForCreatePost(error.response?.data?.message || "Failed to create post"));
//     }
// };


// export const postComment = (postId, data) => async (dispatch) => {
//     try {
//         dispatch(postSlice.actions.requestForPostComment());
//         const response = await axios.post(`${BACKEND_URL}/comment/post/${postId}`, data, { withCredentials: true });
//         dispatch(postSlice.actions.successForPostComment(response.data.message));
//         dispatch(postSlice.actions.clearAllPostErrors());
//     } catch (error) {
//         dispatch(postSlice.actions.failureForPostComment(error.response?.data?.message || "Failed to post comment"));
//     }
// };


// export const clearAllPostErrors = () => (dispatch) => {
//     dispatch(postSlice.actions.clearAllPostErrors());
// };


// export const resetPostSlice = () => (dispatch) => {
//     dispatch(postSlice.actions.resetPostSlice());
// };

// export default postSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = "http://localhost:2000/api/v1";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],         // List of all posts
        loading: false,    // Loading state
        error: null,       // Error state
        message: null,     // Success message
        singlePost: {},    // Single post data for editing/viewing
        comments: {},      // Object to store comments by postId
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
            state.posts = action.payload;  // Update posts list
            state.error = null;
        },
        failureForAllPosts(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        requestForComments(state, action) {
            state.loading = true;
            state.error = null;
            state.comments[action.payload] = [];  // Initialize comments for the given post
        },
        successForComments(state, action) {
            state.loading = false;
            state.comments[action.payload.postId] = action.payload.comments; // Store comments
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
            state.comments = {}; 
        },
    },
});

export const updatePost = (postId, postData) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForUpdatePost());
        const response = await axios.put(`${BACKEND_URL}/postcontent/update/${postId}`, postData, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(postSlice.actions.successForUpdatePost(response.data.message));
        dispatch(fetchPosts()); // Re-fetch the posts to reflect the update
    } catch (error) {
        dispatch(postSlice.actions.failureForUpdatePost(error.response?.data?.message || "Failed to update post"));
    }
};

export const deletePost = (postId) => async (dispatch, getState) => {
    try {
        dispatch(postSlice.actions.requestForDeletePost());

        // Optimistic UI: get the current posts from the state
        const currentPosts = getState().posts.posts;

        // Optimistically remove the post from the posts array
        const updatedPosts = currentPosts.filter((post) => post._id !== postId);

        // Update the state with the updated posts list
        dispatch(postSlice.actions.successForAllPosts(updatedPosts));

        const response = await axios.delete(`${BACKEND_URL}/postcontent/delete/${postId}`, { withCredentials: true });

        // After successful delete, dispatch success message
        dispatch(postSlice.actions.successForDeletePost(response.data.message));

        // Re-fetch the posts to reflect the changes from the backend
        dispatch(fetchPosts());
    } catch (error) {
        dispatch(postSlice.actions.failureForDeletePost(error.response?.data?.message || "Failed to delete post"));
    }
};


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

export const fetchComments = (postId) => async (dispatch) => {
    try {
        dispatch(postSlice.actions.requestForComments(postId));
        const response = await axios.get(`${BACKEND_URL}/comment/getall/${postId}`, { withCredentials: true });
        dispatch(postSlice.actions.successForComments({ postId, comments: response.data.comments }));
    } catch (error) {
        dispatch(postSlice.actions.failureForComments(error.response?.data?.message || "Failed to fetch comments"));
    }
};

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

export const clearAllPostErrors = () => (dispatch) => {
    dispatch(postSlice.actions.clearAllPostErrors());
};

export const resetPostSlice = () => (dispatch) => {
    dispatch(postSlice.actions.resetPostSlice());
};

export default postSlice.reducer;






