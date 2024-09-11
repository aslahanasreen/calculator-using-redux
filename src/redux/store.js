import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice'

const globalStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default globalStore