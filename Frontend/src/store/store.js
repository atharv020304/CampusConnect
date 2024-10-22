import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js"
import postSlice from "./slices/postSlice.js";

const store = configureStore({
    reducer: {
        user : userSlice,
        posts: postSlice
    },
});

export default store;