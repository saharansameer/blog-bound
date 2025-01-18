import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; 
import themeReducer from "../features/theme/themeSlice";
import postReducer from "../features/post/postSlice";
export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            theme: themeReducer,
            post: postReducer,
        }
    }
);