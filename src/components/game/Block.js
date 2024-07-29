import React from 'react'

export default function Block() {
    const grid = Array(9).fill(0);
    return (
        <div className='grid grid-rows-3 grid-cols-3 min-h-full'>
            {grid.map((val, index) =>
                <div key={val} className='w-full h-full border-2 border-black text-center cursor-pointer'>
                    <p>{index + 1}</p>
                </div>
            )}
        </div >
    )
}
