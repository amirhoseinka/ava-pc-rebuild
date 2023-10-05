import {useDispatch,useSelector,TypedUseSelectorHook} from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "./apiServices/apiSlice";

export const store = configureStore({
    reducer:{

    [ApiSlice.reducerPath] : ApiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiSlice.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector