import { createSlice } from "@reduxjs/toolkit";


const createStoreSlice=createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(State,action)=>{
            State.items.push(action.payload);
        },
        removeItems:(State,action)=>{
            State.items.pop();
        },
        clearCart:(State)=>{
            State.items=[];

        }

    }
});

export const {addItems,removeItems,clearCart}=createStoreSlice.actions;
export default createStoreSlice.reducer;