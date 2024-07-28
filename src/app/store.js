import { configureStore } from '@reduxjs/toolkit'
import difficultyReducer from '../app/states/difficultySlice'

export default configureStore({
    reducer: {
        difficulty: difficultyReducer,
    }
})