import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { gameSliceActions } from '../../app/Game';


export default function Board(props) {
    console.log(props.grid);


    const dispatch = useDispatch()

    // const [selectedCell, setSelectedCell] = useState(props.selectedCell);

    const grid = props.grid
    console.log(grid === null);
    const getRowBoundaryClasses = (row) => {
        // console.log(row);
        let classes = "";
        if (row % 3 === 2 && row !== 8)
            classes += "border-b-4 border-black"
        else if (row !== 8)
            classes += "border-b-2 border-black"
        return classes
    }

    const getColBoundaryClasses = (col) => {
        let classes = ""
        if (col % 3 === 2 && col !== 8)
            classes += "border-r-4 border-black"
        else if (col !== 8)
            classes += "border-r-2 border-black"
        return classes;
    }

    const handleCellSelection = (row, col) => {
        dispatch(gameSliceActions.selectCell([row, col]))
    }

    const selectedCellClasses = (row, col) => {
        const selectedCell = props.selectedCell
        if (selectedCell === null)
            return ""
        if (row === selectedCell[0] && col === selectedCell[1])
            return "bg-green-500 text-white"
        else
            return ""
    }

    const isErrorCell = (row, col) => {
        let errorCells = props.errorCells
        if (errorCells.length === 0)
            return ""
        for (let i = 0; i < errorCells.length; i++) {
            if (row === errorCells[i][0] && col === errorCells[i][1])
                return "bg-red-500 text-white"
        }
    }


    const handleKeyPress = (event) => {
        const pressedKey = Number.parseInt(event.key);
        if (pressedKey >= 1 && pressedKey <= 9) {
            dispatch(gameSliceActions.checkGame({ pressedKey }))
        }

    }

    return (
        <React.Fragment>
            <div className="grid grid-cols-9 grid-rows-9 place-content-evenly border-4 border-black h-356px w-356px md:h-600px md:w-600px ">
                {
                    grid.map((row, rowIndex) => {
                        return row.map((col, colIndex) => {
                            // console.log(rowIndex);
                            return <div key={`${rowIndex} ${colIndex}`}
                                className={`text-center md:pt-1/4 cursor-pointer ${getRowBoundaryClasses(rowIndex)} ${getColBoundaryClasses(colIndex)} ${selectedCellClasses(rowIndex, colIndex)} ${isErrorCell(rowIndex, colIndex)}`}
                                onKeyDown={handleKeyPress}
                                tabIndex={0}
                                style={{
                                    outline: 'none'
                                }}
                                onClick={() => handleCellSelection(rowIndex, colIndex)}>
                                {grid[rowIndex][colIndex] === 0 ? ' ' : grid[rowIndex][colIndex]}
                            </div>
                        })
                    })
                }
            </div>
        </React.Fragment >

    )
}
