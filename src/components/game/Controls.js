import React from 'react'

export default function Controls() {
    return (
        <div className='flex flex-row gap-4'>
            <button className='border-2 p-2 cursor-pointer hover:bg-white hover:text-cyan-400 shadow-md'>Submit Game</button>
            <button className='border-2 p-2 cursor-pointer hover:bg-red-600 shadow-md'>Give Up</button>
        </div>
    )
}
