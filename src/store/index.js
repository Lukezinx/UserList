import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/userSlices";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },

    middleware: (getDefaultMiddleleware) => {
        return getDefaultMiddleleware().concat(albumsApi.middleware).concat(photosApi.middleware);
    }
});

setupListeners(store.dispatch)

export * from './thunks/fetchUsers'
export * from "./thunks/addUser"
export * from "./thunks/removeUser"

export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from "./apis/albumsApi"
export {useFetchPhotosQuery, useAddPhotosMutation, useRemovePhotoMutation} from "./apis/photosApi"
