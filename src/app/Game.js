import { createSlice } from "@reduxjs/toolkit";

const initialGameState = {
    difficulty: null,
    board: null
}

const gameSlice = createSlice({
    initialState: initialGameState,
    name: 'game',
    reducers: {
        createGame(state, action) {
            state.difficulty = action.payload.difficulty
            const completeGrid = generateSudokuGrid();
            const puzzleGrid = removeCells(completeGrid, state.difficulty);
            state.board = puzzleGrid
        }
    }
})

const generateSudokuGrid = () => {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(0));

    const isValid = (row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (grid[row][i] === num || grid[i][col] === num) return false;
            if (grid[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === num)
                return false;
        }
        return true;
    };

    const fillGrid = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
                    for (let num of numbers) {
                        if (isValid(row, col, num)) {
                            grid[row][col] = num;
                            if (fillGrid()) return true;
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    fillGrid();
    return grid;
};

const removeCells = (grid, difficulty) => {
    let cellsToRemove;
    if (difficulty === 'easy') cellsToRemove = 30;
    else if (difficulty === 'medium') cellsToRemove = 45;
    else if (difficulty === 'hard') cellsToRemove = 60;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (grid[row][col] !== 0) {
            grid[row][col] = 0;
            cellsToRemove--;
        }
    }

    return grid;
};


export default gameSlice

export const gameSliceActions = gameSlice.actions