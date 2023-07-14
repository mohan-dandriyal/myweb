import { configureStore } from "@reduxjs/toolkit";
import { CartSlice, SearchItem, getdata } from "./CartSlice/CartSlice";

const store = configureStore({
    reducer: {
        apiInt: getdata.reducer,
        carts: CartSlice.reducer,
        search: SearchItem.reducer,
    } 
},
)

export default store