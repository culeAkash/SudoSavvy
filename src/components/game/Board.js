import React from 'react'
import Block from './Block';

export default function Board() {
    const grid = Array(9).fill(0);
    return (
        <React.Fragment>
            <div className="grid grid-cols-3 grid-rows-3 max-w-max place-content-evenly" style={{ minHeight: '356px', minWidth: '356px' }}>
                {/* {grid.forEach(index)} */}
                {grid.map((val) => (
                    <div key={val} className="w-full h-full border-2 border-black">
                        <Block />
                    </div>
                )
                )}
            </div>
        </React.Fragment>
    )
}
