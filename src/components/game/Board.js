import React from 'react'


export default function Board(props) {
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
    return (
        <React.Fragment>
            <div className="grid grid-cols-9 grid-rows-9 place-content-evenly border-4 border-black h-356px w-356px md:h-600px md:w-600px ">
                {
                    grid.map((row, rowIndex) => {
                        return row.map((col, colIndex) => {
                            // console.log(rowIndex);
                            return <div className={`text-center md:pt-1/4 ${getRowBoundaryClasses(rowIndex)} ${getColBoundaryClasses(colIndex)}`} > {grid[rowIndex][colIndex] === 0 ? ' ' : grid[rowIndex][colIndex]}</div>
                        })
                    })
                }
            </div>
        </React.Fragment >

    )
}
