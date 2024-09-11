import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'calc',
    initialState:{
        cal:0
    },
    reducers:{
        calculate(state,action){
            state.cal=Number(action.payload)
        },
        reset(state){
            state.cal=0
        }
    }
})

export default counterSlice.reducer
export const {calculate,reset} = counterSlice.actions