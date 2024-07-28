import { createSlice } from "@reduxjs/toolkit";


export const difficultySlice = createSlice({
    name: 'difficulty',
    initialState: {
        value: null
    },
    reducers: {
        changeDifficulty: (state, payload) => {
            if (state.value !== null && state.value === payload.payload) {
                state.value = null
                return
            }
            console.log(payload.payload);
            state.value = payload.payload
        }
    }
})


export const { changeDifficulty } = difficultySlice.actions

export default difficultySlice.reducer