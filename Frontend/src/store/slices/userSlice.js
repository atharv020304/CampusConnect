



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
    },
    reducers: {
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
        loginRequest(state){
            state.loading = true;
            state.isAuth = false;
            state.error = null;
            state.message = null;
        },
        loginSuccess(state,action){
            state.loading = false;
            state.isAuth = true;
            state.user = action.payload.user;
            state.error = null;
            state.message = action.payload.message;
        },
        loginFailed(state,action){
            state.loading = false;
            state.isAuth = false;
            state.user = {};
            state.error = action.payload;
            state.message = null;
        },
        clearAllErrors(state) {
            state.error = null;
        },
    },
});


export const register = (data) => async (dispatch) => {
    dispatch(userSlice.actions.registerRequest());
    try {
        console.log('Data being sent:', data); 

        const response = await axios.post(`${BACKEND_URL}/user/register`, data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });

        dispatch(userSlice.actions.registerSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        
        const errorMessage = error.response?.data?.message || "An error occurred";
        dispatch(userSlice.actions.registerFailed(errorMessage));
        console.error('Error during registration:', errorMessage); 
    }
};



export const login = (data)=> async(dispatch)=>{
    dispatch(userSlice.actions.loginRequest());

    try{
        const response = await axios.post(`${BACKEND_URL}/user/login`, data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(userSlice.actions.loginSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());

    }catch(error){
        dispatch(userSlice.actions.loginFailed(error.response.data.message));
    }
}


export const clearAlluserErrors = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors());
};

export default userSlice.reducer;
