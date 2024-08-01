import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './Game.js'

export default configureStore({
    reducer: gameSlice.reducer
})