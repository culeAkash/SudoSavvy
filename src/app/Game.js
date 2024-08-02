import { createSlice } from "@reduxjs/toolkit";



const initialGameState = {
    difficulty: null,
    board: null,
    selectedCell: null,
    errorCells: [],
    gameValid: false
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
        },
        selectCell(state, action) {
            if (state.errorCells.length !== 0) {
                state.board[state.selectedCell[0]][state.selectedCell[1]] = 0
                state.selectedCell = null
            }
            state.errorCells = []
            state.selectedCell = action.payload
        },
        checkGame(state, { payload }) {
            if (state.selectedCell === null)
                return
            // state.selectedCell = [payload.selectedCell]
            console.log(payload);
            const value = payload.pressedKey
            const row = state.selectedCell[0]
            const col = state.selectedCell[1]
            state.selectedCell = [row, col]
            console.log(`${value} ${row} ${col}`);
            const errorCells = validateMove(state.board, row, col, value)
            if (errorCells.length !== 0) {
                state.board[row][col] = value
                state.errorCells = errorCells
            }
            else {
                let grid = state.board
                grid[row][col] = value
                console.log(grid);

                state.board = grid;
                state.errorCells = []
            }
            console.log(errorCells);


            // state.selectedCell = action.payload.selectedCell
        },
        checkSubmitGame(state) {
            if (state.errorCells.length === 0)
                state.gameValid = true
        },
        giveUp(state) {
            console.log(`${state.board} ${state.difficulty} ${state.errorCells} ${state.gameValid} ${state.selectedCell}`);

            if (state.errorCells.length !== 0) {
                state.errorCells = []
                console.log(`${state.selectedCell[0] + " " + state.selectedCell[1]}`);

                state.board[state.selectedCell[0]][state.selectedCell[1]] = 0
            }
            state.selectedCell = null
            solveSudoku(state.board)

        },
        resetGame(state) {
            console.log("Reset");
            state.board = null
            state.difficulty = null
            state.errorCells = []
            state.selectedCell = null
            state.gameValid = false
        }
    }
})


const isSafe = (board, row, col, num) => {
    // Check if the number is not repeated in the current row
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num) {
            return false;
        }
    }

    // Check if the number is not repeated in the current column
    for (let x = 0; x < 9; x++) {
        if (board[x][col] === num) {
            return false;
        }
    }

    // Check if the number is not repeated in the current 3x3 sub-grid
    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}

const solveSudoku = (board) => {

    const N = 9;

    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            // If the current cell is empty
            if (board[row][col] === 0) {
                // Try digits 1 to 9
                for (let num = 1; num <= N; num++) {
                    // Check if it's safe to place the digit
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;

                        // Recursively attempt to fill the board
                        if (solveSudoku(board)) {
                            return true;
                        } else {
                            // Undo the move if it doesn't lead to a solution
                            board[row][col] = 0;
                        }
                    }
                }

                // If no number can be placed, return false to trigger backtracking
                return false;
            }
        }
    }

    // If the entire board is filled correctly, return true
    return true;
}


const validateMove = (board, row, col, value) => {
    // Check row
    // let isRowValid = true
    let errorCells = []
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value && i !== col) {
            errorCells = [...errorCells, [row, i]]
        }
    }
    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === value && i !== row) {
            errorCells = [...errorCells, [i, col]]
        }
    }
    // Check box
    for (let i = 0; i < 9; i++) {
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3)
        const boxCol = 3 * Math.floor(col / 3) + i % 3
        if (boxRow !== row && boxCol !== col && board[boxRow][boxCol] === value) {
            errorCells = [...errorCells, [boxRow, boxCol]]
        }
    }
    return errorCells
}

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