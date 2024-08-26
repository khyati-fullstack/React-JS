import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("fetchProductData",()=>{
    const record = axios({
        method:"get",
        url:""
    }).then((res)=>{
        return res.json()
    })
})

const ProductReducer = createSlice({
    name:"Product",
    initialState:{products : [],pending:false,error:""},
    reducers:{},
    extraReducers:(builder=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.products=action.payload.products
        }).addCase(fetchData.pending,(state,action)=>{
            state.pending=true;
        }).addCase(fetchData.rejected,(state,action)=>{
            state.error=action.payload.error;
    })
})
})
export default ProductReducer.reducer;