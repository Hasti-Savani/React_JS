import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../usres/userSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
});