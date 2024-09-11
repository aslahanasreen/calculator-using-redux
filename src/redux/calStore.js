import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice'

const glStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default glStore