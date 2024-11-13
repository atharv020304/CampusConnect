import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js"
import postSlice from "./slices/postSlice.js";
import questionSlice from "./slices/questionSlice.js"

const store = configureStore({
    reducer: {
        user : userSlice,
        posts: postSlice,
        questions: questionSlice,
    },
});

export default store;