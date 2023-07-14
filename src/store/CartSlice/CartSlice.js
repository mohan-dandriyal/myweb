import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getData = createAsyncThunk('getData', async () => {
   const respons = await fetch('https://fakestoreapi.com/products', {
    method: 'GET'
   })
   return await respons.json()
})


// ========== api intrigation ============
    // ========== api intrigation ============
const getdata = createSlice ({
    name: 'getdata',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },

    extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
        state.isLoading = true;
    })
    builder.addCase(getData.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.data = action.payload;
    })
    builder.addCase(getData.rejected, (state, action) => {
        console.log(state.isError = true)
        state.isError = true;
    })
    }

})

export { getdata }

//   -------   add to cart ----------
        //   -------   add to cart ----------
const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addtoCart(state, action) {
            state.push(action.payload);
        },
        removeCart(state, action) {
            // console.log(action.payload);
            state.splice(action.payload, 1)
        },
    },
})  

export { CartSlice }
export const { addtoCart, removeCart } = CartSlice.actions;

//  ========= search bar =============
    //  ========= search bar =============

const SearchItem = createSlice({
    name: 'item',
    initialState: {
        search: ''
    },
    reducers: {
        searchItem(state, action) {
            state.search = action.payload
            // console.log(action.payload);
        }
    }
})

export { SearchItem }
export const { searchItem } = SearchItem.actions 

