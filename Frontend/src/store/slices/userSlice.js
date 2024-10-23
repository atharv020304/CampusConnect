



// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const BACKEND_URL = "http://localhost:2000/api/v1";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         loading: false,
//         isAuth: false,
//         user: {},
//         error: null,
//         message: null,
//     },
//     reducers: {
//         registerRequest(state) {
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         registerSuccess(state, action) {
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         registerFailed(state, action) {
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         loginRequest(state){
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         loginSuccess(state,action){
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         loginFailed(state,action){
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         clearAllErrors(state) {
//             state.error = null;
//         },
//     },
// });


// export const register = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.registerRequest());
//     try {
//         console.log('Data being sent:', data); 

//         const response = await axios.post(`${BACKEND_URL}/user/register`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });

//         dispatch(userSlice.actions.registerSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
        
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.registerFailed(errorMessage));
//         console.error('Error during registration:', errorMessage); 
//     }
// };



// export const login = (data)=> async(dispatch)=>{
//     dispatch(userSlice.actions.loginRequest());

//     try{
//         const response = await axios.post(`${BACKEND_URL}/user/login`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });
//         dispatch(userSlice.actions.loginSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());

//     }catch(error){
//         dispatch(userSlice.actions.loginFailed(error.response.data.message));
//     }
// }


// export const clearAlluserErrors = () => (dispatch) => {
//     dispatch(userSlice.actions.clearAllErrors());
// };

// export default userSlice.reducer;



//------------------------------------------------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const BACKEND_URL = "http://localhost:2000/api/v1";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         loading: false,
//         isAuth: false,
//         user: {},
//         error: null,
//         message: null,
//     },
//     reducers: {
//         registerRequest(state) {
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         registerSuccess(state, action) {
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         registerFailed(state, action) {
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         loginRequest(state){
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         loginSuccess(state,action){
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         loginFailed(state,action){
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         fetchUserRequest(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         fetchUserSuccess(state, action) {
//             state.loading = false;
//             state.user = action.payload.user;
//             state.error = null;
//         },
//         fetchUserFailed(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         clearAllErrors(state) {
//             state.error = null;
//         },
//     },
// });

// export const fetchUser = () => async (dispatch) => {
//     dispatch(userSlice.actions.fetchUserRequest());

//     try {
//         const response = await axios.get(`${BACKEND_URL}/user/getuser`, {
//             withCredentials: true,
//         });
//         dispatch(userSlice.actions.fetchUserSuccess(response.data));
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.fetchUserFailed(errorMessage));
//     }
// };


// export const register = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.registerRequest());
//     try {
//         console.log('Data being sent:', data); 

//         const response = await axios.post(`${BACKEND_URL}/user/register`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });

//         dispatch(userSlice.actions.registerSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
        
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.registerFailed(errorMessage));
//         console.error('Error during registration:', errorMessage); 
//     }
// };



// export const login = (data)=> async(dispatch)=>{
//     dispatch(userSlice.actions.loginRequest());

//     try{
//         const response = await axios.post(`${BACKEND_URL}/user/login`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });
//         dispatch(userSlice.actions.loginSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());

//     }catch(error){
//         dispatch(userSlice.actions.loginFailed(error.response.data.message));
//     }
// }



// export const clearAlluserErrors = () => (dispatch) => {
//     dispatch(userSlice.actions.clearAllErrors());
// };

// export default userSlice.reducer;


// ====================================================================================================


// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const BACKEND_URL = "http://localhost:2000/api/v1";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         loading: false,
//         isAuth: false,
//         user: {},
//         error: null,
//         message: null,
//         connections: [],
//     },
//     reducers: {
//         // User Registration
//         registerRequest(state) {
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         registerSuccess(state, action) {
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         registerFailed(state, action) {
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         // User Login
//         loginRequest(state) {
//             state.loading = true;
//             state.isAuth = false;
//             state.error = null;
//             state.message = null;
//         },
//         loginSuccess(state, action) {
//             state.loading = false;
//             state.isAuth = true;
//             state.user = action.payload.user;
//             state.error = null;
//             state.message = action.payload.message;
//         },
//         loginFailed(state, action) {
//             state.loading = false;
//             state.isAuth = false;
//             state.user = {};
//             state.error = action.payload;
//             state.message = null;
//         },
//         // Fetch User Profile
//         fetchUserRequest(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         fetchUserSuccess(state, action) {
//             state.loading = false;
//             state.user = action.payload.user;
//             state.connections = action.payload.user.connections || [];
//             state.error = null;
//         },
//         fetchUserFailed(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         // Add Connection
//         addConnectionRequest(state) {
//             state.loading = true;
//             state.error = null;
//             state.message = null;
//         },
//         addConnectionSuccess(state, action) {
//             state.loading = false;
//             state.message = action.payload.message;
//             // Add the new connection ID to state
//             if (state.user.connections) {
//                 state.user.connections.push(action.payload.newConnection);
//             }
//         },
//         addConnectionFailed(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         // Remove Connection
//         removeConnectionRequest(state) {
//             state.loading = true;
//             state.error = null;
//             state.message = null;
//         },
//         removeConnectionSuccess(state, action) {
//             state.loading = false;
//             state.message = action.payload.message;
//             // Remove the connection ID from state
//             if (state.user.connections) {
//                 state.user.connections = state.user.connections.filter(id => id !== action.payload.removedConnection);
//             }
//         },
//         removeConnectionFailed(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         // Fetch All Connections
//         fetchConnectionsRequest(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         fetchConnectionsSuccess(state, action) {
//             state.loading = false;
//             state.connections = action.payload.connections;
//         },
//         fetchConnectionsFailed(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         // Clear Errors
//         clearAllErrors(state) {
//             state.error = null;
//         },
//     },
// });

// // Thunk Actions

// // Fetch User Profile
// export const fetchUser = () => async (dispatch) => {
//     dispatch(userSlice.actions.fetchUserRequest());

//     try {
//         const response = await axios.get(`${BACKEND_URL}/user/getuser`, {
//             withCredentials: true,
//         });
//         dispatch(userSlice.actions.fetchUserSuccess(response.data));
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.fetchUserFailed(errorMessage));
//     }
// };

// // Add Connection
// export const addConnection = (connectionId) => async (dispatch) => {
//     dispatch(userSlice.actions.addConnectionRequest());
//     try {
//         const response = await axios.post(
//             `${BACKEND_URL}/user/addConnection`,
//             { connectionId },
//             { withCredentials: true }
//         );
//         dispatch(userSlice.actions.addConnectionSuccess({
//             message: response.data.message,
//             newConnection: connectionId
//         }));
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "Failed to add connection";
//         dispatch(userSlice.actions.addConnectionFailed(errorMessage));
//     }
// };

// // Remove Connection
// export const removeConnection = (connectionId) => async (dispatch) => {
//     dispatch(userSlice.actions.removeConnectionRequest());
//     try {
//         const response = await axios.post(
//             `${BACKEND_URL}/user/removeConnection`,
//             { connectionId },
//             { withCredentials: true }
//         );
//         dispatch(userSlice.actions.removeConnectionSuccess({
//             message: response.data.message,
//             removedConnection: connectionId
//         }));
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "Failed to remove connection";
//         dispatch(userSlice.actions.removeConnectionFailed(errorMessage));
//     }
// };

// // Fetch All Connections
// export const fetchConnections = () => async (dispatch) => {
//     dispatch(userSlice.actions.fetchConnectionsRequest());
//     try {
//         const response = await axios.get(`${BACKEND_URL}/user/getAllConnections`, {
//             withCredentials: true,
//         });
//         dispatch(userSlice.actions.fetchConnectionsSuccess(response.data));
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "Failed to fetch connections";
//         dispatch(userSlice.actions.fetchConnectionsFailed(errorMessage));
//     }
// };

// // User Registration
// export const register = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.registerRequest());
//     try {
//         const response = await axios.post(`${BACKEND_URL}/user/register`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });
//         dispatch(userSlice.actions.registerSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.registerFailed(errorMessage));
//     }
// };

// // User Login
// export const login = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.loginRequest());
//     try {
//         const response = await axios.post(`${BACKEND_URL}/user/login`, data, {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//         });
//         dispatch(userSlice.actions.loginSuccess(response.data));
//         dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//         const errorMessage = error.response?.data?.message || "An error occurred";
//         dispatch(userSlice.actions.loginFailed(errorMessage));
//     }
// };

// // Clear all errors
// export const clearAlluserErrors = () => (dispatch) => {
//     dispatch(userSlice.actions.clearAllErrors());
// };

// export default userSlice.reducer;




// +=-=-=-=-=-=-=-=-==-=-=----------=-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = "http://localhost:2000/api/v1";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isAuth: false,
        user: {},
        error: null,
        message: null,
        connections: [],
        userPosts: [], // New state for user posts
    },
    reducers: {
        // User Registration
        registerRequest(state) {
            state.loading = true;
            state.isAuth = false;
            state.error = null;
            state.message = null;
        },
        registerSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
        },
        registerFailed(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.user = {};
            state.error = action.payload;
            state.message = null;
        },
        // User Login
        loginRequest(state) {
            state.loading = true;
            state.isAuth = false;
            state.error = null;
            state.message = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
        },
        loginFailed(state, action) {
            state.loading = false;
            state.isAuth = false;
            state.user = {};
            state.error = action.payload;
            state.message = null;
        },
        // Fetch User Profile
        fetchUserRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess(state, action) {
            state.loading = false;
            state.user = action.payload.user;
            state.connections = action.payload.user.connections || [];
            state.error = null;
        },
        fetchUserFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Add Connection
        addConnectionRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        addConnectionSuccess(state, action) {
            state.loading = false;
            state.message = action.payload.message;
            // Add the new connection ID to state
            if (state.user.connections) {
                state.user.connections.push(action.payload.newConnection);
            }
        },
        addConnectionFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Remove Connection
        removeConnectionRequest(state) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        removeConnectionSuccess(state, action) {
            state.loading = false;
            state.message = action.payload.message;
            // Remove the connection ID from state
            if (state.user.connections) {
                state.user.connections = state.user.connections.filter(id => id !== action.payload.removedConnection);
            }
        },
        removeConnectionFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Fetch All Connections
        fetchConnectionsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchConnectionsSuccess(state, action) {
            state.loading = false;
            state.connections = action.payload.connections;
        },
        fetchConnectionsFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Fetch User Posts
        fetchUserPostsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUserPostsSuccess(state, action) {
            state.loading = false;
            state.userPosts = action.payload.posts; // Store fetched posts
            state.error = null;
        },
        fetchUserPostsFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Clear Errors
        clearAllErrors(state) {
            state.error = null;
        },
    },
});

// Thunk Actions

// Fetch User Profile
export const fetchUser = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchUserRequest());

    try {
        const response = await axios.get(`${BACKEND_URL}/user/getuser`, {
            withCredentials: true,
        });
        dispatch(userSlice.actions.fetchUserSuccess(response.data));
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred";
        dispatch(userSlice.actions.fetchUserFailed(errorMessage));
    }
};

// Fetch User Posts
export const fetchUserPosts = (userId) => async (dispatch) => {
    dispatch(userSlice.actions.fetchUserPostsRequest());

    try {
        const response = await axios.get(`${BACKEND_URL}/postcontent/getuserposts/${userId}`, {
            withCredentials: true,
        });
        dispatch(userSlice.actions.fetchUserPostsSuccess(response.data));
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Failed to fetch user posts";
        dispatch(userSlice.actions.fetchUserPostsFailed(errorMessage));
    }
};

// Add Connection
export const addConnection = (connectionId) => async (dispatch) => {
    dispatch(userSlice.actions.addConnectionRequest());
    try {
        const response = await axios.post(
            `${BACKEND_URL}/user/addConnection`,
            { connectionId },
            { withCredentials: true }
        );
        dispatch(userSlice.actions.addConnectionSuccess({
            message: response.data.message,
            newConnection: connectionId
        }));
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Failed to add connection";
        dispatch(userSlice.actions.addConnectionFailed(errorMessage));
    }
};

// Remove Connection
export const removeConnection = (connectionId) => async (dispatch) => {
    dispatch(userSlice.actions.removeConnectionRequest());
    try {
        const response = await axios.post(
            `${BACKEND_URL}/user/removeConnection`,
            { connectionId },
            { withCredentials: true }
        );
        dispatch(userSlice.actions.removeConnectionSuccess({
            message: response.data.message,
            removedConnection: connectionId
        }));
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Failed to remove connection";
        dispatch(userSlice.actions.removeConnectionFailed(errorMessage));
    }
};

// Fetch All Connections
export const fetchConnections = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchConnectionsRequest());
    try {
        const response = await axios.get(`${BACKEND_URL}/user/getAllConnections`, {
            withCredentials: true,
        });
        dispatch(userSlice.actions.fetchConnectionsSuccess(response.data));
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Failed to fetch connections";
        dispatch(userSlice.actions.fetchConnectionsFailed(errorMessage));
    }
};

// User Registration
export const register = (data) => async (dispatch) => {
    dispatch(userSlice.actions.registerRequest());
    try {
        const response = await axios.post(`${BACKEND_URL}/user/register`, data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(userSlice.actions.registerSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred";
        dispatch(userSlice.actions.registerFailed(errorMessage));
    }
};

// User Login
export const login = (data) => async (dispatch) => {
    dispatch(userSlice.actions.loginRequest());
    try {
        const response = await axios.post(`${BACKEND_URL}/user/login`, data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(userSlice.actions.loginSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred";
        dispatch(userSlice.actions.loginFailed(errorMessage));
    }
};

// Clear all errors
export const clearAlluserErrors = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors());
};

export default userSlice.reducer;
