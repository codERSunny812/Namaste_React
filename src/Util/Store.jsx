import { configureStore } from "@reduxjs/toolkit";
import createStoreSlice from './Slice '

const Store = configureStore({
    reducer:{
        cart:createStoreSlice,
    },
});

export default Store;